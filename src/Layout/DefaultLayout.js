import { useEffect, useMemo } from "react";
import { 
    Outlet,
    useLocation
} from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Chitragupt from "chitragupt";

const Layout = () =>{

    const location = useLocation();
    // const framework = useMemo(() => new Chitragupt({appName: 'MyBooks'}), []);;

    useEffect(() => {
        console.log('---> location', location);
        // framework.updateContext({context: location.pathname});
    }, [location]);
    // }, [location, framework]);

    return(
    <div className="appContainer">
    <Header/>
      <main className='main-container'>
        <Outlet/>
      </main>
    <Footer/>
  </div>
  )
}

export default Layout