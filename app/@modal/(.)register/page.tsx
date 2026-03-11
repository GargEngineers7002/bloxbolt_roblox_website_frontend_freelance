import Modal from "@/components/Modal";
import AuthModal from "@/components/AuthModal";

export default function RegisterModal() {
  return (
    <Modal disableDismissOnOverlay={true}>
      <AuthModal initialView="register" />
    </Modal>
  );
}
