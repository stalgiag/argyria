import React from 'react';
import Masonry from 'react-masonry-component';

import { useStaticQuery, graphql } from 'gatsby';

const masonryOptions = {
  transitionDuration: '2s',
  columnWidth: 400,
  gutter: 10,
  stagger: 275
};

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
       className={'gallery-class'} // default ''
       elementType={'ul'} // default 'div'
       options={masonryOptions} // default {}
   >
    {res}
   </Masonry>
    </>
  );
};

export default Images;