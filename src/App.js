
import Artikelliste from './components/Artikelliste'

function App() {

  
  return (
    <div className="mainContainer">
      <header></header>

      <div className="ui raised very padded text container segment">
        <div className="ui relaxed divided list">
       <Artikelliste/>
        </div>
      </div>
    </div>
  );
}

export default App;
