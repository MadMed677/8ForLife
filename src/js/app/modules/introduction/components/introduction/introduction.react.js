import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import actionCreators           from 'actions';
import { pick }                 from 'lodash';
import introductionActions      from '../../actions';

import PageHeader               from 'page-header/page-header.react';
import VerticalStepper          from '../vertical-stepper/vertical-stepper.react';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
    bindActionCreators(pick(actionCreators, Object.keys(introductionActions)), dispatch);

/**
 * React Container Component - Introduction.
 * Класс отвечает за главный компонент на /introduction
 *
 * @class
 */
class Introduction extends React.Component {
    static propTypes = {

    };

    static defaultProps = {

    };

    state = {
        categories: []
    };

    /**
     * Компонент замаунтился
     *
     * @public
     */
    componentDidMount() {

    }

    /**
     * Добавление новой категории
     *
     * @param {String} categoryName - название категории
     * @private
     */
    _onAddCategoryName = categoryName => {
        this.setState({
            categories: [...this.state.categories, categoryName]
        });
    };

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
                    <h2>- Introduction -</h2>
                </PageHeader>

                <VerticalStepper categories={ this.state.categories } addCategoryName={ this._onAddCategoryName } />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);
