import React            from 'react';
import {
    BarChart,
    RadarChart,
    PolarAreaChart
}                       from 'chart/index';

import PageHeader       from 'page-header/page-header.react';

/**
 * React Class Dashboard.
 * Класс отвечает за главный компонент на /dashboard
 *
 * @class
 */
class Dashboard extends React.Component {
    static propTypes = {

    };

    state = {
        data: [
            {
                categoryName: 'Здоровье и спорт',
                value: 9
            },
            {
                categoryName: 'Друзья и окружение',
                value: 8
            },
            {
                categoryName: 'Отношения',
                value: 7
            }
        ]
    };

    /**
     * Компонент замаунтился
     *
     * @public
     */
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: [
                    {
                        categoryName: 'Здоровье и спорт',
                        value: 5
                    },
                    {
                        categoryName: 'Друзья и окружение',
                        value: 3
                    },
                    {
                        categoryName: 'Отношения',
                        value: 6
                    }
                ]
            });

            console.log('set state');
        }, 1000);
    }

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
                        <PolarAreaChart data={ this.state.data } />
                    </div>
                    <div className="col-md-4">
                        <h3>Statistic</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
