import './Chart.css'

import ChartBar from './ChartBar'


function Chart({dataPoints}) {

    const dataPointsValue = dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointsValue)

    return <div className='chart'>
        { dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} label={dataPoint.label} maxValue={totalMax} />)}
    </div>
}

export default Chart