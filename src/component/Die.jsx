export default function Die(props) {
  const backgroundStyle = props.isHeld ? { backgroundColor: "#59E391" } : null;
  return (
    <button style={backgroundStyle} onClick={() => props.hold(props.id)}>
      {props.value}
    </button>
  );
}
