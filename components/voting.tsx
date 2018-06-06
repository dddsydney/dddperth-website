import * as React from 'react'
import { Panel, PanelGroup } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import NonJumpingAffix from '../components/NonJumpingAffix'
import SessionDetails from '../components/sessionDetails'
import '../components/utils/arrayExtensions'
import { DddSession } from './dddAgendaPage'

interface VotingState {
  expandAll: boolean
  tagFilters: string[]
  tags: string[]
  levelFilters: string[]
  levels: string[]
  formatFilters: string[]
  formats: string[]
  seen: string[]
  shortlist: string[]
  votes: string[]
  show: string
}

interface VotingProps {
  anonymousVoting: boolean
  sessions: DddSession[]
  maxVotes: number
  minVotes: number
}

export default class Voting extends React.PureComponent<VotingProps, VotingState> {
  componentWillMount() {
    this.setState({
      formatFilters: [],
      formats: (this.props.sessions as DddSession[])
        .map(s => s.SessionLength || '45 minutes')
        .unique()
        .sort(),
      levelFilters: [],
      levels: (this.props.sessions as DddSession[])
        .map(s => s.TrackType || 'Developer')
        .unique()
        .sort(),
      seen: [],
      shortlist: [],
      show: 'all',
      tagFilters: [],
      tags: [],
      votes: [],
    })
  }

  toggleExpandAll() {
    this.setState({ expandAll: !this.state.expandAll })
  }

  show(whatToShow: string) {
    this.setState({ show: whatToShow })
  }

  isInShortlist(session: DddSession) {
    return this.state.shortlist.includes(session.SessionId)
  }

  toggleShortlist(session: DddSession) {
    this.setState({
      shortlist: this.isInShortlist(session)
        ? this.state.shortlist.without(session.SessionId)
        : [...this.state.shortlist, session.SessionId],
    })
  }

  isSeen(session: DddSession) {
    return this.state.seen.includes(session.SessionId)
  }

  toggleSeen(session: DddSession) {
    this.setState({
      seen: this.isSeen(session) ? this.state.seen.without(session.SessionId) : [...this.state.seen, session.SessionId],
    })
  }

  isVotedFor(session: DddSession) {
    return this.state.votes.includes(session.SessionId)
  }

  toggleVote(session: DddSession) {
    this.setState({
      votes: this.isVotedFor(session) ? this.state.votes.without(session.SessionId) : [...this.state.votes, session.SessionId],
    })
  }

  render() {
    const visibleSessions = (this.props.sessions || [])
      .filter(() => this.state.tagFilters.length === 0 || this.state.tagFilters.some(t => [].includes(t)))
      .filter(s => this.state.levelFilters.length === 0 || this.state.levelFilters.some(l => s.TrackType === l))
      .filter(s => this.state.formatFilters.length === 0 || this.state.formatFilters.some(f => s.SessionLength === f))
      .filter(s => this.state.show !== 'shortlist' || this.isInShortlist(s))
      .filter(s => this.state.show !== 'votes' || this.isVotedFor(s))

    const SpanIf: React.StatelessComponent<any> = ({ condition, className, children }) => (
      <React.Fragment>
        {condition && <span className={className}>{children}</span>}
        {!condition && children}
      </React.Fragment>
    )

    return (
      <React.Fragment>
        <NonJumpingAffix>
          <Panel className="voting-control form-inline">
            <Panel.Heading>
              <h3>Lodge votes</h3>
              <label>
                Ticket order # <em>(Optional)</em>{' '}
                <span
                  className="fa fa-question-circle"
                  style={{ cursor: 'pointer' }}
                  title="Your vote will have double weighting if you supply your EventBrite order # from your ticket confirmation email when getting a 2018 attendee ticket."
                  onClick={() =>
                    alert(
                      'Your vote will have double weighting if you supply your EventBrite order # from your ticket confirmation email when getting a 2018 attendee ticket.',
                    )
                  }
                />: <input type="text" className="form-control input-sm" id="voteOrderNumber" />
              </label>{' '}
              <button className="btn btn-primary btn-sm" disabled={this.state.votes.length < this.props.minVotes}>
                Submit {this.state.votes.length}/{this.props.minVotes !== this.props.maxVotes
                  ? `(${this.props.minVotes}-${this.props.maxVotes})`
                  : this.props.minVotes}{' '}
                votes
              </button>
            </Panel.Heading>
            <Panel.Body>
              <em>Filter by:</em>
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
              <div className="btn-group" role="group">
                <button
                  className="btn btn-sm agenda"
                  onClick={() => this.show('all')}
                  disabled={this.state.show === 'all'}
                >
                  All sessions
                </button>{' '}
                <button
                  className="btn btn-sm agenda"
                  onClick={() => this.show('shortlist')}
                  disabled={this.state.show === 'shortlist'}
                >
                  My shortlist
                </button>{' '}
                <button
                  className="btn btn-sm agenda"
                  onClick={() => this.show('votes')}
                  disabled={this.state.show === 'votes'}
                >
                  My votes
                </button>
              </div>
            </Panel.Body>
          </Panel>
        </NonJumpingAffix>
        <h2>
          {this.state.show === 'all' ? 'All sessions' : this.state.show === 'shortlist' ? 'My shortlist' : 'My votes'}{' '}
          <small>{`(showing ${visibleSessions.length}/${this.props.sessions.length} sessions)`}</small>{' '}
          <button className="btn btn-sm btn-secondary" onClick={() => this.toggleExpandAll()}>
            {this.state.expandAll ? 'Collapse' : 'Expand'} all
          </button>
        </h2>
        {visibleSessions.length === 0 && (
          <p>
            <em>No sessions yet.</em>
          </p>
        )}
        <PanelGroup accordion={!this.state.expandAll} className="accordion" id="voting-interface">
          {visibleSessions.map((s, i) => (
            <Panel eventKey={i} key={i} expanded={this.state.expandAll || null}>
              <Panel.Heading>
                <Panel.Title toggle={!this.state.expandAll}>
                  <SpanIf condition={this.state.expandAll} className="title">
                    {this.isSeen(s) && <span className="fa fa-eye" aria-label="Seen" role="status" title="Seen" />}
                    {this.isInShortlist(s) && (
                      <span className="fa fa-list-ol" aria-label="Shortlisted" role="status" title="Shortlisted" />
                    )}
                    {this.isVotedFor(s) && (
                      <span className="fa fa-check" aria-label="Voted" role="status" title="Voted" />
                    )}
                    {s.SessionTitle}
                    <br />
                    <button
                      onClick={e => {
                        this.toggleSeen(s)
                        e.stopPropagation()
                        e.preventDefault()
                      }}
                      className="btn seen btn-sm"
                    >
                      {!this.isSeen(s) ? 'Seen' : 'Un-seen'}
                    </button>{' '}
                    <button
                      onClick={e => {
                        this.toggleShortlist(s)
                        e.stopPropagation()
                        e.preventDefault()
                      }}
                      className="btn btn-secondary btn-sm"
                    >
                      {!this.isInShortlist(s) ? 'Shortlist' : 'Un-shortlist'}
                    </button>{' '}
                    <button
                      onClick={e => {
                        this.toggleVote(s)
                        e.stopPropagation()
                        e.preventDefault()
                      }}
                      className="btn btn-primary btn-sm"
                      disabled={this.state.votes.length >= this.props.maxVotes && !this.isVotedFor(s)}
                    >
                      {!this.isVotedFor(s) ? 'Vote' : 'Un-vote'}
                    </button>
                  </SpanIf>
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <SessionDetails session={s} showPresenter={!this.props.anonymousVoting} />
              </Panel.Body>
            </Panel>
          ))}
        </PanelGroup>
      </React.Fragment>
    )
  }
}
