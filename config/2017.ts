import { Sponsor, SponsorType } from './types'

interface From2017 {
  YouTubePlaylistUrl: string
  YouTubeKeynoteEmbedUrl: string
  YouTubeLocknoteEmbedUrl: string
  FlickrAlbumUrl: string
  HandbookUrl: string
  Sponsors: Sponsor[]
}

const From2017: From2017 = {
  FlickrAlbumUrl: '',
  HandbookUrl: '',
  Sponsors: [
    // Platinum
    {
      imageUrl: '/static/images/sponsors/ndc-sydney.png',
      name: 'NDC Sydney',
      type: SponsorType.Platinum,
      url: 'https://www.ndcsydney.com/',
    },
    {
      imageUrl: '/static/images/sponsors/readify.png',
      name: 'Readify',
      type: SponsorType.Platinum,
      url: 'https://readify.net/',
    },
    // Gold
    {
      imageUrl: '/static/images/sponsors/auth0.png',
      name: 'Auth0',
      type: SponsorType.Gold,
      url: 'https://auth0.com/',
    },
    {
      imageUrl: '/static/images/sponsors/microsoft.png',
      name: 'Microsoft',
      type: SponsorType.Gold,
      url: 'https://www.microsoft.com/en-au',
    },
    {
      imageUrl: '/static/images/sponsors/octopus-deploy.png',
      name: 'Octopus Deploy',
      type: SponsorType.Gold,
      url: 'https://www.octopus.com/',
    },
    {
      imageUrl: '/static/images/sponsors/particular.png',
      name: 'Progress',
      type: SponsorType.Silver,
      url: 'http://telerik.com/',
    },
    // Standard
    {
      imageUrl: '/static/images/sponsors/aspose.png',
      name: 'Aspose',
      type: SponsorType.Standard,
      url: 'http://aspose.com/',
    },
    // Services
    {
      imageUrl: '/static/images/sponsors/ssw.png',
      name: 'SSW TV',
      serviceProvided: 'Media Partner',
      type: SponsorType.Service,
      url: 'https://ssw.tv',
    },
  ],
  YouTubeKeynoteEmbedUrl: 'https://www.youtube.com/embed/deDOdF69VLA',
  YouTubeLocknoteEmbedUrl: 'https://www.youtube.com/embed/Yo37Wnkyzt4',
  YouTubePlaylistUrl: 'https://www.youtube.com/watch?v=Yo37Wnkyzt4&list=PLpiOR7CBNvlq1hJIOT9iMCc2-eIIHgg9p',
}

export default From2017
