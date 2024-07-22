import { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Image, Animated } from 'react-native';

export function GameCard({ game }) {
  return (
    <View key={game.slug} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <View style={styles.cardContent} >
        <Text style={styles.title}>{game.title}</Text>
        <Text style={styles.score}>{game.score}</Text>
        <Text style={styles.description}>{game.description}</Text>
      </View>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContent: {
    margin: 15,
  },
  image: {
    width: 140,
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#eee',
    height: 100,
    overflow: 'ellipsis',
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
});
