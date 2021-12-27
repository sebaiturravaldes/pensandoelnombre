import 'src/assets/css/styles.css'
import Layouts from 'src/components/Layouts'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layouts {...Component}>
      <Component {...pageProps} />
    </Layouts>
  )
}
