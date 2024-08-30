import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">404 - Not Found</h1>
      <p className="text-lg mb-6 text-gray-600">The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-600 text-lg font-medium hover:underline">
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
