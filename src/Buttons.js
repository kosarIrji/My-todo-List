export function Buttons({ sortBy, setSortBy, clearList }) {
  return (
    <div class="buttons">
      <select
        name="sorting"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="input">مرتب سازی به ترتیب ورود</option>
        <option value="priority">مرتب سازی به ترتیب اولویت</option>
        <option value="time">مرتب سازی به ترتیب زمان</option>
        <option value="condition">مرتب سازی به ترتیب وضعیت</option>
      </select>
      <button onClick={clearList}>پاک کردن لیست 🗑</button>
    </div>
  );
}
