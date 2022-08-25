import React from "react";

class SearchBar extends React.Component{

    //Initialize state
    state = {term: ''};

    //onChange event to target the input taht way we can type on it
    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        //Callback from parent component
        this.props.onTermSubmitorAnyName( this.state.term);
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}


export default SearchBar;