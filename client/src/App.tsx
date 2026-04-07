import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './features/auth/Login';
import { AuthProvider } from './context/AuthContext'; // Make sure this is here!

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* This is the "Doorway" to your login page */}
          <Route path="/login" element={<Login />} />
          
          {/* Your main bracket/home page route */}
          <Route path="/" element={<div>Your Bracket UI Here</div>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;