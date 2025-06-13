import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LogOut() {
const handleLogout = async () => {
    try {
    const response = await fetch('/logout', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      if (result.status) {
        window.location.href = '/login';
      }
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Logout failed. Please try again.');
    }
  };

    
  return (
    <div>
        <LogOut handleLogout={handleLogout}/>
    </div>
  )
}
