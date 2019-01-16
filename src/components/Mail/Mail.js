import React, {Component, Fragment} from 'react';
import {MdStarBorder, MdStar} from 'react-icons/md';
import {IconContext} from "react-icons";

import "./Mail.scss";

class Mail extends Component {

    render() {
        const {id, body, starred, subject, from} = this.props.data;
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
                                <div style={{display:'inline-block', verticalAlign:'middle', margin: '0 4px', cursor: 'pointer'}}
                                     onClick={() =>
                                         this.props.updateMailAttribute(id, 'starred', !starred)
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
                        <div className="Mail__body">{body}</div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Mail;