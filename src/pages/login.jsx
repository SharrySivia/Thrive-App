import { Input, Button } from "@mantine/core";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col w-2/6 m-auto gap-4">
      <h1 className="text-2xl">Hello Again!</h1>
      <Input size="md" radius="md" placeholder="Email" />
      <Input size="md" radius="md" placeholder="Password" type="password" />
      <p className="text-sm">
        Don't have an account? <Link to="/signup">Signup </Link>
      </p>
      <Button variant="filled" color="#4285F4" radius="md">
        Login
      </Button>
    </div>
  );
};

export default Login;
