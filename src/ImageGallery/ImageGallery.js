import ImageGalleryItem from "../components/ImageGalleryItem/ImageGalleryItem"

function ImageGallery({ list, modal, showModal }) {
    
    return (
        <ul className="ImageGallery">
            {list.map((contact) => {
              
                return (

                    <ImageGalleryItem image={contact.webformatURL} largeImage={contact.largeImageURL} modal={modal.bind(this)} showModal={ showModal} />
                )
                
                
          })}

        </ul>
    )
}


export default ImageGallery