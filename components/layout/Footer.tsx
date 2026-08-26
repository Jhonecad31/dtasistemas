import Link from "next/link";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import { Container } from "../ui/Container";
import { footerNav } from "@/data/navigation";

/** Footer de marca — fondo navy, 4-5 columnas, tal como en los mockups aprobados. */
export function Footer() {
  return (
    <footer className="bg-dta-navy-900 text-white">
      <Container className="py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="font-extrabold text-lg">DTA SISTEMAS</div>
          <p className="text-sm text-white/60 mt-3 max-w-xs">
            Tecnología para entender, automatizar y hacer crecer tu empresa.
          </p>
          <div className="flex gap-3 mt-5">
            <Linkedin size={18} className="text-white/60" />
            <Instagram size={18} className="text-white/60" />
            <Youtube size={18} className="text-white/60" />
          </div>
        </div>

        {footerNav.map((col) => (
          <div key={col.title}>
            <div className="text-sm font-semibold mb-3">{col.title}</div>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/50">
          <span>© {new Date().getFullYear()} DTA Sistemas. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <Link href="/aviso-de-privacidad">Aviso de privacidad</Link>
            <Link href="/terminos-y-condiciones">Términos y condiciones</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
