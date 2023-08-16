import React, { useState } from 'react';
import HeatMap from '@uiw/react-heat-map';

const value = [
  { date: '2016/01/11', count:2 },
  ...[...Array(17)].map((_, idx) => ({ date: `2016/01/${idx + 10}`, count: idx })),
  ...[...Array(17)].map((_, idx) => ({ date: `2016/02/${idx + 10}`, count: idx })),
  { date: '2016/04/12', count:2 },
  { date: '2016/05/01', count:5 },
  { date: '2016/05/02', count:5 },
  { date: '2016/05/03', count:1 },
  { date: '2016/05/04', count:11 },
  { date: '2016/05/08', count:32 },
];

const Demo = () => {
  const [size, setSize] = useState(0)
  return (
    <div>
      <label style={{ userSelect: 'none' }}>
        <input
          type="checkbox"
          checked={size === 0}
          onChange={(e) => setSize(e.target.checked ? 0 : 12)}
        />
        {size === 0 ? ' Hide' : ' Show'} Legend
      </label>
      <HeatMap
        width={600}
        value={value}
        legendCellSize={size}
        startDate={new Date('2016/01/01')}
      />
    </div>
  )
};
export default Demo