import React, {Component} from 'react'

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
}

export default SearchBar;
