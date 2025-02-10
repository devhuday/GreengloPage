import { FC } from "react";
import { Card } from "antd";
import { BenefitProps } from "@/types/index";

export const BenefitCard: FC<BenefitProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <Card hoverable cover={<img alt={title} src={imageSrc} />}>
      <Card.Meta
        title={
          <span style={{ fontFamily: "'Raleway', sans-serif" }}>{title}</span>
        }
        description={description}
      />
    </Card>
  );
};
