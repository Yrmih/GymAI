import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { MotiView } from "moti";
import { Feather } from "@expo/vector-icons";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
}

export default function ChatAI() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const flatListRef = useRef<FlatList>(null);

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");

    // Simula resposta da IA
    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: "Processando... 🤖",
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiMsg]);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === aiMsg.id
              ? { ...m, text: "Olá! Como posso te ajudar hoje?" }
              : m
          )
        );
      }, 1200);
    }, 500);
  };

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const renderMessage = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.messageBubble,
        item.sender === "user" ? styles.userBubble : styles.aiBubble,
      ]}
    >
      <Text style={item.sender === "user" ? styles.userText : styles.aiText}>
        {item.text}
      </Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesContainer}
      />

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem..."
          placeholderTextColor="#555"
          value={inputText}
          onChangeText={setInputText}
          multiline
        />

        <MotiView
          from={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ loop: true, duration: 1200, type: "timing" }}
        >
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Feather name="send" size={24} color="#0F0F0F" />
          </TouchableOpacity>
        </MotiView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
  },
  messagesContainer: {
    padding: 16,
    paddingBottom: 20, // diminuiu para subir o input
  },
  messageBubble: {
    padding: 12,
    borderRadius: 16,
    marginVertical: 6,
    maxWidth: "80%",
  },
  userBubble: {
    backgroundColor: "#5DD26C",
    alignSelf: "flex-end",
    borderBottomRightRadius: 0,
  },
  aiBubble: {
    backgroundColor: "#1C1C1C",
    alignSelf: "flex-start",
    borderBottomLeftRadius: 0,
  },
  userText: {
    color: "#0F0F0F",
    fontSize: 16,
  },
  aiText: {
    color: "#5DD26C",
    fontSize: 16,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    paddingVertical: 8, // diminuiu padding para subir
    backgroundColor: "#121212",
    borderTopWidth: 1,
    borderTopColor: "#222",
    marginBottom: 60, // afasta da borda da tela
  },
  input: {
    flex: 1,
    backgroundColor: "#1C1C1C",
    color: "#FFF",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    maxHeight: 120,
  },
  sendButton: {
    backgroundColor: "#5DD26C",
    width: 52,
    height: 52,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },
});
