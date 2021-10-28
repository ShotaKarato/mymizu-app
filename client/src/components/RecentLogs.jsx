import React, { useState, useEffect } from "react";
import axios from "axios";

function RecentLogs() {
  const [logs, setlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/logs", {
        headers: JSON.parse(localStorage.getItem("mymizu")),
      });
      console.log(response);
      setlogs(response.data);
    }
    fetchData();
  }, []);

  const dateLogs = logs.map((log) => log.date);

  const convertedDateLogs = dateLogs.map((log) => new Date(log));
  console.log(convertedDateLogs);

  function formatDate(date) {
    let y = date.getFullYear();
    let m = ("00" + (date.getMonth() + 1)).slice(-2);
    let d = ("00" + date.getDate()).slice(-2);
    return y + "-" + m + "-" + d;
  }

  const formatDateLogs = convertedDateLogs.map((log) => formatDate(log));
  console.log(formatDateLogs);

  const reversedLogs = formatDateLogs.reverse();

  const renderLogs = () => {
    return reversedLogs.map((log) => {
      return (
        <div className="log">
          <label>Refill Date</label>
          <p>{log}</p>
        </div>
      );
    });
  };

  return renderLogs();
}

export default RecentLogs;
