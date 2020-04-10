import React from 'react';
import Masonry from 'react-masonry-component';

import { useStaticQuery, graphql } from 'gatsby';

const masonryOptions = {
  columnWidth: 400,
  gutter: 10,
  stagger: 275
};

let vis = false;

const Images = ({ path }) => {
  const data = useStaticQuery(graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: {eq: "images"},
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

  return (
    <>
      <Masonry
        elementType={'ul'} // default 'div'
        options={masonryOptions} // default {}
      >
        {res}
      </Masonry>
    </>
  );
};

export default Images;