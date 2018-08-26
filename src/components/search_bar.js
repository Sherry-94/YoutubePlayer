import React, {Component} from 'react'

// const SearchBar = () =>
// {
//     return <input />;
// };

class SearchBar extends Component {
    constructor(props)
    {
        super(props);

        this.state = {term: ''};
    }
    render()
    {
        return(
            <div>
                <input 
                value ={this.state.term}
                 onChange={event =>this.onInputChange(event.target.value)}
                 
                />
                {this.state.term}
            </div>
        ) ;
    }

    onInputChange (term)
    {
        this.setState({term: event.target.value});
        this.props.uponVideoSearch(term);
    }

    // onInputChange(e){
    //     console.log(e.target.value);
    // }
}

export default SearchBar;