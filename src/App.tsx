import React from 'react';
import './App.css';
import {Member} from './pages'
import SimpleCounter from "./pages/SimpleCounter"
import Full from "./components/Full";
import Greeting from './components/Greeting'
import Info from './components/Signin'
import SigninTest from './components/SigninTest'
import HideTest from './components/HideTest'
import CounterApp from "./counter/CounterApp";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


const App = () => <div className={"App"}>
  <CounterApp/>
</div>
export default App;