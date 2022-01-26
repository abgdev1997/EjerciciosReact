import React, {useState} from 'react';
import PropTypes from 'prop-types';


const ContactComponent = (props) => {
    
    const [connected, setConnected] = useState(props.connected);

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
                NAME: {props.name}
            </span>
            <span>
                SURNAME: {props.surName}
            </span>
            <span>
                EMAIL: {props.email}
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
