import {
  ArrowCounterClockwiseIcon,
  FlowerLotusIcon,
  PauseIcon,
  PlayIcon,
} from "@phosphor-icons/react";
import {
  ActionButton,
  ButtonContainer,
  Circle,
  Container,
  Counter,
  CounterContainer,
  CounterLabel,
  Label,
} from "./Breathing.styles";
import { useEffect } from "react";
import { motion } from "framer-motion";
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

  const current = technique ? technique.sequence[currentStep] : null;
  const remainingTime = technique
    ? technique.sequence[currentStep].duration - stepElapsed
    : 0;

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

  return (
    <Container>
      {!technique || !current ? (
        <div>Técnica não encontrada</div>
      ) : (
        <>
          <motion.div
            animate={{
              scale:
                current.action === "inhale"
                  ? 1.3
                  : current.action === "exhale"
                  ? 0.8
                  : 1,
            }}
            transition={{
              duration: current.duration,
              ease: "easeInOut",
            }}
          >
            <Circle>
              <FlowerLotusIcon width={80} height={80} />
              <Label>{current.action.toUpperCase()}</Label>
              <Label>{remainingTime}</Label>
            </Circle>
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
              onClick={() =>
                isRunning ? dispatch(pause()) : dispatch(resume())
              }
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
        </>
      )}
    </Container>
  );
};

export default Breathing;
