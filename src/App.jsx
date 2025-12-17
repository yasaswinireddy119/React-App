import MessageCard from "./assignment4/messageCard";

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <MessageCard
        title="Welcome"
        message="This is my first message card."
      />

      <MessageCard
        title="React Props"
        message="Props allow data to be passed to components."
      />

      <MessageCard
        title="Reusable Component"
        message="Same component, different content."
      />

      <MessageCard
        title="Success"
        message="You have rendered multiple cards!"
      />
    </div>
  );
}

export default App;
