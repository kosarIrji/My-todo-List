export function Footer({ works }) {
  const count = works.length;
  const doWorksCount = works.filter((work) => work.condition).length;
  const dontWorksCount = count - doWorksCount;
  const percent = Math.round((doWorksCount / count) * 100);
  return (
    <div class="footer">
      <p>
        {dontWorksCount}کارت رو انجام دادی و {doWorksCount} کارت مونده (
        {percent}%)💪
      </p>
    </div>
  );
}
