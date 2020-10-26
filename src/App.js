import { Switch, Route } from 'react-router-dom';
import Menu from './components/Menu.js';
import Home from './components/Home.js';
import HtmlDefintion from './components/HtmlDef.js';
import CssDefinition from './components/CssDef.js';
import JsDefinition from './components/JsDef.js';
import './App.css';



function App() {
  return (
    <div className="App">
      <Menu />
      <Switch >
        <Route exact path="/" component={Home} />
        <Route path="/js" component={JsDefinition} />
        <Route path="/css" component={CssDefinition} />
        <Route path="/html" component={HtmlDefintion} />
      </Switch >
    </div>
  );
}

export default App;
