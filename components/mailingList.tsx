import React, { Fragment, StatelessComponent } from 'react'

interface MailingListProps {
  mailingList: string
}

const MailingList: StatelessComponent<MailingListProps> = ({ mailingList }) => (
  <Fragment>
    <section className="sponsors">
      <h2>Mailing List</h2>
      <p>
        Want to stay up to date with what's happening with DDD Sydney? Join our{' '}
        <a className="maillink" href={mailingList}>
          mailing list
        </a>
        !
      </p>
    </section>
  </Fragment>
)

export default MailingList
