import {
  ArrowCounterClockwiseIcon,
  PauseIcon,
  PlayIcon,
} from "@phosphor-icons/react";
import {
  ActionButton,
  ButtonContainer,
  Container,
  Counter,
  CounterContainer,
  CounterLabel,
  Header,
  HeaderIcon,
  HeaderTitle,
  Label,
  MainContainer,
  MotionCircle,
  TextContainer,
} from "./Breathing.styles";
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import {
  pause,
  restart,
  resume,
  setTechnique,
  tick,
} from "../../store/breathingSlice";
import { useNavigate, useParams } from "react-router";
import { breathingTechniques } from "../../data/techniques";
import { iconMap } from "../../data/icons";

const Breathing = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    isRunning,
    elapsedTime,
    cycleCount,
    technique,
    currentStep,
    stepElapsed,
  } = useSelector((state: RootState) => state.breathing);

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      dispatch(tick());
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, dispatch]);

  useEffect(() => {
    const breathingTechniqueFound = breathingTechniques.find(
      (t) => t.id === id
    );

    if (breathingTechniqueFound) {
      dispatch(setTechnique(breathingTechniqueFound));
    } else {
      navigate("/");
    }
  }, [id, dispatch, navigate]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  if (!technique) return <div>Técnica não encontrada</div>;

  const current = technique.sequence[currentStep];
  const remainingTime = technique.sequence[currentStep].duration - stepElapsed;

  const prevStep =
    currentStep > 0
      ? technique.sequence[currentStep - 1]
      : technique.sequence[technique.sequence.length - 1];

  const getHoldScale = () => {
    if (current.action !== "hold") return 1;
    return prevStep.action === "inhale" ? 1.5 : 1;
  };

  const circleVariants = {
    initial: { scale: 1 },
    inhale: { scale: 1.5 },
    exhale: { scale: 1 },
    hold: { scale: getHoldScale() },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const translateBreatheAction = (key: "inhale" | "hold" | "exhale") => {
    const actions: Record<typeof key, string> = {
      inhale: "inspire",
      hold: "segure",
      exhale: "expire",
    };
    return actions[key];
  };

  const icon = technique.icon;

  const IconComponent = icon
    ? iconMap[icon as keyof typeof iconMap]
    : undefined;

  return (
    <MainContainer>
      <Container>
        <Header>
          <HeaderIcon>
            {IconComponent && <IconComponent size={24} />}
          </HeaderIcon>
          <HeaderTitle>{technique.title}</HeaderTitle>
          <p>{technique.description}</p>
        </Header>

        <motion.div>
          <MotionCircle
            variants={circleVariants}
            initial="initial"
            animate={current ? current.action : "initial"}
            transition={{
              duration: remainingTime,
              ease: "easeInOut",
            }}
            breatheAction={current ? current.action : "initial"}
            duration={current ? current.duration : 6}
            remainingTime={remainingTime}
            isRunning={isRunning}
            stepElapsed={stepElapsed}
            prevAction={prevStep.action}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current ? current.action : "initial"}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.5 }}
              >
                <TextContainer>
                  <Label>
                    {translateBreatheAction(current.action).toUpperCase()}
                  </Label>
                  <Label>{remainingTime}</Label>
                </TextContainer>
              </motion.div>
            </AnimatePresence>
          </MotionCircle>
        </motion.div>
        <CounterContainer>
          <Counter>
            <span>{formatTime(elapsedTime)}</span>
            <CounterLabel>Tempo</CounterLabel>
          </Counter>

          <Counter>
            <span>{cycleCount}</span>
            <CounterLabel>Ciclos</CounterLabel>
          </Counter>
        </CounterContainer>
        <ButtonContainer>
          <ActionButton
            onClick={() => (isRunning ? dispatch(pause()) : dispatch(resume()))}
          >
            {isRunning ? <PauseIcon /> : <PlayIcon />}
            {isRunning ? "Pausar" : "Retomar"}
          </ActionButton>
          <ActionButton onClick={() => dispatch(restart())}>
            <ArrowCounterClockwiseIcon />
            Reiniciar
          </ActionButton>
          <ActionButton onClick={handleBack}>Voltar</ActionButton>
        </ButtonContainer>
      </Container>
    </MainContainer>
  );
};

export default Breathing;
