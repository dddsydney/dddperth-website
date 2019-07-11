import React, { Fragment } from 'react'
import dddAgendaPage, { AgendaPageParameters, AgendaPageProps } from '../../components/dddAgendaPage'
import { SafeLink } from '../../components/global/safeLink'
import withPageMetadata from '../../components/global/withPageMetadata'
import ResponsiveVideo from '../../components/responsiveVideo'
import Sponsors from '../../components/sponsors'
import From2018 from '../../config/2018'
import { SponsorType } from '../../config/types'

class Agenda2018 extends React.Component<AgendaPageProps> {
  static getAgendaPageParams(): AgendaPageParameters {
    return {
      conferenceInstance: '2018',
      numTracks: 4,
      sessionsUrl: 'https://dddsydneyapi.azurewebsites.net/v1/sessions/2018',
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
              <th style={{ width: '24%' }}>
                <strong className="dark-green">Dev - Red</strong>
                <br />
                <em>CB06.03.28 - GUTHRIE</em>
              </th>
              <th style={{ width: '24%' }}>
                <strong className="light-green">Dev - Blue</strong>
                <br />
                <em>CB06.03.022 - LECTURE</em>
              </th>
              <th style={{ width: '24%' }}>
                <strong className="green">Data &amp; Design - Green</strong>
                <br />
                <em>CB06.03.056 - COLLABORATIVE</em>
              </th>
              <th style={{ width: '24%' }}>
                <strong className="orange">Junior Dev - Orange</strong>
                <br />
                <em>CB06.03 Classrooms</em>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="breadth-row">
              <td className="time">8:00</td>
              <td colSpan={4} className="breadth">
                Registration
                <br />
                <em>UTS CBD Campus</em>
                <br />
                Level 3 of the Peter Johnson Building
              </td>
            </tr>

            <tr className="breadth-row">
              <td className="time">8:45</td>
              <td colSpan={4} className="breadth">
                Welcome and house-keeping
              </td>
            </tr>

            <tr className="breadth-row">
              <td className="time">9:00</td>
              <SessionCell isKeynote={true} sessionId="23659be8-c93d-468c-8aff-f4cf5f9e07dd" />
            </tr>

            <tr className="breadth-row">
              <td className="time">10:00</td>
              <td colSpan={4} className="breadth">
                Break/Morning Tea
              </td>
            </tr>

            <tr>
              <td className="time" rowSpan={2}>
                10:20
              </td>
              <SessionCell sessionId="044b4cf9-ed63-42a8-8415-eac92e7fbbd7" rowSpan={2} />
              <SessionCell sessionId="08e3840b-260c-4d9c-a9bf-a59bfe4ed2fc" rowSpan={2} />
              <SessionCell sessionId="598ca70a-3fab-45f2-a290-9186890f3daa" rowSpan={2} />
              <SessionCell sessionId="d814edf2-0c3d-4a3d-9568-276125146b12" />
            </tr>

            <tr>
              <SessionCell sessionId="da2adbf5-25ce-4ae8-9145-2075dcebbb9f" />
            </tr>

            <tr className="breadth-row">
              <td className="time">11:05</td>
              <td colSpan={4} className="breadth">
                Changeover
              </td>
            </tr>

            <tr>
              <td className="time">11:10</td>
              <SessionCell sessionId="2ec9ddb2-3407-46ca-99b9-ebdec3113037" />
              <SessionCell sessionId="ec49367b-54ce-4717-9aa8-1cf397eba5de" />
              <SessionCell sessionId="97203676-718a-4f5c-89ac-e2ed6e0bf2d1" />
              <SessionCell sessionId="bc558bae-6472-4ccd-ab36-6843f5543318" />
            </tr>

            <tr className="breadth-row">
              <td className="time">12:00</td>
              <td colSpan={4} className="breadth">
                Lunch
              </td>
            </tr>

            <tr>
              <td className="time" rowSpan={2}>
                13:00
              </td>
              <SessionCell sessionId="71d26355-71a1-4a23-8d91-34d118a123e3" rowSpan={2} />
              <SessionCell sessionId="8bc0c2c9-d93e-464a-ade4-be2d268bfb2f" rowSpan={2} />
              <SessionCell sessionId="968fffd4-79a8-41a6-88bb-df0a13b506ea" rowSpan={2} />
              <SessionCell sessionId="3126a2e9-84cf-456b-8167-a2e8cab6df27" />
            </tr>

            <tr>
              <SessionCell sessionId="8d9bf6b6-2fc7-4f54-b77f-ad2c2fcb26fa" />
            </tr>

            <tr className="breadth-row">
              <td className="time">13:45</td>
              <td colSpan={4} className="breadth">
                Changeover
              </td>
            </tr>

            <tr>
              <td className="time">13:50</td>
              <SessionCell sessionId="dfbab20c-8f32-4fb9-b817-992b1c476332" />
              <SessionCell sessionId="13ffa288-778f-4403-901c-343702dc41c2" />
              <SessionCell sessionId="2d44db41-ca89-4e94-b2ee-5df53ad6d781" />
              <SessionCell sessionId="a0cb51da-ccd9-41d8-8f76-76420153903a" />
            </tr>

            <tr className="breadth-row">
              <td className="time">14:40</td>
              <td colSpan={4} className="breadth">
                Afternoon Tea
              </td>
            </tr>

            <tr>
              <td className="time">15:10</td>
              <SessionCell sessionId="04e8acc9-7f7e-46af-be97-83cb68583d9a" />
              <SessionCell sessionId="098b2dd3-e0cb-4f23-ae3e-d76dbb58595f" />
              <SessionCell sessionId="0e33d782-ab30-4934-beca-924b0cb9c3d7" />
              <SessionCell sessionId="85a04db5-de65-4866-a582-5354ec59b312" />
            </tr>

            <tr className="breadth-row">
              <td className="time">15:55</td>
              <td colSpan={4} className="breadth">
                Changeover
              </td>
            </tr>

            <tr>
              <td className="time" rowSpan={2}>
                16:00
              </td>
              <SessionCell sessionId="56885b0b-e480-414b-8f52-0047cca84799" rowSpan={2} />
              <SessionCell sessionId="ac50ac1d-e7d0-43cb-ae14-c920695802a4" rowSpan={2} />
              <SessionCell sessionId="086e3c85-d78a-4ed6-bb2e-7c0a84d369d7" rowSpan={2} />
              <SessionCell sessionId="6692dedb-7746-4b61-bc64-1636e11899cd" />
            </tr>

            <tr>
              <SessionCell sessionId="4559c296-a39c-4229-8254-105542349a04" />
            </tr>

            <tr className="breadth-row">
              <td className="time">16:50</td>
              <td colSpan={4} className="breadth">
                <strong>Thank you and wrap up</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>Media</h2>

        <div className="text-center">
          <ResponsiveVideo src={From2018.YouTubeKeynoteEmbedUrl} />
          <ResponsiveVideo src={From2018.YouTubeLocknoteEmbedUrl} />
        </div>
        <p>
          <SafeLink href={From2018.YouTubePlaylistUrl} target="_blank">
            YouTube Playlist
          </SafeLink>
        </p>
        <Sponsors
          show={true}
          sponsors={From2018.Sponsors.filter(s => s.type === SponsorType.Gold || s.type === SponsorType.Platinum)}
        />
      </Fragment>
    )
  }
}

export default withPageMetadata(dddAgendaPage(Agenda2018, Agenda2018.getAgendaPageParams()))
