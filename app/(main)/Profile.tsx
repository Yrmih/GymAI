import React from "react";
import { ScrollView } from "react-native";
import { View, Text, Button, Switch, Avatar } from "@gluestack-ui/themed";
import { MotiView } from "moti";
import tw from "twin.macro";

export default function ProfileScreen() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [notifications, setNotifications] = React.useState(true);

  return (
    <ScrollView style={tw`flex-1 bg-[#0f0f0f] px-6 pt-12`}>
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 600 }}
      >
        <View style={tw`items-center mb-8`}>
          <Avatar
            size="xl"
            source={{ uri: "https://i.pravatar.cc/200?img=68" }}
          />
          <Text style={tw`text-white text-2xl font-bold mt-4`}>
            Ian Gonçalves
          </Text>
          <Text style={tw`text-gray-400 text-base`}>@iangymai</Text>
        </View>

        <View style={tw`bg-[#1a1a1a] p-5 rounded-2xl mb-6`}>
          <Text style={tw`text-white text-lg font-semibold mb-3`}>
            Dados físicos
          </Text>
          <View style={tw`flex-row justify-between mb-2`}>
            <Text style={tw`text-gray-300`}>Altura:</Text>
            <Text style={tw`text-white font-semibold`}>1.70 m</Text>
          </View>
          <View style={tw`flex-row justify-between mb-2`}>
            <Text style={tw`text-gray-300`}>Peso:</Text>
            <Text style={tw`text-white font-semibold`}>79 kg</Text>
          </View>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-gray-300`}>Meta:</Text>
            <Text style={tw`text-white font-semibold`}>Hipertrofia</Text>
          </View>
        </View>

        <View style={tw`bg-[#1a1a1a] p-5 rounded-2xl mb-6`}>
          <Text style={tw`text-white text-lg font-semibold mb-3`}>
            Preferências
          </Text>

          <View style={tw`flex-row justify-between items-center mb-3`}>
            <Text style={tw`text-gray-300`}>Modo escuro</Text>
            <Switch value={darkMode} onValueChange={setDarkMode} />
          </View>

          <View style={tw`flex-row justify-between items-center`}>
            <Text style={tw`text-gray-300`}>Notificações</Text>
            <Switch value={notifications} onValueChange={setNotifications} />
          </View>
        </View>

        <MotiView
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", delay: 200 }}
        >
          <Button
            size="lg"
            bg="$red600"
            borderRadius="$xl"
            onPress={() => console.log("Logout")}
          >
            <Text style={tw`text-white text-lg font-semibold`}>Sair</Text>
          </Button>
        </MotiView>
      </MotiView>
    </ScrollView>
  );
}
