import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import icon_star from '../assets/images/icon/icon_star_empty.png'
import icon_star_filled from '../assets/images/icon/icon_star_filled.png'

const StarList = ({ score }) => {
    const renderStarItems = () => {
        let result = []
        for (let i = 0; i < 5; i++) {
            result.push(<Image style={styles.star} source={i < score ? icon_star_filled : icon_star} />)
        }
        return result;
    }

    return (
        <View style={styles.star_wrapper}>
            {renderStarItems()}
        </View>
    );
};

const styles = StyleSheet.create({ 
    star_wrapper: {
        flexDirection: 'row',
    },
    star: {
        marginRight: 4,
    },
});

export default StarList;