import React from "react";
import { useForm } from "react-hook-form";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }; // prints the data of form submitted

  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  return (
    <>
      <form
        style={{ display: "grid", width: "20vmax", gap: "3vmax" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          value={name}
          {...register("firstName", {
            required: "This is required",
          })}
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        {errors.firstName && (
          <span style={{ color: "red" }}>This field is required</span>
        )}
        <input
          type="text"
          value={lastName}
          placeholder="Enter Last Name"
          {...register("lastName", { required: true })}
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors.lastName && (
          <span style={{ color: "red" }}>This field is required</span>
        )}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
