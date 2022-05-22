import Link from "next/link";
import HomeLayout from "~/components/layouts/HomeLayout";

export default function About(){
    return(
       <HomeLayout isDark={true} title={"About"}>
         <header className="about-header">
             <div className="overlay"></div>
           <div className="about-title">
              <hr />
              <p>ABOUT US</p>
           </div>
           <p className="title">
           Built for Saas <br/> and E-commerce
           </p>
           <p className="content">
           Our tools are easy to set up and use with a user friendly dashboard that enables you to set up, launch, automate and manage multi-affiliate campaigns in 5 minutes.
           </p>
         </header>
         <p className="about-description">
         Metricks was developed because just like you, we needed a product that could give us <b>good value</b>.
         </p>

         <section className="why-us-section">
             <div className="overlay"></div>
           <div className="item">
            <div className="why-us-title">
                <hr />
                <p>WHY US?</p>
            </div><br />
            <p className="why-us-text">
            We pride ourselves in our ability to innovate and create world-class tools that provide reliable and efficient touchpoints between advertisers and affiliates.
            </p>
           </div>
           <div className="item">
               <br />
            <div className="why-us-title">
                <hr />
                <p>GROWING WITH YOU</p>
            </div><br />
            <p>
            Leveraging the best technology, we have developed an all-in-one affiliate marketing tracking software, a genius tool to help you track, automate and optimize your influencer campaigns, all from one dashboard.
            </p><br />
            <p>
            Leveraging the best technology, we have developed an all-in-one affiliate marketing tracking software, a genius tool to help you track, automate and optimize your influencer campaigns, all from one dashboard.
            </p>
           </div>
         </section>
         <section className="questions-section">
            <p className="heading">Got a Question ?</p> <br />
            <p className="text">See how Metricks can help your business grow with best Affiliate Marketing Tracking Software.</p><br />
            <Link href={"/comingsoon?contact=true"}>
            <a>Contact Us <i className="bi bi-arrow-right"></i></a>
            </Link>
         </section>
       </HomeLayout>
    )
}