import Navbar2 from "../Navbar2";
import Footer from "../Footer"
import Head from "next/head";


const layout = ({children, title}) => {
  return (
    <div>
        <Head>
        
          <title>
            Ridge
          </title>
          
       </Head>
    
        <Navbar2/>

     
        <main className="">
            {children}
        </main>

        <footer>
        <Footer/>
        </footer>

    </div>
  )
}

export default layout