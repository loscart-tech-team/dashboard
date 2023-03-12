// import React from 'react';
import React, { useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

// Toggle option for the question card
function QuestionCard({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white my-4 border-t border-gray-200 shadow-md hover:shadow-lg hover:shadow-indigo-600 transition-shadow duration-500">
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <div className="ml-2">
          {isOpen ? <FiChevronDown size={24} /> : <FiChevronRight size={24} />}
        </div>
      </button>
      {isOpen && (
        <div className="p-4">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
export default QuestionCard;