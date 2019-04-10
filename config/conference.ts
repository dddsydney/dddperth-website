import moment from 'moment'
import { orderBy } from '../components/utils/arraySort'
import SponsorData from '../config/sponsors'
import { Conference as IConference } from './types'
import venue from './venue'

const name = 'DDD Sydney'
const tagLine = `${name} is an inclusive non-profit conference for the Sydney software community`

const hideDate = false
const isSoldOut = false
const date = moment('2018-08-18T08:00')
const endDate = date.clone().add(12, 'h')
const currentInstance = parseInt(date.format('YYYY'), 10)
const firstInstance = 2016
const registrationOpenFrom = moment('2018-04-30T08:00:00')
const registrationOpenUntil = hideDate
  ? null
  : date
      .clone()
      .add(-1, 'd')
      .startOf('day')
      .add(17, 'h')
const presentationSubmissionsOpenFrom = moment('2018-04-30T08:00:00')
const presentationSubmissionsOpenUntil = moment('2018-06-12T23:59:59')
const votingOpenFrom = moment('2018-06-14T08:00:00')
const votingOpenUntil = moment('2018-06-26T23:59:59')
const agendaPublishedFrom = moment('2018-07-04T08:00:00')
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
  AnonymousReportFormUrl: '',
  AnonymousVoting: true,
  ContactEmail: 'team@dddsydney.com.au',
  Date: date,
  DoorsOpenTime: '8:10am',
  EmergencyContactName: 'Aaron Powell',
  EmergencyContactPhoneNumber: '0439 878 200',
  EndDate: endDate,
  EventbriteId: '44976613261',
  FeedbackOpenFrom: feedbackOpenFrom,
  FeedbackOpenUntil: feedbackOpenUntil,
  FinancialAssistanceEventbriteCode: '',
  FinishTime: '5:10pm',
  Goal:
    "Our goal is to create an approachable event that appeals to the whole community, especially people that don't normally get to attend or speak at conferences.",
  GoogleAnalyticsId: 'UA-60040308-1',
  Handbook: null,
  HashTag: 'dddsydney',
  Instance: currentInstance.toString(),
  IsSoldOut: isSoldOut,
  MediaOfficerName: '',
  MentoringEmail: 'team@dddsydney.com.au',

  MaxVotes: 5,
  MinVotes: 1,
  getSubmissionsUrl: 'https://api.dddsydney.com.au/v1/sessions/2018',
  submitVoteUrl: 'https://api.dddsydney.com.au/v1/vote/2018',

  Name: name,
  Organiser: {
    Name: 'SydDev Inc.',
    ShirtColour: 'black',
    Url: '',
  },
  PreviousInstance: (currentInstance - 1).toString(),
  PreviousInstances: [...Array(currentInstance - firstInstance).keys()].map((_, i) => (firstInstance + i).toString()),
  PreviouslySubmittedTopics:
    'Agile, building great teams, UI design, software testing, virtual reality, open source software, bots, IoT, machine learning, automated deployments, mobile development, architecture, microservices, APIs, actors, JavaScript, authentication, React, UWP, HTTP protocol, Git, Docker and pointers',
  SellingPoints: ['One day', 'Fully catered', 'Inclusive atmosphere', 'Interesting presentations', 'Awesome people'],
  SessionizeEditUrl: 'https://sessionize.com/app/speaker/',
  SessionizeUrl: 'https://sessionize.com/dddsydney-2018/',
  SiteDescription: `${tagLine}.`,
  SponsorshipEmail: 'sponsors@dddsydney.com.au',
  TagLine: tagLine,
  TicketPrice: '~$60',

  PresentationSubmissionsOpenFrom: presentationSubmissionsOpenFrom,
  PresentationSubmissionsOpenUntil: presentationSubmissionsOpenUntil,
  RegistrationOpenFrom: registrationOpenFrom,
  RegistrationOpenUntil: registrationOpenUntil,
  VotingOpenFrom: votingOpenFrom,
  VotingOpenUntil: votingOpenUntil,

  HideAfterpartyVenue: venue === null || venue.Afterparty === null,
  HideDate: hideDate,
  HideSponsors: true,
  HideSponsorshipUpsell: false,
  HideVenue: venue === null,

  Venue: venue,

  Socials: {
    Blog: 'https://blog.dddsydney.com.au',
    Email: 'team@dddsydney.com.au',
    Facebook: '',
    Flickr: '',
    GitHub: 'dddsydney',
    MailingList: 'https://mailchi.mp/a016f18cb8a7/ddd-sydney-subscribers',
    Twitter: {
      Id: '',
      Name: 'dddsydney',
    },
    Youtube: '',
  },

  ImageStrip: [
    { Url: '/static/images/strip/1.jpg', Alternate: 'Kris Howard delivering her 2017 locknote' },
    { Url: '/static/images/strip/2.jpg', Alternate: 'Our 2017 speakers' },
    { Url: '/static/images/strip/3.jpg', Alternate: 'Visting the readify booth' },
    { Url: '/static/images/strip/4.jpg', Alternate: 'Early morning registration' },
    { Url: '/static/images/strip/5.jpg', Alternate: 'Donna Edwards speaking at DDD 2017' },
  ],

  ImportantContacts: {
    CentreAgainstSexualAssault: {
      Details: '1800 806 292',
    },
    EmergencyMedical: {
      Details: 'RPA, 50 Missenden Rd, Camperdown NSW 2050',
      MapUrl: 'https://goo.gl/maps/i2SDvLq3Sj22',
    },
    NonEmergencyMedical: {
      Details: 'Broadway General Practice, Broadway Shopping Centre, M105, Level 1, Bay Street, Broadway NSW 2007',
      MapUrl: 'https://goo.gl/maps/epN85RpHomF2',
    },
    Police: {
      Details: '1 Talfourd St, Glebe NSW 2037 ph: (02) 9552 8099',
      MapUrl: 'https://goo.gl/maps/xrMWoMf1HaR2',
    },
  },

  ImportantDates: orderBy(importantDates, i => i.Date),

  Sponsors: SponsorData,

  Keynotes: [],

  ConferenceFeedbackLink: '',
  SessionFeedbackLink: '',
}

export default Conference
