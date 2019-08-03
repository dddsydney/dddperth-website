import * as React from 'react'
import { Fragment } from 'react'
import { DddSession } from './dddAgendaPage_v2'
import { SafeLink } from './global/safeLink'

interface SessionProps {
  session: DddSession
  showPresenter: boolean
  hideTags: boolean
  hideLevelAndFormat: boolean
  showBio: boolean
  redactName: boolean
}

const SessionDetails: React.StatelessComponent<SessionProps> = ({ session, showBio, redactName }) => {
  let presenterNames = session.Presenters.map(presenter => [
    presenter.firstName,
    presenter.lastName,
    `${presenter.firstName} ${presenter.lastName}`,
  ]).reduce((prev, names) => prev.concat(...names), [])
  return (
    <Fragment>
      <p className="preserve-whitespace" style={{ marginBottom: '10px' }}>
        {redactName
          ? presenterNames.reduce((abs, name) => abs.replace(name, '<redacted>'), session.SessionAbstract)
          : session.SessionAbstract}
      </p>
      <p style={{ margin: '10px 0 15px 0' }}>
        <span className="badge badge-primary">{session.TrackType}</span>{' '}
        <span className="badge badge-secondary">{session.SessionLength}</span>{' '}
      </p>
      {showBio &&
        session.Presenters.map(p => (
          <p key={(p.firstName + ' ' + p.lastName).replace(/ /g, '-')}>
            <img
              src={p.photo || '/static/images/profile-image-blank.jpg'}
              alt={p.firstName + ' ' + p.lastName + ' profile photo'}
              className="profile-photo"
            />
            <em>
              {p.firstName + ' ' + p.lastName}
              {p.tagline ? ` - ${p.tagline}` : ''}
            </em>
            <br />
            {(p.twitter || p.url || p.linkedIn) && (
              <small>
                (
                {p.twitter && (
                  <React.Fragment>
                    <SafeLink
                      href={
                        'https://twitter.com/' +
                        p.twitter.replace(/https?\:\/\/(www\.)?twitter.com\//i, '').replace(/\?.+$/, '')
                      }
                      target="_blank"
                    >
                      @{p.twitter.replace(/https?\:\/\/(www\.)?twitter.com\//i, '').replace(/\?.+$/, '')}
                    </SafeLink>
                    {p.url ? ' | ' : null}
                  </React.Fragment>
                )}
                {p.url && (
                  <React.Fragment>
                    <SafeLink href={p.url} target="_blank">
                      {p.url.replace(/https?\:\/\/(www\.)?/i, '')}
                    </SafeLink>
                    {p.linkedIn ? ' | ' : null}
                  </React.Fragment>
                )}
                {p.linkedIn && (
                  <SafeLink href={p.linkedIn} target="_blank">
                    LinkedIn
                  </SafeLink>
                )}
                )
              </small>
            )}
          </p>
        ))}
    </Fragment>
  )
}

export default SessionDetails
