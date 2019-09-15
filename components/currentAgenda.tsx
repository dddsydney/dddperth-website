import React, { Fragment, StatelessComponent } from 'react'
import Agenda, { AgendaProps } from './agenda'

const changeOverRow = time => (
  <tr className="breadth-row">
    <td className="time">{time}</td>
    <td colSpan={4} className="breadth">
      Changeover
    </td>
  </tr>
)

const CurrentAgenda: StatelessComponent<AgendaProps> = ({ SessionCell }) => (
  <Fragment>
    <div style={{ overflow: 'auto' }}>
      <p style={{ marginTop: '0' }}>Welcoming, keynote and closing are held in the Gutherie Theater.</p>
      <table className="agenda-row table">
        <thead>
          <tr>
            <th style={{ width: '4%' }} />
            <th style={{ width: '24%' }}>
              <strong className="dark-green">Gutherie Theater</strong>
              <br />
              <em>CB06.03.28</em>
            </th>
            <th style={{ width: '24%' }}>
              <strong className="light-green">Lecture Hall 1</strong>
              <br />
              <em>CB06.03.022</em>
            </th>
            <th style={{ width: '24%' }}>
              <strong className="green">Lecture Hall 2</strong>
              <br />
              <em>CB06.03.056</em>
            </th>
            <th style={{ width: '24%' }}>
              <strong className="orange">Classrooms</strong>
              <br />
              <em>CB06.03</em>
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
            <SessionCell isKeynote={true} sessionId="keynote" />
            {/* <td colSpan={4} className="keynote session">
              Keynote
            </td> */}
          </tr>

          {changeOverRow('09:45')}

          <tr>
            <td className="time" rowSpan={2}>
              09:50
            </td>
            <SessionCell sessionId="137662" rowSpan={2} />
            <SessionCell sessionId="136336" />
            <SessionCell sessionId="137603" />
            <SessionCell sessionId="134743" rowSpan={2} />
          </tr>

          <tr>
            <SessionCell sessionId="137598" />
            <SessionCell sessionId="137630" />
          </tr>

          <tr className="breadth-row">
            <td className="time">10:35</td>
            <td colSpan={4} className="breadth">
              Break/Morning Tea
            </td>
          </tr>

          <tr>
            <td className="time">11:00</td>
            <SessionCell sessionId="137613" />
            <SessionCell sessionId="137616" />
            <SessionCell sessionId="136990" />
            <SessionCell sessionId="137504" />
          </tr>

          {changeOverRow('11:45')}

          <tr>
            <td className="time" rowSpan={2}>
              11:50
            </td>
            <SessionCell sessionId="137608" />
            <SessionCell sessionId="132220" />
            <SessionCell sessionId="137506" />
            <SessionCell sessionId="137305" />
          </tr>

          <tr>
            <SessionCell sessionId="137017" />
            <SessionCell sessionId="137659" />
            <SessionCell sessionId="135759" />
            <SessionCell sessionId="136601" />
          </tr>

          <tr className="breadth-row">
            <td className="time">12:35</td>
            <td colSpan={4} className="breadth">
              Lunch
            </td>
          </tr>

          <tr>
            <td className="time">13:20</td>
            <SessionCell sessionId="134145" />
            <SessionCell sessionId="132520" />
            <SessionCell sessionId="137589" />
            <SessionCell sessionId="131751" />
          </tr>

          {changeOverRow('14:05')}

          <tr>
            <td className="time">14:10</td>
            <SessionCell sessionId="132340" />
            <SessionCell sessionId="137591" />
            <SessionCell sessionId="136635" />
            <td>Chill out zone</td>
          </tr>

          {changeOverRow('14:55')}

          <tr>
            <td className="time" rowSpan={2}>
              15:00
            </td>
            <SessionCell sessionId="131978" rowSpan={2} />
            <SessionCell sessionId="137599" />
            <SessionCell sessionId="136599" rowSpan={2} />
            <td>Chill out zone</td>
          </tr>

          <tr>
            <SessionCell sessionId="137031" />
          </tr>

          <tr className="breadth-row">
            <td className="time">15:45</td>
            <td colSpan={4} className="breadth">
              Afternoon Tea
            </td>
          </tr>

          <tr className="breadth-row">
            <td className="time">16:10</td>
            <SessionCell isKeynote={true} sessionId="locknote" />
          </tr>

          <tr className="breadth-row">
            <td className="time">16:40</td>
            <td colSpan={4} className="breadth">
              <strong>Thank you and wrap up</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Fragment>
)

export default Agenda(CurrentAgenda, { numTracks: 4 })
