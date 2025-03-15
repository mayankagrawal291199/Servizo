import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../theme/theme';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: '1',
      sender: 'chef',
      text: 'Hello! I received your booking.',
      timestamp: '10:30 AM'
    },
    {
      id: '2',
      sender: 'user',
      text: 'Great! What time will you arrive?',
      timestamp: '10:31 AM'
    }
  ]);

  const renderMessage = ({ item }) => (
    <View style={[
      styles.messageContainer,
      item.sender === 'user' ? styles.userMessage : styles.chefMessage
    ]}>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.messagesList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message..."
          placeholderTextColor={COLORS.gray}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Icon name="send" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  messagesList: {
    padding: SIZES.base * 2
  },
  messageContainer: {
    maxWidth: '80%',
    padding: SIZES.base * 1.5,
    borderRadius: SIZES.base,
    marginBottom: SIZES.base
  },
  userMessage: {
    backgroundColor: COLORS.primary,
    alignSelf: 'flex-end'
  },
  chefMessage: {
    backgroundColor: COLORS.lightGray,
    alignSelf: 'flex-start'
  },
  messageText: {
    color: COLORS.white,
    fontSize: SIZES.font
  },
  timestamp: {
    color: COLORS.gray,
    fontSize: SIZES.small,
    marginTop: 4,
    alignSelf: 'flex-end'
  },
  inputContainer: {
    flexDirection: 'row',
    padding: SIZES.base * 2,
    backgroundColor: COLORS.secondary
  },
  input: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.base,
    padding: SIZES.base * 1.5,
    marginRight: SIZES.base,
    color: COLORS.white
  },
  sendButton: {
    backgroundColor: COLORS.primary,
    width: 50,
    borderRadius: SIZES.base,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ChatScreen;