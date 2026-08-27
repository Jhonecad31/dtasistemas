import { defineRouting } from "next-intl/routing";

/**
 * Configuración central de enrutamiento por idioma (Fase 13).
 *
 * localePrefix: "as-needed" es exactamente lo pedido: el locale por
 * defecto (es) NO lleva prefijo en la URL (/soluciones, no /es/soluciones),
 * mientras que cualquier otro locale (en) sí lo lleva (/en/soluciones).
 */
export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  localePrefix: "as-needed",
});

export type AppLocale = (typeof routing.locales)[number];
