import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about');
    }

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        });
    }, []);

  return (
    <div>
     <p style={{textAlign:'left', marginBottom:'1rem'}}> 
        Home Page
      <button onClick={handleClick}>Move To About Page</button>

      </p>

        <p style={{height:'600px', overflowY:'scroll', backgroundColor:'#15202B', minWidth:'60%' }}>

            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <ol>
                {data.map(post => (
                    <div key={post.id} style={{textAlign:'left', margin:'1rem'}}>{post.title}</div>
                ))}
                </ol>
            )}
        </p>
    </div>
  )
}

export default Home