import { TYPE } from "@/actions/about"
const initialState = ""

export default function (state = initialState, action) {
    const { type, payload } = action
  
    switch(type) {

        case TYPE.FETCH_ABOUT: {
            return payload
        }

        default: {
            return state
        }
    }
}