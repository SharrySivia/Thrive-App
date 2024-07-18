import { Input, Button } from "@mantine/core";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col w-2/6 m-auto gap-4">
      <div>
        <h1 className="text-2xl">Signup</h1>
        <p>Create a new account</p>
      </div>
      <Input size="md" radius="md" placeholder="Username" />
      <Input size="md" radius="md" placeholder="Email" />
      <Input size="md" radius="md" placeholder="Password" type="password" />
      <Input
        size="md"
        radius="md"
        placeholder="Confirm Password"
        type="password"
      />
      <p className="text-sm">
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <Button variant="filled" color="#4285F4" radius="md">
        Signup
      </Button>
    </div>
  );
};

export default Signup;
