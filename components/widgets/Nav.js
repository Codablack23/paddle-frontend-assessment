import Link from "next/link"


export default function Nav({isDark}){
    function OpenNav(){
       const nav = document.querySelector('#navbar')
       if(nav.style.maxHeight){
           nav.style.maxHeight = null
       }else{
        nav.style.maxHeight = `${30}vh`
       }
    }
    return(
        <nav className="nav">
            <div className="nav-header">
            <Link href={"/"}>
             <a className={`logo logo-${isDark?"dark":"light"}`}>LOGO</a>
           </Link>
           <button className="open-nav" onClick={OpenNav}>
           <i className="bi bi-grid-1x2-fill"></i>
           </button>
            </div>
            <div className={`navbar navbar-${isDark?"dark":"light"}`} id="navbar">
                <Link href={"/about"}>
                 <a className="nav-link">About Us</a>
                </Link>
                <Link href={"/blog"}>
                 <a className="nav-link">Blog</a>
                </Link>
                <button className="nav-btn">Contact Us</button>
            </div>
        </nav>
    )
}