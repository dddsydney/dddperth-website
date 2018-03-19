import { Fragment } from 'react'
import * as React from 'react'
import { Venue } from './types'

// tslint:disable:object-literal-sort-keys
const venue: Venue = {
  Name: 'UTS Ultimo Campus, level 3 of the Peter Johnson Building (CB06)',
  Address: '702-730 Harris Street, Broadway, NSW 2007',
  Latitude: -33.8830694,
  Longitude: 151.1999196,
  Afterparty: '',
  AfterpartyAddress: '',
  Wifi: "Unforunately WiFi won't be available on the day.",
  Accommodation: undefined,
  Car: (
    <Fragment>
      Paid car parking is available around the university but keep in mind that this is pretty central so it won't be
      easy to find nor will it be cheap. Catch public transport ;).
    </Fragment>
  ),
  Train: <Fragment>The nearest train station is Central Station and UTS is a 2 minute walk from there.</Fragment>,
  Bus: <Fragment>There's plenty of buses that run down Paramatta Road and stop at UTS.</Fragment>,
}

export default venue
