import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonComponent = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Replace 'new-path' with the actual path or URL you want to redirect to
    const newPath = '/signup';

    // Perform the redirection
    navigate(newPath);
  };

  return (
    <button onClick={handleButtonClick}>Get Started</button>
  );
};

export default ButtonComponent;
