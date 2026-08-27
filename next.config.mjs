/**
 * Content-Security-Policy calibrada para permitir exactamente los orígenes
 * que el sitio ya usa (Fase 8: GA4/GTM, Fase 7: Cloudflare Turnstile) y
 * nada más.
 *
 * Nota honesta sobre 'unsafe-inline' en script-src: Next.js inyecta
 * pequeños scripts inline para la hidratación y para los datos de cada
 * página (__NEXT_DATA__). Una CSP estrictamente sin 'unsafe-inline'
 * requiere una estrategia de nonces por-request (middleware generando un
 * nonce y pasándolo a cada <Script>), que es un endurecimiento real pero
 * no trivial de implementar correctamente. Se deja documentado aquí como
 * mejora futura en vez de fingir una CSP más estricta de la que realmente
 * se implementó — con 'unsafe-inline' en script-src, la CSP sigue
 * bloqueando la inyección de scripts desde dominios no listados (que es el
 * vector de ataque más común, XSS por librerías/CDNs de terceros no
 * autorizados), aunque no elimina el riesgo de un XSS reflejado que logre
 * inyectar un <script> inline.
 */
const cspDirectives = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://challenges.cloudflare.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://challenges.cloudflare.com",
  "frame-src 'self' https://www.googletagmanager.com https://challenges.cloudflare.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: cspDirectives },
  // Cloudflare ya fuerza HTTPS en el borde (regla de la Fase 10), pero
  // declarar HSTS también a nivel de aplicación es defensa en profundidad.
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // AVIF primero: mejor compresión que WebP a calidad similar.
    // Next.js sirve el mejor formato soportado por el navegador del visitante.
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        // Aplica a todas las rutas. Next.js en Vercel respeta esta
        // configuración automáticamente — no se necesita duplicarla en
        // vercel.json (ver docs/deployment.md).
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
