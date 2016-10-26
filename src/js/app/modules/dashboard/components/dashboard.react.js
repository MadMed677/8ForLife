import React            from 'react';

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
                    <h2>Render</h2>
                </PageHeader>

                <div className="row">
                    <div className="col-sm-8">
                        <h3>Draw</h3>
                    </div>
                    <div className="col-sm-4">
                        <h3>Statistic</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
