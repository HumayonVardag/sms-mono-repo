import { Link, Navigate } from "react-router-dom";

const Home = () => {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-lg">This is the home page of your application.</p>
      <Link to="/login" className="mt-4 text-blue-500 hover:underline"><strong>Go to Login</strong></Link>
    </div>
  );
}

export default Home;