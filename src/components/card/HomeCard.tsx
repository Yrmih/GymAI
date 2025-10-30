import React from "react";
import { Text } from "react-native";
import { Button, View } from "@gluestack-ui/themed";

interface HomeCardProps {
  title: string;
  description: string;
  onPress: () => void;
}

export default function HomeCard({ title, description, onPress }: HomeCardProps) {
  return (
    <Button
      onPress={onPress}
      bg="$gray800"
      borderRadius="lg"
      py="$4"
      px="$5"
      style={{ shadowColor: "#5DD26C", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 6 }}
    >
      <View>
        <Text style={{ color: "$green500", fontSize: 18, fontWeight: "bold", marginBottom: 4 }}>
          {title}
        </Text>
        <Text style={{ color: "#F8F8F8", fontSize: 14 }}>
          {description}
        </Text>
      </View>
    </Button>
  );
}
