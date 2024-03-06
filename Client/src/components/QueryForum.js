import React, { useState } from 'react';

const QueryForum = () => {
  const [queries, setQueries] = useState([
    { id: 1, title: 'How to integrate React with Tailwind?', answers: ['You can use CRACO or PostCSS.', 'Check out the official Tailwind documentation for React.'] },
    { id: 2, title: 'Why is my useState hook not updating?', answers: ['Make sure you are not mutating the state directly.', 'Use the set function provided by useState.'] },
  ]);
  const [newQuery, setNewQuery] = useState('');

  const handlePostQuery = () => {
    const newQueryObj = {
      id: queries.length + 1,
      title: newQuery,
      answers: [],
    };
    setQueries([...queries, newQueryObj]);
    setNewQuery(''); // Reset input field
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Query Forum</h2>
      <div className="mb-6">
        <input
          type="text"
          value={newQuery}
          onChange={(e) => setNewQuery(e.target.value)}
          placeholder="Type your query here..."
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
        />
        <button
          onClick={handlePostQuery}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Post Query
        </button>
      </div>
      <div>
        {queries.map((query) => (
          <div key={query.id} className="bg-white shadow-md rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold mb-2">{query.title}</h3>
            <ul className="list-disc pl-5">
              {query.answers.map((answer, index) => (
                <li key={index} className="text-gray-700">{answer}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QueryForum;