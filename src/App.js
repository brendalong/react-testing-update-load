import React, { Component } from 'react';
import './App.css';
import { fetchData, deleteItem } from './db';
import DataList from './components/DataList';

class App extends Component {

   constructor() {
      super();

      this.state = {
         attractionsLoaded: false,
         attractions: {},
         error: null
      }

   }

   handleDeleteClicked = (id) => {
      console.log("id", id);
      deleteItem(id)
         .then((result) => {
            console.log("delete result", result);
         //test one - go get all data after delete
            // this.getData();
         //test two - update state by only removing one item
            // var newList = this.state.attractions;
            //newList is an object, splice won't work
               // newList.splice(id-1, 1);
            //setting to null leaves empty slot in data, causes errors
               // newList[id] = null;
            //this one works
               // delete newList[id];
               // this.setState({
               //    attractions: newList
               // });
         //test three - using spread -- best choice
         // interesting observation: setting to null maintains a placeholder in the state
         // delete item from state works
            // //react way - make a copy of state and then update the state
            // //using object will focus on the state that has changed
            const attractions = { ...this.state.attractions }
            delete attractions[id];
            this.setState({ attractions });
         })
   }

   showMe = () => {
      // console.log("this.state.attractions", this.state.attractions);
   }

   getData = () =>{
      fetchData()
      .then((result) => {
         //add fbID to each item
         let idArray = Object.keys(result);
         idArray.forEach((key) => {
            result[key].fbId = key;
         });
         this.setState({
            attractions: result,
            attractionsLoaded: true,
         });
      })
   }

   componentDidMount() {
      //lifecycle hook
      console.log("componentDidMount");
      this.getData();
   }



   render() {
      //show or not show based on data loaded.
      let displayList;
      (this.state.attractionsLoaded) ?
         displayList = <DataList attractions={this.state.attractions} handleDelete={this.handleDeleteClicked} />
        :
        displayList = null;


      return (
         <div className="App">
            <header className="App-header">
               <h1 className="App-title">Testing Data Update and the Render</h1>
            </header>
            {displayList}
         </div>
      );
   }
}

export default App;
