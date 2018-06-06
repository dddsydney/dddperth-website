import * as moment from 'moment'
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

  Name: name,
  Organiser: {
    Name: 'SydDev Inc.',
    ShirtColour: 'black',
    Url: ''
  },
  PreviousInstance: (currentInstance - 1).toString(),
  PreviousInstances: [...Array(currentInstance - firstInstance).keys()].map((_, i) => (firstInstance + i).toString()),
  PreviouslySubmittedTopics:
    'Agile, building great teams, UI design, software testing, virtual reality, open source software, bots, IoT, machine learning, automated deployments, mobile development, architecture, microservices, APIs, actors, JavaScript, authentication, React, UWP, HTTP protocol, Git, Docker and pointers',
  SellingPoints: ['One day', 'Fully catered', 'Inclusive atmosphere', 'Interesting presentations', 'Awesome people'],
  SessionizeUrl: 'https://sessionize.com/dddsydney-2018/',
  SessionizeEditUrl: 'https://sessionize.com/app/speaker/',
  SiteDescription: `${tagLine}.`,
  SponsorshipEmail: 'sponsors@dddsydney.com.au',
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
    Police: {
      Details: '2 Fitzgerald St, Northbridge WA 6003 ph: (08) 9422 7111',
      MapUrl:
        'https://www.google.com.au/maps/place/WA+Police/@-31.9539457,115.8571227,15z/data=!4m8!1m2!2m1!1swa+police!3m4!1s0x2a32bad2aad309a9:0x132b875b4c12ce8a!8m2!3d-31.9465398!4d115.852523',
    },
    CentreAgainstSexualAssault: {
      Details: '1800 806 292',
    },
    EmergencyMedical: {
      Details: 'Royal Perth Hospital, 197 Wellington St, Perth WA 6000',
      MapUrl:
        'https://www.google.com.au/maps/place/Royal+Perth+Hospital/@-31.953946,115.8637156,17z/data=!3m1!4b1!4m5!3m4!1s0x2a32bb26d7818b2d:0x31db7aa443eb9c11!8m2!3d-31.953946!4d115.8659043',
    },
    NonEmergencyMedical: {
      Details: 'Perth Medical Centre, 713 Hay St, Perth WA 6000 ph: (08) 9481 4342',
      MapUrl:
        'https://www.google.com.au/maps/place/Perth+Medical+Centre/@-31.9539771,115.8552714,17z/data=!3m1!4b1!4m5!3m4!1s0x2a32bad5d00fb27f:0xa93cc014867a5f8b!8m2!3d-31.9539771!4d115.8574654',
    },
  },

  ImportantDates: orderBy(importantDates, i => i.Date),

  Sponsors: SponsorData,
}

export default Conference
