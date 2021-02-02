import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Story = (props) => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

const PropsDinammis = () => {
  return (
    <View>
      <Text>Mater Props Dinamis</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            gambar="https://z-p4-instagram.fbdo3-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/92676624_220848609136553_3540832185018961403_n.jpg?_nc_ht=z-p4-instagram.fbdo3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=omRwMnlgckIAX9m5LYk&tp=1&oh=439982765ebfdd5ae8b9fc093f7b2ddb&oe=601B14DB"
            judul="Hosting"
          />
          <Story
            gambar="https://z-p4-instagram.fbdo3-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/91033537_236231247569892_909893170966241213_n.jpg?_nc_ht=z-p4-instagram.fbdo3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=uW7rBGUozdcAX_ncqwe&tp=1&oh=92d603e99e1845c62148e9b4d97c4616&oe=601B5EC9"
            judul="Kelas Online"
          />
          <Story
            gambar="https://z-p4-instagram.fbdo3-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/92676624_220848609136553_3540832185018961403_n.jpg?_nc_ht=z-p4-instagram.fbdo3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=omRwMnlgckIAX9m5LYk&tp=1&oh=439982765ebfdd5ae8b9fc093f7b2ddb&oe=601B14DB"
            judul="Hosting"
          />
          <Story
            gambar="https://z-p4-instagram.fbdo3-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/91033537_236231247569892_909893170966241213_n.jpg?_nc_ht=z-p4-instagram.fbdo3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=uW7rBGUozdcAX_ncqwe&tp=1&oh=92d603e99e1845c62148e9b4d97c4616&oe=601B5EC9"
            judul="Kelas Online"
          />
          <Story
            gambar="https://z-p4-instagram.fbdo3-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/92676624_220848609136553_3540832185018961403_n.jpg?_nc_ht=z-p4-instagram.fbdo3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=omRwMnlgckIAX9m5LYk&tp=1&oh=439982765ebfdd5ae8b9fc093f7b2ddb&oe=601B14DB"
            judul="Hosting"
          />
          <Story
            gambar="https://z-p4-instagram.fbdo3-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/91033537_236231247569892_909893170966241213_n.jpg?_nc_ht=z-p4-instagram.fbdo3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=uW7rBGUozdcAX_ncqwe&tp=1&oh=92d603e99e1845c62148e9b4d97c4616&oe=601B5EC9"
            judul="Kelas Online"
          />
          <Story
            gambar="https://z-p4-instagram.fbdo3-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/92676624_220848609136553_3540832185018961403_n.jpg?_nc_ht=z-p4-instagram.fbdo3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=omRwMnlgckIAX9m5LYk&tp=1&oh=439982765ebfdd5ae8b9fc093f7b2ddb&oe=601B14DB"
            judul="Hosting"
          />
          <Story
            gambar="https://z-p4-instagram.fbdo3-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/91033537_236231247569892_909893170966241213_n.jpg?_nc_ht=z-p4-instagram.fbdo3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=uW7rBGUozdcAX_ncqwe&tp=1&oh=92d603e99e1845c62148e9b4d97c4616&oe=601B5EC9"
            judul="Kelas Online"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinammis;

const styles = StyleSheet.create({});
