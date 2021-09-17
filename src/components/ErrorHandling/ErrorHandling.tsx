import React from 'react';
import './ErrorHandling.css';

interface IProps{
  errorMessage: string 
}

const ErrorHandling:React.FC<IProps> = ({errorMessage}) => {

  return (
    <p>
      {errorMessage}
    </p>
  )
}

export default ErrorHandling;