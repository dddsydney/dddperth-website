import { Conference, Dates, MenuItem } from './types'

export default function Menu(conference: Conference, dates: Dates) {
  let extension = ''
  if ((global as any).__NEXT_DATA__ && (global as any).__NEXT_DATA__.nextExport) {
    extension = '.html'
  }

  const topMenu: MenuItem[] = [
    {
      href: '/',
      name: 'Home',
    },
    {
      href: '/about' + extension,
      name: 'About',
    },
    {
      href: '/sponsorship' + extension,
      name: 'Sponsorship',
    },
  ]

  if (dates.RegistrationOpen) {
    topMenu.push({
      href: '/tickets' + extension,
      name: 'Tickets',
    })
  }

  if (!conference.HideVenue) {
    topMenu.push({
      href: '/venue' + extension,
      name: 'Venue',
    })
  }

  if (dates.AcceptingPresentations) {
    topMenu.push({
      href: '/cfp' + extension,
      name: 'CFP',
    })
  }

  if (dates.VotingOpen) {
    topMenu.push({
      href: '/vote' + extension,
      name: 'Vote',
    })
  }

  topMenu.push({
    href: '/agenda' + extension,
    name: 'Agenda',
  })

  if (conference.Socials.Blog) {
    topMenu.push({
      href: conference.Socials.Blog,
      name: 'Blog',
    })
  }

  topMenu.push({
    href: '/faq' + extension,
    name: 'FAQs',
  })

  return {
    Top: topMenu,
    // tslint:disable-next-line:object-literal-sort-keys
    Footer: [
      {
        href: '/about' + extension,
        name: 'About Us',
      },
      {
        href: '/code-of-conduct' + extension,
        name: 'Code of Conduct',
      },
      {
        href: '/contact' + extension,
        name: 'Contact',
      },
    ] as MenuItem[],
  }
}
