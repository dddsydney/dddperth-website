import * as React from 'react'
import { Fragment } from 'react'
import dddAgendaPage, { AgendaPageParameters, AgendaPageProps } from '../../components/dddAgendaPage'
import withPageMetadata from '../../components/global/withPageMetadata'
import Sponsors from '../../components/sponsors'
import From2016 from '../../config/2016'
import { SponsorType } from '../../config/types'

class Agenda2016 extends React.Component<AgendaPageProps> {
  static getAgendaPageParams(): AgendaPageParameters {
    return {
      conferenceInstance: '2016',
      numTracks: 3,
      sessionsUrl: 'https://dddsydney-api.azurewebsites.net/api/Get-Sessions?code=kbmszJp7okUb7Oc0fVgrNDy33mi4/5UG21pIjB9wZEhK/zREBBYQfQ==&year=2016',
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
              <SessionCell isKeynote={true} sessionId="4668ed8a-f26b-407b-b78e-70942ce6eb69" />
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
              <SessionCell sessionId="7b15bfb2-aad9-4c01-8832-9f81cd13e76d" />
              <SessionCell sessionId="1368bbce-067f-4a99-9348-f8149914bb72" />
              <SessionCell sessionId="81cc1e1e-4fcb-47c9-b4f0-cc60776dab52" />
            </tr>

            <tr className="breadth-row">
              <td className="time">11:00</td>
              <td colSpan={3} className="breadth">
                Morning tea
              </td>
            </tr>

            <tr>
              <td className="time">11:20</td>
              <SessionCell sessionId="3f2d7eda-640a-45b1-946f-7e1323a8d0b9" />
              <SessionCell sessionId="3d9173c6-9309-4336-9cf6-89ae999eba5e" />
              <SessionCell sessionId="967e4966-af08-4b0d-b6d0-0683ed61d52f" />
            </tr>

            <tr className="breadth-row">
              <td className="time">12:10</td>
              <td colSpan={3} className="breadth">
                Lunch
              </td>
            </tr>

            <tr>
              <td className="time">13:10</td>
              <SessionCell sessionId="4a650045-2f77-4439-bf03-8009fb947444" />
              <SessionCell sessionId="43c98752-0898-4654-9bd6-486707f36e13" />
              <SessionCell sessionId="20312f80-bd26-4aa2-8c55-75a781613744" />
            </tr>

            <tr className="breadth-row">
              <td className="time">14:00</td>
              <td colSpan={3} className="breadth">
                Break
              </td>
            </tr>

            <tr>
              <td className="time">14:20</td>
              <SessionCell sessionId="6f34e04d-991c-44d7-8242-165848e796b1" />
              <SessionCell sessionId="259be528-26cd-4a62-b1ae-af7c534e6865" />
              <SessionCell sessionId="747d3437-1d1a-483e-8e88-72a04a9c3b57" />
            </tr>

            <tr className="breadth-row">
              <td className="time">15:20</td>
              <SessionCell sessionId="b302ca29-6f72-47b8-adb1-282708ff92d8" />
              <SessionCell sessionId="46844720-f562-4b0b-83ed-1b43c27ba580" />
              <SessionCell sessionId="9cfc37a2-e2de-4675-8cac-a8208d1e3668" />
            </tr>

            <tr className="breadth-row keynote">
              <td className="time">16:20</td>
              <SessionCell isLocknote={true} sessionId="e1e865dd-73c4-4494-a4a3-d63ef481d3e5" />
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
                <em><a href="http://www.lordgladstone.com.au/">Lord Gladstone</a></em>
              </td>
            </tr>
          </tbody>
        </table>
        <Sponsors
          show={true}
          hideUpsell={true}
          sponsors={From2016.Sponsors.filter(s => s.type === SponsorType.Gold || s.type === SponsorType.Platinum)}
        />
      </Fragment>
    )
  }
}

export default withPageMetadata(dddAgendaPage(Agenda2016, Agenda2016.getAgendaPageParams()))
