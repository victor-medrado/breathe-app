import { iconMap } from "../../data/icons";
import {
  CardContainer,
  CardHeader,
  Description,
  IconWrapper,
  Tag,
  TagsWrapper,
  Title,
} from "./Card.styles";

interface ICardProps {
  title: string;
  description?: string;
  icon?: string;
  tags?: string[];
  onClick?: () => void;
}

const Card = ({ title, description, icon, tags, onClick }: ICardProps) => {
  const IconComponent = icon
    ? iconMap[icon as keyof typeof iconMap]
    : undefined;

  return (
    <CardContainer onClick={onClick}>
      <CardHeader>
        {IconComponent && (
          <IconWrapper>
            <IconComponent size={24} />
          </IconWrapper>
        )}
        <Title>{title}</Title>
      </CardHeader>

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
