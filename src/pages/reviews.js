import React from 'react'

import { Header, Container, ContentGroup, Card, CardContainer } from '../components'
import reviews from '../pages/reviews/reviews'

const Reviews = () => {
  return (
    <div className="u-anim--fade-in">
      <Header title="Reviews" />

      <main className="c-main">
        <Container>
          <ContentGroup>
            <p>
              I&apos;ve been lucky enough to work with some amazing people during my career. Here&apos;s what some of
              them have said about me.
            </p>
          </ContentGroup>
        </Container>

        <ContentGroup>
          <CardContainer marginBottom>
            {reviews.slice(0, 4).map(({ name, jobTitle, content }) => (
              <Card title={name} subtitle={jobTitle} key={name} condensed>
                <span>{content}</span>
              </Card>
            ))}
          </CardContainer>

          <CardContainer marginBottom>
            {reviews.slice(4, 8).map(({ name, jobTitle, content }) => (
              <Card title={name} subtitle={jobTitle} key={name} condensed>
                <span>{content}</span>
              </Card>
            ))}
          </CardContainer>

          <CardContainer marginBottom>
            {reviews.slice(8, 12).map(({ name, jobTitle, content }) => (
              <Card title={name} subtitle={jobTitle} key={name} condensed>
                <span>{content}</span>
              </Card>
            ))}
          </CardContainer>
        </ContentGroup>
      </main>
    </div>
  )
}

export default Reviews
