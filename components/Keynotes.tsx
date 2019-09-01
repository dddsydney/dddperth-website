import React from 'react'
import { Conference } from '../config/types'
import { SafeLink } from './global/safeLink'
import SessionDetails from './sessionDetails'

export interface KeynotesProps {
  conference: Conference
}

export default ({ conference }: KeynotesProps) => (
  <React.Fragment>
    {conference.Keynotes.length > 0 && (
      <section className="grey">
        <div className="container">
          <h2>Keynote speakers</h2>
          {conference.Keynotes.map(keynote => (
            <article id={keynote.SessionId} className="keynote" key={keynote.SessionTitle.replace(/ /g, '-')}>
              <h3>{keynote.SessionTitle}</h3>
              <img
                src={keynote.Presenters[0].photo}
                alt={`${keynote.Presenters[0].firstName} ${keynote.Presenters[0].lastName}`}
              />
              <h4>
                {`${keynote.Presenters[0].firstName} ${keynote.Presenters[0].lastName}`}
                <br />
                <small>{keynote.Presenters[0].tagline}</small>
                {keynote.Presenters[0].twitter || keynote.Presenters[0].url ? (
                  <small>
                    <br />(
                    {keynote.Presenters[0].twitter ? (
                      <React.Fragment>
                        <SafeLink href={'https://twitter.com/' + keynote.Presenters[0].twitter} target="_blank">
                          @{keynote.Presenters[0].twitter}
                        </SafeLink>
                        {keynote.Presenters[0].url ? ' | ' : null}
                      </React.Fragment>
                    ) : null}
                    {keynote.Presenters[0].url ? (
                      <SafeLink href={keynote.Presenters[0].url} target="_blank">
                        {keynote.Presenters[0].url}
                      </SafeLink>
                    ) : null}
                    )
                  </small>
                ) : null}
              </h4>
              <SessionDetails
                session={keynote}
                hideTags={false}
                showPresenter={false}
                hideLevelAndFormat={true}
                showBio={false}
                redactName={false}
              />
            </article>
          ))}
        </div>
      </section>
    )}
  </React.Fragment>
)
