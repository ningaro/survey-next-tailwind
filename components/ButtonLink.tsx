interface ButtonLinkProps {
  text: string
  linkPath: string
}

export default function ButtonLink({ text, linkPath }: ButtonLinkProps) {
  return (
    <a
      href={linkPath}
      className="max-w-max rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      {text}
    </a>
  )
}
