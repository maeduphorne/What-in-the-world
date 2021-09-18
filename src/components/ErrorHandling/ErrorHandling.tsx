import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorHandling.css';
import errorIcon from '../../assets/error.png';

interface IProps{
  errorMessage: string 
}

const ErrorHandling:React.FC<IProps> = ({errorMessage}) => {

  return (
    <section className="error-display" >
      <img src={errorIcon} alt="error icon" className="error-img" />
      <p>
        {errorMessage}
      </p>
      <Link to="/" >
        <button>
          Take Me Home
        </button>
      </Link>
    </section>
  )
}

export default ErrorHandling;