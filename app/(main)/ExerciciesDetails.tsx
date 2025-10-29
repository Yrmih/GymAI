import React, { useState, useEffect } from "react";
import { ScrollView, Image, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import tw from "twin.macro";
import { useLocalSearchParams, useRouter } from "expo-router";
import { MotiView } from "moti";
import { Spinner } from "@gluestack-ui/themed";
import { Video } from "expo-av";

// Mock IA
import { analyzeExerciseMock } from "@/src/mock/analyzeExerciseMock";

export default function ExerciseDetails() {
  const { name: paramName } = useLocalSearchParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [exercise, setExercise] = useState<any>(null);

  useEffect(() => {
    async function fetchExercise() {
      // Simula chamada para N8N + IA
      const data = await analyzeExerciseMock(paramName as string);
      setExercise(data);
      setLoading(false);
    }
    fetchExercise();
  }, [paramName]);

  if (loading || !exercise) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-[#0f0f0f]`}>
        <Spinner size="lg" color="#5DD26C" />
        <Text style={tw`text-[#f8f8f8] mt-4`}>Carregando exercício...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={tw`flex-1 bg-[#0f0f0f]`}
      contentContainerStyle={tw`pb-12`}
    >
      {/* Imagem do exercício */}
      <View style={tw`w-full h-72 bg-[#202020] justify-center items-center`}>
        {exercise.image ? (
          <Image
            source={{ uri: exercise.image }}
            style={tw`w-full h-full rounded-2xl`}
            resizeMode="cover"
          />
        ) : (
          <Text style={tw`text-[#5dd26c] text-lg`}>Imagem indisponível</Text>
        )}
      </View>

      {/* Conteúdo */}
      <View style={tw`px-6 mt-6`}>
        <Text style={tw`text-[#f8f8f8] text-3xl font-bold mb-2`}>
          {exercise.name}
        </Text>
        <Text style={tw`text-[#5dd26c] text-base mb-6`}>{exercise.muscle}</Text>

        {/* Card de instruções */}
        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 50, type: "timing", duration: 400 }}
        >
          <View
            style={tw`bg-[#202020] rounded-2xl p-5 mb-6 border border-[#337418] shadow-lg shadow-[#5dd26c]/10`}
          >
            <Text style={tw`text-[#f8f8f8] text-lg font-semibold mb-2`}>
              Instruções
            </Text>
            <Text style={tw`text-[#f8f8f8] text-sm leading-6`}>
              {exercise.instructions || "Siga a postura correta e execute com controle."}
            </Text>
          </View>
        </MotiView>

        {/* Card de dicas da IA */}
        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 150, type: "timing", duration: 400 }}
        >
          <View
            style={tw`bg-[#202020] rounded-2xl p-5 mb-6 border border-[#337418] shadow-lg shadow-[#5dd26c]/10`}
          >
            <Text style={tw`text-[#f8f8f8] text-lg font-semibold mb-2`}>
              💡 Dica da IA
            </Text>
            <Text style={tw`text-[#f8f8f8] text-sm leading-6`}>
              {exercise.tips || "Realize as repetições de forma moderada e progressiva."}
            </Text>
          </View>
        </MotiView>

        {/* Vídeo */}
        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 250, type: "timing", duration: 400 }}
        >
          <View
            style={tw`bg-[#202020] rounded-2xl p-5 mb-8 border border-[#337418] shadow-lg shadow-[#5dd26c]/10`}
          >
            <Text style={tw`text-[#f8f8f8] text-lg font-semibold mb-3`}>
              🎥 Assista o vídeo
            </Text>
            {exercise.video ? (
              <Video
                source={{ uri: exercise.video }}
                style={tw`w-full h-48 rounded-xl`}
                useNativeControls
                resizeMode="contain"
              />
            ) : (
              <View style={tw`w-full h-48 bg-[#0f0f0f] rounded-xl justify-center items-center`}>
                <Text style={tw`text-[#5dd26c]`}>[Vídeo em breve]</Text>
              </View>
            )}
          </View>
        </MotiView>

        {/* Botão Voltar */}
        <MotiView
          from={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 350, type: "timing", duration: 400 }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={tw`bg-[#5dd26c] py-4 rounded-2xl items-center`}
          >
            <Text style={tw`text-[#0f0f0f] font-bold text-base`}>
              Voltar
            </Text>
          </TouchableOpacity>
        </MotiView>
      </View>
    </ScrollView>
  );
}
