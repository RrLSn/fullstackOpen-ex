import './App.css';

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you're {props.age} years old</p>
    </div>
  )
}

const SayingHello = () => {
  return(
  <div>
    <p>How're you doing </p>
  </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by 
      <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 10
  const friends = [ 'Leevi', 'Venla']
  return (
    <>
      <h1>Greetings</h1>
      <Hello name= "Maya" age= {26+10}/>
      <Hello name= {nimi} age= {ika}/>
      <p>{friends}</p>
      <SayingHello />
      <Footer />
    </>
  )
}

export default App
