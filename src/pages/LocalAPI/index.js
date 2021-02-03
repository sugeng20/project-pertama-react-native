import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

const Item = ({name, email, bidang, onPress, onDelete}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.desc}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.descName}>Nama Lengkap : {name}</Text>
          <Text style={styles.descEmail}>Email : {email}</Text>
          <Text style={styles.descBidang}>Bidang : {bidang}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const LocalAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('Simpan');
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };
    if (button === 'Simpan') {
      console.log('data before send: ', data);
      axios.post('http://10.0.2.2:3004/users', data).then((res) => {
        console.log(res);
        setName('');
        setBidang('');
        setEmail('');
        getData();
      });
    } else if (button === 'Update') {
      axios
        .put(`http://10.0.2.2:3004/users/${selectedUser.id}`, data)
        .then((res) => {
          console.log(res);
          setName('');
          setBidang('');
          setEmail('');
          setButton('Simpan');
          setSelectedUser({});
          getData();
        });
    }
  };

  const getData = () => {
    axios.get('http://10.0.2.2:3004/users').then((res) => {
      console.log('res get data', res);
      setUsers(res.data);
    });
  };

  const selectItem = (item) => {
    console.log(item);
    setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton('Update');
  };

  const deleteItem = (item) => {
    console.log(item);
    axios.delete(`http://10.0.2.2:3004/users/${item.id}`).then((res) => {
      console.log(res);
      getData();
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textTitle}>
          Materi API dengan Local API Json Server
        </Text>
        <Text style={styles.textTitle}>Masukan Anggota Itgenic</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(value) => setName(value)}
          placeholder="Nama Lengkap"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(value) => setEmail(value)}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          value={bidang}
          onChangeText={(value) => setBidang(value)}
          placeholder="Bidang"
        />
        <Button title={button} onPress={submit} />
        <View style={styles.line} />
        {users.map((user) => {
          return (
            <Item
              name={user.name}
              email={user.email}
              bidang={user.bidang}
              key={user.id}
              onPress={() => selectItem(user)}
              onDelete={() =>
                Alert.alert(
                  'Peringatan',
                  'Apa anda yakin akan menghapus user ini?',
                  [
                    {
                      text: 'Tidak',
                      onPress: () => console.log('button tidak'),
                    },
                    {
                      text: 'Ya',
                      onPress: () => deleteItem(user),
                    },
                  ],
                )
              }
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default LocalAPI;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 20,
  },
  textTitle: {
    textAlign: 'center',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18,
  },
  itemContainer: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  desc: {
    flex: 1,
  },
  descName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descEmail: {
    fontSize: 16,
  },
  descBidang: {
    fontSize: 12,
    marginTop: 8,
  },
  delete: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});
