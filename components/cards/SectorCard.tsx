import Image from "next/image";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

type SectorCardProps = {
  name: string;
  tags: string[]; // ej. ["Reservas", "Operación", "Integración", "Datos"]
  image?: string;
  icon?: LucideIcon; // usado en la variante "Otros sectores" (sin imagen)
  href: string;
};

/**
 * Card de sector — grid oscuro con imagen de fondo (Turismo, Inmobiliario,
 * Hotelería, Empresas de servicios) o variante "Otros sectores" en navy sólido.
 */
export function SectorCard({ name, tags, image, icon: Icon, href }: SectorCardProps) {
  return (
    <Link
      href={href}
      className="group relative block rounded-card overflow-hidden aspect-[4/5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-dta-blue-600"
    >
      {image ? (
        <>
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-dta-navy-900/60" />
        </>
      ) : (
        <div className="absolute inset-0 bg-dta-navy-900" />
      )}
      <div className="relative h-full flex flex-col justify-end p-5 text-white">
        {Icon && <Icon size={20} className="mb-2 opacity-80" />}
        <div className="font-bold uppercase tracking-wide text-sm">{name}</div>
        <div className="text-xs text-white/70 mt-1">{tags.join(" · ")}</div>
      </div>
    </Link>
  );
}
