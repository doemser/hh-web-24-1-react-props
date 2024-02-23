import "./styles.css";

export default function App() {
  return (
    <>
      <h1>React Props</h1>
      <AnyComponent
        buttonText="Brokkoli"
        cancelText="abbrechen"
        onButtonClick={(x) => console.log("Component 1", x)}
        hasCancelButton
      />
      <hr />
      <AnyComponent
        buttonText="Pfirsich"
        onButtonClick={(x) => console.log("Component 2", x)}
      >
        Wie komm ihr hier ran?
      </AnyComponent>
    </>
  );
}

function AnyComponent({
  buttonText,
  cancelText = "cancel",
  onButtonClick,
  hasCancelButton,
}) {
  return (
    <div className="eltern-element">
      <button onClick={onButtonClick}>{buttonText}</button>
      {hasCancelButton && <button>{cancelText}</button>}
      {hasCancelButton ? <button>{cancelText}</button> : <></>}
    </div>
  );
}
