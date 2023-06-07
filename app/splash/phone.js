import { View, Text, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Input from '../../components/Input'
import phoneLogic from '../../Logic/UserLogic.js/Phone.logic'
import SplashButton from '../../components/Buttons/SplashButton'
import { SafeAreaView } from 'react-native-safe-area-context'

const phoneNumber = () => {
  
  const { inputs, validateMessage, updatePhoneNumber, signingin } = phoneLogic()

  return (
    <KeyboardAvoidingView behavior="padding" className="bg-black">
    <Stack.Screen options={{
      headerTitle: 'Provide your phone number',
      headerLeft: null,
    }} />
    <SafeAreaView>
      <View className="p-4 pt-10 h-full flex flex-col w-full">
        {
          inputs.map((input, index) => (
            <Input
              key={index}
              {...input}
            />
          ))
        }
        {validateMessage && <Text className='text-red-600 px-4'>{validateMessage}</Text>}
        <SplashButton text="Update phone number" loading={signingin} cb={updatePhoneNumber}/>  
      </View>
    </SafeAreaView>
  </KeyboardAvoidingView>
  )
}

export default phoneNumber