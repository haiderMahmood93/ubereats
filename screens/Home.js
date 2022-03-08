import React, { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../components/home/BottomTabs';
import Categories from '../components/home/Categories';
import HeadreTabs from '../components/home/HeadreTabs';
import RestaurantItems, { localRestaurants } from '../components//home/RestaurantItems';
import SearchBar from '../components//home/SearchBar';

// const YELP_API_KEY = "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("San Francisco");
    const [activeTab, setActiveTab] = useState("Delivery");

    // const getRestaurantsFromYelp = () => {
    //     const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
  

    //     const apiOptions = {
    //         headers: {
    //             Authorization: `Bearer ${YELP_API_KEY}`,
    //         },
    //     };
    //     return fetch(yelpUrl, apiOptions)
    //     .then((res) => res.json())
    //     .then((json) => setRestaurantData(json.businesses.filter((business) => 
    //         business.transactions.includes(activeTab.toLowerCase())
    //     )));
    // };

    // useEffect(() => {
    //     getRestaurantsFromYelp();
    // }, [city, activeTab]);

    return (
        <SafeAreaView style={styles.homeBackground}>
            <View style={styles.headerBackround}>
                <HeadreTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={ false }>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    homeBackground: {
        flex: 1,
        backgroundColor: "#eee",
    },
    headerBackround: {
        backgroundColor: "white",
        padding: 15,
    }
});