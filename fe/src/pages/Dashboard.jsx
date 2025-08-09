import { Box } from "@mui/material";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  if(!localStorage.getItem('token')) {
    return <Navigate to="/login" replace />
  }

  return (
    <Box sx={{ border: "1px solid black"}}>
      <h1>Welcome to the Dashboard Page</h1>
      <p>This is the Dashboard page of your application.</p>
    </Box>
  );
}

export default Dashboard;