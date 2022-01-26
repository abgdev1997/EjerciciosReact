import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact_component';


const ContactList = () => {

    const defaultContact = new Contact('Prueba', 'PruebaPrueba', 'prueba@prueba,prueba', false);

    return (
        <div>
            <div>
                YOUR CONTACTS:
            </div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};


export default ContactList;
