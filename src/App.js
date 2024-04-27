import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import './App.css';

function App() {
  // function handleNameChange(){
  //   const names =["earn","grow","give"]
  //   const int = Math.floor(Math.random()*3);
  //   return names[int]
  // }
  return (
    // <div >
    //  Subscribe to dhuttu
    //  <p>lets {handleNameChange()} money</p>
    // </div>
    
    <div className="App">
    <Header/>
    <Content/>
    <Footer/>
    </div>
  );
}

export default App;
