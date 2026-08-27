"use client";

import { LucideIcon, ChevronRight } from "lucide-react";
import { IconCircle } from "../ui/Badge";
import { analytics } from "@/lib/analytics/events";

type ContactChannelRowProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string; // tel:, mailto:, o undefined para filas informativas (oficina, horario)
  trackEvent?: "whatsapp" | "phone" | "email";
};

/**
 * Fila de canal de contacto (Fase 0, sección 09, bloque "Hablemos").
 * Client Component porque dispara el evento GA4 correspondiente al clic
 * (whatsapp_click / phone_click / email_click, Fase 0 sección 19).
 */
export function ContactChannelRow({ icon: Icon, label, value, href, trackEvent }: ContactChannelRowProps) {
  function handleClick() {
    if (trackEvent === "whatsapp") analytics.whatsappClick();
    if (trackEvent === "phone") analytics.phoneClick();
    if (trackEvent === "email") analytics.emailClick();
  }

  const content = (
    <div className="flex items-center justify-between p-4 rounded-card bg-white border border-dta-gray-200">
      <div className="flex items-center gap-3">
        <IconCircle icon={Icon} />
        <div>
          <div className="text-xs text-dta-gray-600">{label}</div>
          <div className="text-sm font-semibold text-dta-black">{value}</div>
        </div>
      </div>
      {href && <ChevronRight size={16} className="text-dta-gray-600" />}
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      onClick={handleClick}
      className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-dta-blue-600 rounded-card"
    >
      {content}
    </a>
  );
}
