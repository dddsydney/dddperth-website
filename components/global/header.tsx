import Link from 'next/link'
import React, { Fragment, StatelessComponent } from 'react'
import { Conference, Dates } from '../../config/types'

interface HeaderArgs {
  isHome?: boolean
  hideBanner?: boolean
  conference: Conference
  dates: Dates
}

const Header: StatelessComponent<HeaderArgs> = ({ isHome, hideBanner, conference, dates }) => (
  <Fragment>
    <header>
      {isHome ? (
        <h1 className="logo">
          <a href="/">{conference.Name}</a>
        </h1>
      ) : (
        <div className="logo">
          <a href="/">{conference.Name}</a>
        </div>
      )}
    </header>

    {isHome && (
      <Fragment>
        <section className="fader" />
        <section className="intro">
          <div className="container">
            <p>
              {conference.TagLine}
              <br />
              {conference.Goal}
              <br />
              Our{' '}
              <Link href="/code-of-conduct">
                <a>Code of Conduct</a>
              </Link>
              outlines the principles from which we operate, we are always looking for{' '}
              <a href={`mailto:${conference.ContactEmail}`}>further feedback</a> on how to make our events more
              inclusive.
            </p>
          </div>
        </section>
      </Fragment>
    )}

    {!isHome && !hideBanner && <section className="banner" />}
  </Fragment>
)

export default Header
