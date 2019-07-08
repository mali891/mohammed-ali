import React from 'react'

import { Header, Container, ContentGroup, Card } from '../components'
import reviews from '../pages/reviews/reviews'

const Reviews = () => {
  return (
    <div className="u-anim--fade-in">
      <Header title="Reviews" />

      <main className="c-main">
        <Container className="o-main">
          <ContentGroup>
            <p>
              I’ve been lucky enough to work with some amazing people during my career. Here's what some of them have
              said about me.
            </p>
          </ContentGroup>
        </Container>

        <ContentGroup>
          <div
            data-info="temporary-blog-tile-container"
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '100px'
            }}
          >
            {reviews.slice(0, 4).map(review => {
              const { name, jobTitle, content } = review

              return (
                <div style={{ margin: '0 1%', width: '40rem', maxWidth: '20%' }} key={name}>
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
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '100px'
            }}
          >
            {reviews.slice(4, 8).map(review => {
              const { name, jobTitle, content } = review

              return (
                <div style={{ margin: '0 1%', width: '40rem', maxWidth: '20%' }} key={name}>
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
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '100px'
            }}
          >
            {reviews.slice(8, 12).map(review => {
              const { name, jobTitle, content } = review

              return (
                <div style={{ margin: '0 1%', width: '40rem', maxWidth: '20%' }} key={name}>
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

export default Reviews
