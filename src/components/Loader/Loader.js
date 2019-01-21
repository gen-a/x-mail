import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import "./Loader.scss";

const mapStateToProps = (state) => {
    return {
        isFetching: state.mails.isFetching
    }
};

class Loader extends Component {

    render() {
        const {isFetching} = this.props;
        let className = "Loader";
        if (isFetching) {
            className += " Loader_is_active";
        }
        return (
            <Fragment>
                <div className={className}>
                        <div className="Loader__indicator">
                            <div className="Loader__bounce Loader__bounce1"/>
                            <div className="Loader__bounce Loader__bounce2"/>
                            <div className="Loader__bounce Loader__bounce3"/>
                        </div>
                </div>
            </Fragment>
        );
    }
}

export default connect(mapStateToProps)(Loader);