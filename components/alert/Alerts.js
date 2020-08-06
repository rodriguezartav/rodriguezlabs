import React from "react";
import Alert from "./Alert";
import { useGlobalState, useNotify } from "../../data/Visitor/Context";

export default function Alerts() {
  const state = useGlobalState();
  const [notify, closeNotify] = useNotify();

  return (
    <div>
      {state.alerts.map((item) => {
        return <Alert onClose={closeNotify} message={item} />;
      })}
    </div>
  );
}
