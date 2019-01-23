import React, {Component, Fragment} from 'react';
import {MdStarBorder, MdStar} from 'react-icons/md';
import {IconContext} from "react-icons";
import {connect} from 'react-redux';
import {updMailAttribute} from "../../actions/mails";

import "./Mail.scss";

class Mail extends Component {

    findEmailById = (id) => {
        for (let listName in this.props.mails) {
            if (this.props.mails.hasOwnProperty(listName)) {
                let result = this.props.mails[listName].filter((object) => object.id === id);
                if(result.length){
                    return result[0];
                }
            }
       }
        return {id:id, body:'', starred:false, subject:'', from:''};
    };

    render() {
        const {id, body, starred, subject, from} = this.findEmailById(this.props.match.params.id);
        let starIcon = starred ? <MdStar/> : <MdStarBorder/>;

        return (
            <Fragment>
                <div className="Mail">
                    <div className="Mail__row">
                        <div className="Mail__label">Subject:</div>
                        {' '}
                        <div className="Mail__subject">
                            {subject}
                            <IconContext.Provider value={{size: 20, color: '#d27641'}}>
                                <div style={{
                                    display: 'inline-block',
                                    verticalAlign: 'middle',
                                    margin: '0 4px',
                                    cursor: 'pointer'
                                }}
                                     onClick={() =>
                                         this.props.updMailAttribute(id, 'starred', !starred, this.props.mails)
                                     }>
                                    {starIcon}
                                </div>
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div className="Mail__row">
                        <div className="Mail__label">From:</div>
                        {' '}
                        <div className="Mail__from">{from}</div>
                    </div>

                    <div className="Mail__row">
                        <div className="Mail__label">Body:</div>
                        {' '}
                        <div className="Mail__body">
                            {body.split('\n').map(function (item, key) {
                                return (
                                    <p key={key}>
                                        {item}
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        mails: state.mails.mailList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updMailAttribute: (id, name, value) => dispatch(updMailAttribute(id, name, value)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Mail);