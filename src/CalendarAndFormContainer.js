import React, {Component} from 'react';

import SearchRecipeForm from './SearchRecipeForm'


import Week from './Week.js'


class CalendarAndFormContainer extends Component {
    state = {  }
    render() {
        return (
        <div>
            <div>
                <SearchRecipeForm />
            </div>
                <Week /> 
            <br></br>
        </div>
        );
    }
}

export default CalendarAndFormContainer;
    