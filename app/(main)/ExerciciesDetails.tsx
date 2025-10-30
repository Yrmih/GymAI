import React, { useRef } from "react";
import { ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Video, ResizeMode } from "expo-av";
import { View, Text, Image, Button, ButtonText } from "@gluestack-ui/themed";

export default function ExerciseDetails() {
  const { name, muscle, image, video } = useLocalSearchParams();
  const router = useRouter();
  const videoRef = useRef<Video>(null);

  return (
    <View flex={1} backgroundColor="#0F0F0F">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 48 }}
      >
        {/* Imagem principal */}
        <View
          w="100%"
          h={288}
          backgroundColor="#202020"
          justifyContent="center"
          alignItems="center"
        >
          {image ? (
            <Image
              source={{ uri: image as string }}
              alt="Exercício"
              style={{
                width: - 48,
                height: 288,
                borderRadius: 16,
                resizeMode: "cover",
              }}
            />
          ) : (
            <Text color="#5DD26C" fontSize="$lg">
              Imagem indisponível
            </Text>
          )}
        </View>

        {/* Conteúdo */}
        <View px="$6" mt="$6">
          <Text color="#F8F8F8" fontSize="$3xl" fontWeight="$bold" mb="$2">
            {name}
          </Text>
          <Text color="#5DD26C" fontSize="$md" mb="$6">
            {muscle}
          </Text>

          {/* Instruções */}
          <View
            bg="#202020"
            borderRadius={16}
            p="$5"
            mb="$6"
            borderWidth={1}
            borderColor="#337418"
            shadowColor="#5DD26C"
            shadowOpacity={0.1}
            shadowRadius={10}
          >
            <Text color="#F8F8F8" fontSize="$lg" fontWeight="$semibold" mb="$2">
              Instruções
            </Text>
            <Text color="#F8F8F8" fontSize="$sm" lineHeight="$lg">
              Mantenha a postura correta durante toda a execução. Concentre-se
              no movimento e controle tanto a fase concêntrica quanto a
              excêntrica. Respire de forma ritmada e mantenha o abdômen
              estabilizado.
            </Text>
          </View>

          {/* Dica da IA */}
          <View
            bg="#202020"
            borderRadius={16}
            p="$5"
            mb="$6"
            borderWidth={1}
            borderColor="#337418"
            shadowColor="#5DD26C"
            shadowOpacity={0.1}
            shadowRadius={10}
          >
            <Text color="#F8F8F8" fontSize="$lg" fontWeight="$semibold" mb="$2">
              💡 Dica da IA
            </Text>
            <Text color="#F8F8F8" fontSize="$sm" lineHeight="$lg">
              Com base no seu biotipo, priorize repetições moderadas com carga
              progressiva. Em breve, essa seção trará recomendações
              personalizadas da IA.
            </Text>
          </View>

          {/* Vídeo */}
          <View
            bg="#202020"
            borderRadius={16}
            p="$5"
            mb="$8"
            borderWidth={1}
            borderColor="#337418"
            shadowColor="#5DD26C"
            shadowOpacity={0.1}
            shadowRadius={10}
            alignItems="center"
          >
            <Text color="#F8F8F8" fontSize="$lg" fontWeight="$semibold" mb="$3">
              🎥 Assista o vídeo
            </Text>
            <Video
              ref={videoRef}
              source={{
                uri:
                  (video as string) ||
                  "https://www.w3schools.com/html/mov_bbb.mp4",
              }}
              style={{
                width: "100%",
                height: 190,
                borderRadius: 12,
              }}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              isLooping
            />
          </View>

          {/* Botão voltar */}
          <Button
            onPress={() => router.back()}
            backgroundColor="#5DD26C"
            borderRadius={16}
            py="$3"
          >
            <ButtonText color="#0F0F0F" fontWeight="$bold" fontSize="$md">
              Voltar
            </ButtonText>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}
