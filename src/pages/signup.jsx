import { TextInput, Button } from "@mantine/core";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col w-[100%] sm:w-[50%] m-auto gap-4">
      <div>
        <h1 className="text-2xl font-bold">Signup</h1>
        <p>Create a new account</p>
      </div>
      <TextInput
        label="Username"
        required
        size="md"
        radius="md"
        placeholder="Username"
      />
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
      <TextInput
        size="md"
        radius="md"
        required
        placeholder="Confirm Password"
        label="Confirm Password"
        type="password"
      />
      <p className="text-sm">
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <Button variant="gradient" size="md" color="#4285F4" radius="md">
        Signup
      </Button>
    </div>
  );
};

export default Signup;
