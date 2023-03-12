import React from 'react';

function QuestionCard({ question, answer }) {
  return (
    <div className="p-4 my-4 bg-white border-2 shadow-md hover:shadow-lg hover:shadow-indigo-600 transition-shadow duration-500">
      <h3 className="mb-4 font-semibold text-[15px]">{question}</h3>
      <p className="text-[15px]">{answer}</p>
    </div>
  );
}

export default QuestionCard;
