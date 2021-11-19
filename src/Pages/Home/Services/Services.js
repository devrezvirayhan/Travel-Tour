import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://rocky-atoll-42462.herokuapp.com/teavelSportHome")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="p-3">
      <h1 className="mb-2">The Places around Us</h1>
      <div className="services mt-2">
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
                <Link to={`/mybooking/${ourvacation._id}`}>
                  <button className="btn btn-success">Add To Cart</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;