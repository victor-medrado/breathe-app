import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #222;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

export const TagsWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  font-size: 0.75rem;
  background: #f5f5f5;
  color: #333;
  padding: 0.2rem 0.6rem;
  border-radius: 8px;
`;

export const IconWrapper = styled.div`
  font-size: 2rem;
`;
