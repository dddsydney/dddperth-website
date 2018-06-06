import * as React from 'react'
import { Fragment } from 'react'
import { DddSession } from './dddAgendaPage'

interface SessionProps {
  session: DddSession
  showPresenter: boolean
}

const SessionDetails: React.StatelessComponent<SessionProps> = ({ session }) => (
  <Fragment>
    <p className="preserve-whitespace">{session.SessionAbstract}</p>
    <p>
      <span className="badge badge-primary">{session.SessionLength}</span>{' '}
      <span className="badge badge-secondary">{session.TrackType}</span>{' '}
    </p>
  </Fragment>
)

export default SessionDetails
