import React, { useState,useEffect } from "react";
import base_url from "../../../base_url";
import axios from "axios";
const AddExpenseForm = ({ onAddExpense }) => {
    const [formData, setFormData] = useState({
        property: '',
        year: '',
        month: '',
        expense: '',
        landlord_id: localStorage.getItem('landlord') // Replace with actual landlord_id
    });
    const [properties, setProperties] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddExpense(formData);
    };


   
    useEffect(() => {
      // Fetch properties from the backend
      const fetchProperties = async () => {
          try {
              const landlord = localStorage.getItem('landlord')
              const response = await axios.get( `${base_url}/expenses/properties?landlord_id=${landlord}`); // Replace with the actual landlord_id
              setProperties(response.data);
          } catch (error) {
              console.error("There was an error fetching the properties!", error);
          }
      };

      fetchProperties();
  }, []);

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="property" className="form-label">Property</label>
                    <select id="property" name="property" className="form-select" value={formData.property} onChange={handleChange}>
                        <option value="">Select Property</option>
                        {properties.map(property => (
                            <option key={property.id} value={property.id}>{property.title}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="year" className="form-label">Year</label>
                    <select id="year" name="year" className="form-select" value={formData.year} onChange={handleChange}>
                        <option value="">Select Year</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>

                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="month" className="form-label">Month</label>
                    <select id="month" name="month" className="form-select" value={formData.month} onChange={handleChange}>
                        <option value="">Select Month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="expense" className="form-label">Expense</label>
                    <input type="number" id="expense" name="expense" className="form-control" value={formData.expense} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Save changes</button>
            </form>
        </div>
    );
};

export default AddExpenseForm;
