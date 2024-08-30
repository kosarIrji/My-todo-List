import { useState } from "react";
import { Header } from "./Header";
import { AddWork } from "./AddWork";
import { Footer } from "./Footer";
import { Buttons } from "./Buttons";
const testData = [
  {
    id: 1,
    priority: "3",
    name: "تمام کردن پروژه ی درسی",
    day: 1,
    condition: false,
  },
  {
    id: 2,
    priority: "3",
    name: "اب دادن به گل ها",
    day: 1,
    condition: true,
  },
  {
    id: 11,
    priority: "1",
    name: "20 دقیقه ورزش کردن",
    day: 1,
    condition: true,
  },
];
//ghabeiat clik roy tik

export default function App() {
  const [sortBy, setSortBy] = useState("input");
  const [works, setWorks] = useState(testData);

  function handelAddWork(work) {
    setWorks([...works, work]);
  }
  function handelClearList() {
    setWorks([]);
  }
  function handleToggleWork(id) {
    setWorks((works) =>
      works.map((work) =>
        work.id === id ? { ...work, condition: !work.condition } : work
      )
    );
  }
  console.log(Number(true));
  return (
    <div className="app">
      <Header />
      <AddWork onAddWork={handelAddWork} />
      <WorkList works={works} sortBy={sortBy} onToggleWork={handleToggleWork} />
      <Buttons
        sortBy={sortBy}
        setSortBy={setSortBy}
        clearList={handelClearList}
      />
      <Footer works={works} />
    </div>
  );
}
function WorkList({ works, sortBy, onToggleWork }) {
  let sorted;
  if (sortBy === "input") sorted = works;

  if (sortBy === "priority")
    sorted = works
      .slice()
      .sort((a, b) => Number(b.priority) - Number(a.priority));

  if (sortBy === "time")
    sorted = works.slice().sort((a, b) => Number(a.day) - Number(b.day));

  if (sortBy === "condition")
    sorted = works
      .slice()
      .sort((a, b) => Number(a.condition) - Number(b.condition));
  console.log(sorted);
  return (
    <div class="workList">
      <ul>
        {sorted.map((work) => (
          <Work work={work} key={work.id} onToggleWork={onToggleWork} />
        ))}
      </ul>
    </div>
  );
}
function Work({ work, onToggleWork }) {
  return (
    <li className={work.condition ? "checked" : {}}>
      <span>🟠</span>
      <h3 style={work.condition ? { textDecoration: "line-through" } : {}}>
        {work.name}
      </h3>
      <p>
        {work.priority === "3" ? "💥" : ""}
        {work.priority === "1" ? "🤷‍♀️" : ""}
        {work.priority === "2" ? "💯" : ""} <em>مهلت انجام :</em>
        {work.day > 0 ? `${work.day}روز مانده` : ""}
      </p>

      <input
        checked={work.condition && " checked"}
        type="checkBox"
        onChange={() => onToggleWork(work.id)}
        value={work.condition}
      ></input>
    </li>
  );
}
