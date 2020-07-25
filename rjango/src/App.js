import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-select2-wrapper/css/select2.css';
import './App.css';


class App extends React.Component  {

  render() {
    return (
      <BrowserRouter>
          {/*{
             (this.props.location.pathname!=='/login' && this.props.location.pathname!=='/register') ? <Header/>:''
          }*/}
          <Switch>
            {/*<Route path="/" exact component={Login} /> */}
            <Route path="/" exact component={Register} />
            {/*<Route path="/listing" exact component={List} />
            <Route path="/login" exact component={Login} />*/}
          </Switch>
       {/*{
             (this.props.location.pathname!=='/login' && this.props.location.pathname!=='/register') ? <Footer/>:''
          } */}
        </BrowserRouter>
    );
  }
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
