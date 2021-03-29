import React from "react";
import {Helmet} from 'react-helmet'
<Helmet>
        <html lang='en' />
        <title>Hello Suprabha!</title>
        <meta name='description' content='Suprabha Blog!' />
</Helmet>

export default function Home() {
  return (
    <section>
      <div className="container">
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <h5>Header 5</h5>
        <h6>Header 6</h6>
        <p className="container-ch">
          Responsibilities included: writing technical reports and other
          documentation, such as handbooks and bulletins, for use by engineering
          staff, management, and customers, analyzing project requests and
          proposals and engineering data to determine feasibility,
          predictability, cost, and production time of aerospace or aeronautical
          product.
        </p>
        <p>
          <a href="/">Link Text</a>
        </p>
        <p>
          <span className="highlight">Highlighted Text</span>
        </p>
        <ul>
          <li>List 1</li>
          <li>List 2</li>
          <li>List 3</li>
        </ul>
        <ol>
          <li>List 1</li>
          <li>List 2</li>
          <li>
            List 3
            <ul>
              <li>List A</li>
              <li>List B</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  )
}
