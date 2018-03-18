import Error from 'next/error'
import * as React from 'react'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import Page from '../layouts/main'

class VotePage extends React.Component<WithPageMetadataProps> {
  render() {
    const dates = this.props.pageMetadata.dates

    if (!dates.VotingOpen) {
      return <Error statusCode={404} />
    }

    return (
      <Page
        pageMetadata={this.props.pageMetadata}
        title="Vote"
        hideBanner={true}
        description={this.props.pageMetadata.conference.Name + ' voting page.'}
      >
        <div className="container">
          <h1>Voting</h1>
          <p>Still need to build this...</p>
        </div>
      </Page>
    )
  }
}

export default withPageMetadata(VotePage)
