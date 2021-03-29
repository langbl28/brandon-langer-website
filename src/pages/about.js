import React from "react"
import Header from "../components/header"
import {Helmet} from 'react-helmet'
<Helmet>
        <html lang='en' />
        <title>Hello Suprabha!</title>
        <meta name='description' content='Suprabha Blog!' />
</Helmet>


export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="About Gatsby" />
      <Header headerText="It's pretty cool" />
      <p>Such wow. Very React.</p>
    </div>
  )
}