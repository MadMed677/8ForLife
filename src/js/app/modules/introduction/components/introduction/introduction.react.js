import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import actionCreators           from 'actions';
import { pick }                 from 'lodash';
import introductionActions      from '../../actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
    bindActionCreators(_.pick(actionCreators, Object.keys(introductionActions)), dispatch);

/**
 * React Container Component - Introduction.
 * Класс отвечает за главный компонент на /introduction
 *
 * @class
 */
class Introduction extends React.Component {
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
     * Метод для отрисовки компонента
     *
     * @return {JSX}
     * @public
     */
    render() {
        return (
            <div>Introduction</div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);
