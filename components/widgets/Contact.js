export default function Contact(){
    function closeContact(){
        const contact = document.querySelector('#contact')
  
        contact.style.transform = "scale(0)"
      }
    return (
        <div className="contact-container" id="contact">
            <div className="contact-form-container">
                <button className="close-btn" onClick={closeContact}>
                    <i className="bi bi-arrow-right"></i>
                </button>
                <p className="heading">
                Hey, we are still in the works,<br /> but you can send us a message!
                </p><br />
                <form className="contact-form">
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder="Enter your first name "/>
                    <label htmlFor=""  >Last Name</label>
                    <input type="text" placeholder="Enter your last name "/>
                    <label htmlFor="">Email Address</label>
                    <input type="text" placeholder="Enter your email address " />
                    <label htmlFor="">Tell Us What You Need Help With</label>
                    <textarea name="" id="" placeholder="Enter a topic, like 'channel problem'"></textarea>
                    <button>Send Now</button>
                </form>
            </div>
        </div>
    )
}