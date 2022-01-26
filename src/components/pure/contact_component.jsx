import React, {useState} from 'react';
import PropTypes from 'prop-types';


const ContactComponent = ({contact}) => {
    
    const [connected, setConnected] = useState(contact.connected);

    const changeConnected = () => {
        if(connected){
            setConnected(false);
        }else{
            setConnected(true);
        }
    }

    return (
        <div>
            <span>
                NAME: {contact.name}
            </span>
            <span>
                SURNAME: {contact.surName}
            </span>
            <span>
                EMAIL: {contact.email}
            </span>
            <span>
                CONNECTED: {connected ? 'CONNECTED' : 'DISCONNECTED'}
            </span>
            <div>
                <button onClick={changeConnected}>
                    CHANGE CONNECT
                </button>
            </div>
        </div>
    );
};


ContactComponent.propTypes = {
    name: PropTypes.string, surName: PropTypes.string, email: PropTypes.string, connected: PropTypes.bool
};


export default ContactComponent;
