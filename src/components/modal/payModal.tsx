import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@nextui-org/react";
import CorrectIcon from "../icons/Correct";
import { sepolia } from "wagmi";

interface PayModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  hash: string;
}

export default function PayModal({
  isOpen,
  onOpenChange,
  hash = "",
}: PayModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="md"
      classNames={{
        footer: "flex flex-col",
      }}
    >
      <ModalContent>
        {(onClose) => {
          return (
            <>
              <ModalBody className="flex flex-col justify-between items-center py-8">
                <div className="flex flex-col justify-between items-center py-8">
                  <div className="flex flex-col items-center">
                    <CorrectIcon />
                    <p className="text-lg font-semibold">Successfully</p>
                    <p className="text-sm font-medium text-tertiary">
                      Your are now, paying the order
                    </p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="pb-8">
                <Button
                  color="primary"
                  className="w-full font-bold"
                  variant="light"
                  onPress={() => {
                    window.open(`${sepolia.blockExplorers.default.url}/tx/${hash}`, "_blank");
                  }}
                >
                  View on Etherscan
                </Button>
              </ModalFooter>
            </>
          );
        }}
      </ModalContent>
    </Modal>
  );
}
