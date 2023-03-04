import React, { useState } from "react";
import axios from "axios";

const Hotel = () => {
  const [name, setName] = useState("");
  const [location, setLocaton] = useState("");
  const [images, setImages] = React.useState([]);
  const [roomData, setData] = useState([
    {
      price: "",
      roomType: "",
      image: "",
    },
  ]);

  const handleFormChange = (event, index) => {
    let data = [...roomData];
    if (event.target) {
      data[index][event.target.name] = event.target.value;
    } else {
      data[index]["image"] = event.target.files[0];
    }
    setData(data);
    console.log(roomData, "dynamic room data here");
  };

  const addFields = () => {
    let object = {
      price: "",
      roomType: "",
      image: "",
    };
    setData([...roomData, object]);
  };

  const removeFields = (index) => {
    let data = [...roomData];
    data.splice(index, 1);
    setData(data);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("location", location);
    // roomData is an array of objetcts-> so use json stringfy
    roomData.forEach((item, index) => {
      if (item.image) {
        myForm.append(`image-${index}`, item.image);
      }
      myForm.append(`data-${index}`, JSON.stringify(item));
    });
    for (const file of images) {
      myForm.append("image", file);
    }
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/user/hotel/create",
        myForm,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
      if (data?.newHotel) {
        alert("Success");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };
  console.log(images);
  return (
    <>
      <h3>Hotel Form</h3>
      <form onSubmit={submitForm}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={location}
          placeholder="Location"
          onChange={(e) => setLocaton(e.target.value)}
        />
        <input
          type="file"
          multiple
          accept="image"
          onChange={handleImageChange}
        />

        {roomData.map((form, index) => {
          return (
            <div key={index}>
              <span>Add Room Detail</span>
              <input
                name="price"
                placeholder="Room Price"
                onChange={(event) => handleFormChange(event, index)}
                required
                value={form.price}
              />
              <input
                name="roomType"
                placeholder="Room Detail"
                onChange={(event) => handleFormChange(event, index)}
                required
                value={form.roomType}
              />

              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(event) => handleFormChange(event, index)}
              />
              <button
                sx={{ marginTop: "20px" }}
                onClick={() => removeFields(index)}
              >
                Remove
              </button>
              {/* <button onClick={() => removeFields(index)}>Remove</button> */}
            </div>
          );
        })}
        <button sx={{ marginTop: "20px" }} onClick={addFields}>
          Add More..
        </button>
        <button type="submit">Submit form</button>
      </form>
    </>
  );
};

export default Hotel;
