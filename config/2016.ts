import { Sponsor, SponsorType } from './types'

interface From2016 {
  YouTubePlaylistUrl: string
  YouTubeKeynoteEmbedUrl: string
  YouTubeLocknoteEmbedUrl: string
  FlickrAlbumUrl: string
  HandbookUrl: string
  Sponsors: Sponsor[]
}

const From2016: From2016 = {
  FlickrAlbumUrl: "",
  HandbookUrl: "",
  Sponsors: [
    // Platinum
    {
      imageUrl: "/static/images/sponsors/ndc-sydney.png",
      name: "NDC Sydney",
      type: SponsorType.Platinum,
      url: "https://www.ndcsydney.com/"
    },
    // Gold
    {
      imageUrl: "/static/images/sponsors/readify.png",
      name: "Readify",
      type: SponsorType.Gold,
      url: "https://readify.net/"
    },
    {
      imageUrl: "/static/images/sponsors/microsoft.png",
      name: 'Microsoft',
      type: SponsorType.Gold,
      url: "https://www.microsoft.com/en-au"
    },
    {
      imageUrl: "/static/images/sponsors/campaignmonitor.png",
      name: "Campaign Monitor",
      type: SponsorType.Gold,
      url: "https://www.campaignmonitor.com/careers/"
    },
    {
      imageUrl: "/static/images/sponsors/cba.png",
      name: "CBA",
      type: SponsorType.Gold,
      url: "https://www.cba.com.au"
    },
    // Silver
    {
      imageUrl: "/static/images/sponsors/particular.png",
      name: "Particular Software",
      type: SponsorType.Silver,
      url: "http://particular.net/"
    },
    {
      imageUrl: "/static/images/sponsors/particular.png",
      name: "Progress",
      type: SponsorType.Silver,
      url: "http://telerik.com/"
    },
    {
      imageUrl: '/static/images/sponsors/web-directions.svg',
      name: 'Web Directions',
      type: SponsorType.Silver,
      url: 'https://webdirections.com',
    },
    // Standard
    {
      imageUrl: '/static/images/sponsors/aspose.png',
      name: 'Aspose',
      type: SponsorType.Standard,
      url: 'http://aspose.com/',
    },
    {
      imageUrl: '/static/images/sponsors/pluralsight.png',
      name: 'Pluralsight',
      type: SponsorType.Standard,
      url: 'https://pluralsight.com',
    },
    // Services
    {
      imageUrl: '/static/images/sponsors/xamconsulting.png',
      name: 'XAM Consulting',
      serviceProvided: 'Popcorn Machine',
      type: SponsorType.Service,
      url: 'http://www.xam-consulting.com/',
    },
    {
      imageUrl: '/static/images/sponsors/ssw.png',
      name: 'SSW TV',
      serviceProvided: 'Media Partner',
      type: SponsorType.Service,
      url: 'https://ssw.tv',
    },
  ],
  YouTubeKeynoteEmbedUrl: "",
  YouTubeLocknoteEmbedUrl: "",
  YouTubePlaylistUrl: "",
}

export default From2016
