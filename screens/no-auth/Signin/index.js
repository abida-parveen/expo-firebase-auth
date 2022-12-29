import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../../../components/form/CustomButton";
import InputField from "../../../components/form/InputField";
import IconButton from "../../../components/common/IconButton";

const Signin = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const icons = [
    {
      id: 1,
      title: "Google",
      icon: require("../../../assets/icons/google.png"),
      color: "google-red",
    },
    {
      id: 2,
      title: "Facebook",
      icon: require("../../../assets/icons/facebook.png"),
      color: "fb-blue",
    },
    {
      id: 3,
      title: "Twitter",
      icon: require("../../../assets/icons/twitter.png"),
      color: "twitter-blue",
    },
  ];
  return (
    <View className="flex-1">
      <LinearGradient
        colors={["#0A4474", "#63A6DE", "#63A6DE"]}
        start={[0.5, 0.0]}
        end={[0.5, 1.0]}
        locations={[0.2, 1, 1]}
        className="flex-1"
      >
        <ScrollView>
          <View className="flex-1 items-center justify-between h-screen w-full">
            <View className="h-2/5 justify-end">
              <View className="h-52 w-52 items-center justify-center rounded-full bg-white overflow-hidden">
                <Image
                  source={require("../../../assets/logo.png")}
                  className="h-4/5 w-4/5"
                />
              </View>
            </View>
            <View className="w-11/12 mb-2">
              <View>
                <InputField
                  handleChange={handleEmail}
                  value={email}
                  label="Email"
                />
                <InputField
                  handleChange={handlePassword}
                  password={true}
                  value={password}
                  label="Password"
                />
                <View className="my-2 self-end">
                  <TouchableOpacity>
                    <Text className="text-white font-heeboMedium">
                      Forgotten Password?
                    </Text>
                  </TouchableOpacity>
                </View>
                <CustomButton value={"Sign In"} />
              </View>
              <View className="flex-row justify-between my-8">
                {icons.map((item) => (
                  <IconButton key={item.id} data={item} />
                ))}
              </View>
              <View className="flex-row justify-center">
                <Text className="text-white font-heeboRegular">
                  Don't have an account?{" "}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("signup")}>
                  <Text className="text-primary font-heeboMedium">Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Signin;
