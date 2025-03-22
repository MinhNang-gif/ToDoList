
import html from '../core.js'
import ToDoItem from './ToDoItem.js'
import { connect } from '../store.js' // can connect de lay du lieu tu store render ra view 

function ToDoList({ todos, filters, filter }) { // dung destructuring de lay data tu init store trong reducer.js
    return html`
        <section class="main">
            <input
                id="toggle-all"
                class="toggle-all"
                type="checkbox"
                onchange="dispatch('toggleAll', this.checked)"
                ${todos.every(filters.completed) && 'checked'}
            >
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todos.filter(filters[filter]).map((todo, index) => ToDoItem({todo, index}))}
            </ul>
        </section>
    `
}

export default connect()(ToDoList)
