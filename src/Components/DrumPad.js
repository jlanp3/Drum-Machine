const DrumPad = ({ sound, handleClick }) => {
  return (
    <div className="drum-pad" id={sound.des1} onClick={handleClick}>
      <audio
        className="clip"
        id={sound.key}
        src={sound.audio1}
        type="audio/mp4"
      ></audio>
      {sound.key}
    </div>
  );
};

export default DrumPad;
