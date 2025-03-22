
import html from '../core.js'
import Header from './header.js'
import ToDoList from './ToDoList.js'
import Footer from './Footer.js'
import { connect } from '../store.js' // phai connect de lay du lieu tu store 

function App({ todos }) {
    return html`
        <section class="todoapp">
            ${Header()}
            ${todos.length > 0 && ToDoList()}
            ${todos.length > 0 && Footer()}
        </section>
    `
}

export default connect()(App)
