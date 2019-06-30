import React from "react"
import { Header, Container, ContentGroup } from "../components"

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
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* {renderBlogPosts()} */}
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
