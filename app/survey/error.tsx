'use client'

import ButtonLink from 'components/ButtonLink'

export default function Error() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-xl font-semibold text-teal-600">500</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Ошибка во время получения данных
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Пожалуйста, начните тест снова, сейчас мы не смогли получить
          корректных данных с сервера.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <ButtonLink text="Вернуться на главную" linkPath="/" />
        </div>
      </div>
    </main>
  )
}
