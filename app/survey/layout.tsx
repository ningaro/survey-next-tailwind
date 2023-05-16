import '../globals.css'

export const metadata = {
  title: 'Random Test | Тестирование',
}

export default function SurveyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#gradient)"
          fillOpacity="0.8"
        />
        <defs>
          <radialGradient id="gradient">
            <stop stopColor="#134e4a" />
            <stop offset={1} stopColor="#0d9488" />
          </radialGradient>
        </defs>
      </svg>
      {children}
    </>
  )
}
