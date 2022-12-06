import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    heeboRegular: require("../assets/fonts/heebo/heebo-v21-latin-regular.ttf"),
    heeboMedium: require("../assets/fonts/heebo/heebo-v21-latin-500.ttf"),
    heeboSemiBold: require("../assets/fonts/heebo/heebo-v21-latin-600.ttf"),
    heeboBold: require("../assets/fonts/heebo/heebo-v21-latin-800.ttf"),
    montserratRegular: require("../assets/fonts/montserrat/montserrat-v25-latin-regular.ttf"),
    montserratMedium: require("../assets/fonts/montserrat/montserrat-v25-latin-500.ttf"),
    montserratSemiBold: require("../assets/fonts/montserrat/montserrat-v25-latin-600.ttf"),
    montserratMediumBold: require("../assets/fonts/montserrat/montserrat-v25-latin-700.ttf"),
    montserratBold: require("../assets/fonts/montserrat/montserrat-v25-latin-800.ttf"),
  });
