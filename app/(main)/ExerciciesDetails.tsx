
import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import tw from "twin.macro";

export default function ExerciseDetails() {
  const { name, muscle, image } = useLocalSearchParams();
  const router = useRouter();

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
            style={tw`w-full h-full`}
            resizeMode="cover"
          />
        ) : (
          <Text style={tw`text-[#5dd62c] text-lg`}>Imagem indisponível</Text>
        )}
      </View>

      {/* Conteúdo */}
      <View style={tw`px-6 mt-6`}>
        <Text style={tw`text-[#f8f8f8] text-3xl font-bold mb-2`}>
          {name}
        </Text>
        <Text style={tw`text-[#5dd62c] text-base mb-6`}>{muscle}</Text>

        {/* Card de instruções */}
        <View
          style={tw`bg-[#202020] rounded-2xl p-5 mb-6 border border-[#337418] shadow-lg shadow-[#5dd62c]/10`}
        >
          <Text style={tw`text-[#f8f8f8] text-lg font-semibold mb-2`}>
            Instruções
          </Text>
          <Text style={tw`text-[#f8f8f8] text-sm leading-6`}>
            Mantenha a postura correta durante toda a execução. Concentre-se no movimento e controle tanto a fase concêntrica quanto a excêntrica. 
            Respire de forma ritmada e mantenha o abdômen estabilizado.
          </Text>
        </View>

        {/* Card de dicas da IA (placeholder por enquanto) */}
        <View
          style={tw`bg-[#202020] rounded-2xl p-5 mb-6 border border-[#337418] shadow-lg shadow-[#5dd62c]/10`}
        >
          <Text style={tw`text-[#f8f8f8] text-lg font-semibold mb-2`}>
            💡 Dica da IA
          </Text>
          <Text style={tw`text-[#f8f8f8] text-sm leading-6`}>
            Com base no seu biotipo, priorize repetições moderadas com carga progressiva.
            Em breve, essa seção trará recomendações personalizadas da IA.
          </Text>
        </View>

        {/* Card do vídeo (a ser integrado) */}
        <View
          style={tw`bg-[#202020] rounded-2xl p-5 mb-8 border border-[#337418] shadow-lg shadow-[#5dd62c]/10 items-center`}
        >
          <Text style={tw`text-[#f8f8f8] text-lg font-semibold mb-3`}>
            🎥 Assista o vídeo
          </Text>
          <View style={tw`w-full h-48 bg-[#0f0f0f] rounded-xl justify-center items-center`}>
            <Text style={tw`text-[#5dd62c]`}>[Vídeo em breve]</Text>
          </View>
        </View>

        {/* Botão */}
        <TouchableOpacity
          onPress={() => router.back()}
          style={tw`bg-[#5dd62c] py-4 rounded-2xl items-center`}
        >
          <Text style={tw`text-[#0f0f0f] font-bold text-base`}>
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}


// Apos a IA identificar o exercício, o app busca a tela 0 ExerciseDetails com:
// imagem, instruções, dica da IA, vídeo