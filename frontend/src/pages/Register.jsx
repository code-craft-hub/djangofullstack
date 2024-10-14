import Form from "../components/Form";

export default function Register() {
  return <div className="flex flex-1 items-center bg-gray-200 justify-center min-h-screen w-full"><Form route="/api/user/register/" method={"register"} /></div>;
}
