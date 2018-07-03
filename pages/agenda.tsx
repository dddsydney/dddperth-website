import Error from 'next/error'
import * as React from 'react'
import AllAgendas from '../components/allAgendas'
import CurrentAgenda from '../components/currentAgenda'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import { Session } from '../config/types'
import Page from '../layouts/main'

interface AgendaPageProps extends WithPageMetadataProps {
  sessions?: Session[]
}

class AgendaPage extends React.Component<AgendaPageProps> {
  render() {
    const dates = this.props.pageMetadata.dates

    if (!dates.AgendaPublished) {
      return <Error statusCode={404} />
    }

    const conference = this.props.pageMetadata.conference
    return (
      <Page
        pageMetadata={this.props.pageMetadata}
        title="Agenda"
        hideBanner={true}
        description={conference.Name + ' agenda.'}
      >
        <div className="container">
          <h1>{dates.IsComplete && conference.Instance} Agenda</h1>

          {!dates.AgendaPublished && (
            <p>
              The agenda has not yet been finalised; please come back on{' '}
              {conference.AgendaPublishedFrom.format(dates.DateDisplayFormat)}{' '}
              {conference.AgendaPublishedFrom.format(dates.TimeDisplayFormat)}. In the meantime, check out our previous
              agendas below.
            </p>
          )}
          {dates.AgendaPublished && (
            <CurrentAgenda
              sessions={this.props.sessions}
              previousConferenceInstances={this.props.pageMetadata.conference.PreviousInstances}
              sessionsUrl={this.props.pageMetadata.appConfig.getAgendaUrl}
            />
          )}
          <AllAgendas
            conference={this.props.pageMetadata.conference}
            conferenceInstance={this.props.pageMetadata.conference.Instance}
            dates={this.props.pageMetadata.dates}
          />
        </div>
      </Page>
    )
  }
}

export default withPageMetadata(AgendaPage)
