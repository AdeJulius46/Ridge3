import '@/styles/globals.css'
import '@/styles/carousel.css'
import Layout from '@/components/Layout/layout'
export default function App({ Component, pageProps }) {
  return(
      <Layout>
        <Component {...pageProps} />
      </Layout>
  ) 
  
}
