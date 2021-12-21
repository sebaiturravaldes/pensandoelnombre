import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <Link href="https://github.com/siturra/pensandoelnombre">Contribuir en Github</Link>
      <style jsx>
        {`
          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer img {
            margin-left: 0.5rem;
          }
        `}
      </style>
    </footer>
  )
}
