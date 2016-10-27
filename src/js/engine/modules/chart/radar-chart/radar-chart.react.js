import React            from 'react';
import Chart            from 'chart.js';

/**
 * React Class RadarChart
 *
 * @class
 */
class RadarChart extends React.Component {
    static propTypes = {}

    state = {}

    /**
     * Компонент замаунтился
     *
     * @public
     */
    componentDidMount() {
        const ctx = document.getElementById('radar-chart');
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
            type: 'radar',
            data: {
                labels: ['Strength', 'Skill', 'Health', 'Speed', 'Luck'],
                datasets: [
                    {
                        label: 'Points',
                        data: [25, 50, 55, 30, 40],
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Points',
                        data: [42, 19, 43, 56, 33],
                        backgroundColor: 'rgba(255, 159, 64, 0.2)',
                        borderColor: 'rgba(255, 159, 64, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
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
            <canvas id="radar-chart"></canvas>
        );
    }
}

export default RadarChart;
