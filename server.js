const express = require('express');
const bodyParser = require('body-parser');
const playlistController = require('./controller/playlistController');

const app = express();
app.use(bodyParser.json());

// Add a song to the playlist
app.post('/playlist', playlistController.addSong);

// Play a song from the playlist
app.get('/playlist/:index', playlistController.playSong);

// Get the list of songs in the playlist, sorted by play count
app.get('/playlist', playlistController.getPlaylist);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
