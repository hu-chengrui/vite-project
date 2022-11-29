const defaultState = {
    num: 20
}


let reducer = (state = defaultState, action: { type: string, val: number }) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "ADD":
            newState.num++
            break;
        case "ADD2":
            newState.num += action.val
            break;
        default:
            break;
    }



    return newState
}

export default reducer