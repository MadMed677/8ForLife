import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import _                        from 'lodash';
import actionCreators           from 'actions';
import dashboardActions         from '../actions';
import {
    PolarAreaChart
}                               from 'chart/index';

import PageHeader               from 'page-header/page-header.react';

const mapStateToProps = state => ({
    allChartData: state.allChartData,
    singleChartData: state.singleChartData
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(_.pick(actionCreators, Object.keys(dashboardActions)), dispatch);
};

/**
 * React Container Component - Dashboard.
 * Класс отвечает за главный компонент на /dashboard
 *
 * @class
 */
class Dashboard extends React.Component {
    static propTypes = {
        getAllChartData: React.PropTypes.func,
        getSingleChartData: React.PropTypes.func,
        allChartData: React.PropTypes.array,
        singleChartData: React.PropTypes.object
    };

    static defaultProps = {
        getAllChartData: () => {},
        getSingleChartData: () => {},
        allChartData: [],
        singleChartData: {}
    };

    state = {};

    /**
     * Компонент замаунтился
     *
     * @public
     */
    componentDidMount() {}

    /**
     * Пользователь нажал на элемент графика
     *
     * @param {Event} e - event
     * @param {Object} chartElem - объект chart'а
     *
     * @public
     */
    onChartClicked = (e, chartElem) => {};

    /**
     * Метод для отрисовки компонента
     *
     * @return {JSX}
     * @public
     */
    render() {
        return (
            <div className="container">
                <PageHeader>
                    <h2>- Dashboard page -</h2>
                </PageHeader>

                <div className="row">
                    <div className="col-md-8">
                        <PolarAreaChart data={ this.props.allChartData } onChartClick={ this.onChartClicked } />
                    </div>
                    <div className="col-md-4">
                        <h3>Statistic</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
