import './App.css';
import {FaArrowCircleUp} from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"; 

import Header from "./Home/Header";
import Login from "./Admin/Login";
import PrivateRoute from "./Admin/PrivateRoute";
import PrivateScreen from "./Admin/PrivateScreen";
import CollectionView from "./Admin/CollectionView";
import BirthDay from "./Home/Collection/BirthDay";
import GoingAway from "./Home/Collection/GoingAway";
import Modelling from "./Home/Collection/Modelling";
import PreShoot from "./Home/Collection/PreShoot";
import WeddingShoot from "./Home/Collection/WeddingShoot";
import Item from "./Home/Item";


function App() {
  
  // The back-to-top button is hidden at the beginning
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  // This function will scroll the window to the top 
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)
  return (
    <Router>
      <div className="container">
        <main>
          <Switch>
            <Route path="/admin/add/:id/:name" exact component ={PrivateScreen}/>
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Header} />
            <Route path="/view/:id/:crypto/:personName/:url/:image1/:image2/:image3/:downloads/:likes/:unLikes/:category/:password/:route" exact component={Item} />
            <Route path="/kids" exact component={BirthDay} />
            <Route path="/goingaway" exact component={GoingAway} />
            <Route path="/modelling" exact component={Modelling} />
            <Route path="/preshoot" exact component={PreShoot} />
            <Route path="/weddingshoot" exact component={WeddingShoot} />
            <Route path="/admin/collectionview/:id/:name" exact component={CollectionView}/>
            
              
          </Switch>
        </main>
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
    </div>
    </Router>
  );
  }


export default App;
