import React from 'react';
import './Answers.css';

interface IProps {
  answer: string | number
}

const Answers:React.FC<IProps> = ({answer}) => {
  return (
    <div>
      Hello World
    </div>
  )
}

export default Answers;