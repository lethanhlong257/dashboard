import React, { useRef, useEffect, useState } from 'react'
import { PieChart, Pie, Cell, Legend } from 'recharts'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#c303b1'];


const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function SimpleChartWidget({ data }) {
  const ref = useRef();
  const [dimensions, setDimensions] = useState({ width: 300, height: 300 })

  let dataChart = prepareDataChart(data, 'title')

  useEffect(() => {
    const width = ref.current ? ref.current.offsetWidth : 0;
    const height = ref.current ? ref.current.offsetHeight : 0;
    setDimensions({ width, height })
  }, []);

  return (
    <div className='simple-chart-wrapper' ref={ref}>
      <PieChart width={dimensions.width} height={dimensions.height}>
        <Pie
          data={dataChart}
          cx={dimensions.width / 2}
          cy={dimensions.height / 3.5}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80} // 80%
          fill="#8884d8"
          dataKey="value"
          legendType='circle'
        >
          {
            dataChart.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }

        </Pie>
        <Legend />
      </PieChart>
    </div>
  )
}

function prepareDataChart(data, dataType) {
  let dataTypeValues = findValuePropObjInArrayByPropKey(dataType, data)
  let uniqueDataTypeValues = removeDuplicateValueInArray(dataTypeValues)
  let dataChart = []
  for (let i = 0; i < uniqueDataTypeValues.length; i++) {
    const uniqueDataTypeValue = uniqueDataTypeValues[i]
    let count = 0
    for (let j = 0; j < dataTypeValues.length; j++) {
      if (uniqueDataTypeValue === dataTypeValues[j]) {
        count++
      }
    }
    dataChart.push({
      name: uniqueDataTypeValue, value: count
    })
  }

  return dataChart
}

function findValuePropObjInArrayByPropKey(propKey, array) {
  let values = []
  for (let i = 0; i < array.length; i++) {
    const obj = array[i];
    values.push(obj[propKey])
  }
  return values
}

function removeDuplicateValueInArray(array) {
  const unique = new Set(array)
  array = [...unique]
  return array
}


export default SimpleChartWidget

