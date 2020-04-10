import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Images from "../components/images"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Main" />
    <div>
        <Images />
    </div>
  </Layout>
)

export default IndexPage
