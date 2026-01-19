import AuthModal from "@/components/AuthModal";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#080c12]">
      <AuthModal initialView="login" />
    </div>
  );
}