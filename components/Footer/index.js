import Head from 'next/head'

export default function Footer() {
  return (
      <footer>
        Powered by siturra
        
        <style jsx>{` 
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
