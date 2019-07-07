import React from "react"

import { Header, Container, ContentGroup, Card } from "../components"
import reviews from "../pages/reviews/reviews"

const Reviews = ({ data }) => {
  // const { edges } = data.allMarkdownRemark

  // const renderBlogPosts = () =>
  //   edges.map(edge => {
  //     const { path, title, date, length } = edge.node.frontmatter

  //     return (
  //       <BlogTile
  //         key={path}
  //         title={title}
  //         date={date}
  //         length={length}
  //         path={path}
  //       />
  //     )
  //   })

  return (
    <div className="u-anim--fade-in">
      <Header title="Reviews" />

      <main className="c-main">
        <Container className="o-main">
          <ContentGroup>
            <p>
              I’ve been lucky enough to work with some amazing people during my
              career. Here's what some of them have said about me.
            </p>
          </ContentGroup>
        </Container>

        <ContentGroup>
          <div
            data-info="temporary-blog-tile-container"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "100px",
            }}
          >
            {reviews.slice(0, 4).map(review => {
              const { name, jobTitle, content } = review

              return (
                <div
                  style={{ margin: "0 1%", width: "40rem", maxWidth: "20%" }}
                >
                  <Card title={name} subtitle={jobTitle} condensed>
                    <p className="u-text--xs">{content}</p>
                  </Card>
                </div>
              )
            })}
          </div>

          <div
            data-info="temporary-blog-tile-container"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "100px",
            }}
          >
            {reviews.slice(4, 8).map(review => {
              const { name, jobTitle, content } = review

              return (
                <div
                  style={{ margin: "0 1%", width: "40rem", maxWidth: "20%" }}
                >
                  <Card title={name} subtitle={jobTitle} condensed>
                    <p className="u-text--xs">{content}</p>
                  </Card>
                </div>
              )
            })}
          </div>

          <div
            data-info="temporary-blog-tile-container"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "100px",
            }}
          >
            {reviews.slice(8, 12).map(review => {
              const { name, jobTitle, content } = review

              return (
                <div
                  style={{ margin: "0 1%", width: "40rem", maxWidth: "20%" }}
                >
                  <Card title={name} subtitle={jobTitle} condensed>
                    <p className="u-text--xs">{content}</p>
                  </Card>
                </div>
              )
            })}
          </div>
        </ContentGroup>
      </main>
    </div>
  )
}

// prettier-ignore
// export const query = graphql`
//   query HomepageQuery {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}) {
//       edges {
//         node {
//           frontmatter {
//             title
//             path
//             date
//             length
//           }
//         }
//       }
//     }
//   }
// `

export default Reviews
