import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://rocky-atoll-42462.herokuapp.com/allLocation', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('Added Success')
                reset()
            }
        } )
    };

    return (
        <div className="add-service">
            <h1>This Is Add service page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" {...register("Name",)} />
                <textarea  placeholder="Descripation" {...register("Descripation",)} />
                <input placeholder="Price" type="number" {...register("Price",)} />
                <input placeholder="Img URL" {...register("Img",)} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;