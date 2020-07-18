import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import ContactItem from './ContactItem';
import FIlterContacts from './FIlterContacts';

const Contacts = () => {
  return (
    <Fragment>
      <Link to="/contacts/add" className="btn btn-purple float-right my-5">
        <MdAdd /> Add Contact
      </Link>
      <FIlterContacts />

      <ContactItem />
    </Fragment>
  );
};

export default Contacts;
