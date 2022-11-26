import PropTypes from 'prop-types';

import { StatsData } from './StatsData';
import { Section, Header, StatsList, StatsItem } from './Statistics.styled';

const createColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.5 +
    ')';

  return color;
};

export const Statistics = ({ stats }) => {
  return (
    <Section>
      <Header>Upload stats</Header>
      <StatsList>
        {stats.map(data => (
          <StatsItem key={data.id} style={{ backgroundColor: createColor() }}>
            <StatsData data={data} />
          </StatsItem>
        ))}
      </StatsList>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
