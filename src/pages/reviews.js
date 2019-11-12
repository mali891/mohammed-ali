import React from 'react'

import { Header, Container, ContentGroup, Card, CardContainer } from '../components'
import { reviews } from '../reviews/reviews'
import { splitArray } from '../functions'
import { DOCUMENT_TITLES } from '../constants'
import { useDocumentTitle } from '../hooks'

const Reviews = () => {
  useDocumentTitle(DOCUMENT_TITLES.REVIEWS)

  // TO-DO
  // Bug: fix the below renderReviews function (not rendering on component re-render)

  // const renderReviews = () => (
  //   <ContentGroup>
  //     {splitArray(reviews, 4).map((reviewRow, i) => (
  //       <CardContainer marginBottom key={`reviewRow-${i}`}>
  //         {reviewRow.map(({ name, jobTitle, quote }) => (
  //           <Card title={name} subtitle={jobTitle} key={name} condensed>
  //             <p>{quote}</p>
  //           </Card>
  //         ))}
  //       </CardContainer>
  //     ))}
  //   </ContentGroup>
  // )

  const renderReviews = (index1, index2) => (
    <CardContainer marginBottom>
      {reviews.slice(index1, index2).map(({ name, jobTitle, quote }) => (
        <Card title={name} subtitle={jobTitle} key={name} condensed>
          <p>{quote}</p>
        </Card>
      ))}
    </CardContainer>
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
