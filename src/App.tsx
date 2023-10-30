import Message from './components/message'
import ListGroup from './components/ListGroup'
import Images from './components/Image'
import Form from './components/form'
import "./App.css"

function App() {
  return <>
      <Message name={'manju'} age={22}/>
      <ListGroup/>
      <Images/>
      <Form/>
  </>;
}

export default App;