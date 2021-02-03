import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const CallAPIVanilla = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });

  useEffect(() => {
    //   Call API dengna GET
    // fetch('https://reqres.in/api/users/2')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    //   Call API dengan POST
    // const dataForAPI = {
    //   name: 'Sugeng',
    //   job: 'Programmer',
    // };
    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(dataForAPI),
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  }, []);

  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  const postData = () => {
    const dataForAPI = {
      name: 'Sugeng',
      job: 'Programmer',
    };

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDataJob(json);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan VanillaJS</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET DATA</Text>
      <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />
      <Button title="POST DATA" onPress={postData} />
      <Text>Response POST DATA</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
});
