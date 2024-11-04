import React from "react";
import './App.css'
import SearchBox from "./components/search-box/search-box";
import CardList from "./components/card-list/card-list";

class App extends React.Component{

  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json()) 
      .then((users) => {
        this.setState({ monsters: users });
        console.log(users,"sdfdskjfh")
      })
      .catch((err) => {
        console.error('Error fetching users:', err); 
      });
}

 onSearchChange=(event)=>{
  this.setState({searchField:event})

}

    render(){
      const monsters=this.state.monsters;
      const searchField=this.state.searchField;
      const filteredMonsters=monsters.filter((monster)=>{
       return monster?.name?.toLowerCase()?.includes(this.state.searchField?.toLowerCase())
      });
      return(
        <div className="App">
        <h1>Monsters Rollodex</h1>
       <SearchBox searchField={searchField} onSearchChange={this.onSearchChange}/> 
       
        {/* <button type="Submit">Submit</button>  */}
        <CardList monsters={filteredMonsters}/>
        </div>
      )
      }

}

export default App

