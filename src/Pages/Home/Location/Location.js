
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Location = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://rocky-atoll-42462.herokuapp.com/allLocation")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="p-3">
      <h1>The Most Beautiful Places</h1>
        <div className="services">
          <div className="row container">
            {services?.map((ourvacation) => (
              <div className="col-md-4">
                <div className="service border border p-3">
                  <div className="services-img ">
                    <img className="w-100" src={ourvacation?.Img} alt="" />
                  </div>
                  <h3>{ourvacation?.Name}</h3>
                  <p>{ourvacation?.Descripation}</p>
                  <h3 className="text-dark">Total Cost :{ourvacation?.Price} $</h3>
                  <Link to={`/myLbooking/${ourvacation._id}`}>
                    <button className="btn btn-success">Add To Cart</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>

  );
};


export default Location;