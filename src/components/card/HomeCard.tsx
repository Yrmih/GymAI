import React from "react";
import { Button, VStack, Heading, Text } from "@gluestack-ui/themed";

interface HomeCardProps {
  title: string;
  description: string;
  onPress: () => void;
  icon?: React.ReactNode;
}

export default function HomeCard({
  title,
  description,
  onPress,
  icon,
}: HomeCardProps) {
  return (
    <Button
      onPress={onPress}
      bg="#0F0F0F" // fundo preto fosco
      borderRadius="$xl"
      borderWidth={2}
      borderColor="#5DD26C" // borda verde neon
      py="$10"
      px="$6"
      minHeight={220}
      justifyContent="flex-start"
      alignItems="flex-start"
      style={{
        shadowColor: "#5DD26C",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
      }}
      $hover-bg="$gray900"
      $active-bg="$gray800"
    >
      <VStack space="sm" w="$full">
        {icon}

        <Heading color="#5DD26C" size="md" fontWeight="$bold">
          {title}
        </Heading>

        <Text color="$white" size="sm" lineHeight={22} flexWrap="wrap">
          {description}
        </Text>
      </VStack>
    </Button>
  );
}
