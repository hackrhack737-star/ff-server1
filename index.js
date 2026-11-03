const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Free Fire India ke liye Local Config Data (JSON format)
const localConfigData = {
    "status": "success",
    "game": "Free Fire India",
    "developer": "tzr papa",
    "features": {
        "silentAim": true,
        "espBox": true,
        "espLocation": true,
        "boxEsp": true
    },
    "verAddr": "http://2.25.132.119:2223/aalto/false/false/false/false/false/false/false/false/",
    "fakeVersion": "1.0"
};

// 1. Root route
app.get('/', (req, res) => {
    res.send("Free Fire India Server is Running!");
});

// 2. Main Config Route (Jahan game data fetch karega)
app.get('/ff-config', (req, res) => {
    res.json(localConfigData);
});

// 3. LocalConfig.json endpoint (Agar game direct json file maangta hai)
app.get('/LocalConfig.json', (req, res) => {
    res.json(localConfigData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Vercel deployment ke liye zaroori hai
module.exports = app;
