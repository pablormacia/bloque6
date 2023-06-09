import * as FileSystem from 'expo-file-system'

export const ADD_PLACE = 'ADD_PLACE'


export const addPlace = (title,image) => {
    //return { type: ADD_PLACE, payload: {title}}
    return async dispatch => {
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName

        try {
            FileSystem.moveAsync({
                from: image,
                to: Path
            })
        } catch(error) {
            console.log(error.message)
        }
        dispatch({type: ADD_PLACE, payload: {title, image: Path}})
    }
}