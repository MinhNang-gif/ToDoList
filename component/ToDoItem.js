
import html from '../core.js'
import { connect } from '../store.js'

function ToDoItem({ todo, index, editIndex }) {
    return html`
        <li class="${todo.completed && 'completed'} ${editIndex === index && 'editing'}">
            <div class="view">
                <input
                    class="toggle"
                    type="checkbox"
                    ${todo.completed && 'checked'}
                    onchange="dispatch('toggle', ${index})"
                >
                <label ondblclick="dispatch('editMode', ${index})">${todo.title}</label>
                <button class="destroy" onclick="dispatch('remove', ${index})"></button>
            </div>
            <input class="edit" value="${todo.title}" 
                onkeyup="event.keyCode === 13 && dispatch('endEdit', this.value.trim()) || event.keyCode === 27 && dispatch('cancleEdit')"
                onblur="dispatch('endEdit', this.value.trim())"
            >
        </li>
    `
}

export default connect()(ToDoItem)
