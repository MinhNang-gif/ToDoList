
import storage from "./util/storage.js"

const init = {
    todos: storage.get(), 
    filter: 'all', 
    filters: {
        all: () => true,
        active: todo => !todo.completed, 
        completed: todo => todo.completed
    }, 
    editIndex: null
}

const actions = {
    add: function({ todos }, title) {
        if (title) {
            todos.push({ title, completed: false})
            storage.set(todos)
        }
    },
    toggle({ todos }, index) {
        const todo = todos[index]
        todo.completed = !todo.completed
        storage.set(todos)
    }, 
    toggleAll({ todos }, completed) {
        todos.forEach(todo => todo.completed = completed)
    }, 
    remove({ todos }, index) {
        todos.splice(index, 1)
        storage.set(todos)
    }, 
    switchFilter(state, filter) {
        state.filter = filter
    }, 
    clearCompleted(state) {
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos)
    }, 
    editMode(state, index) {
        state.editIndex = index
    }, 
    endEdit(state, title) {
        if (state.editIndex !== null) {
            if (title) {
                state.todos[state.editIndex].title = title
                storage.set(state.todos)
            } else {
                this.remove(state, state.editIndex)
            }
            state.editIndex = null
        }
    }, 
    cancleEdit(state) {
        state.editIndex = null
    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args) // dat ten key cua actions trung voi ten cua action, dung toan tu rest de lay ve cac data moi 
    
    return state
}