import imagesList from "../Components/imagesList";

const initialState = imagesList;
const galaryReducer = (state = {gallaryData: initialState}, action) => {
    switch(action.type) {
        case 'FETCH_IMAGE_LIST':
         return {state, gallaryData: state.gallaryData};
        case 'UPDATE_IMAGE_LIST':
            const data = action.payload;
            const currentIndex = state.gallaryData.findIndex((item) => {
                return item.id === data.id;
            })
            const currentState = [...state.gallaryData];
            currentState[currentIndex].title = data.title;
            currentState[currentIndex].description = data.description
         return {...state, gallaryData: currentState};
        default:
        return state;
    }
}

export default galaryReducer;
