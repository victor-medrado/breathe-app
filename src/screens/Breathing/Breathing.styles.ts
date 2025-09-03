import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #cec7bb;
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #282828;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #cec7bb;
`;

export const Label = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ActionButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;

export const CounterContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Counter = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CounterLabel = styled.span`
  font-size: 1rem;
  font-weight: 400;
`;

