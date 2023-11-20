import React from "react";                                                                     
import { useForm } from "react-hook-form";


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Hook() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();


  const onSubmit = async (data) => { 
    await sleep(100);
    if (data.username) {
      alert(JSON.stringify(data));
    } else {
      alert("⚠ There is an error ");
    }
  };

  console.log(errors);

  return (
    <div className="bg-gray-500 flex justify-center "><form className="max-w-lg m-auto " onSubmit={handleSubmit(onSubmit)}>
      <h1 className="font-thin  text-white mt-36 border-y-2 items-center py-2.5">Async Submit Validation</h1>
      <label className="flex justify-between mt-4 text-2xl" htmlFor="username">User Name</label>
      <input className="mt-4 w-80 p-4 "   placeholder="Bill" {...register("username", {
          required: "⚠ this is a required",
          maxLength: {
            value: 20,
            message: "Max length is 2"
          }
        })}
      />
      {errors.username && <p className="mt-2">{errors.username.message}</p>}

     

      <label className="flex justify-between mt-4 text-2xl" htmlFor="lastName">Last Name</label>
      <input className="mt-4 w-80 p-4" placeholder="Luo" {...register("lastName", {
          validate: (value) => value.length > 3
        })}
      />
      {errors.lastName && <p className="mt-2 "> ⚠ Your last name is less than 3 characters</p>}

      <label className="flex justify-between mt-4 text-2xl" htmlFor="email">Email</label>
      <input className="mt-4 w-80 p-4"
        placeholder="bluebill1049@hotmail.com"
        type="text"
        {...register("email")}
      />

      <div className="mt-2" style={{ color: "red" }}>
        {Object.keys(errors).length > 0 &&
          "⚠ There are errors, check your console."}
      </div>
      <input className=" flex w-24 mt-8 text-2xl items-center justify-center mb-4   border-2 p-3 bg-black text-white " type="submit" />
    </form></div>
  );
}

export default Hook; 