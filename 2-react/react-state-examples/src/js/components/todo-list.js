import React from 'react'

export const TodoList = () => {
  const [todoList, setTodoList] = React.useState([
    { title: 'Task 1', description: 'Description 1' }
  ])

  const [todoCounter, setTodoCounter] = React.useState({
    created: 0,
    deleted: 0
  })

  const handleAddTodoList = () => {
    const newElement = {
      title: `New task ${todoList.length + 1}`,
      description: `New description ${todoList.length + 1}`
    }

    setTodoList(prev => {
      return [...prev, newElement]
    })
  }

  React.useEffect(() => {
    setTodoCounter(prev => ({ ...prev, created: prev.created + 1 }))
  }, [todoList])

  return (
    <>
      <div>
        {todoList.map((item, index) => {
          return (
            <div key={item?.title}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          )
        })}
        <button onClick={handleAddTodoList}>Add new task</button>
      </div>
      <section>
        <h1>{`Created ${todoCounter.created}`}</h1>
      </section>
    </>
  )
}
