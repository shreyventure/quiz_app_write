const Start = ({ changeStart }) => {
  return (
    <div className="d-flex w-100 justify-contents-between align-items-center">
      <button
        className="m-auto w-50 h-40 btn btn-block btn-secondary"
        style={{ fontSize: "80px", borderRadius: "20px" }}
        onClick={() => {
          changeStart();
        }}
      >
        Start
      </button>
    </div>
  );
};

export default Start;
