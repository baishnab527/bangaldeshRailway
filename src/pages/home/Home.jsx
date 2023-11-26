import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Search from "../../components/search/Search";
import Tickit from "../../components/teckit/Tickit";
import Instruction from "../../components/instruction/Instruction";
import "./Home.scss";

const Home = () => {
  return (
    <>
       < Header/>
          
          < Search/>
          < Tickit />
          < Instruction/>
       < Footer />
    </>
  );
}

export default Home;