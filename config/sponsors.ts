import { Sponsor, SponsorType } from './types'

const Sponsors: Sponsor[] = [{
  imageUrl: '/static/images/sponsors/ndc-sydney.png',
  name: 'NDC Sydney',
  type: SponsorType.Silver,
  url: 'https://ndcsydney.com'
}, {
  imageUrl: '/static/images/sponsors/readify.png',
  name: 'Readify & Telstra BTS',
  type: SponsorType.Gold,
  url: 'https://readify.net'
}, {
  imageUrl: '/static/images/sponsors/aspose.png',
  name: 'Aspose',
  type: SponsorType.Standard,
  url: 'http://aspose.com/',
}]

export default Sponsors
