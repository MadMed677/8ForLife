import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import _                        from 'lodash';
import { If, Then, Else }       from 'react-if';
import actionCreators           from 'actions';
import dashboardActions         from '../../actions';
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
        singleChartData: {
            data: {},
            fetching: false
        }
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
     * Пользователь нажал на элемент графика
     *
     * @param {Event} e - event
     * @param {Object} chartElem - объект chart'а
     *
     * @return {Boolean | Undefined}
     * @public
     */
    onChartClicked = (e, chartElem) => {
        const index = _.get(chartElem, '_index');

        // Выбрасываем, если клик был совершен не на chart'е
        if (_.isUndefined(index)) return false;

        const elem = this.props.allChartData.data[index];
        this.props.getSingleChartData(elem);
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
        const singleChartData = _.isEmpty(this.props.singleChartData)
            ? { data: {}, fetching: true }
            : this.props.singleChartData;

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
                        <div>{ singleChartData.data.value }</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
