import "./Contact.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <>
         
         < Header/>
           
           <section className="header" >
            <div className="container header-container">
              <h3>Contact Us</h3>
              <hr />

              <div className="contact-code">
                <div className="contact-content">
                  <p>For refund of unsuccessful purchases and card <br /> charging issues</p>
                </div>

                <div className="contact-number">
                  <h4>Bikash</h4> <h4 style={{color:"#da924e"}}  >16247</h4>
                </div>

                <div className="contact-number">
                  <h4>Nagad</h4> <h4 style={{color:"#da924e"}}  >16167</h4>
                </div>

                <div className="contact-number">
                  <h4>Rocket / DBBL Nexus</h4> <h4 style={{color:"#da924e"}}  >16216</h4>
                </div>

                <div className="contact-number">
                  <h4>Upay</h4> <h4 style={{color:"#da924e"}} >16268</h4>
                </div>
                <div className="contact-number">
                  <h4>Visa / Mastercard</h4> <h4 style={{color:"#da924e"}}   >N/A</h4>
                </div>


                <div style={{marginTop: "20px"}} className="contact-content">
                  <p>Reach out to our support team to report identity theft!<br /> charging issues</p>
                </div>


                <div className="contact-eamil">
                  <p>If any user has registered with someone else{}s NID using his/her mobile number, the real/actual NID holder can claim the identity by following the mentioned steps below :-</p>

                  <div className="email">
                    <h5 style={{color:"#3f3f3f"}} >Send an email to</h5>
                    <h5 style={{color:"#da924e"}} >support@aticket.railway.gov.bd</h5>
                  </div>
                </div>

                <div className="contact-content">
                  <p>Must attach the following documents with the email:</p>
                  <ol start={1} >
                    <li>1.  A scanned copy of the ownership document for the SIM (mobile number)</li>
                    <li> 2.  A scanned copy of the NID card</li>
                  </ol>
                </div>



              </div>
            </div>
           </section>

         < Footer/>

    </>
  );
};

// export defaut Contact;
export default Contact;