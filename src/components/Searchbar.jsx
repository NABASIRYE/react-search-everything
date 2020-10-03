import React from 'react';
import './searchbar.css'

class SearchBar extends React.Component{
    state={result:""}
    //lets use this function directly in the input onchange
    // onInputChange=(e)=>{
    //     this.setState({
    //         result: e.target.value
    //     })
    // }

   
    onFormSubmit=e=>{
        e.preventDefault();
        console.log(this.state.result); //this will console.log the input text in the search bar everytime a user clicks enter
        this.props.onSubmit(this.state.result)
    }
    render(){
    return(
        <div className="ui segment">
            <h1>SEARCH EVERYTHING</h1>
<form onSubmit={this.onFormSubmit} className="ui form">
    <div className="field">
    <input 
    type="text"
    placeholder="Search here" 
    value={this.state.result}
    onChange={e=>this.setState({result: e.target.value})}/>
    {/* <p>{this.state.result}</p> */}
    </div>
</form>
</div>
)
    }
}
export default SearchBar