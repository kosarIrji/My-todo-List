import { useState } from "react";

export function AddWork({ onAddWork }) {
  const [workName, setWorkName] = useState("");
  const [priority, setPriority] = useState("2");
  const [day, setDay] = useState("");
  function handelSubmite(e) {
    e.preventDefault();
    if (!workName || !day) return;
    const id = crypto.randomUUID();
    const newWork = {
      name: workName,
      priority: priority,
      day: day,
      id,
      condition: false,
    };
    onAddWork(newWork);
    setDay("");
    setPriority("2");
    setWorkName("");
  }
  return (
    <div class="addList">
      <form onSubmit={(e) => handelSubmite(e)}>
        <label>چه کاری را میخواهی اضافه کنی 😍؟</label>
        <input
          type="text"
          value={workName}
          onChange={(e) => setWorkName(e.target.value)}
        />
        <label>اهمیت کارت چقدره؟</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="3">💥خیلی ضروری</option>
          <option value="2">💯ضروری</option>
          <option value="1">🤷‍♀️غیرضروری</option>
        </select>
        <label>چند روز مهلت داری کارت رو انحام بدی؟</label>
        <input
          type="text"
          value={day}
          onChange={(e) => setDay(Number(e.target.value))}
        />
        <button>افزودن</button>
      </form>
    </div>
  );
}
