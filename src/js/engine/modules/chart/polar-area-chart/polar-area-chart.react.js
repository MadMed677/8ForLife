import React            from 'react';
import Chart            from 'chart.js';

Chart.defaults.global.defaultFontFamily = "'PT Sans'";

/**
 * React Class PolarAreaChart
 *
 * @param {Boolean} [isAutoHideLegend] - true, если легенду надо автоматически скрывать
 * @param {Number} [autoHideLegendWidth] - ширина, при которой надо скрывать легенду
 *
 * @class
 */
class PolarAreaChart extends React.Component {
    static propTypes = {
        isAutoHideLegend: React.PropTypes.bool,
        autoHideLegendWidth: React.PropTypes.number
    }

    static defaultProps = {
        isAutoHideLegend: true,
        autoHideLegendWidth: 840
    };

    state = {}

    /**
     * Компонент замаунтился
     *
     * @public
     */
    componentDidMount() {
        const ctx = document.getElementById('polar-area-chart');
        this.chart = this._createChart(ctx);

        // TODO: сделать передачу в props данных, на то, ставить ли bind или нет
        if (this.props.isAutoHideLegend) {
            window.addEventListener('resize', this._onResize);
            window.dispatchEvent(new CustomEvent('resize'));
        }
    }

    /**
     * Компонент размаунтился
     *
     * @public
     */
    componentWillUnmount() {
        if (this.props.isAutoHideLegend) {
            window.removeEventListener('resize', this._onResize);
        }
    }

    chart = {}

    /**
     * Вызывается, когда пользователь изменяет рамер экрана
     *
     * @param {Object} [resize] - объект event
     *
     * @private
     */
    _onResize = () => {
        const width = window.innerWidth;

        const isDisplayed = width > this.props.autoHideLegendWidth;

        this.chart.options.legend.display = isDisplayed;
        this.chart.update();
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
                labels: require('./../labels').default,
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
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(252, 110, 85, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(252, 110, 85, 1)'
                        ],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                title: {
                    display: false
                },
                legend: {
                    display: true,
                    position: 'left',
                    labels: {
                        fontFamily: "'PT Sans'",
                        usePointStyle: true
                    }
                },
                tooltips: {
                    enabled: true,
                    titleFontFamily: "'PT Sans'",
                    backgroundColor: 'rgba(255,255,255,.8)',
                    titleFontColor: '#000',
                    bodyFontColor: 'rgba(0,0,0,.7)',
                    bodyFontStyle: 'bold',
                    caretSize: 10,
                    xPadding: 15,
                    yPadding: 10
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 10
                        }
                    }]
                },
                animation: {
                    easing: 'easeOutQuad'
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
            <canvas id="polar-area-chart" />
        );
    }
}

export default PolarAreaChart;
