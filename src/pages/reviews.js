import React from 'react'

import { Header, Container, ContentGroup, Card, CardContainer } from '../components'
import { reviews } from '../reviews/reviews'
import { splitArray } from '../functions'
import { DOCUMENT_TITLES } from '../constants'
import { useDocumentTitle } from '../hooks'

const Reviews = () => {
  useDocumentTitle(DOCUMENT_TITLES.REVIEWS)

  const renderReviews = () => (
    <ContentGroup>
      {splitArray(reviews, 4).map((reviewRow, i) => (
        <CardContainer marginBottom key={`reviewRow-${i}`}>
          {reviewRow.map(({ name, jobTitle, quote }) => (
            <Card title={name} subtitle={jobTitle} key={name} condensed>
              <p>{quote}</p>
            </Card>
          ))}
        </CardContainer>
      ))}
    </ContentGroup>
  )

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

        {renderReviews()}
      </main>
    </div>
  )
}

export default Reviews
