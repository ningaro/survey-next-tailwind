import ButtonLink from 'components/ButtonLink'

export default function Home() {
  return (
    <>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
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
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Рандомный тест.
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-700">
          Пройди случайный тест, чтобы проверить свои знания.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <ButtonLink text="Пройти" linkPath="/survey" />
        </div>
      </div>
    </>
  )
}
