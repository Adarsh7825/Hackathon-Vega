import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AppliedCompanies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Replace with your actual API endpoint
    axios.get('/api/companies/applied')
      .then(response => {
        setCompanies(response.data);
      })
      .catch(error => {
        console.error('Error fetching companies', error);
      });
  }, []);

  return (
    <div>
      <h2>Companies Applied To</h2>
      <ul>
        {companies.map(company => (
          <li key={company.id}>
            <h3>{company.name}</h3>
            <p>{company.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppliedCompanies;