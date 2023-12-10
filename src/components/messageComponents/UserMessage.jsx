function UserMessage({ data }) {
  return (
    <div className="userMessage">
      <div className="userIcon">{data.name}</div>

      <div className="message hSecondary">{data.message}</div>
    </div>
  );
}

export default UserMessage;
