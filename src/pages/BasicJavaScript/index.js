import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BasicJavaScript = () => {
  const nama = 'sugeng'; // string
  let usia = 19; // number
  const apakahLakiLaki = true; // boolean

  // coomplex
  const hewanPeliharaan = {
    nama: 'Miaw',
    jenis: 'Kucing',
    usia: 2,
    apakahHewanLokal: true,
    warna: 'kuning',
    orangTua: {
      jantan: 'Kaisar',
      betina: 'Kuin',
    },
  }; // object

  //   const sapaOrang = (name, age) => {
  //     return alert(`Hello ${name}, usia anda ${age}`);
  //   }; // Function

  //   sapaOrang('Sugeng', 19);

  const namaOrang = ['Sugeng', 'Indra', 'Fuad']; // object - array

  //   typeof namaOrang;

  const sapaHewan = (objectHewan) => {
    // let hasilSapa = '';
    // if (objectHewan.nama == 'Miaw') {
    //   hasilSapa = 'Hallo Miaw';
    // } else {
    //   hasilSapa = 'Kucing Sipakah ini?';
    // }
    // return hasilSapa;

    return objectHewan.nama == 'Miaw'
      ? 'Hallo Miaw, apa Kabar?'
      : 'Kucing Siapakah Ini?';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Basi Java Script</Text>
      <Text>Nama : {nama}</Text>
      <Text>Usia : {usia}</Text>
      <Text>{sapaHewan(hewanPeliharaan)}</Text>
      {namaOrang.map((orang, index) => {
        return <Text key={index}>{orang}</Text>;
      })}
    </View>
  );
};

export default BasicJavaScript;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
