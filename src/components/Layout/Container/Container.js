import React, {Component, Fragment} from 'react';
import './Container.scss';

class Container extends Component {

    render() {
        const {children, isExpanded} = this.props;

        let className ="Container";
        if(isExpanded){
            className += " Container__is_expanded";
        }

        return (
            <Fragment>
                <div className={className}>{children}</div>
            </Fragment>
        );
    }
}
export default Container;