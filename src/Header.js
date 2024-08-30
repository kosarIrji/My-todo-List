import { useState, useEffect } from "react";

export function Header() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const day = time.toLocaleString("fa-IR", { weekday: "long" });
  const month = time.toLocaleString("fa-IR", { month: "long" });
  const hour = time.getHours();
  const minute = time.getMinutes();

  return (
    <div className="titel">
      <h1>📝 لیست کارهای من</h1>
      <h4>
        {month}/{day}
      </h4>
      <h5>
        ⏰{hour}:{minute}
      </h5>
    </div>
  );
}
export function Work({ work }) {
  return (
    <li>
      <span>🟠</span>
      <h3>{work.name}</h3>
      <p>
        <em>مهلت انجام :</em>
        {work.day > 0 ? `${work.day}روز مانده` : ""}
      </p>
      <button>{work.condition ? "✔" : "❌"}</button>
    </li>
  );
}
