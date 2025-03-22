// ham trung gian de hien thi cac log cua reducer truoc va sau khi thuc hien reducer 

export default function logger(reducer) {
    return (prevState, action, args) => { // reducer la function va tra ra 3 tham so -> ham trung gian logger cx tra va function va cac tham so tuong ung 
        console.group(action)
        console.log('Prev State', prevState)
        console.log('Action Arguments', args)

        const nextState = reducer(prevState, action, args)

        console.log('Next State', nextState)
        return nextState
    }
}
