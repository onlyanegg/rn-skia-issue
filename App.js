import { StyleSheet, View, Text } from "react-native";
import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <WithSkiaWeb
        fallback={<Text>Loadig Skia...</Text>}
        getComponent={() => import("./Skia")}
      />
    </View>
  );
};

export default App;
