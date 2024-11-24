import React from "react";
import {
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
} from "@chakra-ui/react";

const ExpandableAvatar = ({ name, src }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Avatar with Click Event */}
      <Avatar
        name={name}
        src={src}
        cursor="pointer"
        onClick={onOpen} // Open the modal on click
      />

      {/* Modal for Full-Sized Image */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Image src={src} alt={name} borderRadius="md" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ExpandableAvatar;
