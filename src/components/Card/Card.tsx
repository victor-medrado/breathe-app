import type { Icon } from "@phosphor-icons/react";
import {
  CardContainer,
  Description,
  IconWrapper,
  Tag,
  TagsWrapper,
  Title,
} from "./Card.styles";
import React from "react";

interface ICardProps {
  title: string;
  description?: string;
  icon?: Icon;
  tags?: string[];
  onClick?: () => void;
}

const Card = ({ title, description, icon, tags, onClick }: ICardProps) => {
  return (
    <CardContainer onClick={onClick}>
      {icon && <IconWrapper>{React.createElement(icon)}</IconWrapper>}
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      {tags && (
        <TagsWrapper>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsWrapper>
      )}
    </CardContainer>
  );
};

export default Card;
