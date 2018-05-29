import Link from 'next/link'
import Router from 'next/router'
import * as React from 'react'
import { Panel, PanelGroup } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import { AutoAffix } from 'react-overlays'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import SessionDetails from '../components/sessionDetails'
import '../components/utils/arrayExtensions'
import dateTimeProvider from '../components/utils/dateTimeProvider'
import Conference from '../config/conference'
import getConferenceDates from '../config/dates'
import { Session } from '../config/types'
import Page from '../layouts/main'

interface VoteState {
  sessions?: Session[]
  isLoading: boolean
  isError: boolean
  expandAll: boolean
  tagFilters: string[]
  tags: string[]
  levelFilters: string[]
  levels: string[]
  formatFilters: string[]
  formats: string[]
  shortlist: string[]
  show: string
}

class VotePage extends React.Component<WithPageMetadataProps, VoteState> {
  static getInitialProps({ res }) {
    const dates = getConferenceDates(Conference, dateTimeProvider.now())
    if (!dates.VotingOpen) {
      if (res) {
        res.writeHead(302, {
          Location: '/',
        })
        res.end()
        res.finished = true
      } else {
        Router.replace('/')
      }
    }
    return {}
  }

  componentWillMount() {
    const that = this
    this.setState({
      formatFilters: [],
      formats: [],
      isError: false,
      isLoading: true,
      levelFilters: [],
      levels: [],
      shortlist: [],
      show: 'all',
      tagFilters: [],
      tags: [],
    })
    fetch('/static/tmp.json')
      .then(response => {
        if (response.status !== 200) {
          throw response.statusText
        }
        return response.json()
      })
      .then(body =>
        that.setState({
          formats: (body as Session[])
            .map(s => s.Format)
            .unique()
            .sort(),
          isLoading: false,
          levels: (body as Session[])
            .map(s => s.Level)
            .unique()
            .sort(),
          sessions: body as Session[],
          tags: (body as Session[])
            .selectMany(s => s.Tags)
            .unique()
            .sort(),
        }),
      )
      .catch(error => {
        that.setState({ isError: true, isLoading: false })
        if (console) {
          // tslint:disable-next-line:no-console
          console.error('Error loading sessions', error)
        }
      })
  }

  toggleExpandAll() {
    this.setState({ expandAll: !this.state.expandAll })
  }

  show(whatToShow: string) {
    this.setState({ show: whatToShow })
  }

  isInShortlist(session: Session) {
    return this.state.shortlist.includes(session.Id)
  }

  toggleShortlist(session: Session) {
    this.setState({
      shortlist: this.isInShortlist(session)
        ? this.state.shortlist.without(session.Id)
        : [...this.state.shortlist, session.Id],
    })
  }

  render() {
    const visibleSessions = (this.state.sessions || [])
      .filter(s => this.state.tagFilters.length === 0 || this.state.tagFilters.some(t => s.Tags.includes(t)))
      .filter(s => this.state.levelFilters.length === 0 || this.state.levelFilters.some(l => s.Level === l))
      .filter(s => this.state.formatFilters.length === 0 || this.state.formatFilters.some(f => s.Format === f))
      .filter(s => this.state.show !== 'shortlist' || this.isInShortlist(s))

    const SpanIf: React.StatelessComponent<any> = ({ condition, children }) => (
      <React.Fragment>
        {condition && <span>{children}</span>}
        {!condition && children}
      </React.Fragment>
    )

    return (
      <Page
        pageMetadata={this.props.pageMetadata}
        title="Vote"
        hideBanner={true}
        description={this.props.pageMetadata.conference.Name + ' voting page.'}
      >
        <div className="container">
          <h1>Voting</h1>

          <p>
            One of the{' '}
            <Link href="/about">
              <a>core tenets of {this.props.pageMetadata.conference.Name}</a>
            </Link>{' '}
            is that the agenda is democratically selected. Session voting is the core mechanism that we employ to
            achieve that. This means that you (collectively) have the power to decide on the agenda on the day.
          </p>

          {this.props.pageMetadata.conference.AnonymousVoting && (
            <p>
              In order to remove unconscious bias we implement anonymous session voting. This means that you will not
              see the details of the presenters and will need to vote based on the content (title, abstract, tags).
            </p>
          )}

          <p>
            This year we have a combination of 20 minute and 45 minutes sessions (or sessions that are designated as
            being able to be both). You can optionally filter the sessions by tag, format and level to assist you to
            create a shortlist. You will be required to vote for{' '}
            {this.props.pageMetadata.conference.MinVotes !== this.props.pageMetadata.conference.MaxVotes ? (
              <span>
                between {this.props.pageMetadata.conference.MinVotes} and {this.props.pageMetadata.conference.MaxVotes}
              </span>
            ) : (
              <span>{this.props.pageMetadata.conference.MinVotes}</span>
            )}{' '}
            sessions.
          </p>

          {this.state.sessions && (
            <AutoAffix>
              <Panel className="voting-control">
                <Panel.Heading>
                  <strong>Lodge votes</strong>
                </Panel.Heading>
                <Panel.Body>
                  <em>Filter by:</em>
                  <label className="filter">
                    Tags:{' '}
                    <Typeahead
                      multiple
                      options={this.state.tags}
                      clearButton
                      onChange={selected => {
                        this.setState({ tagFilters: selected })
                      }}
                      selected={this.state.tagFilters}
                    />
                  </label>
                  <label className="filter">
                    Format:{' '}
                    <Typeahead
                      multiple
                      options={this.state.formats}
                      clearButton
                      onChange={selected => {
                        this.setState({ formatFilters: selected })
                      }}
                      selected={this.state.formatFilters}
                    />
                  </label>
                  <label className="filter">
                    Level:{' '}
                    <Typeahead
                      multiple
                      options={this.state.levels}
                      clearButton
                      onChange={selected => {
                        this.setState({ levelFilters: selected })
                      }}
                      selected={this.state.levelFilters}
                    />
                  </label>
                  <br />
                  <em>View:</em>{' '}
                  <button className="btn btn-sm btn-secondary" onClick={() => this.toggleExpandAll()}>
                    {this.state.expandAll ? 'Collapse' : 'Expand'} all
                  </button>{' '}
                  <button className="btn btn-sm" onClick={() => this.show('all')} disabled={this.state.show === 'all'}>
                    All sessions
                  </button>{' '}
                  <button
                    className="btn btn-sm voting"
                    onClick={() => this.show('shortlist')}
                    disabled={this.state.show === 'shortlist'}
                  >
                    Show shortlist
                  </button>
                </Panel.Body>
              </Panel>
            </AutoAffix>
          )}

          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <hr />
          <h2>Sessions</h2>

          {visibleSessions.length === 0 && (
            <p>
              <em>No sessions yet.</em>
            </p>
          )}

          <PanelGroup accordion={!this.state.expandAll} className="accordion" id="vote-accordion">
            {visibleSessions.map((s, i) => (
              <Panel eventKey={i} key={i} expanded={this.state.expandAll}>
                <Panel.Heading>
                  <Panel.Title toggle={!this.state.expandAll}>
                    <SpanIf condition={this.state.expandAll}>
                      {s.Title}
                      <br />
                      <button
                        onClick={e => {
                          this.toggleShortlist(s)
                          e.stopPropagation()
                          e.preventDefault()
                        }}
                        className="btn voting btn-sm"
                      >
                        {!this.isInShortlist(s) ? 'Add to shortlist' : 'Remove from shortlist'}
                      </button>
                    </SpanIf>
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                  <SessionDetails session={s} showPresenter={!this.props.pageMetadata.conference.AnonymousVoting} />
                </Panel.Body>
              </Panel>
            ))}
          </PanelGroup>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      </Page>
    )
  }
}

export default withPageMetadata(VotePage)
