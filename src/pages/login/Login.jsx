import "./Login.scss";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
const Login = () => {
  return (
    <>
      < Header/>
     <section className="login">
      <div className="container login-container">
         <div className="register-form ">

          <img src="https://eticket.railway.gov.bd/img/login-page-logo.png" alt="railway logo" />
          <h1>Bangladesh Railway</h1>
          <p><span>নিরাপদ  আরামদায়ক সাশ্রয়ী</span></p>

            <div className="login-form">
              <div className="login-form-top py-4">
              <a href="#">Forgot password</a> <span>Need Helps ?</span>
              </div>
              <form action="">
                <input type="text" name="mobile" id="mobile" placeholder="Enter your mobile number" />

                <input type="password" name="password" id="password" placeholder="Enter your password" />

                 

                <button className="submit">LOGIN</button>

                <span>OR</span>

                <a href="#">REGISTER</a>
              </form>
            </div>

         </div>
      </div>
     </section>

     < Footer/>
    </>
  )
}

export default Login;