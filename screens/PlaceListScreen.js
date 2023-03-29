import React from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import PlaceItem from '../components/PlaceItem'

const PlaceListScreen = ({navigation}) => {
    const places = useSelector(state=>state.places.places)
    const renderItem = (data) => (
        <PlaceItem
            title={data.item.title}
            image={data.item.image}
            address="calle falsa 123"
            onSelect={()=> navigation.navigate("Detalle")}
        />
    )
    return (
        <FlatList
            data={places}
            renderItem={renderItem}
        />
    )
}


export default PlaceListScreen
