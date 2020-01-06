import React from 'react'
import ReactChartkick, { BarChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

const data = [
  [ 'React', 8 ],
  [ 'React Native', 9 ],
  [ 'Node', 8 ],
  [ 'Linux', 7 ],
  [ 'MySQL', 7 ],
  [ 'Mongo', 7 ],
  [ 'Elasticsearch', 6 ],
  [ 'Docker', 5 ],
]

export default () => {
  return (
    <div style={{ width: 700 }}>
      <BarChart
        data={data}
        colors={["#C32148"]}
      />
    </div>
  );
}
