import { createPortal } from "react-dom"
 import { Component } from "react"
import { render } from "@testing-library/react"
const modalRoot = document.querySelector("#modal-root")

export class Modal extends Component {
  
  componentDidMount() {
    window.addEventListener("keydown", e => {
      console.log(e)
     if (e.code === "Escape") {
      this.props.toggle()
     }


  })
}








  render() {
    
      return (

       createPortal(<div className="Overlay">
  <div className="Modal">
           <img src={this.props.image} alt="" />
  </div>
</div>,modalRoot,) 
   
  )

  }
  
}






   