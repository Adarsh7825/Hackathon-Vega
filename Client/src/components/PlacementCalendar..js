import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the CSS for react-calendar

const CalendarWithTodos = () => {
  const [date, setDate] = useState(new Date());
  const [todos, setTodos] = useState({});
  const [inputValue, setInputValue] = useState('');

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  const addTodo = () => {
    const formattedDate = formatDate(date);
    const updatedTodos = { ...todos, [formattedDate]: [...(todos[formattedDate] || []), inputValue] };
    setTodos(updatedTodos);
    setInputValue(''); // Clear input after adding
    // Here you would also call your backend or third-party service to schedule the email reminder
  };

  return (
    <div className="container mx-auto p-4">
      <Calendar
        onChange={onChange}
        value={date}
        className="border-2 border-gray-200 rounded-lg w-full max-w-screen-lg mx-auto"
      />
      <div className="mt-4 flex justify-center items-center">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add new to-do"
          className="border-2 border-gray-200 rounded-lg p-2 mr-2"
        />
        <button onClick={addTodo} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add
        </button>
      </div>
      <div className="todos mt-4">
        <h2 className="text-lg font-semibold text-center">To-dos for {formatDate(date)}</h2>
        <ul className="flex flex-col items-center">
          {(todos[formatDate(date)] || []).map((todo, index) => (
            <li key={index} className="bg-gray-100 rounded-md p-2 my-2 w-full max-w-md">{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarWithTodos;