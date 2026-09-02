import { ImageSourcePropType, StyleSheet } from "react-native"
import { Image } from "expo-image";

type Props = {
    imgSource: ImageSourcePropType
    selectedImg?: string
}

export default function ImageViewer({ imgSource, selectedImg }: Props) {
    const imageSource = selectedImg ? { uri: selectedImg } : imgSource;
    return (
        <Image source={imageSource} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
      width: 320,
      height: 440,
      borderRadius: 18,
    },
  });