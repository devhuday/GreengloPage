export interface BenefitProps {
  title: string;
  description: string;
  imageSrc: string;
}

export interface TestimonialProps {
  name: string;
  testimonial: string;
}

interface ThemeColors {
  primary: string;
  text: {
    primary: string;
    secondary: string;
  };
  background: {
    primary: string;
    secondary: string;
  };
}

interface Theme {
  colors: ThemeColors;
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}
