import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-xl mb-6">The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 underline">Go Back to Home</Link>
    </div>
  );
}

export default NotFound;
