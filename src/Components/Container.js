import { useEffect, useState } from "react";
import DrumPad from "./DrumPad";
import "./Container.css";

const Container = () => {
  const [char, setChar] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", playMusic);
    return () => document.removeEventListener("keydown", playMusic);
  });

  let audios = [
    {
      key: "Q",
      audio1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      audio2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
      des1: "Heater-1",
      des2: "Chord_1",
    },
    {
      key: "W",
      audio1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      audio2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
      des1: "Heater-2",
      des2: "Chord_2",
    },
    {
      key: "E",
      audio1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      audio2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
      des1: "Heater-3",
      des2: "Chord_3",
    },
    {
      key: "A",
      audio1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      audio2: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
      des1: "Heater-4",
      des2: "Give_us_a_light",
    },
    {
      key: "S",
      audio1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      audio2: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
      des1: "Heater-6",
      des2: "Dry_Ohh",
    },
    {
      key: "D",
      audio1: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      audio2: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
      des1: "Dsc_Oh",
      des2: "Bld_H1",
    },
    {
      key: "Z",
      audio1: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      audio2: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
      des1: "Kick_n_Hat",
      des2: "punchy_kick",
    },
    {
      key: "X",
      audio1: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      audio2: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
      des1: "RP4_KICK",
      des2: "side_stick",
    },
    {
      key: "C",
      audio1: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      audio2: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
      des1: "Cev_H2",
      des2: "Brk_Snr",
    },
  ];

  const playMusic = (e) => {
    const audio = audios.find((ele) => {
      return e.key.toUpperCase() === ele.key;
    });

    setChar(audio.des1);

    if (audio) {
      let aud = document.getElementById(audio.key);
      aud
        .play()
        .then(() => {})
        .catch((err) => console.log(err));
    }
  };

  const handleClick = (e) => {
    let audio = e.target.childNodes[0];
    audio.currentTime = 0;
    setChar(e.target.id);
    audio
      .play()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const drumTabs = audios.map((audio) => {
    return <DrumPad key={audio.key} sound={audio} handleClick={handleClick} />;
  });

  return (
    <div id="drum-machine">
      <div id="display">
        <p>{char}</p>
      </div>
      <div className="pad">{drumTabs}</div>
    </div>
  );
};

export default Container;
