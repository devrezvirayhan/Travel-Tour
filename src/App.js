import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import AddService from './Pages/Home/AddService/AddService';
import Home from "./Pages/Home/Home/Home";
import Location from './Pages/Home/Location/Location';
import MyBooking from "./Pages/Home/MyBooking/MyBooking";
import MyLocationBooking from './Pages/Home/MyLocationBooking/MyLocationBooking';
import MyOrderHome from './Pages/Home/MyOrderHome/MyOrderHome';
import Login from "./Pages/Login/Login/Login";
import PrivetRoute from './Pages/Login/PrivetRoute/PrivetRoute';
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
            <Home></Home>
            </Route>
            <Route path="/login">
            <Login></Login>
            </Route>
            <Route path="/register">
            <Register></Register>
            </Route>


            <Route path="/addService">
            <AddService></AddService>
            </Route>

            <PrivetRoute path="/alllocation">
            <Location></Location>
            </PrivetRoute>
            <PrivetRoute path="/myorderHome">``
            <MyOrderHome></MyOrderHome>
            </PrivetRoute>
            <PrivetRoute path="/mybooking/:bookingID">
              <MyBooking></MyBooking>
            </PrivetRoute>
            <PrivetRoute path="/myLbooking/:bookingLID">
              <MyLocationBooking></MyLocationBooking>
            </PrivetRoute>
            <PrivetRoute path="/addService">
              <AddService></AddService>
            </PrivetRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;