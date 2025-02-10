import React from "react";
import { Row, Col, Typography } from "antd";
import { globalStyles } from "@/styles/globalStyles";

const { Title } = Typography;

interface TextsLogoProps {
  text1: string;
  text2?: string;
}

const TextsLogo: React.FC<TextsLogoProps> = ({ text1, text2 }) => {
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col style={{ textAlign: "justify" }}>
        <div style={{ marginBottom: "0px" }}>
          <Title level={4} style={globalStyles.titleStyle}>
            {text1}
          </Title>
        </div>
        <div>
          {text2 && (
            <Title level={4} style={globalStyles.subtitleStyle}>
              {text2}
            </Title>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default TextsLogo;
