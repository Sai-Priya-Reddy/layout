import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import LeftSideBar from "./Components/Left_Sidebar/leftsidebar";
import RightSideBar from "./Components/Right-Sidebar/rightsidebar";
import "./Components/Header/header.css";
import "./Components/Footer/footer.css";
import "./Components/Left_Sidebar/leftsidebar.css";
import "./Components/Right-Sidebar/rightsidebar.css";


function App() {
  return (
    <div className="App">
          <Header />
          <Footer />
          <LeftSideBar />
          <RightSideBar/> 
    </div>
  );
}

export default App;
