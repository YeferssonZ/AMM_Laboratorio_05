import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const lugaresTuristicos = [
    {
      nombre: 'Machu Picchu',
      descripcion: 'Machu Picchu es una antigua ciudad inca en lo alto de los Andes peruanos.',
      imagen: require('../images/machu_picchu.jpg'),
    },
    {
      nombre: 'Cañón del Colca',
      descripcion: 'El Cañón del Colca es uno de los cañones más profundos y espectaculares del mundo, ubicado en la región de Arequipa, Perú.',
      imagen: require('../images/canon_del_colca.jpg'),
    },
    {
      nombre: 'Lago Titicaca',
      descripcion: 'El Lago Titicaca es uno de los lagos más altos y navegables del mundo, ubicado entre Perú y Bolivia.',
      imagen: require('../images/lago_titicaca.jpg'),
    },
    {
      nombre: 'Cusco',
      descripcion: 'Cusco es una ciudad en Perú conocida por ser la antigua capital del Imperio Inca y por su arquitectura colonial española.',
      imagen: require('../images/cusco.jpg'),
    },
    {
      nombre: 'Valle del Colca',
      descripcion: 'El Valle del Colca es conocido por sus paisajes naturales, aguas termales y observación de cóndores en su hábitat natural.',
      imagen: require('../images/valle_del_colca.jpg'),
    },
    {
      nombre: 'Arequipa',
      descripcion: 'Arequipa es una ciudad en el sur de Perú, rodeada por volcanes y conocida por sus estructuras de sillar blanco.',
      imagen: require('../images/arequipa.jpg'),
    },
    {
      nombre: 'Parque Nacional Huascarán',
      descripcion: 'El Parque Nacional Huascarán es hogar de la montaña más alta de Perú, el Nevado Huascarán, y es un paraíso para los excursionistas.',
      imagen: require('../images/parque_nacional_huascaran.jpg'),
    },
    {
      nombre: 'Santuario Nacional de Ampay',
      descripcion: 'El Santuario Nacional de Ampay es un área protegida que alberga una gran diversidad de flora y fauna en la región de Apurímac, Perú.',
      imagen: require('../images/santuario_nacional_ampay.jpg'),
    },
  ];
  

const NuevoDestinoScreen = () => {
    const navigation = useNavigation();
  
    return (
      <View>
        {lugaresTuristicos.map((destino, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('Destino', { destino })}
            style={styles.destinationContainer}
          >
            <Text style={styles.destinationName}>{destino.nombre}</Text>
            <Text style={styles.destinationDescription}>{destino.descripcion}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

const styles = StyleSheet.create({
  destinationContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  destinationName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  destinationDescription: {
    fontSize: 16,
    color: '#666',
  },
});

export default NuevoDestinoScreen;
