// import Axios from 'axios';

export const TYPE = {
    FETCH_ABOUT: 'FETCH_ABOUT'
}

export const fetchAbout = () => {

    return (dispatch, getState) => {
        const { about } = getState()

        let value = about ? about : "About this site, it's nothing."

        setTimeout(() => {
            dispatch({
                type: TYPE.FETCH_ABOUT,
                payload: value
            })
        }, 200)

    };

}

export const setAbout = (text) => ({
    type: TYPE.FETCH_ABOUT,
    payload: text,
})