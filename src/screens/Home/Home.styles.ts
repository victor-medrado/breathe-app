import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  padding-top: 5rem;
`;

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 56rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1.25rem;
    max-width: 100%;
  }
`;

export const Header = styled.div`
  text-align: center;
`;

export const HeaderAppName = styled.div`
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

  span {
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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #cec7bb;
  gap: 4px;

  a {
    font-weight: 700;
    color: #cec7bb;
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 380px) {
    flex-direction: column;
  }
`;
