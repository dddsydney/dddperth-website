import * as moment from 'moment'
import { orderBy } from '../components/utils/arraySort'
import SponsorData from '../config/sponsors'
import { Conference as IConference } from './types'
import venue from './venue'

const name = 'DDD Sydney'
const tagLine = `${name} is an inclusive non-profit conference for the Sydney software community`

const hideDate = false
const isSoldOut = false
const date = moment('2018-08-18T08:00+10:00')
const endDate = date.clone().add(12, 'h')
const currentInstance = parseInt(date.format('YYYY'), 10)
const firstInstance = 2016
const registrationOpenFrom = moment('2018-04-30T08:00:00+10:00')
const registrationOpenUntil = hideDate
  ? null
  : date
      .clone()
      .add(-1, 'd')
      .startOf('day')
      .add(17, 'h')
const presentationSubmissionsOpenFrom = moment('2018-04-30T08:00:00+10:00')
const presentationSubmissionsOpenUntil = moment('2018-06-03T23:59:59+10:00')
const votingOpenFrom = moment('2018-06-06T08:00:00+10:00')
const votingOpenUntil = moment('2018-06-14T23:59:59+10:00')
const agendaPublishedFrom = moment('2018-06-25T08:00:00+10:00')
const feedbackOpenFrom = date.clone()
const feedbackOpenUntil = endDate
const importantDates = [
  {
    Date: presentationSubmissionsOpenFrom,
    Description: 'Call for presentations open',
    Type: 'content',
  },
  {
    Date: presentationSubmissionsOpenUntil,
    Description: 'Call for presentations close',
    Type: 'content',
  },
  {
    Date: registrationOpenFrom,
    Description: 'Ticket sales open',
    Type: 'tickets',
  },
  { Description: 'Voting open', Date: votingOpenFrom, Type: 'voting' },
  { Description: 'Voting close', Date: votingOpenUntil, Type: 'voting' },
  {
    Date: agendaPublishedFrom,
    Description: 'Agenda published',
    Type: 'agenda',
  },
]

if (registrationOpenUntil !== null && !isSoldOut) {
  importantDates.push({
    Date: registrationOpenUntil,
    Description: 'Ticket sales close',
    Type: 'tickets',
  })
}

if (!hideDate) {
  importantDates.push({
    Date: date,
    Description: 'Conference day',
    Type: 'conference',
  })
}

const Conference: IConference = {
  AgendaPublishedFrom: agendaPublishedFrom,
  ContactEmail: 'team@dddsydney.com.au',
  Date: date,
  DoorsOpenTime: '8:10am',
  EmergencyContactName: 'Aaron Powell',
  EmergencyContactPhoneNumber: '0439 878 200',
  EndDate: endDate,
  EventbriteId: '44976613261',
  FeedbackOpenFrom: feedbackOpenFrom,
  FeedbackOpenUntil: feedbackOpenUntil,
  FinishTime: '5:10pm',
  Goal:
    "Our goal is to create an approachable event that appeals to the whole community, especially people that don't normally get to attend or speak at conferences.",
  GoogleAnalyticsId: 'UA-60040308-1',
  Handbook: null,
  HashTag: 'dddsydney',
  Instance: currentInstance.toString(),
  IsSoldOut: isSoldOut,
  MentoringEmail: 'team@dddsydney.com.au',
  Name: name,
  Organiser: 'SydDev Inc.',
  PreviousInstance: (currentInstance - 1).toString(),
  PreviousInstances: [...Array(currentInstance - firstInstance).keys()].map((_, i) => (firstInstance + i).toString()),
  PreviouslySubmittedTopics:
    'Agile, building great teams, UI design, software testing, virtual reality, open source software, bots, IoT, machine learning, automated deployments, mobile development, architecture, microservices, APIs, actors, JavaScript, authentication, React, UWP, HTTP protocol, Git, Docker and pointers',
  SellingPoints: ['One day', 'Fully catered', 'Inclusive atmosphere', 'Interesting presentations', 'Awesome people'],
  SessionizeUrl: 'https://sessionize.com/dddsydney-2018/',
  SiteDescription: `${tagLine}.`,
  SponsorshipEmail: 'sponsorship@dddsydney.com.au',
  TagLine: tagLine,
  TicketPrice: '~$60 (save $10 on early bird!)',

  PresentationSubmissionsOpenFrom: presentationSubmissionsOpenFrom,
  PresentationSubmissionsOpenUntil: presentationSubmissionsOpenUntil,
  RegistrationOpenFrom: registrationOpenFrom,
  RegistrationOpenUntil: registrationOpenUntil,
  VotingOpenFrom: votingOpenFrom,
  VotingOpenUntil: votingOpenUntil,

  HideAfterpartyVenue: venue === null || venue.Afterparty === null,
  HideDate: hideDate,
  HideSponsors: false,
  HideVenue: venue === null,

  Venue: venue,

  Socials: {
    Blog: 'https://blog.dddsydney.com.au',
    Email: 'team@dddsydney.com.au',
    Facebook: '',
    Flickr: '',
    GitHub: 'dddsydney',
    MailingList: '',
    Twitter: 'dddsydney',
    Youtube: '',
  },

  ImageStrip: [
    '/static/images/strip/1.jpg',
    '/static/images/strip/2.jpg',
    '/static/images/strip/3.jpg',
    '/static/images/strip/4.jpg',
    '/static/images/strip/5.jpg',
  ],

  ImportantDates: orderBy(importantDates, i => i.Date),

  Sponsors: SponsorData,
}

export default Conference
