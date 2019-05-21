import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PageNotFoud extends Component {
    state = {  }
    render() { 
        return ( <div>404! <Link to ="/">Go back to Main</Link> </div> );
    }
}
 
export default PageNotFoud;