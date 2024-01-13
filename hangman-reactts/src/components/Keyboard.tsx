const KEYS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const Keyboard = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(75px,auto))",
        gap: "0.5rem",
      }}
    >
      {KEYS.map((letter, index) => (
        <button key={letter} style={{background:'yellow',border:'0.5rem solid orange',borderRadius:'15%',width: '75px', height: '75px'}}>{letter}</button>
      ))}
    </div>
  );
};

export default Keyboard;
