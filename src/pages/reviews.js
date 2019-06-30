import React from "react"
import { Header, Container, ContentGroup, Card } from "../components"

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
            <div style={{ margin: "0 1%", width: "40rem", maxWidth: "20%" }}>
              <Card
                title="Stephen Algeo"
                subtitle="Lead JavaScript Engineer"
                condensed
              >
                <p className="u-text--xs">
                  I’ve been lucky enough to work with some amazing people during
                  my career. Here's what some of them have said about me.
                </p>
              </Card>
            </div>
            <div style={{ margin: "0 1%", width: "40rem", maxWidth: "20%" }}>
              <Card
                title="Mark Cullen"
                subtitle="Lead JavaScript Engineer"
                condensed
              >
                <p className="u-text--xs">
                  I’ve been lucky enough to work with some amazing people during
                  my career. Here's what some of them have said about me.
                </p>
              </Card>
            </div>
            <div style={{ margin: "0 1%", width: "40rem", maxWidth: "20%" }}>
              <Card title="Stu Bamforth" subtitle="UX/UI Designer" condensed>
                <p className="u-text--xs">
                  I’ve been lucky enough to work with some amazing people during
                  my career. Here's what some of them have said about me.
                </p>
              </Card>
            </div>
            <div style={{ margin: "0 1%", width: "40rem", maxWidth: "20%" }}>
              <Card title="Alex Colbeck" subtitle="Lead UX Designer" condensed>
                <p className="u-text--xs">
                  I’ve been lucky enough to work with some amazing people during
                  my career. Here's what some of them have said about me.
                </p>
              </Card>
            </div>
          </div>

          <div
            data-info="temporary-blog-tile-container"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "100px",
            }}
          >
            <div style={{ margin: "0 1%", width: "40rem", maxWidth: "20%" }}>
              <Card title="Sam Ockwell" subtitle="Business Analyst" condensed>
                <p className="u-text--xs">
                  I’ve been lucky enough to work with some amazing people during
                  my career. Here's what some of them have said about me.
                </p>
              </Card>
            </div>
            <div style={{ margin: "0 1%", width: "40rem", maxWidth: "20%" }}>
              <Card
                title="Darren Godsell"
                subtitle="Digital Development Manager"
                condensed
              >
                <p className="u-text--xs">
                  I’ve been lucky enough to work with some amazing people during
                  my career. Here's what some of them have said about me.
                </p>
              </Card>
            </div>
            <div style={{ margin: "0 1%", width: "40rem", maxWidth: "20%" }}>
              <Card title="Vicky Walton" subtitle="Scrum Master" condensed>
                <p className="u-text--xs">
                  I’ve been lucky enough to work with some amazing people during
                  my career. Here's what some of them have said about me.
                </p>
              </Card>
            </div>
            <div style={{ margin: "0 1%", width: "40rem", maxWidth: "20%" }}>
              <Card
                title="Vygas Valys"
                subtitle="Senior Software Developer"
                condensed
              >
                <p className="u-text--xs">
                  I’ve been lucky enough to work with some amazing people during
                  my career. Here's what some of them have said about me.
                </p>
              </Card>
            </div>
          </div>

          <div
            data-info="temporary-blog-tile-container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ margin: "0 1%", width: "40rem", maxWidth: "20%" }}>
              <Card title="Bryde Town" subtitle="Web Programmer" condensed>
                <p className="u-text--xs">
                  I’ve been lucky enough to work with some amazing people during
                  my career. Here's what some of them have said about me.
                </p>
              </Card>
            </div>
            <div style={{ margin: "0 1%", width: "40rem", maxWidth: "20%" }}>
              <Card
                title="Will Newham"
                subtitle="Data Warehouse Manager"
                condensed
              >
                <p className="u-text--xs">
                  I’ve been lucky enough to work with some amazing people during
                  my career. Here's what some of them have said about me.
                </p>
              </Card>
            </div>
            <div style={{ margin: "0 1%", width: "40rem", maxWidth: "20%" }}>
              <Card title="Chris Townsend" subtitle="Lead Developer" condensed>
                <p className="u-text--xs">
                  I’ve been lucky enough to work with some amazing people during
                  my career. Here's what some of them have said about me.
                </p>
              </Card>
            </div>
            <div style={{ margin: "0 1%", width: "40rem", maxWidth: "20%" }}>
              <Card title="Asad Sahi" subtitle="Full Stack Developer" condensed>
                <p className="u-text--xs">
                  I’ve been lucky enough to work with some amazing people during
                  my career. Here's what some of them have said about me.
                </p>
              </Card>
            </div>
          </div>
        </ContentGroup>

        <Container>
          <ContentGroup>
            <p className="u-text--centre">
              Have we worked together in the past?
            </p>
            <button>Leave a review</button>
          </ContentGroup>
        </Container>
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
