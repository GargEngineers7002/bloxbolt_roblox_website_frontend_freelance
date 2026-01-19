import Modal from "@/components/Modal";
import AuthModal from "@/components/AuthModal";

export default function LoginModal() {
  return (
    <Modal>
      <AuthModal initialView="login" />
    </Modal>
  );
}
