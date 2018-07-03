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
}, {
  imageUrl: '/static/images/sponsors/devexpress.png',
  name: 'DevExpress',
  type: SponsorType.Silver,
  url: 'https://devexpress.com'
}, {
  imageUrl: '/static/images/sponsors/2018-Progress_Telerik.png',
  name: 'Progress',
  type: SponsorType.Gold,
  url: 'https://www.progress.com/'
}]

export default Sponsors
