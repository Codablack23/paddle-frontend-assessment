import HomeLayout from "~/components/layouts/HomeLayout"
import Contact from "~/components/widgets/Contact"



export default function ComingSoon(){
    return(
      <HomeLayout title={"Home"} isDark={true}>
         <Contact/>
         <div className="hero">
             <h1 className="hero-title">Something awesome is coming soon</h1>
             <p className="hero-text">Your all-in-one affiliate marketing tracking software <b>track</b>, <b>automate</b> and <b>optimize</b> your campaigns.</p>
             <div className="countdown-container">
               <div className="time-container">
                  <div className="time">
                   <h3 className="value">7</h3>
                   <p>Days</p>
                  </div>
               </div>

               <div className="time-container">
                  <div className="time">
                   <h3 className="value">24</h3>
                   <p>Hours</p>
                  </div>
               </div>
               <div className="time-container">
                  <div className="time">
                   <h3 className="value">60</h3>
                   <p>Minutes</p>
                  </div>
               </div>
               <div className="time-container">
                  <div className="time">
                   <h3 className="value">7</h3>
                   <p>Seconds</p>
                  </div>
               </div>
             </div>

             <form action="" className="name-form">
               <input type="text" placeholder="First Name." />
               <input type="text" placeholder="Last Name." />
             </form>

             <div className="subscribe-container">
               <input type="email" name="" id="" placeholder="Enter your email address" />
               <p className="subscribe-btn">join our waiting list</p>
             </div>
         </div>
      </HomeLayout>
    )
}