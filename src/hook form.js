import React from "react";
import { useForm } from "react-hook-form";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Hook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await sleep(2000);
    if (data.username === "bill") {
      alert(JSON.stringify(data));
    } else {
      alert("There is an error");
    }
  };

  console.log(errors);

  return (
    <div className="bg-gray-500 flex justify-center">
      <form className="max-w-lg m-auto" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="font-thin  text-white mt-36 border-y-2 items-center py-2.5">
          Async Submit Validation
        </h1>
        <label
          className="flex justify-between mt-4 text-2xl"
          htmlFor="username"
        >
          User Name
        </label>
        <input
          className="mt-4 w-80 p-4"
          placeholder="Bill"
          {...register("username")}
        />

        <label
          className="flex justify-between mt-4 text-2xl"
          htmlFor="lastName"
        >
          Last Name
        </label>
        <input
          className="mt-4 w-80 p-4"
          placeholder="Luo"
          {...register("lastName")}
        />

        <label className="flex justify-between mt-4 text-2xl" htmlFor="email">
          Email
        </label>
        <input
          className="mt-4 w-80 p-4"
          placeholder="bluebill1049@hotmail.com"
          type="text"
          {...register("email")}
        />

        <div style={{ color: "red" }}>
          {Object.keys(errors).length > 0 &&
            "There are errors, check your console."}
        </div>
        <input
          className=" flex  mt-8 text-2xl   border-2 p-3 bg-black text-white "
          type="submit"
        />
      </form>
    </div>
  );
}

export default Hook;
