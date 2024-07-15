import { Group, Input, Button } from "@mantine/core";
import "./login.css";

const Login = () => {
  return (
    <div className="container">
      <h2>Hello Again!</h2>
      <Input size="md" radius="md" placeholder="Email" />
      <Input size="md" radius="md" placeholder="Password" type="password" />
      <Group justify="flex-end">
        <Button variant="filled" color="#4285F4">
          Login
        </Button>
      </Group>
    </div>
  );
};

export default Login;
