"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { mainNav } from "@/data/navigation";

/**
 * Navbar fija. Fuente de items: data/navigation.ts (única fuente de verdad,
 * compartida con Footer y breadcrumbs — ver Fase 0, sección 6.5).
 */
export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-dta-gray-200">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="font-extrabold text-lg tracking-tight text-dta-black">
          DTA <span className="block text-[10px] font-semibold tracking-widest text-dta-gray-600">SISTEMAS</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-dta-black">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-dta-blue-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-dta-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contacto" variant="primary">
            Hablemos
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-dta-gray-200 bg-white px-6 py-4 space-y-3">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-sm font-medium text-dta-black"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contacto" variant="primary" className="w-full justify-center">
            Hablemos
          </Button>
        </div>
      )}
    </header>
  );
}
