import { Image, Text, TouchableOpacity } from "react-native";

const IconButton = (props) => {
  const { data, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center rounded-full py-2.5 px-5 bg-${data.color}`}
    >
      <Image source={data.icon} className="w-6 h-6" />
      <Text className="text-white text-sm font-heeboMedium pl-1">
        {data.title}
      </Text>
    </TouchableOpacity>
  );
};

export default IconButton;
