"use client";
import React from 'react';
import axios from 'axios';

interface Props {
  
}

 const AddHandler = () => {
  console.log("Add");
  axios.post("http://localhost:8000/users", {
    name: "mohammad",
    email: "mohammad@gmail.com",
    age: 21
  })
    .then(response => {
      console.log("User added successfully:", response.data);
    })
    .catch(error => {
      console.error("There was an error adding the user!", error);
    });
 }
 const DeleteHandler = () => {
  console.log("Delete");
  axios.delete("http://localhost:8000/users/51") // Delete user with id 51
    .then(response => {
      console.log("User deleted successfully:", response.data);
    })
    .catch(error => {
      console.error("There was an error deleting the user!", error);
    });
 }
 const UpdateHandler = () => {
  console.log("Update");
  axios.put("http://localhost:8000/users/3c4a", {
    name: "MohammadiKO",
    email: "mohammadiko@gmail.com",
    age: 22,
  })
    .then(response => {
      console.log("User updated successfully:", response.data);
    })
    .catch(error => {
      if (error.response) {
        console.error("Server responded with error:", error.response.status, error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
    });
 }

const ActionProduct = (props: Props) => {
  return (
    <div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 hover:bg-blue:900 cursor-pointer" onClick={AddHandler}>
        Add Product
      </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 ml-4 hover:bg-red:900 cursor-pointer" onClick={DeleteHandler}>
        Delete Product
      </button>
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 ml-4 hover:bg-green:900 cursor-pointer" onClick={UpdateHandler}>
        Update Product
      </button>
    </div>
  );
};

export default ActionProduct;