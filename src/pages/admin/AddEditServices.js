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
          const response = await fetch(`${process.env.SERVER_URL}/api/service/admin/create`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem("authToken")
            },
            body: JSON.stringify({
                categoryId: categoryId,
                supplierServiceId: supplierServiceId,
                name: name,
                serviceType: serviceType,
                retailPrice: retailPrice,
                quantity: quantity,
                quality: quality,
                denyLinkDuplicates: denyLinkDuplicates,
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
          const response = await fetch(`${process.env.SERVER_URL}/api/service/admin/update`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem("authToken")
            },
            body: JSON.stringify({
                categoryId: state.categoryId,
                supplierServiceId: state.supplierServiceId,
                name: state.name,
                serviceType: state.serviceType,
                retailPrice: state.retailPrice,
                quantity: state.quantity,
                quality: state.quality,
                denyLinkDuplicates: state.denyLinkDuplicates,
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
      if (!categoryId || !supplierServiceId || !name || !serviceType || !retailPrice || !quantity || !quality || !denyLinkDuplicates) {
        toast.error("Please provide value in each input field");
      } else {
        if (!id) {
          addUser(state);
        } else {
          updateUser(state, id);
        }
  
        setTimeout(() => navigate("/admindashboard/services"), 500);
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
          value={categoryId}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">isDisabled</label>
        <input
          type="text"
          id="isDisabled"
          name="isDisabled"
          placeholder="Enter disabled ..."
          value={supplierServiceId}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">isDisabled</label>
        <input
          type="text"
          id="isDisabled"
          name="isDisabled"
          placeholder="Enter disabled ..."
          value={serviceType}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">isDisabled</label>
        <input
          type="text"
          id="isDisabled"
          name="isDisabled"
          placeholder="Enter disabled ..."
          value={retailPrice}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">isDisabled</label>
        <input
          type="text"
          id="isDisabled"
          name="isDisabled"
          placeholder="Enter disabled ..."
          value={quantity}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">isDisabled</label>
        <input
          type="text"
          id="isDisabled"
          name="isDisabled"
          placeholder="Enter disabled ..."
          value={denyLinkDuplicates}
          onChange={handleInputChange}
        />

        <input type="submit" value={_id ? "Update" : "Add"} />
      </form>
    </div>
    );
};

export default AddEditServices;