import '../assets/css/styles.css'
import Layouts from '../components/Layouts'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layouts {...Component}>
      <Component {...pageProps} />
    </Layouts>
  )
}
