import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import _                        from 'lodash';
import { If, Then, Else }       from 'react-if';
import actionCreators           from 'actions';
import dashboardActions         from '../actions';
import {
    PolarAreaChart
}                               from 'chart/index';
import EmptyData                from 'empty-data/empty-data.react';

import PageHeader               from 'page-header/page-header.react';

const mapStateToProps = state => ({
    allChartData: state.allChartData,
    singleChartData: state.singleChartData
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(_.pick(actionCreators, Object.keys(dashboardActions)), dispatch);

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
        allChartData: React.PropTypes.object,
        singleChartData: React.PropTypes.object
    };

    static defaultProps = {
        getAllChartData: () => {},
        getSingleChartData: () => {},
        allChartData: {
            data: [],
            fetching: false
        },
        singleChartData: {}
    };

    state = {};

    /**
     * Компонент замаунтился
     *
     * @public
     */
    componentDidMount() {
        this.props.getAllChartData();
    }

    /**
     * Компонент получил новые props'ы
     *
     * @public
     */
    componentWillReceiveProps(nextProps) {
        console.log('nextProps: ', nextProps);
    }

    /**
     * Пользователь нажал на элемент графика
     *
     * @param {Event} e - event
     * @param {Object} chartElem - объект chart'а
     *
     * @public
     */
    onChartClicked = (e, chartElem) => {
        this.props.getSingleChartData(chartElem);
    };

    /**
     * Метод для отрисовки компонента
     *
     * @return {JSX}
     * @public
     */
    render() {
        const { allChartData } = this.props;
        const { data = [] } = allChartData;

        return (
            <div className="container">
                <PageHeader>
                    <h2>- Dashboard page -</h2>
                </PageHeader>

                <div className="row">
                    <div className="col-md-8">
                        <If condition={ data.length > 0 }>
                            <Then>
                                <PolarAreaChart data={ allChartData.data } onChartClick={ this.onChartClicked } fetching={ allChartData.fetching } />
                            </Then>
                            <Else>{() =>
                                <EmptyData fetching={ allChartData.fetching } />
                            }</Else>
                        </If>
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
