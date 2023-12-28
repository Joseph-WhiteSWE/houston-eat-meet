import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function Stores({ activeCategory, searchField }) {
  const [stores, setStores] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const storeCollections = [
      "brunch",
      "dinner",
      "seafood",
      "vegan",
      "international",
      "soul-food",
      "bbq",
      "sweet-tooth",
      "vibes",
      "bars",
      "activities",
      "cigars",
    ];
    const getStoreData = async storeRef => {
      const data = await getDocs(storeRef);
      return data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    };

    const getStores = async () => {
      try {
        const storePromises = storeCollections.map(storeName =>
          getStoreData(collection(db, storeName))
        );
        const storeArrays = await Promise.all(storePromises);
        setStores(storeArrays.flat());
        setisLoading(false);
      } catch (error) {
        console.error("Error fetching documents:", error);
        setisLoading(false);
      }
    };

    getStores();
  }, []);

  // search bar function
  const filteredStores = stores.filter(store => {
    return (
      store.category === activeCategory &&
      store.name.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  if (isLoading) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          paddingTop: StatusBar.currenHeight,
        }}
      >
        <View>
          <ActivityIndicator size="large" color="#d946ef" />
          <Text style={{ color: "white", fontSize: 20 }}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          marginTop: 7,
          letterSpacing: 4,
          marginBottom: 5,
          color: "white",
        }}
      >
        STORES
      </Text>
      <FlatList
        data={filteredStores}
        numColumns={2}
        keyExtractor={(item, index) => String(index)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-evenly",
        }}
        renderItem={({ item, index }) => (
          <StoreCard index={index} item={item} />
        )}
      />
    </View>
  );
}

const StoreCard = ({ item }) => {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push("screens/storeDetails")}>
      <View
        style={{
          width: 150,
          height: 50,
          borderColor: "white",
          borderWidth: 1,
          paddingHorizontal: 10,
          borderRadius: 30,
          // marginHorizontal: 10,
          marginBottom: 10,
          alignItems: "center",
          justifyContent: "center",

          fontSize: 13,
          fontWeight: "500",
          textAlign: "center",
          backgroundColor: "#d946ef",
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          {item.name.length > 18 ? item.name.slice(0, 18) + "..." : item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
