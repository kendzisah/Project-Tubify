import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

function Popup() {
  const [song, setSong] = useState();
  const [artist, setArtist] = useState();

  function submitToSpotify() {
    let spotify = "";
  }

  return (
    <div>
      <h3>Tubify</h3>
      <div>
        <TextField
          id="song"
          type="text"
          onChange={(text) => setSong(text)}
          placeholder="Song Name"
        />
        <TextField
          id="artist"
          type="artist"
          onChange={(text) => setArtist(text)}
          placeholder="Artist Name"
        />
        <Button onSubmit={submitToSpotify}>Search</Button>
      </div>
    </div>
  );
}

export default Popup;
