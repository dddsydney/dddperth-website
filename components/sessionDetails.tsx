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
}

const SessionDetails: React.StatelessComponent<SessionProps> = ({ session, showBio }) => {
  let presenterNames = session.Presenters.map(presenter => [
    presenter.firstName,
    presenter.lastName,
    `${presenter.firstName} ${presenter.lastName}`,
  ]).reduce((prev, names) => prev.concat(...names), [])
  return (
    <Fragment>
      <p className="preserve-whitespace" style={{ marginBottom: '10px' }}>
        {presenterNames.reduce((abs, name) => abs.replace(name, '<redacted>'), session.SessionAbstract)}
      </p>
      <p style={{ margin: '10px 0 15px 0' }}>
        <span className="badge badge-primary">{session.TrackType}</span>{' '}
        <span className="badge badge-secondary">{session.SessionLength}</span>{' '}
      </p>
      {showBio &&
        session.Presenters.map(p => (
          <p key={(p.firstName + ' ' + p.lastName).replace(/ /g, '-')}>
            <img
              src={p.Photo || '/static/images/profile-image-blank.jpg'}
              alt={p.firstName + ' ' + p.lastName + ' profile photo'}
              className="profile-photo"
            />
            <em>{p.firstName + ' ' + p.lastName}</em>{' '}
            {(p.Twitter || p.Url || p.LinkedIn) && (
              <small>
                (
                {p.Twitter && (
                  <React.Fragment>
                    <SafeLink
                      href={
                        'https://twitter.com/' +
                        p.Twitter.replace(/https?\:\/\/(www\.)?twitter.com\//i, '').replace(/\?.+$/, '')
                      }
                      target="_blank"
                    >
                      @{p.Twitter.replace(/https?\:\/\/(www\.)?twitter.com\//i, '').replace(/\?.+$/, '')}
                    </SafeLink>
                    {p.Url ? ' | ' : null}
                  </React.Fragment>
                )}
                {p.Url && (
                  <SafeLink href={p.Url} target="_blank">
                    {p.Url.replace(/https?\:\/\/(www\.)?/i, '')}
                  </SafeLink>
                )}
                {p.LinkedIn && (
                  <SafeLink href={p.LinkedIn} target="_blank">
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
