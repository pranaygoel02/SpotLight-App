import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

function loginLogic() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateMessage, setValidateMessage] = useState(null);
  const [signingin, setSigningin] = useState(false);

  const inputs = [
    {
      label: "Email",
      placeholder: "example@email.com",
      value: email,
      cb: setEmail,
      inputMode: "email",
      keyboard: "email-address",
    },
    {
      label: "Password",
      placeholder: "Please pick a strong password",
      value: password,
      cb: setPassword,
      inputMode: "text",
      keyboard: "default",
      secureTextEntry: !showPass,
      rightIcon: (
        <TouchableOpacity 
        onPress={() => setShowPass((prev) => !prev)}>
          <MaterialIcons
            name={showPass ? "eye-off" : "eye"}
            size={24}
            color="#D3D3D3"
          />
        </TouchableOpacity>
      ),
    },
  ];

  const loginUser = async (e) => {
    e.preventDefault();
    console.log("Signing you up");
  }

  return {
    inputs,
    validateMessage,
    signingin,
    setSigningin,
    setValidateMessage,
    showPass,
    setShowPass,
    email,
    setEmail,
    password,
    setPassword,
    loginUser
};
}

export default loginLogic;