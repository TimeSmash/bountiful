import React, {Component} from 'react';
import './Week.css';
import Day from './Day.js';


class Week extends Component {
    state = {  }
    render() {
        return (
            <div>
                <table>
                    <tr id="row"> 
                        <th id="sunday-th">Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                    <tr>
                        <td id="sunday"><Day name={"Sunday"}/></td>
                        <td><Day name={"Monday"}/></td>
                        <td><Day name={"Tuesday"}/></td>
                        <td><Day name={"Wednesday"}/></td>
                        <td><Day name={"Thursday"}/></td>
                        <td><Day name={"Friday"}/></td>
                        <td id="saturday"><Day name={"Saturday"}/></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Week;