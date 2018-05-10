// import Axios from 'axios';

export const TYPE = {
    FETCH_ABOUT: 'FETCH_ABOUT'
}

export const fetchAbout = () => ({
    type: TYPE.FETCH_ABOUT,
    payload: "About this site, it's nothing.",
})