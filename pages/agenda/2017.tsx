import * as React from 'react'
import { Fragment } from 'react'
import dddAgendaPage, { AgendaPageParameters, AgendaPageProps } from '../../components/dddAgendaPage'
import withPageMetadata from '../../components/global/withPageMetadata'
import Sponsors from '../../components/sponsors'
import From2017 from '../../config/2017'
import { SponsorType } from '../../config/types'

class Agenda2017 extends React.Component<AgendaPageProps> {
  static getAgendaPageParams(): AgendaPageParameters {
    return {
      conferenceInstance: '2017',
      numTracks: 3,
      sessionsUrl: 'https://api.dddsydney.com.au/v1/sessions/2017',
    }
  }

  render() {
    const SessionCell = this.props.SessionCell
    return (
      <Fragment>
        <table className="agenda-row table">
          <thead>
            <tr>
              <th style={{ width: '4%' }} />
              <th style={{ width: '32%' }}>
                <strong className="dark-green">Green</strong>
                <br />
                <em>CB06.03.28 - GUTHRIE THEATRE</em>
              </th>
              <th style={{ width: '32%' }}>
                <strong className="light-green">Blue</strong>
                <br />
                <em>CB06.03.022 - LECTURE THEATRE</em>
              </th>
              <th style={{ width: '32%' }}>
                <strong className="green">Red</strong>
                <br />
                <em>CB06.03.056 - COLLABORATIVE THEATRE</em>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="breadth-row">
              <td className="time">8:20</td>
              <td colSpan={3} className="breadth">
                Registration
                <br />
                <em>UTS CBD Campus</em>
                <br />
                Level 3 of the Peter Johnson Building
              </td>
            </tr>

            <tr className="breadth-row">
              <td className="time">8:50</td>
              <td colSpan={3} className="breadth">
                <strong>Welcome and house-keeping</strong>
                <br />
              </td>
            </tr>

            <tr className="breadth-row keynote">
              <td className="time">9:00</td>
              <SessionCell isKeynote={true} sessionId="89085948-7178-408e-a997-385991aaa799" />
            </tr>

            <tr className="breadth-row">
              <td className="time">10:00</td>
              <td colSpan={3} className="breadth">
                <strong>Changeover</strong>
                <br />
              </td>
            </tr>

            <tr>
              <td className="time">10:10</td>
              <SessionCell sessionId="c850dc5c-4c1d-4fb0-89ec-47ec9409a333" />
              <SessionCell sessionId="37e40c53-6ea2-42de-a01a-4b084eaf7b0a" />
              <SessionCell sessionId="77027e2d-e136-4c0c-86ec-f45a6adb58b5" />
            </tr>

            <tr className="breadth-row">
              <td className="time">11:00</td>
              <td colSpan={3} className="breadth">
                Morning tea
              </td>
            </tr>

            <tr>
              <td className="time">11:20</td>
              <SessionCell sessionId="93ac8d7f-9db6-4572-a94d-fe783605131b" />
              <SessionCell sessionId="e2a30ddd-dda6-4896-baf8-337a24e3861d" />
              <SessionCell sessionId="01b18fd2-bf7d-48e9-8ceb-75f4af382ad6" />
            </tr>

            <tr className="breadth-row">
              <td className="time">12:10</td>
              <td colSpan={3} className="breadth">
                Lunch
              </td>
            </tr>

            <tr>
              <td className="time">13:10</td>
              <SessionCell sessionId="ec223823-6af1-48a5-bd0b-473fe3ce7ced" />
              <SessionCell sessionId="afeafd0a-adc7-4c56-874f-a8c402b03f9c" />
              <SessionCell sessionId="e707c54c-220c-499b-a5ec-4edfdb558c9e" />
            </tr>

            <tr className="breadth-row">
              <td className="time">14:00</td>
              <td colSpan={3} className="breadth">
                Break
              </td>
            </tr>

            <tr>
              <td className="time">14:20</td>
              <SessionCell sessionId="fb138893-311c-4f8c-bb15-4a67c0486f59" />
              <SessionCell sessionId="628e8ae8-ceb5-40d1-91bf-1a0fe949dcb6" />
              <SessionCell sessionId="143f7a50-a051-4107-b491-e570c818e4b5" />
            </tr>

            <tr className="breadth-row">
              <td className="time">15:20</td>
              <SessionCell sessionId="b14bebd8-b882-4cdd-8890-d68a28f0c051" />
              <SessionCell sessionId="e9631c21-0ddc-48ff-97ec-67424d980656" />
              <SessionCell sessionId="0c647201-69f8-4906-98f8-f68a3a23041b" />
            </tr>

            <tr className="breadth-row keynote">
              <td className="time">16:20</td>
              <SessionCell isLocknote={true} sessionId="ccd837fe-890b-4b73-b15d-e654f97541b2" />
            </tr>

            <tr className="breadth-row">
              <td className="time">17:00</td>
              <td colSpan={3} className="breadth">
                <strong>Giveaways and wrap up</strong>
              </td>
            </tr>

            <tr className="breadth-row">
              <td className="time">16:00</td>
              <td colSpan={3} className="breadth">
                <strong>Afterparty</strong>
                <br />
                <em>
                  <a href="http://www.thechippohotel.com.au/" title="Chippo Hotel">
                    Chippo Hotel
                  </a>
                </em>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>Media</h2>

        <div className="text-center">
          <div className="responsive-video">
            <iframe
              width="560"
              height="315"
              src={From2017.YouTubeKeynoteEmbedUrl}
              frameBorder="0"
              allowFullScreen
              style={{ display: 'inline-block', marginRight: '20px' }}
            />
          </div>
          <div className="responsive-video">
            <iframe
              width="560"
              height="315"
              src={From2017.YouTubeLocknoteEmbedUrl}
              frameBorder="0"
              allowFullScreen
              style={{ display: 'inline-block' }}
            />
          </div>
        </div>
        <p>
          <a href={From2017.YouTubePlaylistUrl} target="_blank">
            YouTube Playlist
          </a>{' '}
        </p>
        <Sponsors
          show={true}
          sponsors={From2017.Sponsors.filter(s => s.type === SponsorType.Gold || s.type === SponsorType.Platinum)}
        />
      </Fragment>
    )
  }
}

export default withPageMetadata(dddAgendaPage(Agenda2017, Agenda2017.getAgendaPageParams()))
