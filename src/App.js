import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import LeftSideBar from "./Components/Left_Sidebar/leftsidebar";
import RightSideBar from "./Components/Right-Sidebar/rightsidebar";
import Main from "./Components/Main-Content/main";
import "./Components/Header/header.css";
import "./Components/Footer/footer.css";
import "./Components/Left_Sidebar/leftsidebar.css";
import "./Components/Right-Sidebar/rightsidebar.css";
import "./Components/Main-Content/main.css";


function App() {
  return (
    <div className="App">
          <Header />
          <Footer />
          <LeftSideBar />
          <RightSideBar/> 
          <Main />
    </div>
  );
}

export default App;
