// Dung de lay va luu du lieu cua todos vao local storage

const TODOS_STORAGE_KEY = 'TODOS'

export default {
    get() { // lay du lieu o dang JS data types 
        return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || [] // todos la mot array nen khi chua co du lieu thi nhan lai []
    }, 
    set(todos) { // luu du lieu vao o dang JSON 
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
    }
}



