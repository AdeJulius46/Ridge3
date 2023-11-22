import Navbar2 from "../Navbar2";
import Footer from "../Footer"
import Head from "next/head";


const layout = ({children}) => {
  return (
    <div>
        <Head>
        
          <title>
            Ridge
            Pay my money bro its not funny pay your devs money
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