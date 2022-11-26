export const StatsData = ({ data: { id, label, percentage } }) => {
  return (
    <div>
      <span>{label}</span>
      <span>{percentage}%</span>
    </div>
  );
};
