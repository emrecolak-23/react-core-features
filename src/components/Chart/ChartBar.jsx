import './ChartBar.css'

function ChartBar({label, maxValue, value}) {

    let barFilHeight = '0%'
    
    if(maxValue > 0) {
        barFilHeight = Math.round((value / maxValue) * 100) + '%'
    }
    
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div 
                    className='chart-bar__fill'
                    style={{height: barFilHeight}}
                ></div>
            </div>
            <div className='chart-bar__label'>{label}</div>
        </div>
    )
}

export default ChartBar