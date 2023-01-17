import React from "react";
import axios from "axios";

const Form = () => {
  const [username, setUsername] = React.useState("");
  const [images, setImages] = React.useState([]);
  //  this is proper working solution of multiple files upload in react js using multer and cloudinary in node js
  const submitForm = async (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("username", username);
    for (const file of images) {
      myForm.append("image", file);
    }

    const { data } = await axios.post(
      "http://localhost:3000/api/user/upload",

      myForm,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(data);
  };

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };
  console.log(images);
  return (
    <>
      <form onSubmit={submitForm}>
        <input
          type="file"
          accept="image"
          multiple
          onChange={handleImageChange}
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
