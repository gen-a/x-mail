import React, {Component, Fragment} from 'react';
import './Layout.scss';

class Layout extends Component {

    getIsClass = () => {

    };

    render() {
        const {
            header,
            leftSidebar,
            mainContent
        } = this.props;

        return (<Fragment>
            <div className="Layout">
                <header className="Layout__header">{header}</header>
                <div className="Layout__body_container">
                    <div className="Layout__left_sidebar">
                        {leftSidebar}
                    </div>
                    <div className="Layout__main_content">
                        {mainContent}
                    </div>
                </div>
            </div>
        </Fragment>);
    }
}

export default Layout;