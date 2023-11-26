import "./Register.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Register = () => {
  return (
    <>
        < Header />
         
         <section className="register">
          <div className="container register-container">
            <h3>Rigistration</h3>
            <hr id="horijontalrow" />
               
               <div className="register-topConten">
                <img src="https://eticket.railway.gov.bd/v2/assets/img/auth/verify-nid-illustration.svg" alt="nid varicaption image" />

                <h3>Please Verify Your NID</h3>
                <p>Enter the information below to verify and register your NID with Bangladesh Railway Ticketing Service</p>

                <p>If your NID is verified through SMS, please use the details used during the SMS verification.</p>
               </div>

               <div className="registration-NID">
                <form action="#">
                  <input type="text" placeholder="Enter Mobile Number" name="mobile" id="mobile" />

                  <input type="text" name="NID" id="NID" placeholder="Enter NID Number"/>

                  <input type="date" placeholder="Select Date of Birth" />

                  <button type="submit" className="Button-bold" > Verify</button>

                  <p>If yor are under 18 years old or foreign passport holder, you can register with your certificate or passport by clicking the submit data button.</p>
                  <button className="button-outline" type="submit"> SUBMIT DATA </button>
                  <a href="#">Already Registerd</a>
                </form>
               </div>

          </div>

         </section>

        < Footer/>  

    </>
  );
}
// export default Register;
export default Register;