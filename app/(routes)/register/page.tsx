export const dynamic = "force-dynamic";
import dynamicImport from "next/dynamic";

const RegisterPageClient = dynamicImport(() => import("./RegisterPageClient"), {
  ssr: false,
});

const RegisterPage = () => {
  // Read env on the server
  const apiUri = process.env.NEXT_PUBLIC_API_URI || "";

  return <RegisterPageClient apiUri={apiUri} />;
};

export default RegisterPage;
