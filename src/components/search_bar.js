import React, {Component} from 'react';//ES6 syntax
/*
    This is same as 
    import React from 'react';
    const Component = React.Componet;
*/

//Functional component
// const SearchBar = () => {
//     return <input />;
// }


//Class component
class SearchBar extends Component{

    constructor(props){
          super(props);
        //Only a class based component will have a state
        this.state = {term: ''};
    }
    //Each class based component must have a "render()" method
    render(){
        //"() => {}" is called an arrow function
        return (
            <div className="search-bar">
                <input onChange = {
                    event => this.onInputChange(event.target.value)
                }/>
            </div>
        );
        //This is same as
        //return <input onChange = {this.onInputChange} />;
    }

    onInputChange(term){
       console.log(event.target.value);
        //Use "setState" to change the state all the time.
        //If this.state.term = event.targer.value is used, some of the functionality handled by React will not take effect.
        this.setState({term: event.target.value});
        //Fire the callback function
        this.props.onSearchTermChange(term);
    }

    // onInputChange(event){
    //     console.log(event.target.value);
    // }
}

//To use a javascript variable inside JSX use it inside {}

//Exported the whole component.
export default SearchBar;