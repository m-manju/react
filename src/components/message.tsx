import React from 'react'

interface Props {
  name:string;
  age:number;
};

const Message: React.FC<Props>=({name, age}) => {
    return <h1 className="heading">Hello {name}-{age}!!</h1>;
};

export default Message;

