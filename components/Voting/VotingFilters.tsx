import React, { useRef } from 'react'
import { logEvent } from '../global/analytics'
import { StyledTagCloudInput, StyledTagCloudLabel, StyledTagCloudList } from './VotingFilters.styled'

interface VotingFiltersProps {
  tags: string[]
  levels: string[]
  tracks: string[]
  onTagFilter: (tags: string[]) => void
  onLevelsFilter: (levels: string[]) => void
  onTracksFilter: (tracks: string[]) => void
}

interface VotingFiltersState {
  showTagCloud: boolean
  tagCloudRef: React.RefObject<HTMLFieldSetElement>
  filterCloudRef: React.RefObject<HTMLFieldSetElement>
  trackCloudRef: React.RefObject<HTMLFieldSetElement>
}

class VotingFilters extends React.Component<VotingFiltersProps, VotingFiltersState> {
  constructor(props) {
    super(props)

    this.state = {
      showTagCloud: false,
      tagCloudRef: React.createRef<HTMLFieldSetElement>(),
      filterCloudRef: React.createRef<HTMLFieldSetElement>(),
      trackCloudRef: React.createRef<HTMLFieldSetElement>(),
    }
  }
  render() {
    let { tags, levels, tracks, onTagFilter, onLevelsFilter, onTracksFilter } = this.props

    return (
      <div className="filters">
        <p style={{ marginBottom: 0 }}>
          <em>Filter by tag:</em>
          <br />
          <a
            href="#"
            onClick={e => {
              e.preventDefault()
              this.setState({ showTagCloud: !this.state.showTagCloud })
            }}
            title="Toggle tag cloud"
            style={{ fontSize: 12, fontStyle: 'italic' }}
          >
            Toggle Tag Cloud
          </a>
        </p>
        {this.state.showTagCloud && (
          <fieldset ref={this.state.tagCloudRef} className="tag-cloud">
            <StyledTagCloudList>
              {tags.map(tag => (
                <li key={tag}>
                  <StyledTagCloudInput
                    type="checkbox"
                    value={tag}
                    id={tag}
                    name={tag}
                    onChange={() => {
                      const filteredTags = Array.from<HTMLInputElement>(
                        this.state.tagCloudRef.current.querySelectorAll('input:checked'),
                      ).map(input => input.value)

                      if (filteredTags.length > 0) {
                        logEvent('voting', 'tagFilter', { filter: filteredTags.join(',') })
                      }

                      onTagFilter(filteredTags)
                    }}
                  />
                  <StyledTagCloudLabel htmlFor={tag}>{tag}</StyledTagCloudLabel>
                </li>
              ))}
            </StyledTagCloudList>
          </fieldset>
        )}
        <p style={{ marginBottom: 0 }}>
          <em>Filter by level:</em>
        </p>
        <fieldset ref={this.state.filterCloudRef} className="tag-cloud">
          <StyledTagCloudList>
            {levels.map(level => (
              <li key={level}>
                <StyledTagCloudInput
                  type="checkbox"
                  value={level}
                  id={level}
                  name={level}
                  onChange={() => {
                    const filteredTags = Array.from<HTMLInputElement>(
                      this.state.filterCloudRef.current.querySelectorAll('input:checked'),
                    ).map(input => input.value)

                    if (filteredTags.length > 0) {
                      logEvent('voting', 'levelFilter', { filter: filteredTags.join(',') })
                    }

                    onLevelsFilter(filteredTags)
                  }}
                />
                <StyledTagCloudLabel htmlFor={level}>{level}</StyledTagCloudLabel>
              </li>
            ))}
          </StyledTagCloudList>
        </fieldset>

        <p style={{ marginBottom: 0 }}>
          <em>Filter by track type:</em>
        </p>
        <fieldset ref={this.state.trackCloudRef} className="tag-cloud">
          <StyledTagCloudList>
            {tracks.map(track => (
              <li key={track}>
                <StyledTagCloudInput
                  type="checkbox"
                  value={track}
                  id={track}
                  name={track}
                  onChange={() => {
                    const filteredTags = Array.from<HTMLInputElement>(
                      this.state.trackCloudRef.current.querySelectorAll('input:checked'),
                    ).map(input => input.value)

                    if (filteredTags.length > 0) {
                      logEvent('voting', 'tracksFilter', { filter: filteredTags.join(',') })
                    }

                    onTracksFilter(filteredTags)
                  }}
                />
                <StyledTagCloudLabel htmlFor={track}>{track}</StyledTagCloudLabel>
              </li>
            ))}
          </StyledTagCloudList>
        </fieldset>
      </div>
    )
  }
}
export { VotingFilters }
