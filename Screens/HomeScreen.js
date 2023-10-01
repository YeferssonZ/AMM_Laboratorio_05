import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('NuevoDestino')}
        style={{
          backgroundColor: 'purple',
          padding: 10,
          marginTop: '20%',
          width: '50%',
          alignSelf: 'center',
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
            color: 'white',
          }}
        >
          Destinos Peruanos
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          marginTop: '20%',
        }}
      >
        Bienvenido a la pantalla de inicio
      </Text>
    </View>
  );
};

export default HomeScreen;
