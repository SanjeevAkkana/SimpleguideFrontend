import React, { useState } from 'react';
import { GrDown, GrUp } from 'react-icons/gr';

const QuestionCard = ({ question }) => {

  return (
    <div className="py-2">
        <p className="font-semibold">{question.question}</p>
        <p className="py-2">{question.answer}</p>
    </div>
  );
};

export default QuestionCard;