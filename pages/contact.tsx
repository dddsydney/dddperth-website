import * as React from 'react'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import Page from '../layouts/withSidebar'

export default withPageMetadata((props: WithPageMetadataProps) => (
  <Page
    pageMetadata={props.pageMetadata}
    title="Contact Us"
    description={'How to contact ' + props.pageMetadata.conference.Name + '.'}
  >
    <h1>Contact Us</h1>
    <ul>
      <li>
        <strong>General enquiries:</strong>{' '}
        <a className="maillink" href={'mailto:' + props.pageMetadata.conference.ContactEmail}>
          {props.pageMetadata.conference.ContactEmail}
        </a>
      </li>
      <li>
        <strong>Sponsorship Enquiries:</strong>{' '}
        <a className="maillink" href={'mailto:' + props.pageMetadata.conference.SponsorshipEmail}>
          {props.pageMetadata.conference.SponsorshipEmail}
        </a>
      </li>
      {props.pageMetadata.conference.Socials.Twitter.Name && (
        <li>
          <strong>Twitter:</strong>{' '}
          <a href={'https://twitter.com/' + props.pageMetadata.conference.Socials.Twitter.Name} target="_blank">
            @{props.pageMetadata.conference.Socials.Twitter.Name}
          </a>
        </li>
      )}
      <li>
        <strong>Emergency contact:</strong>{' '}
        {props.pageMetadata.conference.EmergencyContactName +
          ' on ' +
          props.pageMetadata.conference.EmergencyContactPhoneNumber}
      </li>
    </ul>
    <h2>SydDev Inc.</h2>
    <ul>
      <li>
        <strong>ABN:</strong>{' '}
        <a href="http://www.abr.business.gov.au/SearchByAbn.aspx?abn=33255978565" target="_blank">
          33 255 978 565
        </a>
      </li>
      <li>
        <strong>Postal Address:</strong> Att: Readify, 1 Castlereagh St, Sydney, 2044
      </li>
    </ul>
  </Page>
))
