import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Woodcutting = () => {
  type Log = { id: string; type: string };

  let navigate = useNavigate();
  const [logs, setLogs] = useState<Log[]>([]);

  const newLog = () => {
    const newValue = { id: crypto.randomUUID(), type: "Normal Log" };
    return newValue;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const logObj = newLog();
      setLogs((logs) => [...logs, logObj]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>Woodcutting</h1>
      <button
        onClick={() => setLogs((logs) => [...logs, newLog()])}
        className="tree-icon"
      >
        🌲
      </button>
      <p>Normal Tree</p>
      <p>Normal Logs: {logs.length}</p>

      <button
        onClick={() => {
          navigate(`/`);
        }}
      >
        Go back
      </button>
    </>
  );
};

export default Woodcutting;
