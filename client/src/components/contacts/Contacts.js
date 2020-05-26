import React, { Fragment, useContext, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, filtered } = contactContext;

    const nodeRef = useRef(null)

    if (contacts.length === 0) {
        return <h4>Please add a contact</h4>
    }

    return (
        <Fragment>
            <TransitionGroup>
                {filtered !== null
                    ? filtered.map(contact =>
                        <CSSTransition nodeRef={nodeRef} key={contact.id} timeout={500} classNames="item">
                            <ContactItem contact={contact} />
                        </CSSTransition>
                    )
                    : contacts.map(contact =>
                        <CSSTransition nodeRef={nodeRef} key={contact.id} timeout={500} classNames="item">
                            <ContactItem contact={contact} />
                        </CSSTransition>
                    )}
            </TransitionGroup>
        </Fragment>
    )
}

export default Contacts
