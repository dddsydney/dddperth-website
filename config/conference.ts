import moment from 'moment'
import { orderBy } from '../components/utils/arraySort'
import SponsorData from '../config/sponsors'
import { Conference as IConference, ImportantDate, TicketNumberWhileVoting, TicketsProvider } from './types'
import venue from './venue'

const name = 'DDD Sydney'
const tagLine = `${name} is an inclusive non-profit conference for the Developer, Data and Design community`

const hideDate = false
const isSoldOut = false
const date = moment('2019-09-21T08:00')
const endDate = date.clone().add(12, 'h')
const currentInstance = parseInt(date.format('YYYY'), 10)
const firstInstance = 2016
const registrationOpenFrom = moment('2019-06-10T08:00:00')
const registrationOpenUntil = hideDate
  ? null
  : date
      .clone()
      .add(-1, 'd')
      .startOf('day')
      .add(17, 'h')
const presentationSubmissionsOpenFrom = moment('2019-06-10T08:00:00')
const presentationSubmissionsOpenUntil = moment('2019-07-14T23:59:59')
const votingOpenFrom = moment('2019-07-15T04:00:00')
const votingOpenUntil = moment('2019-07-28T23:59:59')
const agendaPublishedFrom = moment('2019-08-04T20:00:00')
const feedbackOpenFrom = date.clone()
const feedbackOpenUntil = endDate
const importantDates: ImportantDate[] = [
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
  ChildcarePrice: '',
  Date: date,
  DoorsOpenTime: '8:10am',
  EmergencyContactName: 'Aaron Powell',
  EmergencyContactPhoneNumber: '0439 878 200',
  EndDate: endDate,
  FeedbackOpenFrom: feedbackOpenFrom,
  FeedbackOpenUntil: feedbackOpenUntil,
  FinishTime: '5:10pm',
  Goal:
    'We are dedicated to making the technology industry in Australia more inclusive: giving minority groups a voice in the future of digital.',
  GoogleAnalyticsId: 'UA-98480529-1',
  Handbook: null,
  HashTag: 'dddsydney',
  Instance: currentInstance.toString(),
  IsSoldOut: isSoldOut,
  MediaOfficerName: '',
  MentoringEmail: 'team@dddsydney.com.au',

  MaxVotes: 5,
  MinVotes: 1,
  getSubmissionsUrl: 'https://dddsydneyapi.azurewebsites.net/v2/sessions/2019',
  submitVoteUrl: 'https://dddsydneyapi.azurewebsites.net/v2/vote/2019',
  // getSubmissionsUrl: 'http://192.168.0.180:7071/v2/sessions/2019',
  // submitVoteUrl: 'http://192.168.0.180:7071/v2/vote/2019',

  Name: name,
  Organiser: {
    Name: 'SydDev Inc.',
    ShirtColour: 'black',
    Url: '',
  },
  PreferentialVoting: false,
  PreviousInstance: (currentInstance - 1).toString(),
  PreviousInstances: [...Array(currentInstance - firstInstance).keys()].map((_, i) => (firstInstance + i).toString()),
  PreviouslySubmittedTopics:
    'Agile, building great teams, UI design, software testing, virtual reality, open source software, bots, IoT, machine learning, automated deployments, mobile development, architecture, microservices, APIs, actors, JavaScript, authentication, React, UWP, HTTP protocol, Git, Docker and pointers',
  SellingPoints: ['One day', 'Fully catered', 'Inclusive atmosphere', 'Interesting presentations', 'Awesome people'],
  SessionizeEditUrl: 'https://sessionize.com/app/speaker/',
  SessionizeUrl: 'https://sessionize.com/ddd-sydney-2019/',
  SiteDescription: `${tagLine}.`,
  SponsorshipEmail: 'sponsors@dddsydney.com.au',
  TagLine: tagLine,

  TicketNumberWhileVoting: TicketNumberWhileVoting.Optional,
  TicketPrice: '~$60',
  TicketsProviderAccountId: 'ddd-sydney',
  TicketsProviderEventId: 'ddd-sydney-2019',
  TicketsProviderFinancialAssistanceCode: '',
  TicketsProviderId: TicketsProvider.Tito,

  PresentationSubmissionsOpenFrom: presentationSubmissionsOpenFrom,
  PresentationSubmissionsOpenUntil: presentationSubmissionsOpenUntil,
  RegistrationOpenFrom: registrationOpenFrom,
  RegistrationOpenUntil: registrationOpenUntil,
  VotingOpenFrom: votingOpenFrom,
  VotingOpenUntil: votingOpenUntil,

  HideAfterpartyVenue: venue === null || venue.Afterparty === null,
  HideDate: hideDate,
  HideSponsors: false,
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
      Details: '',
      MapUrl: '',
    },
    NonEmergencyMedical: {
      Details: 'Broadway General Practice, Broadway Shopping Centre, M105, Level 1, Bay Street, Broadway NSW 2007',
      MapUrl: 'https://goo.gl/maps/epN85RpHomF2',
    },
    Police: {
      Details: '',
      MapUrl: '',
    },
  },

  ImportantDates: orderBy(importantDates, i => i.Date),

  Sponsors: SponsorData,

  Keynotes: [
    {
      SessionAbstract: `Having different ideas, opinions, interests can be quite lonely and lead to thinking about where you can fit especially in the fast-paced tech industry.

Coming to the industry, not by a traditional path, being the only one in the room to have a unique opinion can be very intimidating. Being unique can put us in a position where we think that we don't belong here.

After 5 years in tech being different brought me to this state - a software engineer, a founder of the Australia wide diversity community Muses Code JS, a co-organizer of the international organization Women Who Code, Google Developer Expert in Web technologies and international speaker. Being different is great!`,
      SessionId: 'keynote',
      Presenters: [
        {
          Bio: `Tanya Butenko is passionate about free education and diversity and doing all she can to support and promote women in IT. Teacher, translator, manager previously, nowadays software engineer and IT community activist.

After finishing GeneralAssembly 4 years ago on web-development immersive 3-month course Tanya steps into IT world and started her journey as a web developer. Today she is working in Hireup as a software engineer, co-organizer of Women Who Code Sydney chapter, Muses Code JS (previously known as NodeGirls) Founder, CEO. Also Google Developer Expert in Web Technologies and international speaker. She is much into JavaScript and tech communities and that is where you can meet her in person across Australia.`,
          firstName: 'Tanya',
          lastName: 'Butenko',
          photo: '/static/images/2019/tanya-keynote.JPG',
          tagline: `#js and #nodejs developer, founder of @MusesCodeJS, free coding events enthusiast, @WWCSyd co-org, International speaker, #mentor @GoogleDevExpert`,
          twitter: 'ButenkoMe',
          url: 'https://musescodejs.org/',
        },
      ],
      Tags: ['keynote'],
      SessionTitle: 'It is OK to be Different',
      RecommendedAudience: '',
      SessionLength: '',
      TrackType: 'keynote',
      Year: '2019',
    },
    {
      SessionId: 'locknote',
      SessionAbstract: `Have you ever felt like a fraud? Like you did not deserve the opportunities in front of you? Have you ever thought "why me, I should not be here"?

Alternatively, have you seen a talented colleague not recognising their own achievements? A colleague hesitant to take on a new role?

This is imposter syndrome; I encounter it constantly and fight against it in myself and others. I want you to unite with me in this battle; for yourself, your colleagues and friends.

Join me as I share my experiences with imposter syndrome, how I have fought against it and how you can join the fight.`,
      SessionTitle: 'Battles of an imposter',
      Tags: ['locknote'],
      RecommendedAudience: '',
      SessionLength: '',
      TrackType: 'locknote',
      Year: '2019',
      Presenters: [
        {
          Bio: `Melissa Houghton is a Senior Developer at Readify. She has a passion for technology, learning and giving back to the community. She is an organiser for DDD Perth and has previously been involved in other NFP organisations such as CoderDojo and Rotary Youth Leadership Camps. Originally from California, Melissa loves to travel, drink wine and learn new things.`,
          firstName: 'Melissa',
          lastName: 'Houghton',
          photo: '/static/images/2019/melissa-locknote.jpg',
          tagline:
            'Senior Software Developer @Readify | Organiser @DDDPerth  conference | Traveller | Wine lover 🍷',
          twitter: 'meliss_houghton',
          url: '',
        },
      ],
    },
  ],

  ConferenceFeedbackLink: '',
  SessionFeedbackLink: '',
}

export default Conference
