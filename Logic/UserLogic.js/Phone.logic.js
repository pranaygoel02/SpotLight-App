import { useState } from "react";
import { PROJECT_ID, API_ENDPOINT } from '@env'
import { Client, Account, ID } from "appwrite";
import { useRouter, useSearchParams, useLocalSearchParams } from "expo-router";
import { useToast } from "../../context/ToastContext";
import client from "../../appwrite.config.js";

function phoneLogic() {
  const [phone, setPhone] = useState("");
  const [validateMessage, setValidateMessage] = useState(null);
  const [signingin, setSigningin] = useState(false);

  const router = useRouter();
  const {email, password} = useLocalSearchParams ();
  console.log('Router >>>>>> ', router, email, password);

  const toast = useToast();

  console.log(toast);

  const { setToast } = toast;

  const inputs = [
    {
      label: "Phone Number",
      placeholder: "+91 1234567890",
      value: phone,
      cb: setPhone,
      inputMode: "tel",
      keyboard: "numeric",
    },
  ];

  const updatePhoneNumber = async () => {
    setSigningin(prev => true);
    setValidateMessage(prev => null);
    console.log("Phone ", phone);
    
    const account = new Account(client);

    try {
      const phoneUpdateResponse = await account.updatePhone(phone, password)
      console.log(phoneUpdateResponse);
      setToast(prev => ({
        show: true,
        message: "Phone number updated successfully",
        type: "success",
      }));
      router.replace('/main/home')
    }
    catch (error) {
      console.log(error,error.message);
      setValidateMessage(prev => error.message);
    }
    finally{
      setSigningin(prev => false);
    }
  }

  return {
    inputs,
    validateMessage,
    signingin,
    setSigningin,
    setValidateMessage,
    updatePhoneNumber,
};
}

export default phoneLogic;
