import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
    return (
        <View style={styles.bottom}>
            <Icon icon="home" text="Home" />
            <Icon icon="search" text="Browse" />
            <Icon icon="shopping-bag" text="Grocery" />
            <Icon icon="receipt" text="Orders" />
            <Icon icon="user" text="Account" />
        </View>
    );
}

const Icon = (props) => (
    <TouchableOpacity>
        <View>
            <FontAwesome5 name={props.icon} size={25} style={styles.icons} />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    bottom: {
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
    },
    icons: {
        marginBottom: 3,
        alignSelf: "center",
    }
})