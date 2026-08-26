import { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  tone?: "light" | "dark" | "transparent";
  className?: string;
  id?: string;
};

const toneStyles = {
  light: "bg-white",
  dark: "bg-dta-navy-900 text-white",
  transparent: "bg-transparent",
};

/**
 * Wrapper estándar de sección de página. Controla el fondo (tono)
 * y el espaciado vertical consistente entre secciones.
 * Regla de marca: el tono "dark" debe usarse en máximo 1-2 secciones
 * por página (ver Design System, sección 5.1 de Fase 0).
 */
export function Section({ children, tone = "transparent", className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-section-y ${toneStyles[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
