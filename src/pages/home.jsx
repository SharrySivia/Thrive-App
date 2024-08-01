import { Button } from "@mantine/core";

const Home = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-5xl font-extrabold">
        Stay Ahead of Job Opportunities
      </h1>
      <p className="mt-7">
        Get real-time notifications for the latest job openings according to
        your preferences.
      </p>
      <a href="/preferences">
        <Button className="mt-12" size="md" variant="gradient" color="#4285F4">
          Get Started
        </Button>
      </a>
    </div>
  );
};

export default Home;
