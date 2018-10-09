import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeRouter, Route, Link, Switch } from 'react-router-native'
import Login from './src/components/Login/Login';
import Signup from './src/components/Login/Signup';
import MyTrips from './src/components/Trips/MyTrips';
import SearchDestination from './src/components/Trips/SearchDestination';
import LandingPage from './src/components/Trips/LandingPage';



const App = () => (
  <NativeRouter>
    <Switch>
       <Route exact path="/" component={Login}/>
       <Route exact path="/signup" component={Signup}/>
       <Route exact path="/myTrips" component={MyTrips}/>
       <Route exact path="/searchDestination" component={SearchDestination}/>
       <Route exact path="/landingPage" component={LandingPage}/>
    </Switch>
  </NativeRouter>
)

export default App