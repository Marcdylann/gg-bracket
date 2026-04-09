// ... existing imports ...
const authRoutes = require('./routes/authRoutes');

// Add this line alongside your existing routes
const matchRoutes = require('./routes/matchRoutes');
app.use('/api/matches', matchRoutes);

// Add the Auth Routes
app.use('/api/auth', authRoutes);

// ... app.listen ...