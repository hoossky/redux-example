import React from 'react';
import './App.css';
import {Member} from './pages'
import Counter from "./pages/Counter"
import Full from "./components/Full";
import Greeting from './components/Greeting'
import Info from './components/Signin'
import SigninTest from './components/SigninTest'
import HideTest from './components/HideTest'
import CounterContainer from "./containers/CounterContainer";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


const App = () => <div className={"App"}>
  <CounterContainer/>
</div>
export default App;