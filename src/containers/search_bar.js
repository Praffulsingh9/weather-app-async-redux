import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term : ''
        }
    }

    onInputChange = (event) => {
        this.setState({term:event.target.value})
        }

    onFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <form 
            className="input-group" 
            style={{margin:"20px"}}
            onSubmit={(event)=>this.onFormSubmit(event)}>
                <input 
                placeholder="Get a five day forecast of your city"
                className="form-control"
                value={this.state.term}
                onChange={(event) => this.onInputChange(event)}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}

export default SearchBar;