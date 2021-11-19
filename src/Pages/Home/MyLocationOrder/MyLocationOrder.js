import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import useAuth from './../../../hooks/useAuth';

const MyLocationOrder = () => {
//   const email = sessionStorage.getItem("email");
const {user}=useAuth()

  const [services, setServices] = useState([]);

  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`https://rocky-atoll-42462.herokuapp.com/myOrders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    fetch(`https://rocky-atoll-42462.herokuapp.com/delteOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setControl(!control);
        }
      });
    console.log(id);
  };

  return (
    <div>
        <div>
            <Navbar></Navbar>
        </div>
      <h1>My Orders </h1>
      <div className="services">
        <div className="row container">
          {services?.map((service) => (
            <div className="col-md-4">
              <div className="service border border p-3">
                <div className="services-img ">
                  <img className="w-100" src={service?.image} alt="" />
                </div>

                <h3>{service?.name}</h3>
                <h4>{service?.price}</h4>
                <h5>{service?.address}</h5>
                <small>{service?.email}</small>
                <p>{service?.comments}</p>
                <button
                  onClick={() => handleDelete(service?._id)}
                  className="btn btn-danger"
                >
                  <h6>Remove {service?.name}</h6>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
          <Footer></Footer>
      </div>
    </div>
  );
};
export default MyLocationOrder;