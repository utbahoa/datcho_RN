import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  FlatList
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Swiper from 'react-native-swiper';



const DATA = [
  {
    id: '1',
    img: 'https://media.foody.vn/images/beauty-upload-api-675x355-201119121924.jpg',
  },
  {
    id: '2',
    img: 'https://media.foody.vn/images/beauty-upload-api-675x355-201112135838.jpg',
  },
  {
    id: '3',
    img: 'https://media.foody.vn/images/beauty-upload-api-675x355-201119121503.jpg',
  },
];


const DATA_ = [
  {
    id: '1', name: 'Cơm',
    img: 'https://i.imgur.com/UQsxplI.png',
  },
  {
    id: '2', name: 'Bánh',
    img: 'https://i.imgur.com/evemG2C.png',
  },
  {
    id: '3', name: 'Kem',
    img: 'https://i.imgur.com/xKP89PS.png',
  },
  {
    id: '4', name: 'Sushi',
    img: 'https://i.imgur.com/WeS96Rl.png',
  },
  {
    id: '5', name: 'Gà',
    img: 'https://i.imgur.com/B2wNf7l.png',
  },
  {
    id: '6', name: 'Pizza',
    img: 'https://i.imgur.com/Dw5RVBf.png',
  },
];

const DATA1 = [
  {
    id: '1', 
    img: 'https://i.imgur.com/Dw5RVBf.png',
  },
  {
    id: '2',
    img: 'https://i.imgur.com/aud9xll.png',
  },
  {
    id: '3',
    img: 'https://i.imgur.com/B2wNf7l.png',
  },
  {
    id: '4',
    img: 'https://i.imgur.com/evemG2C.png',
  },

];


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{ backgroundColor: 'red' }}>
        <View style={styles.header}>
          <Entypo name="chevron-left" size={30} color="#fff" />
          <View style={{
            flex: 1, flexDirection: 'row', backgroundColor: '#fff',
            marginVertical: 10,
            marginHorizontal: 10,
            borderRadius: 5,
            alignItems: 'center'
          }}>
            <Entypo name="magnifying-glass" size={30} color="#000" />
            <TextInput style={{ flex: 1 }} placeholderTextColor="#000" placeholder="địa điểm"></TextInput>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: "#000" }}>TP.HCM</Text>
              <Entypo name="chevron-small-down" size={20} color="#000" />
            </View>
          </View>
        </View>
        <Text style={{ paddingHorizontal: 10, color: '#fff', marginVertical: 5, fontSize: 15 }}>Đến 18 Dũng sĩ Thanh Khê, Thanh Khê Tây, Thanh Khê, Đà... </Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 200, margin: 10 }}>
          <Swiper style={styles.wrap} showsButtons={false} activeDotColor={"#fff"}>
            <View style={styles.slide1}>
              <Image style={{ width: "100%", height: "100%" }} source={{ uri: "https://media.foody.vn/images/beauty-upload-api-675x355-201119121924.jpg" }}></Image>
            </View>
            <View style={styles.slide2}>
              <Image style={{ width: "100%", height: "100%" }} source={{ uri: "https://media.foody.vn/images/beauty-upload-api-675x355-201112135838.jpg" }}></Image>
            </View>
            <View style={styles.slide3}>
              <Image style={{ width: "100%", height: "100%" }} source={{ uri: "https://media.foody.vn/images/beauty-upload-api-675x355-201119121503.jpg" }}></Image>
            </View>
          </Swiper>
        </View>
        <View style={{ flexDirection: 'column', marginHorizontal: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Bo suu tap</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginRight: 10 }}>xem them</Text>
              <Entypo name="chevron-small-down" size={20} color="#000" />
            </View>
          </View>
          <FlatList
            data={DATA}
            horizontal
            renderItem={
              ({ item }) => (
                <View style={{ marginRight: 10, marginVertical: 10 }}>
                  <Image source={{ uri: item.img }} style={{ height: 100, width: 170 }}></Image>
                </View>
              )
            }
            keyExtractor={item => item.id}
          />
          <FlatList
            data={DATA_}
            horizontal
            renderItem={
              ({ item }) => (
                <View style={{ marginRight: 10, marginVertical: 10, alignItems: 'center', marginRight: 33 }}>
                  <Image source={{ uri: item.img }} style={{ height: 60, width: 60, borderRadius: 200 }}></Image>
                  <Text >{item.name}</Text>
                </View>
              )
            }
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: 'silver', padding: 5 }}>
          <View style={{ marginLeft: 30 }}>
            <Text>Gần tôi</Text>
          </View>
          <View style={{ marginLeft: 50 }}>
            <Text>Bán chạy</Text>
          </View>
          <View style={{ marginLeft: 50 }}>
            <Text>Đánh giá</Text>
          </View>
          <View style={{ marginLeft: 40 }}>
            <Text>Giao nhanh</Text>
          </View>
        </View>
        <View>
          {
            DATA1.map((item) => {
              return (
                <View key={item.id} style={{ marginRight: 10, margin: 10, flexDirection: 'row' }}>
                  <Image source={{ uri: item.img }} style={{ height: 100, width: 100 }}></Image>
                  <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                    <Text style={{ fontSize: 17, marginBottom: 5 }}>COCOCake</Text>
                    <Text style={{ color: 'blue' }}>3 địa điểm</Text>
                    <Text>Giá ~85k</Text>
                    <View style={{ paddingLeft: 5, marginTop: 10, paddingRight: 5, backgroundColor: 'silver', fontSize: 5, borderRadius: 20, flexDirection: 'row' }}>
                      <Text style={{ color: 'red' }}>FREESHIP</Text>
                    </View>
                  </View>
                </View>
              )
            })
          }
        </View>
      </ScrollView>

    </>
  );
};

export default App;



const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: { flex: 1, },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  wrap: {
    height: 200
  }
})