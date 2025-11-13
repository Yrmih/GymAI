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
          <Text style={{ color: "#A3A3A3", marginTop: 8 }}>
            Quer deixar seu perfil completo pra treinos mais precisos?
            Adicione seus dados corporais agora 💪
          </Text>
        </ModalBody>

        <ModalFooter
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 16,
          }}
        >
          <Button
            bg="#5DD26C"
            borderRadius="full"
            paddingHorizontal={24}
            onPress={onPreencher}
          >
            <ButtonText color="#0F0F0F">Preencher agora</ButtonText>
          </Button>

          <Button
            bg="transparent"
            borderColor="#5DD26C"
            borderWidth={1}
            borderRadius="full"
            paddingHorizontal={24}
            onPress={onPular}
          >
            <ButtonText color="#5DD26C">Depois</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
