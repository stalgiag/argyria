import React from 'react';
import Masonry from 'react-masonry-component';

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// const childElements = this.props.children.map(function(element){
//   return (
//        <li className="image-element-class">
//            <Img src={element.fluid} />
//        </li>
//    );
// });

// return (
   
// );

const masonryOptions = {
  transitionDuration: '0.5s',
  columnWidth: 400,
  gutter: 10,
  // fitWidth: true
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

const Images = ({ path }) => {
  const data = useStaticQuery(graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`)
  const res = data.allFile.edges.map(image => (
    <li className="image-element-class">
      <img src={image.node.childImageSharp.fluid.src} />
    </li>
  ))

  console.log(res)
  return (
    <>
    <Masonry
       className={'my-gallery-class'} // default ''
       elementType={'ul'} // default 'div'
       options={masonryOptions} // default {}
   >
    {res}
   </Masonry>
    </>
  );
};

export default Images;