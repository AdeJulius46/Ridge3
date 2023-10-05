import Navbar from "../Navbar"
import Footer from "../Footer"
import Head from "next/head";


const layout = ({children, title}) => {
  return (
    <div>
        <Head>
          <meta 
           title='create'
           description='create'
          />
          
          
       </Head>
        <Navbar/>
        <main className="">
            {children}
        </main>
        <Footer/>

    </div>
  )
}

export default layout