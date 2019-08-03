import React from 'react'
import { Button } from '../global/Button/Button'
import SessionDetails from '../sessionDetails'
import {
  StyledBadge,
  StyledButtons,
  StyledDetails,
  StyledHeader,
  StyledIcon,
  StyledPanel,
  StyledSummary,
  StyledTitle,
} from './sessionPanel.styled'
import { DddSession } from '../dddAgendaPage_v2'

interface SessionPanelProps {
  session: DddSession
  anonymousVoting: boolean
  isVoting: boolean
  isVotedFor: boolean
  isVotingDisabled: boolean
  hideVotingButtons: boolean
  isInShortlist: boolean
  expandAll: boolean
  index: number
  preferentialVoting: boolean
  toggleVote: () => void
  toggleShortlist: () => void
}

export const SessionPanel: React.FC<SessionPanelProps> = ({
  session: s,
  anonymousVoting,
  isVoting,
  isVotedFor,
  isVotingDisabled,
  hideVotingButtons,
  isInShortlist,
  expandAll,
  index,
  preferentialVoting,
  toggleVote,
  toggleShortlist,
}) => {
  return (
    <StyledPanel key={s.SessionId}>
      {isVotedFor && !isVoting && <StyledIcon className="fa fa-check" aria-label="Voted" role="status" title="Voted" />}
      {isInShortlist && !isVoting && (
        <StyledIcon className="fa fa-list-ol" aria-label="Shortlisted" role="status" title="Shortlisted" />
      )}
      <StyledHeader>
        <StyledTitle>{s.SessionTitle}</StyledTitle>
        {preferentialVoting && isVoting && (
          <span className="status" title="Voting position">
            #{index + 1}
          </span>
        )}
      </StyledHeader>
      <StyledBadge key={s.TrackType}>{s.TrackType}</StyledBadge>
      {!hideVotingButtons && (
        <StyledButtons>
          {!isVoting && (
            <Button
              kind="secondary"
              size="small"
              onClick={_ => {
                toggleShortlist()
              }}
            >
              {!isInShortlist ? 'Shortlist' : 'Un-shortlist'}
            </Button>
          )}
          <Button
            kind="primary"
            size="small"
            onClick={_ => {
              toggleVote()
            }}
            disabled={isVotingDisabled && !isVotedFor}
          >
            {!isVotedFor ? 'Vote' : 'Un-vote'}
            {isVotingDisabled && !isVotedFor && (
              <span
                className="fa fa-question-circle"
                style={{ cursor: 'pointer', fontSize: '20px', marginLeft: '5px' }}
                title="You have placed the maximum number of votes, if you want to vote for this talk then you need to unvote one of your voted talks."
                onClick={() =>
                  alert(
                    'You have placed the maximum number of votes, if you want to vote for this talk then you need to unvote one of your voted talks.',
                  )
                }
              />
            )}
          </Button>
        </StyledButtons>
      )}
      {hideVotingButtons && (
        <>
          <br />
          <br />
        </>
      )}
      <StyledDetails open={expandAll}>
        <StyledSummary>
          <span className="fa fa-plus" title="More details" /> Tap for session details
        </StyledSummary>
        <SessionDetails
          session={s}
          showPresenter={!anonymousVoting}
          hideTags={true}
          showBio={false}
          hideLevelAndFormat={false}
          redactName={true}
        />
      </StyledDetails>
    </StyledPanel>
  )
}
