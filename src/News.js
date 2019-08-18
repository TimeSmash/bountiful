import React from 'react';
import './App.css';

const currentDate = new Date().toString()


//how to get a current date time and then make it stay 
function News (props) {
    console.log("News props",props)


    return   <div class="component-body">
        <h1 style={{"font-size":"2.5em", "margin-top":"2.5em", "margin-right":"12.5%"}}>News</h1>
        <p>8-17: Got a LOT of CSS and a nav bar functioning</p>
        <p>filler</p>
        <p>filler</p>
        <p>filler</p>
        <p>filler</p>
        <p>filler</p><p>filler</p><p>filler</p><p>filler</p>
        <p>filler</p>
        <p>filler</p><p>filler</p>
        <p>filler</p>
        <p>filler</p><p>filler</p>
        <p>filler</p>
        <p>filler</p><p>filler</p>

        

        </div>
}

export default News;