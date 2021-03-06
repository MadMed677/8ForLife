import React                from 'react';
import Chart                from 'chart.js';
import { arrayConversion }  from '../helpers/helpers';

// Дефолтные данные: шрифт по умолчанию
Chart.defaults.global.defaultFontFamily = "'PT Sans'";

/**
 * React Presentational Component - PolarAreaChart
 *
 * @param {Boolean} [isAutoHideLegend] - true, если легенду надо автоматически скрывать
 * @param {Number} [autoHideLegendWidth] - ширина, при которой надо скрывать легенду
 * @param {Array} data - данные для отрисовки графика
 * @param {Boolean} fetching - идет ли в данный момент, запрос к backend'у
 *
 * @class
 */
class PolarAreaChart extends React.Component {
    static propTypes = {
        isAutoHideLegend: React.PropTypes.bool,
        autoHideLegendWidth: React.PropTypes.number,
        data: React.PropTypes.array,
        onChartClick: React.PropTypes.func,
        fetching: React.PropTypes.bool
    };

    static defaultProps = {
        isAutoHideLegend: true,
        autoHideLegendWidth: 840,
        data: [],
        onChartClick: () => {},
        fetching: false
    };

    state = {};

    /**
     * Компонент замаунтился
     *
     * @public
     */
    componentDidMount() {
        const ctx = document.getElementById('polar-area-chart');
        this.chart = this.createChart(ctx);

        if (this.props.isAutoHideLegend) {
            window.addEventListener('resize', this._onResize);
            window.dispatchEvent(new CustomEvent('resize'));
        }
    }

    /**
     * В компонент передали новые props'ы
     *
     * @param {Object} nextProps - новые props'ы
     *
     * @public
     */
    componentWillReceiveProps(nextProps) {
        this.updateChart(nextProps.data);
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

    chart = {};

    /**
     * Вызывается, когда пользователь изменяет рамер экрана
     *
     * @param {Object} resize - объект event
     *
     * @private
     */
    _onResize = () => {
        const width = window.innerWidth;

        const isDisplayed = width > this.props.autoHideLegendWidth;

        this.chart.options.legend.display = isDisplayed;
        this.chart.update();
    };

    /**
     * Функция отвечающая за обновление графика
     *
     * @param {Array} inputData - новые данные
     *
     * @public
     */
    updateChart(inputData) {
        const data = arrayConversion(inputData);

        this.chart.data.labels = data.labels;
        this.chart.data.datasets[0].data = data.data;
        this.chart.update();
    }

    /**
     * Метод для создания графика
     *
     * @param {Object} ctx - контекст, где будет отрисован график
     *
     * @return {Chart} инстанс Chart'а
     * @public
     */
    createChart(ctx) {
        const data = arrayConversion(this.props.data);

        return new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label: 'Points',
                        data: data.data,
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
                onClick: (e, chartElem) => this.props.onChartClick(e, chartElem[0]),
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
