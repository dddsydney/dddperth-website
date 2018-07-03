import * as React from 'react'
import { Fragment } from 'react'
import { DddSession } from './dddAgendaPage'

interface SessionProps {
  session: DddSession
  showPresenter: boolean
  hideTags: boolean
  hideLevelAndFormat: boolean
  showBio: boolean
}

const SessionDetails: React.StatelessComponent<SessionProps> = ({ session }) => (
  <Fragment>
    <p className="preserve-whitespace" style={{ marginBottom: '10px' }}>
      {session.SessionAbstract}
    </p>
    <p style={{ margin: '10px 0 15px 0' }}>
      <span className="badge badge-primary">{session.TrackType}</span>{' '}
      <span className="badge badge-secondary">{session.SessionLength}</span>{' '}
    </p>
    {showBio &&
      session.Presenters.map(p => (
        <p className="preserve-whitespace">
          {session.Presenters.length > 1 && (
            <Fragment>
              <strong>{p.Name}</strong>
              <br />
            </Fragment>
          )}
          <em>{p.Bio}</em>
        </p>
      ))}
  </Fragment>
)

export default SessionDetails
