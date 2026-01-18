import React from 'react';
import FormContact from './FormContact'; // Tu componente de formulario
import contactdetailclasses from './ContactDetails.module.css';
import { PushpinTwoTone } from '@ant-design/icons';

const ContactDetails = () => {
  return (
    <div className={contactdetailclasses['contact-details__wrapper']}>
      {/* Formulario */}
   

      {/* Sección de Contactos */}
      <div className={contactdetailclasses['contact-info-section']}>
        {/* Dirección y Contactos Generales */}
        <ul className={contactdetailclasses['contact-details__lists']}>
          <li>
            <h4>Address</h4>
            <p>
              2452 Druid Hill Avenue, Baltimore, MD, 21217
            </p>
          </li>
          <li>
            <h4>Call us:</h4>
            <p>
              410-799-9552
            </p>
          </li>
          <li>
            <h4>Email us:</h4>
            <p>
              sales@bisonteindustrial.com
            </p>
          </li>
        </ul>

        
      </div>
    </div>
  );
};

export default ContactDetails;
