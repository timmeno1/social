import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route, BrowserRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersConatiner from "./components/Users/UsersContainer"

const App = () => {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <HeaderContainer />
              <Navbar />
              <div className="app-wrapper-content">
                  <Route path="/dialogs" component={()=> <DialogsContainer /> } />
                  <Route path="/profile/:userId?" component={()=> <ProfileContainer /> } />
                  <Route path="/users" render={()=><UsersConatiner />}/>
                  <Route path="/news" component={News}/>
                  <Route path="/music" component={Music}/>
                  <Route path="/settings" component={Settings}/>
              </div>

          </div>
      </BrowserRouter>
  );
}



export default App;
