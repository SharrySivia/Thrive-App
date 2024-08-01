import { TextInput, Button } from "@mantine/core";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col w-[100%] sm:w-[50%] m-auto gap-4">
      <h1 className="text-2xl">Hello Again!</h1>
      <TextInput
        label="Email"
        required
        type="email"
        size="md"
        radius="md"
        placeholder="Email"
      />
      <TextInput
        size="md"
        label="Password"
        required
        radius="md"
        placeholder="Password"
        type="password"
      />
      <p className="text-sm">
        Don't have an account? <Link to="/signup">Signup </Link>
      </p>
      <Button variant="gradient" size="md" color="#4285F4" radius="md">
        Login
      </Button>
    </div>
  );
};

export default Login;
