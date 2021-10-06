import { useState } from "react";
import api from "../API/api";
import AlertBar from "./AlertBar";

const Start = ({ changeStart }) => {
  const [msg, setMsg] = useState(false);
  const showMsg = () => {
    setMsg(true);
  };

  return (
    <>
      <div className="d-flex flex-column w-100 justify-contents-between align-items-center">
        <button
          className="m-auto w-50 h-40 btn btn-block btn-secondary"
          style={{ fontSize: "80px", borderRadius: "20px" }}
          onClick={async () => {
            try {
              await api.getAccount();
              changeStart();
            } catch (e) {
              showMsg();
            }
          }}
        >
          Start
        </button>
        {msg ? <AlertBar show={msg} showMsg={setMsg} /> : msg}
      </div>
    </>
  );
};

export default Start;
