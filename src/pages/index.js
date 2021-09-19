import React from "react"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <section>
      <SEO title="UX/UI Portfolio" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-6">
            <StaticImage
              //src="../images/dog.jpg"
              src="https://images.pexels.com/photos/4588435/pexels-photo-4588435.jpeg"
              aspectRatio={1 / 1}
              alt="a dog"
              className="hidden-sm mb-5"
            />
            <StaticImage
              src="https://images.pexels.com/photos/4588435/pexels-photo-4588435.jpeg"
              alt="a dog"
              className="hidden-sm-down"
            />
          </div>
          <div className="col-12 col-sm-6 align-self-center">
            <h1 className="mb-5">Green Bay Print Shop</h1>
            <h2 className="h5 mb-8">Creating Shirts</h2>
            <p>
              I’m a UI and UX designer based in Green Bay, Wisconsin. I'm
              passionate about creating empathic digital experiences. For me,
              it's all about connecting with users in a meaningful way.
            </p>
            <p className="mt-8">
              <a class="btn mr-3" href="#">
                Resume
              </a>
              <a class="btn" href="#">
                Contact
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
