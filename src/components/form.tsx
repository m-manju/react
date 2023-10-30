import React from 'react';

const Form: React.FC =() => {
  return (
    <>
    <div className='formDiv'>
    <h3>signup for more</h3>
    <form className='formClas'>
      <label id="name">Username: </label>
      <input type="text" id="name" name="name" />
      <br/>
      <label id="email">Email ID : </label>
      <input type="email" id="email" name="email" />
      <br/>
      <label id="password">Password : </label>
      <input type="password" id="password" name="password" />
      <br/>
      <button type="submit">Submit</button>
    </form>
    </div>
    </>
  );
};

export default Form;
