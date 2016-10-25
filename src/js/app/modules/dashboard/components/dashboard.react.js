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

    }

    state = {

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
                    <h2>Render</h2>
                </PageHeader>
            </div>
        );
    }
}

export default Dashboard;
