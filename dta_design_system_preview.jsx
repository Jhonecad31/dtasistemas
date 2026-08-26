import React from "react";
import {
  Boxes, Link2, BarChart3, Bot, Code2, ShieldCheck, Search, Phone, Mail,
  MapPin, Clock, ChevronRight, ArrowRight, CheckCircle2,
} from "lucide-react";

function Eyebrow({ children }) {
  return (
    <div className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">
      {children}
    </div>
  );
}

function SwatchRow({ items }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {items.map((s) => (
        <div key={s.name} className="rounded-xl overflow-hidden border border-gray-200">
          <div className={`h-20 ${s.class}`} />
          <div className="p-3 bg-white">
            <div className="text-sm font-semibold text-gray-900">{s.name}</div>
            <div className="text-xs text-gray-600">{s.hex}</div>
            <div className="text-xs text-gray-600">token: {s.token}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Button({ variant = "primary", children }) {
  const base = "inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-colors";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-gray-900 border border-gray-300 hover:border-gray-900",
    dark: "bg-blue-950 text-white hover:bg-blue-900",
  };
  return (
    <button className={`${base} ${styles[variant]}`}>
      {children} <ArrowRight size={16} />
    </button>
  );
}

function IconCircle({ icon: Icon, tone = "light" }) {
  return (
    <div
      className={`w-11 h-11 rounded-full flex items-center justify-center ${
        tone === "light" ? "bg-blue-50 text-blue-600" : "bg-white/10 text-white"
      }`}
    >
      <Icon size={20} />
    </div>
  );
}

function PillarCard({ number, icon, title, description, bullets }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
      <IconCircle icon={icon} />
      <div className="mt-4 text-sm font-semibold text-gray-400">{number}</div>
      <div className="text-lg font-bold text-gray-900 mt-1">{title}</div>
      <p className="text-sm text-gray-600 mt-2 leading-relaxed">{description}</p>
      <ul className="mt-4 space-y-1.5">
        {bullets.map((b) => (
          <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle2 size={14} className="text-blue-600 shrink-0" /> {b}
          </li>
        ))}
      </ul>
      <div className="mt-5 text-sm font-semibold text-blue-600 flex items-center gap-1 cursor-pointer">
        Ver soluciones <ChevronRight size={14} />
      </div>
    </div>
  );
}

function ProcessStep({ number, title, description, last }) {
  return (
    <div className="flex items-start gap-3 flex-1">
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
          {number}
        </div>
      </div>
      <div className="pb-2">
        <div className="text-sm font-bold text-gray-900">{title}</div>
        <div className="text-xs text-gray-600 mt-1 leading-relaxed">{description}</div>
      </div>
      {!last && <ArrowRight size={16} className="text-gray-300 mt-2 hidden md:block" />}
    </div>
  );
}

function TabsFilter() {
  const tabs = ["Todas las soluciones", "Sistemas", "Integración", "Inteligencia", "Automatización & IA"];
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((t, i) => (
        <div
          key={t}
          className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer ${
            i === 0 ? "bg-blue-600 text-white" : "bg-white text-gray-700 border border-gray-200"
          }`}
        >
          {t}
        </div>
      ))}
    </div>
  );
}

function ContactChannelRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-gray-200">
      <div className="flex items-center gap-3">
        <IconCircle icon={Icon} />
        <div>
          <div className="text-xs text-gray-500">{label}</div>
          <div className="text-sm font-semibold text-gray-900">{value}</div>
        </div>
      </div>
      <ChevronRight size={16} className="text-gray-400" />
    </div>
  );
}

function FormFieldDemo() {
  return (
    <div className="grid sm:grid-cols-2 gap-4 bg-white border border-gray-200 rounded-xl p-6">
      <div>
        <label className="text-xs font-semibold text-gray-700">Nombre completo *</label>
        <input
          disabled
          placeholder="Ej. Juan Pérez"
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-400"
        />
      </div>
      <div>
        <label className="text-xs font-semibold text-gray-700">Empresa *</label>
        <input
          disabled
          placeholder="Ej. Nombre de tu empresa"
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-400"
        />
      </div>
    </div>
  );
}

function StatStrip() {
  const places = ["Cancún", "Playa del Carmen", "Riviera Maya", "Quintana Roo", "Yucatán"];
  return (
    <div className="rounded-xl bg-blue-950 text-white p-8">
      <div className="text-lg font-bold mb-6 max-w-md">
        Tecnología construida desde el corazón de uno de los mercados más dinámicos de México.
      </div>
      <div className="flex flex-wrap gap-6">
        {places.map((p) => (
          <div key={p} className="flex items-center gap-2 text-sm text-white/80">
            <MapPin size={14} /> {p}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Nav */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-extrabold text-lg tracking-tight">
            DTA <span className="text-blue-600">·</span> Design System
          </div>
          <div className="text-xs text-gray-500">Fase 1 — v1.0 — interno, no indexable</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Intro */}
        <section>
          <Eyebrow>DESIGN SYSTEM</Eyebrow>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Sistema visual de DTA Sistemas
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl">
            Tokens y componentes base derivados de los mockups aprobados en Fase 0. Esta página vive en{" "}
            <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">/design-system</code> como
            referencia interna de QA visual.
          </p>
        </section>

        {/* Color */}
        <section>
          <h2 className="text-xl font-bold mb-4">Color</h2>
          <SwatchRow
            items={[
              { name: "Navy 900", hex: "#0B1730", token: "--dta-navy-900", class: "bg-blue-950" },
              { name: "Blue 600 (acento)", hex: "#1B4DE0", token: "--dta-blue-600", class: "bg-blue-600" },
              { name: "Blue 100", hex: "#E7EEFD", token: "--dta-blue-100", class: "bg-blue-50" },
              { name: "Gray 50", hex: "#F6F7FA", token: "--dta-gray-50", class: "bg-gray-50 border" },
              { name: "Gray 200", hex: "#E4E7EC", token: "--dta-gray-200", class: "bg-gray-200" },
              { name: "Gray 600", hex: "#5B6472", token: "--dta-gray-600", class: "bg-gray-500" },
              { name: "Black / texto", hex: "#0F1115", token: "--dta-black", class: "bg-gray-900" },
              { name: "White", hex: "#FFFFFF", token: "--dta-white", class: "bg-white border" },
            ]}
          />
          <p className="text-xs text-gray-500 mt-3">
            Regla: el azul es acento, no dominante. Objetivo &gt;80% blanco/gris claro por página.
          </p>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-xl font-bold mb-4">Tipografía — Inter</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-5">
            <div>
              <div className="text-xs text-gray-400 mb-1">display · 44–56px / 700</div>
              <div className="text-4xl font-extrabold tracking-tight">
                Tu empresa ya tiene tecnología.
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-400 mb-1">h2 · 32–36px / 700</div>
              <div className="text-3xl font-extrabold">No necesitas otra herramienta.</div>
            </div>
            <div>
              <div className="text-xs text-gray-400 mb-1">h3 · 20–24px / 600</div>
              <div className="text-xl font-semibold">01. Sistemas empresariales</div>
            </div>
            <div>
              <div className="text-xs text-gray-400 mb-1">body-lg · 18px / 400</div>
              <p className="text-lg text-gray-700">
                Diseñamos sistemas, conectamos datos y automatizamos procesos para empresas que
                quieren operar mejor.
              </p>
            </div>
            <div>
              <div className="text-xs text-gray-400 mb-1">body · 16px / 400</div>
              <p className="text-base text-gray-600">
                Construimos la infraestructura digital de tu operación.
              </p>
            </div>
            <div>
              <div className="text-xs text-gray-400 mb-1">label · 13px / 600 uppercase</div>
              <div className="text-xs font-semibold tracking-widest uppercase text-blue-600">
                Soluciones
              </div>
            </div>
          </div>
        </section>

        {/* Buttons & badges */}
        <section>
          <h2 className="text-xl font-bold mb-4">Botones & badges</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-wrap items-center gap-4">
            <Button variant="primary">Hablemos</Button>
            <Button variant="secondary">Conocer DTA</Button>
            <Button variant="dark">Analizar mi empresa</Button>
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
              Desde $4,900 MXN
            </span>
          </div>
        </section>

        {/* Icon circles */}
        <section>
          <h2 className="text-xl font-bold mb-4">Icon circles</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex gap-4">
            <IconCircle icon={Boxes} />
            <IconCircle icon={Link2} />
            <IconCircle icon={BarChart3} />
            <IconCircle icon={Bot} />
            <IconCircle icon={Code2} />
            <div className="bg-blue-950 rounded-xl p-3">
              <IconCircle icon={ShieldCheck} tone="dark" />
            </div>
          </div>
        </section>

        {/* Cards */}
        <section>
          <h2 className="text-xl font-bold mb-4">Cards — Pilares / Soluciones</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <PillarCard
              number="01"
              icon={Boxes}
              title="Sistemas empresariales"
              description="Diseñamos y desarrollamos sistemas a la medida de tus procesos."
              bullets={["CRM", "Plataformas internas", "Sistemas de reservas"]}
            />
            <PillarCard
              number="02"
              icon={Link2}
              title="Integración"
              description="Conectamos tus herramientas para que la información fluya."
              bullets={["APIs y conectores", "Sincronización de datos", "Automatización de flujos"]}
            />
            <PillarCard
              number="03"
              icon={BarChart3}
              title="Inteligencia"
              description="Convertimos tus datos en información para tomar decisiones."
              bullets={["Dashboards ejecutivos", "KPIs y reportes", "Alertas y monitoreo"]}
            />
          </div>
        </section>

        {/* Tabs filter */}
        <section>
          <h2 className="text-xl font-bold mb-4">Tabs filter</h2>
          <TabsFilter />
        </section>

        {/* Process steps */}
        <section>
          <h2 className="text-xl font-bold mb-4">Process steps — "Así trabajamos"</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row gap-4">
            <ProcessStep number="1" title="Entender" description="Analizamos procesos, herramientas y datos." />
            <ProcessStep number="2" title="Diseñar" description="Definimos la arquitectura de la solución." />
            <ProcessStep number="3" title="Construir" description="Desarrollamos sistemas robustos y escalables." />
            <ProcessStep number="4" title="Conectar" description="Integramos sistemas y automatizamos procesos." />
            <ProcessStep number="5" title="Evolucionar" description="Medimos resultados y mejoramos." last />
          </div>
        </section>

        {/* Stat strip */}
        <section>
          <h2 className="text-xl font-bold mb-4">Stat strip (fondo navy)</h2>
          <StatStrip />
        </section>

        {/* Contact channels + form */}
        <section>
          <h2 className="text-xl font-bold mb-4">Canales de contacto & formulario</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <ContactChannelRow icon={Phone} label="Teléfono / WhatsApp" value="+52 998 123 4567" />
              <ContactChannelRow icon={Mail} label="Correo electrónico" value="contacto@dtasistemas.com" />
              <ContactChannelRow icon={MapPin} label="Oficina" value="Cancún, Quintana Roo" />
              <ContactChannelRow icon={Clock} label="Horario" value="Lun–Vie 09:00–18:00" />
            </div>
            <FormFieldDemo />
          </div>
        </section>

        {/* Spacing / radius */}
        <section>
          <h2 className="text-xl font-bold mb-4">Spacing & radio</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-wrap items-end gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-none mb-2" />
              <div className="text-xs text-gray-500">0px — inputs internos</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg mb-2" />
              <div className="text-xs text-gray-500">8px — inputs</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-xl mb-2" />
              <div className="text-xs text-gray-500">12px — cards</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mb-2" />
              <div className="text-xs text-gray-500">pill — botones/badges</div>
            </div>
          </div>
        </section>

        {/* Footer preview */}
        <section>
          <h2 className="text-xl font-bold mb-4">Footer</h2>
          <div className="bg-blue-950 text-white rounded-xl p-8 grid sm:grid-cols-4 gap-6 text-sm">
            <div>
              <div className="font-extrabold text-lg mb-2">DTA SISTEMAS</div>
              <p className="text-white/60 text-xs leading-relaxed">
                Tecnología para entender, automatizar y hacer crecer tu empresa.
              </p>
            </div>
            <div>
              <div className="font-semibold mb-2">Soluciones</div>
              <div className="text-white/60 space-y-1 text-xs">
                <div>Sistemas</div>
                <div>Integración</div>
                <div>Inteligencia</div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-2">Sectores</div>
              <div className="text-white/60 space-y-1 text-xs">
                <div>Turismo</div>
                <div>Inmobiliario</div>
                <div>Hotelería</div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-2">Contacto</div>
              <div className="text-white/60 space-y-1 text-xs flex flex-col">
                <span className="flex items-center gap-1"><Phone size={12}/> +52 998 123 4567</span>
                <span className="flex items-center gap-1"><Mail size={12}/> contacto@dtasistemas.com</span>
                <span className="flex items-center gap-1"><Search size={12}/> Cancún, Q. Roo, México</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
