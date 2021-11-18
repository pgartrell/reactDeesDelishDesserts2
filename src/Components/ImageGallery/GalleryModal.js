import React, {Component} from 'react'
import { galleryImages } from '../../Data/data';
import '../../Styles/imageGallery2.css'



class Gallery extends Component {
    constructor(props) {
      super(props);
      this.state = { currentIndex: null };
      this.closeModal = this.closeModal.bind(this);
      this.findNext = this.findNext.bind(this);
      this.findPrev = this.findPrev.bind(this);
      this.renderImageContent = this.renderImageContent.bind(this);
    }
    renderImageContent(src, index) {
      return (
        <div onClick={(e) => this.openModal(e, index)}>
          <img src={src} key={src} />
        </div>
      ) 
    }
    openModal(e, index) {
      this.setState ({ currentIndex: index });
    }
    closeModal(e) {
      if (e != undefined) {
        e.preventDefault();
      }
      this.setState ({ currentIndex: null });
    }
    findPrev(e) {
      if (e != undefined) {
        e.preventDefault();
      }
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex -1
      }));
    }
    findNext(e) {
      if (e != undefined) {
        e.preventDefault();
      }
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1
      }));
    }
    render() {
      return (
        <div className="gallery-container">
          <h1>Dees Delish Gallery</h1>
          <div className="gallery-grid">
            {galleryImages.map(this.renderImageContent)}
          </div>
          <GalleryModal 
            closeModal={this.closeModal} 
            findPrev={this.findPrev} 
            findNext={this.findNext} 
            hasPrev={this.state.currentIndex > 0} 
            hasNext={this.state.currentIndex + 1 < galleryImages.length} 
            // src={galleryImages[this.state.currentIndex]} 
            src={"Assets/images/strawberries.PNG"}
          />
        </div>
      )
    }
  }
  
  class GalleryModal extends Component {
    constructor() {
      super();
      this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidMount() {
      document.body.addEventListener('keydown', this.handleKeyDown);
    }  
    componentWillUnmount() {
      document.body.removeEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown(e) {
      if (e.keyCode === 27)
        this.props.closeModal();
      if (e.keyCode === 37 && this.props.hasPrev)
        this.props.findPrev();
      if (e.keyCode === 39 && this.props.hasNext)
        this.props.findNext();
    }
    render () {
      const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = this.props;
      if (!src) {
        console.log('whut')
        return null;
      }
      return (
        <div> 
          <div className="modal-overlay" onClick={closeModal}></div>
          <div isOpen={true}>
            <div>
              <a href="#" className='modal-close' onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
              {hasPrev && <a href="#" className='modal-prev' onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
              {hasNext && <a href="#" className='modal-next' onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
              <img width="300px" src={src} />
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default Gallery