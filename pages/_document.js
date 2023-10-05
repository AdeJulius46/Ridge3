import { Html, Head, Main, NextScript } from 'next/document'



export const metadata ={
  title:'create',
  description:'create'

}
export default function Document() {
  return (
    <Html lang="en">
      <Head>  
      {/* <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel=" stylesheet" /> */}
            <meta 
           title='create'
           description='create'
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

