 import "./Tickit.scss";
 function Tickit() {
    return(
        <>
         <section className="tickit">
            <div className="container tickit-container">
            <div className="search">
                <img src="https://eticket.railway.gov.bd/v2/assets/img/home/search.svg" alt="Search image" />
                <h3>Search</h3>
                <p>Choose your origin, destination, <br /> journey dates and search for trains</p>
            </div>
            <div className="select">
                <img src="https://eticket.railway.gov.bd/v2/assets/img/home/select.svg" alt="Select Image" />
                <h3>Select</h3>
                <p>Select your desired trip and choose your seats</p>
            </div>
            <div className="pay">
                <img src="https://eticket.railway.gov.bd/v2/assets/img/home/pay.svg" alt="Pay Image" />
                <h3>Pay</h3>
                <p>Pay for the tickets via Debit / Credit Cards or MFS</p>
            </div>
            </div>
         </section>
        </>
    );    
}
// export default Tickit;
export default Tickit;