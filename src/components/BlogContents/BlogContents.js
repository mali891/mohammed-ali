import React, { useEffect, useState } from 'react'

import { ContentGroup, Link } from '../'
import { styles } from './BlogContents.style'

const genericHeadings = ['Contents', 'Thanks for reading!']

const formatIds = text =>
  text
    .replace(/\s+/g, '-')
    .replace(/[?=]/g, '')
    .toLowerCase()

const renderLinks = headings => {
  if (headings) {
    headings.map(heading => (heading.id = formatIds(heading.textContent)))

    return headings
      .filter(heading => !genericHeadings.includes(heading.textContent))
      .map(({ textContent }) => (
        <li key={textContent}>
          <Link type="anchor" to={`#${formatIds(textContent)}`}>
            {textContent}
          </Link>
        </li>
      ))
  }
}

const BlogContents = props => {
  const [headings, setHeadings] = useState([])
  useEffect(() => {
    setHeadings([...document.querySelectorAll('h2')])
  }, [])

  return (
    <ContentGroup className="c-blog-contents" css={styles}>
      <h2 className="c-heading c-heading--md">Contents</h2>
      <ol className="c-blog-contents__list">{renderLinks(headings)}</ol>
    </ContentGroup>
  )
}

export default BlogContents
