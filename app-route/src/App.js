import React, { useState } from 'react'
import Parcel from 'single-spa-react/parcel'
import { v4 as uuid } from 'uuid'
import { emitEvent, eventPath } from '@ficc/util'

const App = ({ name }) => {
  const [task, updateTask] = useState('')

  const handleChange = event => {
    updateTask(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const detail = {
        detail:{
            id:uuid(),
            describe: task
        }
    }
    emitEvent(eventPath.todo, {
      id: uuid(),
      describe: task,
    })
    updateTask('')
  }

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task}/>
        <button>Add</button>
      </form>
      <Parcel
        config={() => System.import('@ficc/app-parcel')}
      />
    </>
  )
}

export default App