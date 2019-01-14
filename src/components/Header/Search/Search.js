import React, { Component,Fragment  } from 'react';

import { MdSearch } from 'react-icons/md';
import { IconContext } from "react-icons";

import './Search.scss';

class Search extends Component {
    state ={

    };
    render() {
       return (<Fragment>
           <div className="Search">

               <input className="Search__input" />
               <button className="Search__button" >
                   <IconContext.Provider value={{ className: "Search__button_icon" }}>
                       <div className="Search__button_icon_container">
                           <MdSearch/>
                       </div>
                   </IconContext.Provider>




               </button>


           </div>
        </Fragment>);
    }
}

export default Search;
