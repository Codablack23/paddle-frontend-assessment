import Head from 'next/head'
import Footer from '../widgets/Footer'
import Nav from '../widgets/Nav'
export default function HomeLayout({title,children,isDark}){
    return(
        <section className={`HomeLayout ${isDark?"dark":"light"}`}>
         <Head>
             <title>Metrics | {title}</title>
         </Head>
         <Nav isDark={isDark} isHome={title==="Home"}/>
         <div className="content">
           {children}
         </div>
         <Footer isDark={isDark}/>
        </section>
    )
}