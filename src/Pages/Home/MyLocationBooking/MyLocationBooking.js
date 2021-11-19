import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import useAuth from './../../../hooks/useAuth';

const MyLocationBooking = () => {
  const {user}=useAuth()
  console.log(user)
  const { bookingLID } = useParams();
  const [service, setService]= useState()
  useEffect(()=>{
      fetch(`https://rocky-atoll-42462.herokuapp.com/singlLocationProduct/${bookingLID}`)
      .then(res => res.json())
      .then(data => setService(data))
  },[])
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) =>{
    data.email=user.email
    fetch('https://rocky-atoll-42462.herokuapp.com/coformLocationOrder', {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((result) => console.log(result));
       console.log(data);
       
};
   
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <h1>Plause Booking</h1>

      <div className="booking-container">
        <div className="row container">
          <div className="col-md-6">
            <div className="details-img">
              <img className="w-75" src={service?.Img} alt="" />
            </div>
            <h2>{service?.name}</h2>
            <p className="text-start">{service?.Descripation}</p>
            <h1> Price: {service?.Price} $</h1>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                defaultValue={service?.Name}
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("address")}
                placeholder="Address"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("price", { required: true })}
                defaultValue={service?.Price}
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("image", { required: true })}
                defaultValue={service?.Img}
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("comments")}
                placeholder="Comment"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              {errors.exampleRequired && <span>This field is required</span>}
              <input
                type="submit"
                value="Order Now"
                className="btn btn-info w-50"
              />
            </form>
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default MyLocationBooking;