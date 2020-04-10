import React from "react"
import { Link } from "gatsby"
import Images from "../components/images"

import Layout from "../components/layout"
import SEO from "../components/seo"



class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Main" />
        <div id="gallery">
            <Images />
        </div>
      </Layout>
    )
  }

  }

export default IndexPage
