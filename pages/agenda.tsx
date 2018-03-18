import Link from 'next/link'
import * as React from 'react'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import dateTimeProvider from '../components/utils/dateTimeProvider'
import Conference from '../config/conference'
import getConferenceDates from '../config/dates'
import Page from '../layouts/withSidebar'

const AgendaNotReady = ({ conference }) => (
  <React.Fragment>
    <h1>Agenda isn't ready yet!</h1>

    <p>You're a bit early here, the agenda isn't available for a little bit longer.</p>

    <p>If you're interested in our previous year agenda's check them out.</p>

    <h2>All Agendas</h2>
    <p>
      {conference.PreviousInstances.map((instance, i) => (
        <React.Fragment key={instance}>
          {i !== 0 ? ' | ' : null}
          <Link href={'/agenda/' + instance}>
            <a>{instance}</a>
          </Link>
        </React.Fragment>
      ))}
    </p>
  </React.Fragment>
)

const AgendaReady = ({ dates, conference }) => (
  <React.Fragment>
    <h1>{dates.IsComplete && conference.Instance} Agenda</h1>

    <p>The agenda has not yet been finalised.</p>
  </React.Fragment>
)

class AgendaPage extends React.Component<WithPageMetadataProps> {
  render() {
    const conference = this.props.pageMetadata.conference
    const dates = this.props.pageMetadata.dates
    const agendaAvailable = getConferenceDates(Conference, dateTimeProvider.now()).AgendaPublished
    return (
      <Page
        pageMetadata={this.props.pageMetadata}
        title="Agenda"
        hideBanner={true}
        description={conference.Name + ' agenda.'}
      >
        {agendaAvailable ? (
          <AgendaReady dates={dates} conference={conference} />
        ) : (
          <AgendaNotReady conference={conference} />
        )}
      </Page>
    )
  }
}

export default withPageMetadata(AgendaPage)
