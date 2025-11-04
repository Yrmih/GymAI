import React from "react";
import { Button, View, Text, Heading } from "@gluestack-ui/themed";

interface HomeCardProps {
  title: string;
  description: string;
  onPress: () => void;
  icon?: React.ReactNode
}

export default function HomeCard({ title, description, onPress }: HomeCardProps) {
  return (
    <Button
      onPress={onPress}
      bg="$gray800"
      borderRadius="$lg"
      py="$10"           // padding vertical maior
      px="$6"            // padding horizontal confortável
      minHeight={220}     // altura mínima ainda maior
      justifyContent="flex-start"
      alignItems="flex-start"
      style={{
        shadowColor: "#5DD26C",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      }}
    >
      <View style={{ flexShrink: 1, width: '100%' }}>
        <Heading
          color="$green500"
          size="md"
          fontWeight="$bold"
          mb="$3"
        >
          {title}
        </Heading>

        <Text
          color="$white"
          size="sm"
          lineHeight={26}   // ainda mais espaçamento vertical
          flexWrap="wrap"
        >
          {description}
        </Text>
      </View>
    </Button>
  );
}
