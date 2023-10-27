import React from 'react';

function Form() {
  return (
    <>
    <div className='formDiv'>
    <h3>signup for more</h3>
    <form className='formClas'>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <br/>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <br/>
      <button type="submit">Submit</button>
    </form>
    </div>
    </>
  );
};

export default Form;
