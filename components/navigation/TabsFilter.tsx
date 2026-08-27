"use client";

import { useState, ReactNode } from "react";

type TabsFilterProps = {
  tabs: string[];
  children: (activeTab: string) => ReactNode;
};

/**
 * Filtro horizontal usado en /soluciones (mockup aprobado: "Todas las
 * soluciones", "Sistemas", "Integración"...). Client Component: es el único
 * elemento interactivo de la página, el resto del hub sigue siendo Server
 * Component (regla de performance, Fase 0 sección 18).
 */
export function TabsFilter({ tabs, children }: TabsFilterProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-dta-blue-600 ${
              activeTab === tab
                ? "bg-dta-blue-600 text-white"
                : "bg-white text-dta-black border border-dta-gray-200 hover:border-dta-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {children(activeTab)}
    </div>
  );
}
