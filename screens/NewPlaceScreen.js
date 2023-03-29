import React, {useState} from 'react'
import { View, Text, StyleSheet,Button,TextInput,ScrollView } from 'react-native'

import { COLORS } from '../constants'
import { useDispatch } from 'react-redux'
import { addPlace } from '../store/places.actions'

import ImageSelector from '../components/ImageSelector'

const NewPlaceScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')

    const onHandleChangeTitle = text => setTitle(text)

    const onHandleSave = () => {
        dispatch(addPlace(title, "image"))
        navigation.navigate('Direcciones')
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Título</Text>
                <TextInput style={styles.input} value={title} onChangeText={onHandleChangeTitle} />
                <ImageSelector onImage={image=>console.log(image)} />
                <Button title="Grabar dirección" color={COLORS.MAROON} onPress={onHandleSave} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 16,
    },
    input: {
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4
    }
})

export default NewPlaceScreen
