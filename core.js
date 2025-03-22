

export default function html([first, ...strings], ...values) { // ham html dung nhiu hon nen uu tien default
    return values.reduce((acc, cur) => {
        return acc.concat(cur, strings.shift())
    }, [first])
    .filter(x => x && x !== true || x === 0)
    .join('')
}

export function createStore(reducer) {
    let state = reducer() // lan dau tien chay kh truyen tham so thi reducer se tra ve init ben reducer.js
    const roots = new Map() // chua cac element root de render ra view, new Map co the chua cac key la bat ky kieu dl gi (trong truong hop nay can luu duoc key la object) 

    function render() {
        for (const [root, component] of roots) {
            const output = component() // component chinh la chuoi HTML, va component chinh la app nen no la function 
            root.innerHTML = output
        }
    }

    return {
        // co nhiem vu nhan view va day ra root element 
        attach(component, root) { 
            roots.set(root, component)
            render()
        }, 
        // ket noi store va view de day du lieu tu store vao view 
        connect(selector = state => state) { // selector de lua chon data nao do cu the trong store. Neu kh truyen doi so thi component se lay doi so mac dinh la state
            return component => (props, ...args) => // props la cac du lieu muon truyen vao component sau nay 
                component(Object.assign({}, props, selector(state), ...args))
        }, 
        // khi user thuc hien hanh dong tren view thi can dispatch de ban du lieu len actions 
        dispatch(action, ...args) { // args la cac data di kem voi action 
            state = reducer(state, action, args) // doi so state la state cu, se dua vao action de tao ra state moi 
            render() // store thay doi nen can update lai view 
        }
    }
}