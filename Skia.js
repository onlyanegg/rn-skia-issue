import { Canvas, Text, Fill, useFont } from "@shopify/react-native-skia";
import { StyleSheet } from "react-native";

const SkiaComponent = () => {
  const fontSize = 32;

  const font = useFont(require("./Freedom.ttf"), fontSize);

  const styles = StyleSheet.create({
    canvas: {
      flex: 1,
    },
  });

  return (
    <Canvas style={styles.canvas}>
      <Fill color="white" />
      <Text x={0} y={fontSize} text="Hello World" font={font} />
    </Canvas>
  );
};

export default SkiaComponent;
