import React, { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

const InputField = (props) => {
  const { handleChange, value, password, label } = props;
  const [showIcon, setShowIcon] = useState(true);
  return (
    <View className="flex-row h-12 my-1 relative w-full">
      <TextInput
        onChange={handleChange}
        value={value}
        secureTextEntry={showIcon && password}
        className="border-white border-2 rounded-md text-white font-heeboRegular text-sm h-full px-3 w-full"
        placeholder={label}
        placeholderTextColor={"rgba(255,255,255, 0.5)"}
      />
      {password && (
        <TouchableOpacity onPress={() => setShowIcon(!showIcon)}>
          <Image
            source={
              showIcon
                ? require("../../../assets/icons/eye-icon.png")
                : require("../../../assets/icons/eye-off-icon.png")
            }
            className="h-4 absolute right-3 top-4 w-6"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;
