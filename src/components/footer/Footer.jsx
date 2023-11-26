import "./Footer.scss";

const Footer = () => {
  return (
    <>
        <footer className="Footer" >
         <div className="container Footer-container">
            <div className="footer-top">
                <ul>
                    <li><a href="#"> <img src="https://eticket.railway.gov.bd/v2/assets/img/home/bkash-77x32.png" alt="bikash logo" /></a></li>
                    <li><a href="#"> <img src="https://eticket.railway.gov.bd/v2/assets/img/home/nagad-32.png" alt="Nogod logo" /></a></li>
                    <li><a href="#"> <img src="https://eticket.railway.gov.bd/v2/assets/img/home/rocket.svg" alt="Roket logo" /></a></li>
                    <li><a href="#"> <img src="https://eticket.railway.gov.bd/v2/assets/img/home/upay.svg" alt="Upay logo" /></a></li>
                    <li><a href="#"> <img src="https://eticket.railway.gov.bd/v2/assets/img/home/master-card.png" alt="mastercard logo" /></a></li>
                    <li><a href="#"> <img src="https://eticket.railway.gov.bd/v2/assets/img/home/visa.png" alt="Visa logo" /></a></li>
                    <li><a href="#"> <img src="https://eticket.railway.gov.bd/v2/assets/img/home/nexus-debit.svg" alt="DBBLNexus logo" /></a></li>
                </ul>
            </div>
         </div>

         <div className="footer-Middle">
            <div className="container footer-Middle-container">
                <p>* The Tickets are issued by Bangladesh Railway's Centrally Computerized Seat Reservation & Ticketing System (CCSRTS) and Shohoz-Synesis-Vincen JV is responsible for designing, development, implementation, technical operation & maintenance of the system.</p>
            </div>
         </div>


         <div className="footer-bootom">
            <div className="container footer-bootom-container">
                 
                 <div className="footer-left">
                    <img src="https://eticket.railway.gov.bd/v2/assets/img/home/shohoz-synesis-vincen-jv.webp" alt="Sohoj.com" />
                 </div>
                 <div className="footer-middle">
                    <p>Terms and comditions &#8739;pricacy policy</p>
                 </div>
                 <div className="footer-right">
                    <img src="https://eticket.railway.gov.bd/v2/assets/img/home/bangladesh-railway.png" alt="railway logo" />

                    <div className="footer-right-content">
                        <h3>Bangladesh Railway</h3>
                        <p>নিরাপদ . আরামদায়ক . সাশ্রয়ী</p>
                    </div>
                 </div>


            </div>
         </div>
        </footer> 
    </>
  );
};

// export default Footer;
export default Footer;