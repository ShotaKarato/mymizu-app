import React, { useState, useEffect } from "react";
import axios from "axios";

function RecentLogs() {
  const [logs, setlogs] = useState([
    { id: "001", user_id: "005", date: "2021-10-22" },
    { id: "002", user_id: "005", date: "2021-10-25" },
    { id: "003", user_id: "005", date: "2021-10-28" },
  ]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/refill");
      setlogs(response.data);
    }
    fetchData();
  }, []);

  const renderLogs = () => {
    return logs.map((log) => {
      return (
        <div className="log">
          <label>Refill Date</label>
          <p>{log.date}</p>
        </div>
      );
    });
  };

  return renderLogs();
}

export default RecentLogs;
