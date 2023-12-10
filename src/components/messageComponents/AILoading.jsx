import "./Loader.css";
function AILoading() {
  return (
    <div className="userMessage">
      <div
        style={{
          marginTop: "20px",
        }}
        className="AIIcon"
      >
        AI
      </div>

      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default AILoading;
