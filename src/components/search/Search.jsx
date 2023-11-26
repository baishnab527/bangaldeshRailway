import "./Search.scss";

const Search = () => {
  return (
    <>
     <section className="Search">

        <main>
            <div className="container Search-container">
                <div className="Search-left">
                    <form action="#">

                     <div className="row g-3 py-2 ">
                        <div className="col-md-6">
                        <label className="form-label" htmlFor="fromStation">From</label>
                        <input type="text" className="form-control" placeholder="Form Station"   name="Station" id="fromStation" />
                        </div>

                        <div className="col-md-6">
                        <label className="form-label" htmlFor="fromStation">To</label>
                        <input type="text" className="form-control" placeholder="To Station"   name="Station" id="fromStation" />
                        </div>
                     </div>

                     <div className="row g-3 py-2 ">
                        <div className="col-md-6">
                        <label className="form-label" htmlFor="fromStation">From</label>
                        <input type="date" className="form-control" placeholder="Form Station"   name="Station" id="fromStation" />
                        </div>

                        <div className="col-md-6">
                        <label className="form-label" htmlFor="fromStation">Chose a class</label>
                           <select className="form-control" >
                            <option value="chose a class" selected> Chose a class</option>
                            <option value="AC_B" > AC_B </option>
                            <option value="SNIGDA" > SNIGDA </option>
                            <option value="F_BRITH" > F_BRITH </option>
                            <option value="F_SEAT" > F_SEAT </option>
                            <option value="F_CHAIR" > F_CHAIR </option>
                            <option value="S_CHAIR" > S_CHAIR </option>
                            <option value="SHOVON" > SHOVON </option>
                            <option value="SHLUOV" > SHLUOV </option>
                            <option value="AC_CHAIR" > AC_CHAIR </option>
                           </select>
                        </div>
                     </div>

                     <div className="row g-3 pt-4 ">
                        <div className="col-md-12">
                        <button  type="submit" className="w-100 btn " style={{backgroundColor: "#006847", color: "white"}}> Search Train </button> 
                        </div>
                     </div>
                      
                    </form>
                </div>

                <div className="Search-right">  
                <div className="banner-content">
                  <p>Easy <span>Purchase</span>  of <span>tickets</span> useing</p>
                  <p>online payment mathod</p>
                  <div className="banner-image">
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
                </div>
            </div>
        </main>

     </section>
    </>
  );
}

// export default Search;
export default Search;