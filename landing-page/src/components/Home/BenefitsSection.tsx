import { FC } from "react";
import { Row, Col } from "antd";
import { BenefitCard } from "./BenefitCard";
import { BenefitProps } from "@/types";

export const BenefitsSection: FC = () => {
  const benefits: BenefitProps[] = [
    {
      title: "Ahorro Energético",
      description: "Reduce tus facturas de electricidad",
      imageSrc: "/path-to-image.jpg",
    },
    {
      title: "Energía Renovable",
      description: "Contribuye al medio ambiente",
      imageSrc: "/path-to-image2.jpg",
    },
    {
      title: "Aumenta tu Valor",
      description: "Incrementa el valor de tu propiedad",
      imageSrc: "/path-to-image3.jpg",
    },
  ];

  return (
    <Row gutter={[16, 16]} style={{ marginTop: "1.875rem" }}>
      {benefits.map((benefit, index) => (
        <Col xs={24} md={12} lg={8} key={index}>
          <BenefitCard {...benefit} />
        </Col>
      ))}
    </Row>
  );
};
