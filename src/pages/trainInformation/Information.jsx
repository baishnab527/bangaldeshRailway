import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Information.scss";

const Information = () => {
  return (
    <>

     < Header/>
      <section className="selelctTrain" >
        <div  className="container SelelctTrain-container">

          <div className="selectTrain-left">
            <p>Select Your Preferred Train</p>
           <form action="#">

           <label htmlFor="select">TRAIN NAME</label>
            <select name="location" id="select">
              <option value=" SEARCH TRAIN " selected > SEARCH TRAIN </option>
              <option value="NARANGONG COMPUTER 1 (011)">NARANGONG COMPUTER 1 (011)</option>
              <option value="NARANGONG COMPUTER 1 (011)">NARANGONG COMPUTER 1 (011)</option>
              <option value="NARANGONG COMPUTER 1 (011)">NARANGONG COMPUTER 1 (011)</option>
              <option value="NARANGONG COMPUTER 1 (011)">NARANGONG COMPUTER 1 (011)</option>
              <option value="NARANGONG COMPUTER 1 (011)">NARANGONG COMPUTER 1 (011)</option>
              <option value="NARANGONG COMPUTER 1 (011)">NARANGONG COMPUTER 1 (011)</option>
            </select>

            <button>SEARCH</button>

           </form>
          </div>

          <div className="selectTrain-right">
             <img src="https://eticket.railway.gov.bd/v2/assets/img/train-information/train-information-illustration.svg" alt="train information"/>
             <p>Please select your preferred train to see the <br /> detailed information of your selected train.</p>
          </div>

        </div>
      </section>

      < Footer />
    </>
  );
}
// export default Information;
export default Information;