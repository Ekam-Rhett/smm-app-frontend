import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../CSS/AddEdit.css';
import { toast } from 'react-toastify'
import axios from "axios";

const initialState = {
    CategoryID: "",
    supplierServiceID: "",
    name: "",
    serviceType: "",
    retailPrice: "",
    quantity: "",
    quality: "",
    denyLinkDuplicates: "",
  };
  
  const AddEditServices = () => {
    const [state, setState] = useState(initialState);
    const { categoryId, supplierServiceId, name, serviceType, retailPrice, quantity, quality, denyLinkDuplicates } = state;
  
    const navigate = useNavigate();
  
    const { id } = useParams();
  
    const handleInputChange = (e) => {
      let { name, value } = e.target;
      setState({
        ...state,
        [name]: value,
      });
    };
  
    async function addUser() {
        try {
            const isDisabled1 = (isDisabled === "true")
          const response = await fetch("http://localhost:12346/api/category/create", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem("authToken")
            },
            body: JSON.stringify({
              name: name,
              isDisabled: isDisabled1
            })
          })
          const json = await response.json();
          if (response.error){
            toast.error(response.errorMessage);
          }
        } catch (err) {
          console.error(err);
        }
      }

      async function updateUser(state) {
        try {
            // const isDisabled1 = (isDisabled.toLocaleLowerCase() == "true")
            const isDisabled1 = Boolean(isDisabled)
          const response = await fetch(`http://localhost:12346/api/category/update`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem("authToken")
            },
            body: JSON.stringify({
              categoryId: id,
                name: state.name,
              isDisabled: state.isDisabled1
            })
          })
          const json = await response.json();
          if (response.error){
            toast.error(response.errorMessage);
          }
        } catch (err) {
          toast.error(err.message);
        }
      }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name || !isDisabled) {
        toast.error("Please provide value in each input field");
      } else {
        if (!id) {
          addUser(state);
        } else {
            console.log(e)
          updateUser(state, id);
        }
  
        setTimeout(() => navigate("/admindashboard"), 500);
      }
    };

    const queryParams = new URLSearchParams(window.location.search);

    const _id = queryParams.get('id');

    return (
        <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name..."
          value={name}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">isDisabled</label>
        <input
          type="text"
          id="isDisabled"
          name="isDisabled"
          placeholder="Enter disabled ..."
          value={isDisabled}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">isDisabled</label>
        <input
          type="text"
          id="isDisabled"
          name="isDisabled"
          placeholder="Enter disabled ..."
          value={isDisabled}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">isDisabled</label>
        <input
          type="text"
          id="isDisabled"
          name="isDisabled"
          placeholder="Enter disabled ..."
          value={isDisabled}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">isDisabled</label>
        <input
          type="text"
          id="isDisabled"
          name="isDisabled"
          placeholder="Enter disabled ..."
          value={isDisabled}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">isDisabled</label>
        <input
          type="text"
          id="isDisabled"
          name="isDisabled"
          placeholder="Enter disabled ..."
          value={isDisabled}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">isDisabled</label>
        <input
          type="text"
          id="isDisabled"
          name="isDisabled"
          placeholder="Enter disabled ..."
          value={isDisabled}
          onChange={handleInputChange}
        />

        <input type="submit" value={_id ? "Update" : "Add"} />
      </form>
    </div>
    );
};

export default AddEditServices;