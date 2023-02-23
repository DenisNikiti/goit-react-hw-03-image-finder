import Modal from "components/Modal/Modal"
function ImageGalleryItem({ image, largeImage, modal, showModal}) {
    
    const click = () => {
       modal(largeImage)
 
   }

    return (
        <div>
<li className="ImageGalleryItem-image" onClick ={click}>
            
            <img src={image} alt="" />
        </li>
            
            

        </div>
        
                  

    )
}
export default ImageGalleryItem