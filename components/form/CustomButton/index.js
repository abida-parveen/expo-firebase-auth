import { Text, TouchableOpacity } from "react-native";
const CustomButton = (props) => {
  const { value } = props;
  return (
    <TouchableOpacity className="items-center bg-white rounded-md justify-center h-12 my-1 w-full">
      <Text className="font-heeboMedium text-sm">{value}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
