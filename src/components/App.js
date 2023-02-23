import ImageGallery from "ImageGallery/ImageGallery";
import { Component } from "react";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Searchbar from "./Searchbar/Searchbar";
import {Modal} from "./Modal/Modal"
import "./styles.css"






export class App extends Component{

  state = {
     images : [],
    page: 0,
    error: null,
    isLoading: false,
    querry: "",
    showModal: false,
    modalImage: ""
}

 
  seacrh = async (querry) => {
   
 

    this.setState(() => ({
    
 images: [],
    querry
    }))
    

  this.state.page = 1

    
    
  try {
    this.setState(() => ({
      
      isLoading: true,
      
    }))



   
       


    const res = await fetch(`https://pixabay.com/api/?q=${querry}&page=${this.state.page}&key=30641598-d39f2f73d719eac54648ccf68&image_type=photo&orientation=horizontal&per_page=12`).then(res => res.json())
        this.setState(() => ({
  
        images : res.hits

}) )
  } catch (error) {
         

  


  }
    finally  {
   this.setState(() => ({
      
      isLoading: false
    }))
}
  

    
  }
  



  loadMore = async () => {


   
  try {
   



   
       


    const res = await fetch(`https://pixabay.com/api/?q=${this.state.querry}&page=${this.state.page + 1}&key=30641598-d39f2f73d719eac54648ccf68&image_type=photo&orientation=horizontal&per_page=12`).then(res => res.json())
   
        this.setState((prevstate) => ({
  
        images :  [...prevstate.images, ...res.hits]     

}) )
  } catch (error) {
         

  


  }


    

  }


 Modal(image) {
    this.setState((prevstate) => ({
     
      showModal: !prevstate.showModal
   }))
   this.setState(() => ({
      
      modalImage: image
     
    }))
  }
 

  render() {
    



    return (
   
      
      <div>
                  
         
        {this.state.showModal && <Modal image={this.state.modalImage} toggle={ this}/>}
        <Searchbar onSubmit={this.seacrh} />
        {this.state.isLoading && <Loader />}
        
        {this.state.images && <ImageGallery list={this.state.images} modal={this.Modal.bind(this)} showModal={ this.state.showModal} />}
        
        {this.state.page > 0 && <Button load={this.loadMore} />}
      </div>
      
    
  )

}

}