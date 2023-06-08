import { View, Text, TextInput } from "react-native";
import React from "react";

const Input = ({
  label,
  placeholder,
  secureTextEntry,
  value,
  cb,
  inputMode,
  keyboard,
  leftIcon,
  rightIcon
}) => {
  return (
    <View className="flex flex-col gap-2 mb-4">
      <Text className="text-neutral-300">{label}</Text>
      <View
        className="text-white border-[1.5px] pr-10 bg-neutral-900 border-neutral-800 focus:border-[#B615DD] focus:border-opacity-70  rounded-[18px] flex flex-row justify-between items-center"
      >
        {leftIcon}
        <TextInput
          className="text-white p-4 w-full"
          autoComplete="off"
          cursorColor={"#B615DD"}
          passwordRules={{
            minlength: 8,
            maxlength: 20,
            digits: true,
            symbols: true,
            required: true,
          }}
          keyboardType={keyboard}
          inputMode={inputMode}
          placeholder={placeholder}
          placeholderTextColor={"#989898"}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={(text) => cb((prev) => text)}
        />
        {rightIcon}
      </View>
    </View>
  );
};

export default Input;
