import Modal from "@/components/Modal";
import AuthModal from "@/components/AuthModal";

export default function LoginModal() {
  return (
    <Modal disableDismissOnOverlay={true}>
      <AuthModal initialView="login" />
    </Modal>
  );
}
