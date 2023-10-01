import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

const DestinoScreen = () => {
  const route = useRoute();
  const destino = route.params?.destino || {}; // Accede al destino seleccionado

  return (
    <View style={styles.container}>
      <Image source={destino.imagen} style={styles.destinationImage} />
      <Text style={styles.destinationName}>{destino.nombre}</Text>
      <Text style={styles.destinationDescription}>{destino.descripcion}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  destinationImage: {
    width: 200, // Ajusta el ancho de la imagen según tu diseño
    height: 200, // Ajusta la altura de la imagen según tu diseño
    marginBottom: 10,
  },
  destinationName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  destinationDescription: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default DestinoScreen;
