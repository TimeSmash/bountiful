import React, {Component} from 'react';
import './SearchRecipeForm.css';

class SearchRecipeForm extends Component {
    state = {  }
    render() {
        return (
            <div id="form-container">
                <h2 style={{"padding-top": "2%", "color":"white"}}>Search for a recipe you want to add here!</h2>
                <form onSubmit={console.log("HEY")}>
                    <input type="text" placeholder="Enter recipe here">
                    </input>
                    <button>Submit</button>
                </form>  
            </div>
                
                
        );
    }
}

export default SearchRecipeForm;