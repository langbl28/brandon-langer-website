import React from "react"

export default function Home() {
  return (
    <section>
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <h6>Header 9</h6>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      <p>
        <a href="/">Link Text</a> 
      </p>
      <p>
        <span>Highlighted Text</span>
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
    </section>
  )
}
