import { Sponsor, SponsorType } from './types'

interface From2018 {
  YouTubePlaylistUrl: string
  YouTubeKeynoteEmbedUrl: string
  YouTubeLocknoteEmbedUrl: string
  FlickrAlbumUrl: string
  HandbookUrl: string
  Sponsors: Sponsor[]
}

const From2018: From2018 = {
  FlickrAlbumUrl: '',
  HandbookUrl: '',
  Sponsors: [
    {
      imageUrl: '/static/images/sponsors/ndc-sydney.png',
      name: 'NDC Sydney',
      type: SponsorType.Silver,
      url: 'https://ndcsydney.com',
    },
    {
      imageUrl: '/static/images/sponsors/readify.png',
      name: 'Readify',
      type: SponsorType.Platinum,
      url: 'https://readify.net/',
    },
    {
      imageUrl: '/static/images/sponsors/aspose.png',
      name: 'Aspose',
      type: SponsorType.Standard,
      url: 'http://aspose.com/',
    },
    {
      imageUrl: '/static/images/sponsors/devexpress.png',
      name: 'DevExpress',
      type: SponsorType.Silver,
      url: 'https://devexpress.com',
    },
    {
      imageUrl: '/static/images/sponsors/2018-Progress_Telerik.png',
      name: 'Progress',
      type: SponsorType.Gold,
      url: 'https://www.progress.com/',
    },
    {
      imageUrl: '/static/images/sponsors/microsoft.png',
      name: 'Microsoft',
      type: SponsorType.Gold,
      url: 'https://www.microsoft.com/en-au',
    },
    {
      imageUrl: '/static/images/sponsors/ssw.png',
      name: 'SSW TV',
      serviceProvided: 'Media Partner',
      type: SponsorType.Service,
      url: 'https://ssw.tv',
    },
    {
      imageUrl: '/static/images/sponsors/2018-lendi.png',
      name: 'Lendi',
      type: SponsorType.Gold,
      url: 'https://www.lendi.com.au',
    },
    {
      imageUrl: '/static/images/sponsors/2018-nib.png',
      name: 'nib',
      type: SponsorType.Standard,
      url: 'https://www.nib.com.au',
    },
  ],
  YouTubeKeynoteEmbedUrl: 'https://www.youtube.com/embed/hr9uxTXoiD8',
  YouTubeLocknoteEmbedUrl: '',
  YouTubePlaylistUrl: 'https://www.youtube.com/playlist?list=PLIKIpyOq-GLWyNzQY-PRXeT7UXGLC3QQc',
}

export default From2018
