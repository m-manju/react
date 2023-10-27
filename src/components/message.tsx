
function Message() {
    let name:string;
    let age:number;

    name ='Manju';
    age = 22;

    if(age< 25)
      return <h1 className="heading">Hello {name}!!</h1>;
    return <h1>Hello World</h1>;
}

export default Message;