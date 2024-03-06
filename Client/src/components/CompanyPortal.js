import React from 'react';

const CompanyPortal = () => {
  // Sample data for dashboard
  const companies = [
    { id: 1, name: 'Company A', totalJobs: 10, pendingApplications: 5 },
    { id: 2, name: 'Company B', totalJobs: 8, pendingApplications: 3 },
    { id: 3, name: 'Company C', totalJobs: 15, pendingApplications: 7 },
  ];

  return (
    <div>
      <h2>Welcome to Company Portal</h2>
      <h3>Dashboard</h3>
      <div>
        <h4>Companies</h4>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Total Jobs</th>
              <th>Pending Applications</th>
            </tr>
          </thead>
          <tbody>
            {companies.map(company => (
              <tr key={company.id}>
                <td>{company.id}</td>
                <td>{company.name}</td>
                <td>{company.totalJobs}</td>
                <td>{company.pendingApplications}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyPortal;