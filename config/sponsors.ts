import { Sponsor, SponsorType } from './types'

const Sponsors: Sponsor[] = [
  {
    imageUrl: '/static/images/sponsors/2019-ndc-sydney.png',
    name: 'NDC Sydney',
    type: SponsorType.Silver,
    url: 'https://ndcsydney.com',
  },
  {
    imageUrl: '/static/images/sponsors/2019-telstra-purple-logo.png',
    name: 'Telstra Purple',
    type: SponsorType.Gold,
    url: 'https://www.telstra.com.au/purple',
  },
  {
    imageUrl: '/static/images/sponsors/2019-GitHub_Logo.png',
    name: 'GitHub',
    type: SponsorType.Gold,
    url: 'https://github.com',
  },
  {
    imageUrl: '/static/images/sponsors/2019-Microsoft-logo_rgb_c-gray.png',
    name: 'Microsoft Cloud Advocates & Microsoft Australia',
    type: SponsorType.Gold,
    url: 'https://developer.microsoft.com/en-us/advocates/index.html',
  },
  {
    imageUrl: '/static/images/sponsors/2019-muses-tm-logo.png',
    name: 'Muses Code JS',
    type: SponsorType.Community,
    url: 'https://musescodejs.org/sydney.html',
  },
  {
    imageUrl: '/static/images/sponsors/yow.png',
    name: 'YOW!',
    type: SponsorType.Service,
    url: 'https://www.yowconference.com/',
    serviceProvided: "Lock Note Speaker"
  }
]

export default Sponsors
