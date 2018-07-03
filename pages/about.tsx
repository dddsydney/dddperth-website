import Link from 'next/link'
import * as React from 'react'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import Page from '../layouts/withSidebar'

export default withPageMetadata((props: WithPageMetadataProps) => (
  <Page pageMetadata={props.pageMetadata} title="About" description="The goal and history of DDD Perth and DDD WA Inc.">
    <h1>About {props.pageMetadata.conference.Name}</h1>
    <p>{props.pageMetadata.conference.SiteDescription} We do this by:</p>
    <ul>
      <li>Making the ticket price as low as possible ($60)</li>
      <li>Running the event on a Saturday</li>
      <li>Allowing anyone to submit about any software industry related topic</li>
      <li>Having a democratically chosen agenda</li>
      <li>Focussing on creating a safe and inclusive environment where everyone is welcome</li>
      <li>Having a track specifically for junior developers</li>
    </ul>
    <p className="text-center">
      <img
        src="/static/images/logo.png"
        alt={props.pageMetadata.conference.Name + ' logo'}
        style={{ width: '250px' }}
      />
    </p>
    <p>
      DDD standards for Developer! Developer! Developer! and while it's heritage is a developer-focussed conference,{' '}
      {props.pageMetadata.conference.Name} is not just for developers, but for all professionals in the software
      industry.
    </p>
    <p>{props.pageMetadata.conference.Name} has been held at the following dates:</p>
    <ul>
      <li>
        <Link href="/agenda/2016">
          <a>28th May 2016 - 200 attendees</a>
        </Link>
      </li>
      <li>
        <Link href="/agenda/2017">
          <a>15th July 2017 - 230 attendees</a>
        </Link>
      </li>
    </ul>
    <p>
      Developer! Developer! Developer! started in 2005 in the United Kingdom as a community conference organised by
      software developers for software developers.{' '}
      <a href="https://en.wikipedia.org/wiki/Developer!_Developer!_Developer!" target="_blank">
        It's since spread all over the UK and Australia
      </a>.
    </p>
    <p>DDD was set up with a number of key elements in mind, which hold true for all DDD conferences held worldwide:</p>
    <ul>
      <li>It is free / low cost</li>
      <li>It is on a Saturday</li>
      <li>An open submissions process</li>
      <li>A democratically chosen agenda</li>
    </ul>
    <h2>Sister events</h2>
    <p>We have a number of sister events across Australia:</p>
    <p className="text-center">
      <a href="https://dddmelbourne.com/" target="_blank">
        <img src="/static/images/logo-dddmelbourne.jpg" alt="DDD Melbourne logo" style={{ width: '200px' }} />
      </a>{' '}
      <a href="http://dddsydney.com.au/" target="_blank">
        <img src="/static/images/logo-dddsydney.png" alt="DDD Sydney logo" style={{ width: '200px' }} />
      </a>{' '}
      <a href="http://dddbrisbane.com/" target="_blank">
        <img src="/static/images/logo-dddbrisbane.png" alt="DDD Brisbane logo" style={{ width: '200px' }} />
      </a>
    </p>
  </Page>
))
