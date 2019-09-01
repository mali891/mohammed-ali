import React from 'react'

import { Header, Container, ContentGroup, Card, CardContainer } from '../components'
import { reviews } from '../reviews/reviews'
import { DOCUMENT_TITLES } from '../constants'
import { useDocumentTitle } from '../hooks'

const renderReviews = (index1, index2) => (
  <CardContainer marginBottom>
    {reviews.slice(index1, index2).map(({ name, jobTitle, quote }) => (
      <Card title={name} subtitle={jobTitle} key={name} condensed>
        <p>{quote}</p>
      </Card>
    ))}
  </CardContainer>
)

const Reviews = () => {
  useDocumentTitle(DOCUMENT_TITLES.REVIEWS)

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
          {renderReviews(0, 4)}
          {renderReviews(4, 8)}
          {renderReviews(8, 12)}
        </ContentGroup>
      </main>
    </div>
  )
}

export default Reviews
