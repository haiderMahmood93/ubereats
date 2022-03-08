import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const items = [
    {
        image: require("../../assets/images/shopping-bag.png"),
        text: "Pick-up",
    },
    {
        image: require("../../assets/images/soft-drink.png"),
        text: "Soft Drinks",
    },
    {
        image: require("../../assets/images/bread.png"),
        text: "Bakery Item",
    },
    {
        image: require("../../assets/images/fast-food.png"),
        text: "Fast Food",
    },
    {
        image: require("../../assets/images/deals.png"),
        text: "Deals",
    },
    {
        image: require("../../assets/images/coffee.png"),
        text: "Coffe & Tea",
    },
    {
        image: require("../../assets/images/desserts.png"),
        text: "Desserts",
    },
];

export default function Categories() {
    return (
        <View style={ styles.category }>
            <ScrollView horizontal showsHorizontalScrollIndicator={ false }>
                { items.map((item, index) => (
                <View key={index} style={{ alignItems: "center", marginRight: 30, }}>
                    <Image 
                        source={item.image} 
                        style={{ 
                            width: 50, 
                            height: 40,
                            resizeMode: "contain",
                        }}
                    />
                    <Text style={{ fontSize:13, fontWeight: "900" }}>{ item.text }</Text>
                </View>
                )) }
            </ScrollView>
        </View>    
    );
}

const styles = StyleSheet.create({
    category: {
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
    }
})