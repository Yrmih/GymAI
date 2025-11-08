import React from "react";
import { Button, VStack, Heading, Text, Box } from "@gluestack-ui/themed";
import { MotiView } from "moti";

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
      bg="$black"
      borderRadius="$xl"
      borderWidth={2}
      borderColor="#5DD26C"
      py="$10"
      px="$6"
      minHeight={220}
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      shadowColor="#5DD26C"
      shadowOffset={{ width: 0, height: 3 }}
      shadowOpacity={0.3}
      shadowRadius={8}
      elevation={6}
      $hover-bg="$gray900"
      $active-bg="$gray800"
    >
      {/* Reflexo animado diagonal com Moti */}
      <MotiView
        from={{ translateX: -300, opacity: 0 }}
        animate={{ translateX: 300, opacity: 0.25 }}
        transition={{
          loop: true,
          repeatReverse: false,
          duration: 2500,
        }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          w="60%"
          h="$full"
          bg="rgba(255,255,255,0.1)"
          style={{
            transform: [{ rotate: "20deg" }],
          }}
        />
      </MotiView>

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
