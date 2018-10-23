import React, { Component } from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {
    render() {
        return (
            <table className="table table-hover" 
            style={{margin:"25px"}}>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        );
    }
}

const mapStateToProps = ({weather}) => {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);