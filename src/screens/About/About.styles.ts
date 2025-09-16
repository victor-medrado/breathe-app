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

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IntroContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 32rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ProfileImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 120px;
  margin-bottom: 16px;
`;

export const ProfileName = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #cec7bb;
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
`;

export const SocialLinkText = styled.a`
  color: #a49f99;
  font-size: 16px;
  text-decoration-line: underline;
`;

export const DonationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const DonationButton = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }

  @media (max-width: 600px) {
    justify-content: center;
    width: 100%;
    font-size: 0.95rem;
    padding: 0.6rem 1rem;
  }
`;

export const PixOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(40, 40, 40, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

export const PixModal = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  position: relative;
  max-width: 400px;
  width: 100%;
  text-align: center;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 480px) {
    max-width: 360px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.h3`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const PixContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  img {
    border-radius: 8px;
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export const PixCodeBox = styled.div`
  background: #f5f5f5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CopyButton = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  gap: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const BackButton = styled(DonationButton)`
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
`;
