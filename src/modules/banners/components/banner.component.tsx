import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const formatImage = (base64: string) => `data:image/png;base64,${base64}`;

type BannerComponentProps = {
  label: string;
  image: string;
};

export const BannerComponent: React.FC<BannerComponentProps> = ({
  label,
  image,
}) => {
  const navigation = useNavigation();

  const handleNavigateToStoryScreen = () => {
    navigation.navigate('Story');
  };

  return (
    <TouchableWithoutFeedback onPress={handleNavigateToStoryScreen}>
      <View style={styles.container}>
        <LinearGradient
          colors={['#3432a8', '#3b5998', '#1111']}
          style={styles.linearGradient}>
          <Text style={styles.label}>{label}</Text>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{
              uri: formatImage(image),
            }}
          />
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    borderRadius: 15,
    overflow: 'hidden',

    // backgroundColor: 'lightgrey',
    // backgroundImage: 'linear-gradient(45deg, #000000, #0000ff)',
  },
  linearGradient: {
    flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    borderRadius: 5,
    padding: 12,
    paddingBottom: 0,
    gap: 10,
  },
  label: {
    color: 'white',
    fontWeight: '400',
  },
  image: {
    width: 65,
    height: 65,
    alignSelf: 'center',
  },
});
