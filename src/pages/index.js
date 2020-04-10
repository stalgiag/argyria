import React from "react"
import { Link } from "gatsby"
import Images from "../components/images"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gateway from "../components/gateway"
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';



class IndexPage extends React.Component {
  render() {
    disableBodyScroll();
    return (
      <>
      <Gateway />
      <Layout id="layout">
        <SEO title="---" />
        <div id="gallery">
            <Images />
        </div>
      </Layout>
      </>
    )
  }

  }

export default IndexPage
