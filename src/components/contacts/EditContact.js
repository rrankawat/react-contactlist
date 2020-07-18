import React, { Fragment } from 'react';

const EditContact = () => {
  return (
    <Fragment>
      <h1 className="my-5 text-center">
        Edit <span className="text-purple">Contact</span>
      </h1>

      <form className="w-50 mx-auto">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Name"
          />
        </div>
        <button className="btn btn-purple btn-block mt-4">
          Update Contact
        </button>
      </form>
    </Fragment>
  );
};

export default EditContact;
