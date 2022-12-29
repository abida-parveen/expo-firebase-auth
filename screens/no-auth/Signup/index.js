import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import CustomButton from "../../../components/form/CustomButton";
import InputField from "../../../components/form/InputField";

const Signup = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const handleFname = (e) => {
    setFname(e.target.value);
  };
  const handleLname= (e) => {
    setLname(e.target.value);
  };
   const handleEmail = (e) => {
     setEmail(e.target.value);
   };
   const handlePassword = (e) => {
     setPassword(e.target.value);
   };
   const handleConfirmPass = (e) => {
     setConfirmPass(e.target.value);
   };
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
          <View className="flex-1 items-center justify-center h-screen w-full">
            <View className="h-4/5 justify-evenly w-11/12">
              <InputField
                handleChange={handleFname}
                value={fname}
                label="First Name"
              />
              <InputField
                handleChange={handleLname}
                value={lname}
                label="Last Name"
              />
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
              <InputField
                handleChange={handleConfirmPass}
                password={true}
                value={confirmPass}
                label="Confirm Password"
              />
              <CustomButton value={"Sign Up"} />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Signup;
