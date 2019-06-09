import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

const Info = props => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident doloremque possimus, error vero assumenda quam
              laboriosam libero magnam eaque architecto fuga aliquid facilis
              perferendis aut fugit, laudantium dicta, exercitationem facere
              quis. Possimus vitae explicabo modi laborum laudantium, excepturi
              atque quod nemo voluptas, unde error rerum maiores reiciendis ad.
              Illo, nam.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
