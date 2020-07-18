import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { MdEdit, MdDelete } from 'react-icons/md';

const ContactItem = () => {
  return (
    <div className="card my-4">
      <div className="card-body">
        <div className="contact-wrap">
          <div className="contact">
            <h3>John Doe</h3>
            <div>
              <FaPhone className="mb-1 mr-1 text-purple" />{' '}
              <span>555-555-5555</span>
            </div>
            <div>
              <IoMdMail className="mr-1 text-purple" />{' '}
              <span>rakesh.rankawat@outlook.com</span>
            </div>
          </div>

          <div className="action">
            <Link to="/contacts/edit/1">
              <MdEdit size={20} className="text-muted" />
            </Link>
            <MdDelete size={20} className="text-danger" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
