import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import {Route, BrowserRouter} from "react-router-dom";

const App = (props) => {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header />
              <Navbar data={props.data}/>
              <div className="app-wrapper-content">
                  <Route path="/dialogs" component={()=> <Dialogs data={props.data}/> } />
                  <Route path="/profile" component={()=> <Profile data={props.data} dispatch={props.dispatch}/> } />
                  <Route path="/news" component={News}/>
                  <Route path="/music" component={Music}/>
                  <Route path="/settings" component={Settings}/>
              </div>

          </div>
      </BrowserRouter>
  );
}



export default App;
