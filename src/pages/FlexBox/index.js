import React, {Component, useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('=>=>=> Constructor');
//     this.state = {
//       subscriber: 100,
//     };
//   }

//   componentDidMount() {
//     console.log('===> Component did mount');
//     setTimeout(() => {
//       this.setState({
//         subscriber: 400,
//       });
//     }, 5000);
//   }

//   componentDidUpdate() {
//     console.log('===> Component di update');
//   }

//   componentWillUnmount() {
//     console.log('===> Component di unmount');
//   }

//   render() {
//     console.log('===> render');
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: 'grey',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}>
//           <View style={{backgroundColor: 'red', width: 50, height: 50}}></View>
//           <View
//             style={{backgroundColor: 'yellow', width: 50, height: 50}}></View>
//           <View
//             style={{backgroundColor: 'green', width: 50, height: 50}}></View>
//           <View style={{backgroundColor: 'blue', width: 50, height: 50}}></View>
//         </View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Channel</Text>
//           <Text>Tentang</Text>
//         </View>
//         <View
//           style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
//           <Image
//             source={{
//               uri:
//                 'https://yt3.ggpht.com/ytc/AAUvwngm7NugoyYrJ1F3ihVjBHgds_EEDXeMkdPA_J84hQ=s88-c-k-c0x00ffffff-no-rj',
//             }}
//             style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
//           />
//           <View>
//             <Text style={{fontWeight: 'bold', fontSize: 20}}>Sugeng</Text>
//             <Text>{this.state.subscriber} ribu Subscriber</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [subscriber, setSubscriber] = useState(200);
  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setSubscriber(400);
    }, 600);

    return () => {
      console.log('did update');
    };
  }, [subscriber]);
  // useEffect(() => {
  //   console.log('di update');
  //   setTimeout(() => {
  //     setSubscriber(400);
  //   }, 2000);
  // }, [subscriber]);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'grey',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: 'red', width: 50, height: 50}}></View>
        <View style={{backgroundColor: 'yellow', width: 50, height: 50}}></View>
        <View style={{backgroundColor: 'green', width: 50, height: 50}}></View>
        <View style={{backgroundColor: 'blue', width: 50, height: 50}}></View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <Image
          source={{
            uri:
              'https://yt3.ggpht.com/ytc/AAUvwngm7NugoyYrJ1F3ihVjBHgds_EEDXeMkdPA_J84hQ=s88-c-k-c0x00ffffff-no-rj',
          }}
          style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
        />
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Sugeng</Text>
          <Text>{subscriber} ribu Subscriber</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
