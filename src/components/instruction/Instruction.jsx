import "./Instraction.scss"
import { FaArrowAltCircleRight } from "react-icons/fa";
const Instruction = () => {
  return (
    <>
     <section className="instruction" >
        <div className="container instruction-container">
            <div className="instraction-left">
                <img src="https://eticket.railway.gov.bd/v2/assets/img/home/instruction-secion-image.png" alt="instraction image" />

            </div>

            <div className="instraction-right">
                <h3>Instructions to Purchase Tickets</h3>
                <ul>
                    <li> <span><FaArrowAltCircleRight /></span> <p>Tickets can be bought online ten days in advance.</p> </li>
                    <li> <span><FaArrowAltCircleRight /></span> <p>You can pay for the tickets using mobile financial services: bKash, Nagad, Rocket, Upay or debit/credit cards: Mastercard, Visa, DBBL Nexus. Other payment options will be available soon.</p> </li>
                    <li> <span><FaArrowAltCircleRight /></span> <p>In case of payment or transaction failure, the deducted amount would be refunded by your bank or MFS provider within 8 business days.</p> </li>
                    <li> <span><FaArrowAltCircleRight /></span> <p>In case money has been deducted from your card / mobile wallet but you have not received a ticket confirmation, the deducted amount would be refunded by your bank or MFS provider within 8 business days.</p> </li>
                    <li> <span><FaArrowAltCircleRight /></span> <p>If you have not received your ticket copy in email, kindly check your Spam / Junk folder. You can also download your ticket copy from the purchase history of your account after you login.</p> </li>
                    <li> <span><FaArrowAltCircleRight /></span> <p>Download the official Rail Sheba app published by Bangladesh Railway from <a href="#">Google Play..</a> </p> </li>
                    <li> <span><FaArrowAltCircleRight /></span> <p>In case of passengers downloading fake apps or any other app from Google Play which claim to sell train tickets of Bangladesh Railway, the authorities will not take any liability. </p> </li>
                </ul>
            </div>
        </div>
     </section>
    </>
  );
};

// export default Instraction;
export default Instruction;