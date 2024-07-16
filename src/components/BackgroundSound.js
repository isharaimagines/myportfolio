// BackgroundSound.js
import React, { useEffect, useState } from "react";
import track from "../assets/audio/TranquilityDeepHealing_1.mp3";

const BackgroundSound = () => {
  const [audioContext, setAudioContext] = useState(null);
  const [audioElement, setAudioElement] = useState(null);

  useEffect(() => {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const audio = new Audio(track);
    audio.loop = true;

    setAudioContext(context);
    setAudioElement(audio);

    const playAudio = () => {
      if (context.state === "suspended") {
        context.resume();
      }
      audio.play().catch((error) => console.log("Error playing audio:", error));
    };

    const initAudio = () => {
      const track = context.createMediaElementSource(audio);
      track.connect(context.destination);
      document.removeEventListener("click", initAudio); // Remove listener after first click
      playAudio();
    };

    document.addEventListener("click", initAudio);

    return () => {
      document.removeEventListener("click", initAudio);
      audio.pause();
      context.close();
    };
  }, []);

  return null; // This component does not render anything
};

export default BackgroundSound;
