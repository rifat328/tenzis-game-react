export default function Die(props) {
  const backgroundStyle = props.isHeld ? { backgroundColor: "#59E391" } : null;
  return (
    <button
      style={backgroundStyle}
      onClick={() => props.hold(props.id)}
      aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
    >
      {props.value}
    </button>
  );
}
