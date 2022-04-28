import './App.css';
import data from "./personal.json"


// type FooterProps = {
//   copyright: string;
// }

// const Footer: React.FC<FooterProps> =(props) => (
//   <footer>Footer {props.copyright}</footer>
// )

const App =()=> (
  
  <div className="App">
    
    <h1>{data.firstName}</h1>
    <h2>{data.bio}</h2>
    <p>{data.contacts}</p>
    {/* <Footer copyright='c'/> */}
  </div>
  
)

export default App;
