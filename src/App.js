import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import LeftSideBar from "./Components/Left_Sidebar/leftsidebar";
import "./Components/Header/header.css";
import "./Components/Footer/footer.css";
import "./Components/Left_Sidebar/leftsidebar.css"


function App() {
  return (
    <div className="App">
          <Header />
          <Footer />
          <LeftSideBar />
      
      
    </div>
  );
}

export default App;
