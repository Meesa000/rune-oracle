const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;




// Enable CORS for all routes
app.use(cors());

// Example API route to proxy a request
app.get('/api/proxy', async (req, res) => {
  const playerName = req.query.player; // Extract 'player' from query parameters

  try {
    
    const externalResponse = await axios.get(`https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=${encodeURIComponent(playerName)}`);
    res.json(externalResponse.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
