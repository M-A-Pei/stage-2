import { useState } from "react"
import { UseSelector, useDispatch } from "react-redux"
import { increment, decrement} from "../state/todoList/counterSlice"
import { RootState } from "../state/store"

function TodoList() {
    const [listTodo, setListTodo] = useState<string[]>([])
    const [form, setForm] = useState('')

    // const counter = UseSelector((state: RootState) => state.counter.value)

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
{/* 
        <div>
            <h2>{counter}</h2>
        </div> */}
    </div>
  )
}

export default TodoList