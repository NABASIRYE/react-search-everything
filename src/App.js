import React, { Component } from 'react';
import axios from 'axios'
import SearchBar from './components/Searchbar'
import ImageList from './components/Imagelist'
export default class App extends Component {
  state={images: [] }

  //lets create a function such dt wen u search u can view the results
  onSearchSubmit=async(term)=>{
  // console.log("images")lets test to see if this function works
  const response=await axios.get("https://api.unsplash.com/search/photos",
  {
   params:{query: term},
   headers:{
    Authorization: "Client-ID pa_mHJ1xrmKYqvg9fMClZCY4FQApc7cZADyNNH0q48Y"
   },
});
this.setState({images:response.data.results})
  }
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit}/>
    You have {this.state.images.length} results
    <ImageList images={this.state.images}/>
      </div>
    );
  }
}
