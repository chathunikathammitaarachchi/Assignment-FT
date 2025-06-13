import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'; 
import axios from 'axios';
import { FaSignOutAlt } from 'react-icons/fa'; 


function Home() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setUsername(storedName);
    }
  }, []);

  const handleLogout = () => {
    axios.get('http://localhost:3000/auth/logout')
      .then(res => {
        if (res.data.status) {
          localStorage.removeItem("username");
          navigate('/login');
        }
      }).catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="home-container">
      <h1>Welcome, {username} </h1>
      <p>You are logged in successfully.</p>

      <button onClick={handleLogout}>
  <FaSignOutAlt style={{ marginRight: '8px' }} />
  Logout
</button>


      <p>You can go to the Product Inventory:</p>
      <Link to="/product">Product Inventory</Link>
    </div>
  );
}

export default Home;
