const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint for makeover suggestions
app.post('/api/makeover', (req, res) => {
    const { style, color, effect } = req.body;

    const suggestions = {
        style: style || 'modern',
        color: color || 'vibrant',
        effect: effect || 'smooth',
        message: `Your website will get a ${color} ${style} makeover with ${effect} effects!`,
        timestamp: new Date().toISOString()
    };

    res.json(suggestions);
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`🎨 Visit your colorful website at http://localhost:${PORT}`);
});
