import React from 'react';


class SearchBar extends React.Component {


    state = { term: "" }
    onInputChange = (event) => {
        console.log(event.target.value);

    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.search(this.state.term);
    }
    render() {
        return (
            <div className="ui segment" style={{ marginTop: "1rem" }}>
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={event =>this.setState({term:event.target.value})} />
                    </div>


                </form>
            </div>
        );
    }
}

export default SearchBar;