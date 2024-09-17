// src/components/GaugeChart.js
import React, { useState, useEffect } from 'react';
import GaugeChart from 'react-gauge-chart';

const GaugeChartComponent = () => {
    const [value, setValue] = useState(0.5); // Initial value

    useEffect(() => {
        // Simulate live data updates
        const interval = setInterval(() => {
            setValue(prevValue => (prevValue + 0.05) % 1); // Update value periodically
        }, 2000); // Update every 2 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <div style={{ width: '300px', height: '300px', margin: 'auto' }}>
            <GaugeChart
                id="gauge-chart1"
                nrOfLevels={30}
                percent={value}
                textColor="#000"
                needleColor="#FF0000"
                needleBaseColor="#FF0000"
                needleTransitionDuration={4000}
                needleTransition="easeElastic"
                colors={['#FF0000', '#FFCC00', '#00FF00']}
                arcWidth={0.3}
            />
            <h3 style={{ textAlign: 'center', marginTop: '10px' }}>Emission Gauge</h3>
        </div>
    );
};

export default GaugeChartComponent;
