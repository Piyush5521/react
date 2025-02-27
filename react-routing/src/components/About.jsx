import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate();

    const handleMovetoDashboard = () => {
        navigate('/dashboard');
    }

  return (
    <div>
      About Page

      <button onClick={handleMovetoDashboard}>Move To Dashboard Page</button>
    </div>
  )
}

export default About