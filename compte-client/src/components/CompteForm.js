import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config'; // Import API_BASE_URL correctly as a default export

function CompteForm() {
    // State for storing form data
    const [compte, setCompte] = useState({ solde: '', dateCreation: '', type: '' });

    // Handle form field changes
    const handleChange = (e) => {
        setCompte({ ...compte, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        axios.post(`${API_BASE_URL}/comptes`, compte) // Send POST request with form data
            .then(() => alert('Compte ajouté')) // Alert user on success
            .catch((error) => console.error('Error:', error)); // Log error
    };

    return (
        <div className="container mt-4">
            <h2>Ajouter un Compte</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Solde</label>
                    <input type="number" name="solde" className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Date de Création</label>
                    <input type="date" name="dateCreation" className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Type</label>
                    <select name="type" className="form-select" onChange={handleChange}>
                        <option value="COURANT">Courant</option>
                        <option value="EPARGNE">Épargne</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>
        </div>
    );
}

export default CompteForm;
