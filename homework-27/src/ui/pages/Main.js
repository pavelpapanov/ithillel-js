import '../../main.css';
import Header from "../components/Header";
import Aside from "../components/Aside";
import MainContent from "../components/MainContent";

function Main() {
  return (
      <>
        <Header/>
        <div className="container content">
          <Aside/>
          <MainContent/>
        </div>
      </>
  );
}

export default Main;
