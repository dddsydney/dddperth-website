import * as React from 'react'
import { Fragment } from 'react'
import { DddSession_V1 } from './dddAgendaPage'

interface SessionProps {
  session: DddSession_V1
  showPresenter: boolean
  hideTags: boolean
  hideLevelAndFormat: boolean
  showBio: boolean
}

const SessionDetails: React.StatelessComponent<SessionProps> = ({ session, showBio }) => (
  <Fragment>
    <p className="preserve-whitespace" style={{ marginBottom: '10px' }}>
      {session.SessionAbstract}
    </p>
    <p style={{ margin: '10px 0 15px 0' }}>
      <span className="badge badge-primary">{session.TrackType}</span>{' '}
      <span className="badge badge-secondary">{session.SessionLength}</span>{' '}
    </p>
    {showBio && (
      <p className="preserve-whitespace">
        <strong>{session.PresenterName}</strong>
        &nbsp;
        {session.PresenterTwitterAlias && (
          <a
            className="fa fa-twitter"
            href={session.PresenterTwitterAlias}
            target="_blank"
            title="Twitter, will open in a new window"
            aria-label="Twitter, will open in a new window"
          />
        )}
        &nbsp;
        {session.PresenterWebsite && (
          <a
            rel="nofollow"
            className="fa fa-pencil"
            href={session.PresenterWebsite}
            title="Blog, will open in a new window"
            aria-label="Blog, will open in a new window"
            target="_blank"
          />
        )}
        <br />
        <em>{session.PresenterBio}</em>
      </p>
    )}
  </Fragment>
)

export default SessionDetails
