import { useState } from 'react'

const App = () => {
  const [newName, setNewName] = useState('')
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  

  const addContacts = (e) => {
    e.preventDefault()
    setPersons(persons.concat({name: newName}))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContacts}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h1>Numbers</h1>
      <ul>
        {
          persons.map((person,index) => {
            return (
              <h4 key={index}>{person.name}</h4>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App