import { StatsData } from './StatsData';

export const Statistics = ({ stats }) => {
  return (
    <section>
      <h2>Upload stats</h2>
      <ul>
        {stats.map(data => (
          <li key={data.id}>
            <StatsData data={data} />
          </li>
        ))}
      </ul>
    </section>
  );
};
