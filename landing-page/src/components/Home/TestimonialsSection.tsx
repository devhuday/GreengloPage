import { FC } from "react";
import { Typography, Carousel } from "antd";
import { TestimonialCard } from "./TestimonialCard";
import { TestimonialProps } from "@/types";
import { globalStyles } from "@/styles/globalStyles";

const { Title } = Typography;

export const TestimonialsSection: FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Juan Pérez",
      testimonial:
        "¡Increíble servicio! Mis facturas de luz han disminuido considerablemente.",
    },
    {
      name: "Maria Garcia",
      testimonial:
        "Excelente inversión. El proceso de instalación fue rápido y profesional.",
    },
  ];

  return (
    <div style={{ marginTop: "2.5rem" }}>
      <Title
        level={3}
        style={{ ...globalStyles.titleStyle, textAlign: "center" }}
      >
        Testimonios
      </Title>
      <Carousel autoplay>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
