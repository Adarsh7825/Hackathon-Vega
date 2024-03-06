import React from 'react';

const CompanyPortal = () => {
  // Sample data for dashboard
  const companies = [
    { id: 1, name: 'Company A', totalJobs: 10, pendingApplications: 5 },
    { id: 2, name: 'Company B', totalJobs: 8, pendingApplications: 3 },
    { id: 3, name: 'Company C', totalJobs: 15, pendingApplications: 7 },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome to Company Portal</h2>
      <h3 className="text-2xl font-semibold mb-4">Dashboard</h3>
      <div>
        <h4 className="text-xl font-semibold mb-2">Companies</h4>
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Total Jobs</th>
              <th className="px-4 py-2 border">Pending Applications</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {companies.map(company => (
              <tr key={company.id} className="bg-white border-b">
                <td className="px-4 py-2 border">{company.id}</td>
                <td className="px-4 py-2 border">{company.name}</td>
                <td className="px-4 py-2 border">{company.totalJobs}</td>
                <td className="px-4 py-2 border">{company.pendingApplications}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyPortal;