import { getInitialData } from '../utils/api'
import { recieveUsers } from './users'
import { receiveQuestions } from './questions'

export function handleInitialData() {
    return(dispatch) => {
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(recieveUsers(users))
                dispatch(receiveQuestions(questions))
            })
    }
}