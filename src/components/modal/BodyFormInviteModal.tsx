import React from "react";
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ButtonText,
  Heading,
  HStack,
} from "@gluestack-ui/themed";
import { Text } from "react-native";

interface BodyFormInviteModalProps {
  showModal: boolean;
  onClose: () => void;
  onPreencher: () => void;
  onPular: () => void;
}

export default function BodyFormInviteModal({
  showModal,
  onClose,
  onPreencher,
  onPular,
}: BodyFormInviteModalProps) {
  return (
    <Modal isOpen={showModal} onClose={onClose}>
      <ModalBackdrop />
      <ModalContent bg="#1A1A1A" borderRadius="$2xl" p="$5">
        <ModalHeader>
          <Heading color="$white" fontSize="$xl">
            Complete seu perfil
          </Heading>
        </ModalHeader>

        <ModalBody>
          <Text
            style={{
              color: "#6CFF7F", // 💚 verde neon
              marginTop: 8,
              lineHeight: 20,
              fontSize: 15,
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            Quer deixar seu perfil completo pra treinos mais precisos?{"\n"}
            Adicione seus dados corporais agora! 💪
          </Text>
        </ModalBody>

        <ModalFooter mt={16}>
          <HStack space="md" justifyContent="space-between" w="100%">
            <Button
              flex={1}
              bg="#5DD26C"
              borderRadius={16}
              height={48}
              onPress={onPreencher}
              style={{
                shadowColor: "#5DD26C",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 3,
                elevation: 2,
              }}
            >
              <ButtonText color="#0F0F0F" fontWeight="$bold">
                Preencher
              </ButtonText>
            </Button>

            <Button
              flex={1}
              bg="transparent"
              borderColor="#5DD26C"
              borderWidth={1.5}
              borderRadius={16}
              height={48}
              onPress={onPular}
            >
              <ButtonText color="#5DD26C" fontWeight="$semibold">
                Depois
              </ButtonText>
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
