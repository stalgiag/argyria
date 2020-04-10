import * as React from 'react';
import Masonry from 'react-masonry-component';
import Img from 'gatsby-image';

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Gallery extends React.Component {
    render() {
        const childElements = this.props.children.map(function(element){
           return (
                <li className="image-element-class">
                    <Img src={element.fluid} />
                </li>
            );
        });
    
        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
            >
                {childElements}
            </Masonry>
        );
    }
}

export default Gallery;