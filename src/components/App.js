import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import ImageList from './ImageList';
class App extends React.Component{


    state = {images:[],length:0}
    searchImage = async (term)=>{
           try{
               const data = await axios.get("https://api.unsplash.com/search/photos",{
                   headers:{
                       Authorization: 'Client-ID kOkDiV95bNjrncLSLs7V6-2xKg05qWGPJFTpECBfVWg'
                   },
                   params:{
                       query:term
                   }
               });
               //const images = cleanData(data);
               //console.log(data.data.results[0].urls);
               this.setState({length:data.data.results.length,images:data.data.results});
            
           }
           catch(e){
               console.log(e);

           }
           
    }


    render(){
        return(
           <div className="ui container">
               <SearchBar search={this.searchImage}/>
               <ImageList images={this.state.images}/>
           </div>
        );
    }
}

export default App;