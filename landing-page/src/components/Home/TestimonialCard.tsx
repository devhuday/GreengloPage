import { FC } from "react";
import { Card } from "antd";
import { TestimonialProps } from "@/types";

export const TestimonialCard: FC<TestimonialProps> = ({
  name,
  testimonial,
}) => {
  return (
    <Card>
      <Card.Meta
        title={
          <span style={{ fontFamily: "'Raleway', sans-serif" }}>{name}</span>
        }
        description={testimonial}
      />
    </Card>
  );
};
