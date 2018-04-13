// tslint:disable:object-literal-sort-keys
import * as React from 'react'
import { Fragment } from 'react'
import Conference from './conference'
import { Dates, FAQ } from './types'

export default function getFaqs(dates: Dates): FAQ[] {
  const Faqs: FAQ[] = []

  if (!Conference.HideDate) {
    Faqs.push({
      Question: 'When and where is it?',
      Answer: `The event ${dates.IsComplete ? 'was' : 'will be'} held on ${dates.Display}${
        Conference.HideVenue ? '' : ' at ' + Conference.Venue.Name
      }.
          Doors ${dates.IsComplete ? 'opened' : 'will open'} at ${Conference.DoorsOpenTime} and ${
        dates.IsComplete ? 'we finished' : "we'll finish"
      } at ${Conference.FinishTime}.`,
    })

    Faqs.push({
      Question: "Where's the after party?",
      Answer: `We won't be having a sponsored afterparty this year, unfortunately the cost of doing so exceeds our available funds. We will be heading somewhere after the event though so keep an eye out for the details as to where (you'll just have to buy your own beer).`,
    })
  }

  Faqs.push({
    Question: 'How much does it cost to attend?',
    Answer: `${
      Conference.TicketPrice
    } covers your entry, food and coffee all day and access to the afterparty! Amazing value right!?
      We are able to keep the ticket price so low thanks to our generous sponsors.
      ${
        Conference.Name
      } is a non profit event and any excess will be kept as part of a fund for future events and/or donated to charity.`,
    Category: 'tickets',
  })

  Faqs.push({
    Question: 'Is this just for software developers?',
    Answer:
      'No! While our name implies we are just about devs, our events are aimed at all professionals in the software industry - developers, testers, designers, analysts, managers, etc.',
  })

  Faqs.push({
    Question: 'Will refreshments be provided?',
    Answer:
      'Yes, attendees will receive lunch and snacks throughout the day and we will have a coffee cart operating all day. We usually will also have a couple of small snacks in the showbags.',
  })

  Faqs.push({
    Question: 'What about swag?',
    Answer:
      'Yes, attendees will receive showbags with goodies. We typically prioritise the overall experience over mountains of swag though.',
  })

  if (Conference.Venue && Conference.Venue.Wifi !== null) {
    Faqs.push({
      Question: 'Will there be wifi?',
      Answer: Conference.Venue.Wifi,
    })
  }

  Faqs.push({
    Question: 'When does registration open?',
    Answer: (
      <Fragment>
        {dates.RegistrationOpen ? (
          <Fragment>
            Now! Go to <a href="/tickets">the tickets page</a> to register.
          </Fragment>
        ) : Conference.IsSoldOut ? (
          <Fragment>The conference is now sold out.</Fragment>
        ) : dates.RegistrationClosed ? (
          <Fragment>Ticket sales have closed.</Fragment>
        ) : (
          <Fragment>
            Registration opens on {Conference.RegistrationOpenFrom.format(dates.DateDisplayFormat)} at{' '}
            {Conference.RegistrationOpenFrom.format(dates.TimeDisplayFormat)}.
          </Fragment>
        )}
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'Can I pay by cheque, invoice, cash, Coinye West?',
    Answer: (
      <Fragment>
        Payments can be made with credit card using Eventbrite via our tickets page when registrations are open.
        Companies that want to buy bulk tickets (> 5) can <a href={'mailto:' + Conference.ContactEmail}>contact us</a>{' '}
        to pay by invoice (EFT or credit card).
      </Fragment>
    ),
    Category: 'tickets',
  })

  Faqs.push({
    Question: 'Can I cancel/give my ticket to someone else?',
    Answer: (
      <Fragment>
        You are welcome to send someone else in your place. Please do this through{' '}
        <a
          href="https://www.eventbrite.com/support/articles/en_US/How_To/how-to-update-your-ticket-registration-information"
          target="_blank"
        >
          Eventbrite
        </a>.
      </Fragment>
    ),
    Category: 'tickets',
  })

  Faqs.push({
    Question: `What is the hashtag for ${Conference.Name}?`,
    Answer: (
      <Fragment>
        The Twitter hashtag is{' '}
        <a href={'https://twitter.com/search?q=%23' + Conference.HashTag} target="_blank">
          #{Conference.HashTag}
        </a>.
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'Will I be photographed or filmed?',
    Answer: `Attendees may be photographed or filmed by media personnel authorised by ${Conference.Name}.
      Attendees must inform said media personnel if they do not wish to be photographed or filmed.`,
  })

  Faqs.push({
    Question: 'I want to be involved. Can I help?',
    Answer: (
      <Fragment>
        We are always looking for volunteers and sometimes looking for organisers! It takes a lot of effort to organise
        a volunteer-run conference like {Conference.Name}. Shoot us an email at{' '}
        <a href={'mailto:' + Conference.ContactEmail}>{Conference.ContactEmail}</a> and we can work with you to figure
        out the best way to assist.
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'How can I contact the organisers?',
    Answer: (
      <Fragment>
        We can be contacted via email at <a href={'mailto:' + Conference.ContactEmail}>{Conference.ContactEmail}</a>
        {Conference.Socials.Twitter !== null ? (
          <Fragment>
            {' '}
            and Twitter at{' '}
            <a href={'https://twitter.com/' + Conference.Socials.Twitter} target="_blank">
              @{Conference.Socials.Twitter}
            </a>. See also the other Social Media accounts at the footer of this page.
          </Fragment>
        ) : (
          '. Also, see our various social media accounts at the footer of this page.'
        )}
      </Fragment>
    ),
  })

  Faqs.push({
    Question: `How can I sponsor ${Conference.Name}?`,
    Answer: (
      <Fragment>
        {Conference.Name} will be heavily publicised in the community and we believe offers a unique marketing and
        recruiting opportunity based on being attended by people that don't normally get to go to conferences. It's also
        a great chance to give back and support the local software community. We have various levels of sponsorship
        available with various benefits and price points. We have a sponsorship prospectus that will be provided on
        request that explains detailed benefits and impact of sponsorship and the difference between the various levels;
        if you would like a copy <a href={'mailto:' + Conference.SponsorshipEmail}>please contact us</a>.
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'How can I go to this kind of thing more often?',
    AnswerWithoutParagraph: (
      <Fragment>
        <p>Sydney has a very active software community. Consider attending one of the meetups/conferences such as:</p>
        <ul />
        <p>
          Furthermore, you can see an up to date list of Australian conferences at{' '}
          <a href="https://github.com/readify/devevents" target="_blank">
            Readify's DevEvents repository
          </a>.
        </p>
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'Who are the organisers?',
    AnswerWithoutParagraph: (
      <Fragment>
        <p>
          {Conference.Name} is organised by SydDev Inc. a non-profit organisation set up to create inclusive events for
          the NSW software community. {Conference.Name} {Conference.Instance} is organised by:
        </p>
        <ul>
          <li>
            <a href="https://twitter.com/slace" target="_blank">
              Aaron Powell
            </a>
          </li>
          <li>
            <a href="https://twitter.com/stevegodbold" target="_blank">
              Steve Godbold
            </a>
          </li>
        </ul>
      </Fragment>
    ),
  })

  return Faqs
}
