import { useState } from "react"

function TodoList() {
    const [listTodo, setListTodo] = useState<string[]>([])
    const [form, setForm] = useState('')
  return (
    <div>
        <form onSubmit={(e: any) => {
            e.preventDefault()
            setListTodo([...listTodo, form])
            setForm('')
            console.log(listTodo)
        }}>
            <input 
                value={form}
                onChange={e => setForm(e.target.value)}
                type="text" />
            <button type="submit">Add</button>
        </form>

        <ul>
            {listTodo.map(item => <li>{item}</li>)}
        </ul>
    </div>
  )
}

export default TodoList