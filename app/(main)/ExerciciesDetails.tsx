import React, { useRef } from "react";
import { ScrollView, Text, View, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import tw from "twin.macro";
import { Video, ResizeMode } from "expo-av";
import { Button } from "@gluestack-ui/themed";

export default function ExerciseDetails() {
  const { name, muscle, image, video } = useLocalSearchParams();
  const router = useRouter();
  const videoRef = useRef<Video>(null);

  return (
    <ScrollView
      style={tw`flex-1 bg-[#0f0f0f]`}
      contentContainerStyle={tw`pb-12`}
    >
      {/* Imagem do exercício */}
      <View style={tw`w-full h-72 bg-[#202020] justify-center items-center`}>
        {image ? (
          <Image
            source={{ uri: image as string }}
            style={tw`w-full h-full rounded-xl`}
            resizeMode="cover"
          />
        ) : (
          <Text style={tw`text-[#5dd26c] text-lg`}>Imagem indisponível</Text>
        )}
      </View>

      {/* Conteúdo */}
      <View style={tw`px-6 mt-6`}>
        <Text style={tw`text-[#f8f8f8] text-3xl font-bold mb-2`}>
          {name}
        </Text>
        <Text style={tw`text-[#5dd26c] text-base mb-6`}>{muscle}</Text>

        {/* Instruções */}
        <View
          style={tw`bg-[#202020] rounded-2xl p-5 mb-6 border border-[#337418] shadow-lg shadow-[#5dd26c]/10`}
        >
          <Text style={tw`text-[#f8f8f8] text-lg font-semibold mb-2`}>
            Instruções
          </Text>
          <Text style={tw`text-[#f8f8f8] text-sm leading-6`}>
            Mantenha a postura correta durante toda a execução. Concentre-se no movimento e controle tanto a fase concêntrica quanto a excêntrica. 
            Respire de forma ritmada e mantenha o abdômen estabilizado.
          </Text>
        </View>

        {/* Dicas da IA */}
        <View
          style={tw`bg-[#202020] rounded-2xl p-5 mb-6 border border-[#337418] shadow-lg shadow-[#5dd26c]/10`}
        >
          <Text style={tw`text-[#f8f8f8] text-lg font-semibold mb-2`}>
            💡 Dica da IA
          </Text>
          <Text style={tw`text-[#f8f8f8] text-sm leading-6`}>
            Com base no seu biotipo, priorize repetições moderadas com carga progressiva.
            Em breve, essa seção trará recomendações personalizadas da IA.
          </Text>
        </View>

        {/* Vídeo */}
        <View
          style={tw`bg-[#202020] rounded-2xl p-5 mb-8 border border-[#337418] shadow-lg shadow-[#5dd26c]/10 items-center`}
        >
          <Text style={tw`text-[#f8f8f8] text-lg font-semibold mb-3`}>
            🎥 Assista o vídeo
          </Text>
          <Video
            ref={videoRef}
            source={{ uri: (video as string) || "https://www.w3schools.com/html/mov_bbb.mp4" }}
            style={tw`w-full h-48 rounded-xl`}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
          />
        </View>

        {/* Botão voltar */}
        <Button
          onPress={() => router.back()}
          bg="#5DD26C"
          rounded="2xl"
          py={4}
          _text={{ color: "#0F0F0F", fontWeight: "bold", fontSize: 16 }}
        >
          Voltar
        </Button>
      </View>
    </ScrollView>
  );
}
