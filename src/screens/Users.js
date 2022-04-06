import React, {useState} from 'react'
import {Text, TextInput, View, } from 'react-native'

export const Users = () => {
  const [user, setUser] =useState('') 
    return (
        <View> 
          <Text>
            {user}
          </Text>
          <TextInput
          placeholder="Digite seu User"
          value={user}
          onChangeText={user => setUser(user)}
          />
        </View>
    )
}