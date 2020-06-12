import React, { Fragment, useContext, useRef, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'
import Spinner from '../layout/Spinner'

const Contacts = () => {
  const { contacts, filtered, getContacts, loading } = useContext(ContactContext)

  useEffect(() => {
    getContacts()
    // eslint-disable-next-line
  }, [])

  const nodeRef = useRef(null)

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a Contact</h4>
  }

  return (
    <Fragment>
      {(contacts !== null) & !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((contact) => (
                <CSSTransition nodeRef={nodeRef} key={contact._id} timeout={500} classNames="item">
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition nodeRef={nodeRef} key={contact._id} timeout={500} classNames="item">
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  )
}

export default Contacts
