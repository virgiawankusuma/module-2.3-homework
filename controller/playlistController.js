const playlist = require('../model/playlist');

const addSong = (req, res) => {
  const { title, artists, url } = req.body;
  const song = { title, artists, url, playCount: 0 };
  playlist.push(song);
  res.status(201).json({
    message: 'Song added successfully',
    data: song
  });
};

const playSong = (req, res) => {
  const index = req.params.index;
  const song = playlist[index];
  if (!song) {
    res.status(404).json({
      message: 'Song not found'
    });
  } else {
    song.playCount++;
    res.status(200).json({
      message: 'Song retrieved successfully',
      data: song,
    });
  }
};

const getPlaylist = (req, res) => {
  const sortedPlaylist = [...playlist].sort((a, b) => b.playCount - a.playCount);
  res.status(200).json({
    message: 'Playlist retrieved successfully',
    data: sortedPlaylist
  });
};

module.exports = { addSong, playSong, getPlaylist };
