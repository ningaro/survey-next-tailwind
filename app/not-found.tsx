import ButtonLink from 'components/ButtonLink'

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-xl font-semibold text-teal-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Такой страницы нету
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          К сожалению, мы не смогли найти необходимую страницу.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <ButtonLink text="Вернуться на главную" linkPath="/" />
        </div>
      </div>
    </main>
  )
}
