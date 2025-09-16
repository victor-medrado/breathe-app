import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";

interface MotionCircleProps {
  breatheAction: string;
  duration: number;
  remainingTime: number;
  isRunning: boolean;
  stepElapsed: number;
  prevAction: string;
}

export const MainContainer = styled.div`
  height: 100vh;
  padding-top: 5rem;
`;

export const Container = styled.div`
  max-width: 56rem;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  gap: 1.25rem;

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 100%;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 10rem;
  max-width: 32rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const HeaderIcon = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: rgba(206, 199, 187, 0.25);
  border-radius: 9999px;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(206, 199, 187, 0.55);
  margin-bottom: 1rem;
  text-align: center;
  width: 58px;
  height: 58px;

  svg {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
  }
`;

export const HeaderTitle = styled.h1`
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 480px) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

export const IconWrapper = styled.div`
  font-size: 2rem;
`;

const baseSmallShadow = `
  0 0 0 12px rgba(206, 199, 187, 0.25),
  0 0 0 24px rgba(206, 199, 187, 0.2),
  0 0 0 36px rgba(206, 199, 187, 0.15),
  0 0 0 48px rgba(206, 199, 187, 0.1),
  0 0 0 60px rgba(206, 199, 187, 0.05)
`;

const baseLargeShadow = `
  0 0 0 16px rgba(206, 199, 187, 0.35),
  0 0 0 32px rgba(206, 199, 187, 0.3),
  0 0 0 48px rgba(206, 199, 187, 0.25),
  0 0 0 60px rgba(206, 199, 187, 0.2),
  0 0 0 72px rgba(206, 199, 187, 0.15)
`;

const breatheInhale = keyframes`
  0% {
    box-shadow: ${baseSmallShadow};
  }
  100% {
    box-shadow: ${baseLargeShadow};
  }
`;

const breatheExhale = keyframes`
  0% {
    box-shadow: ${baseLargeShadow};
  }
  100% {
    box-shadow: ${baseSmallShadow};
  }
`;

const breatheHoldAfterInhale = keyframes`
  0%, 100% {
    box-shadow: ${baseLargeShadow};
  }
  50% {
    box-shadow:
      0 0 0 20px rgba(206, 199, 187, 0.4),
      0 0 0 36px rgba(206, 199, 187, 0.35),
      0 0 0 52px rgba(206, 199, 187, 0.3),
      0 0 0 64px rgba(206, 199, 187, 0.25),
      0 0 0 76px rgba(206, 199, 187, 0.2);
  }
`;

const breatheHoldAfterExhale = keyframes`
  0%, 100% {
    box-shadow: ${baseSmallShadow};
  }
  50% {
    box-shadow:
      0 0 0 16px rgba(206, 199, 187, 0.35),
      0 0 0 28px rgba(206, 199, 187, 0.3),
      0 0 0 40px rgba(206, 199, 187, 0.25),
      0 0 0 52px rgba(206, 199, 187, 0.2),
      0 0 0 64px rgba(206, 199, 187, 0.15);
  }
`;

export const MotionCircle = styled(motion.div)<MotionCircleProps>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary};
  box-sizing: border-box;
  position: relative;
  overflow: visible;
  box-shadow: 0 0 0 1px rgba(206, 199, 187, 0.15);

  @media (max-width: 600px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 400px) {
    width: 100px;
    height: 100px;
  }

  ${({ breatheAction, remainingTime, isRunning, prevAction }) => {
    if (!isRunning) {
      return css`
        animation-play-state: paused;
        cursor: pointer;
      `;
    }

    switch (breatheAction) {
      case "inhale":
        return css`
          animation: ${breatheInhale} ${remainingTime}s ease-in-out forwards;
        `;
      case "exhale":
        return css`
          animation: ${breatheExhale} ${remainingTime}s ease-in-out forwards;
        `;
      case "hold": {
        const holdAnimation =
          prevAction === "inhale"
            ? breatheHoldAfterInhale
            : breatheHoldAfterExhale;
        return css`
          animation: ${holdAnimation} 2s ease-in-out infinite;
        `;
      }
      default:
        return css`
          animation: none;
        `;
    }
  }}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const Label = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const ActionButton = styled.button`
  background-color: rgba(206, 199, 187, 0.25);
  border: 1px solid rgba(206, 199, 187, 0.55);
  border-radius: 9999px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;

export const BackButton = styled(ActionButton)`
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  width: 120px;
  padding: 12px 16px;
  height: auto;
`;

export const CounterContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 10rem;

  @media (max-width: 600px) {
    gap: 1rem;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const Counter = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const CounterLabel = styled.span`
  font-size: 1rem;
  font-weight: 400;
`;
