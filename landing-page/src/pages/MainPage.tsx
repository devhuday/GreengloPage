import { FC } from "react";
import { Layout } from "antd";
import { Header } from "@/components/Layout/Header";
import { HeroSection } from "@/components/Home/HeroSection";
import { BenefitsSection } from "@/components/Home/BenefitsSection";
import { TestimonialsSection } from "@/components/Home/TestimonialsSection";
import { theme } from "@/styles/theme";

const { Content, Footer } = Layout;

const App: FC = () => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: theme.colors.background.primary,
      }}
    >
      <Header />
      <Content style={{ padding: theme.spacing.xl, flex: 1 }}>
        <HeroSection />
        <BenefitsSection />
        <TestimonialsSection />
      </Content>
      <Footer
        style={{
          textAlign: "center",
          padding: `${theme.spacing.xs} 0`,
          backgroundColor: theme.colors.background.secondary,
        }}
      >
        SolarTech ©2023 Creado con ❤️ por tu equipo
      </Footer>
    </Layout>
  );
};

export default App;
