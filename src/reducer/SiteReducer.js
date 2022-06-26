export const reducer = (state,action) => {

    switch (action.type) {
        case "CHANGE_TEMA":
            return{
                ...state,
               theme : action.payload
            }
            case "ADD_WATCH":
            return{
                ...state,
                watch : [...state.watch,action.payload]
            }
            case "ADD_WATCHED":
                return{
                    ...state,
                    watched : [...state.watched,action.payload]
                }


            case "REMOVE_WATCH":
                return{
                    ...state,
                    watch : state.watch.filter(e => e.id !== action.payload)
                }

                case "REMOVE_WATCHED":
                    return{
                        ...state,
                        watched : state.watched.filter(e => e.id !== action.payload)
                    }

                    case "GET_WATCHED":
                        return{
                            ...state,
                            watch : state.watch.filter(e => e.id !== action.payload.id),
                            watched : [...state.watched,  action.payload]
                        }
    
        default:
          return  state;
    }

}
