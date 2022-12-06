import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../../../components/form/CustomButton";
import InputField from "../../../components/form/InputField";
import IconButton from "./IconButton";

const Signin = () => {
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
      color: "red",
    },
    {
      id: 2,
      title: "Facebook",
      icon: require("../../../assets/icons/facebook.png"),
      color: "fb_blue",
    },
    {
      id: 3,
      title: "Twitter",
      icon: require("../../../assets/icons/twitter.png"),
      color: "twitter_blue",
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
          <View className="flex-1 items-center justify-evenly h-screen w-full">
            <View className="h-52 w-52 items-center justify-center rounded-full bg-white overflow-hidden">
              <Image
                source={require("../../../assets/logo.png")}
                className="h-4/5 w-4/5"
              />
            </View>
            <View className="w-11/12">
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
              <CustomButton value={"Sign In"} />
              <View className="flex-row justify-between mt-3">
                {icons.map((item) => (
                  <IconButton key={item.id} data={item} />
                ))}
              </View>
            </View>
            <View className="absolute bottom-2 flex-row">
              <Text className="text-white font-heeboRegular">
                Don't have an account?{" "}
              </Text>
              <TouchableOpacity>
                <Text className="text-primary font-heeboMedium">Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Signin;
