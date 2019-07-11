// import Error from 'next/error'
import * as React from 'react'
import AllAgendas from '../components/allAgendas'
import CurrentAgenda from '../components/currentAgenda'
import { DddSession } from '../components/dddAgendaPage_v2'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import Page from '../layouts/main'

interface AgendaPageProps extends WithPageMetadataProps {
  sessions?: DddSession[]
}

class AgendaPage extends React.Component<AgendaPageProps> {
  render() {
    const dates = this.props.pageMetadata.dates

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
              sessionsUrl="https://dddsydneyapi.azurewebsites.net/v2/sessions/2019"
            />
          )}
          {conference.Handbook && (
            <>
              <h2>Handbook</h2>
              <p>
                <a className="btn btn-pdf" href={'/static/docs/' + conference.Handbook}>
                  Download handbook (PDF)
                </a>
              </p>
            </>
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
