const jwt = require('jsonwebtoken');

// This function checks if the user is logged in
exports.protect = (req, res, next) => {
  let token;

  // Check if the "ID Badge" is in the request headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    // Verify the badge hasn't been tampered with
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Attach the user info (id and role) to the request object
    req.user = decoded; 
    next(); // "Next" tells Express to let them through to the actual logic
  } catch (error) {
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};

// This function checks if the user is specifically an ADMIN
exports.isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: "Access denied. Admins only." });
  }
};