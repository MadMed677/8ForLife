import React            from 'react';
import Chart            from 'chart.js';

/**
 * React Class PolarAreaChart
 *
 * @class
 */
class PolarAreaChart extends React.Component {
    static propTypes = {}

    state = {}

    /**
     * Компонент замаунтился
     *
     * @public
     */
    componentDidMount() {
        const ctx = document.getElementById('barchart');
        this.chart = this._createChart(ctx);
    }

    /**
     * Метод для создания графика
     *
     * @param {Object} ctx - контекст, где будет отрисован график
     *
     * @return {Chart} инстанс Chart'а
     * @private
     */
    _createChart(ctx) {
        return new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: require('./labels').default,
                datasets: [
                    {
                        label: 'Points',
                        data: [3, 5, 8, 9, 6, 3, 7, 9],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                legend: {
                    display: true,
                    labels: {
                        generateLabels: d => {
                            return `Hello ${d}`;
                        }
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }

    /**
     * Метод для отрисовки компонента
     *
     * @return {JSX}
     * @public
     */
    render() {
        return (
            <canvas id="barchart"></canvas>
        );
    }
}

export default PolarAreaChart;
