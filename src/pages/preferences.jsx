import { TextInput, Button, Select } from "@mantine/core";

const PROVINCES = {
  Alberta: "AB",
  "British Columbia": "BC",
  Manitoba: "MB",
  "New Brunswick": "NB",
  "Newfoundland and Labrador": "NL",
  "Nova Scotia": "NS",
  Ontario: "ON",
  "Prince Edward Island": "PE",
  Quebec: "QC",
  Saskatchewan: "SK",
};

const Preferences = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Preferences</h1>
      <p className="text-lg">Welcome to your preferences page</p>
      <div className="flex flex-col gap-5 mt-3 w-[100%] sm:w-[50%]">
        <TextInput
          size="md"
          radius="md"
          placeholder="Countary"
          value="Canada"
          label="Country"
          disabled
        />
        <Select
          label="Province"
          placeholder="Pick Province"
          size="md"
          radius="md"
          data={Object.keys(PROVINCES)}
          searchable
          required
        />
        <TextInput
          size="md"
          radius="md"
          placeholder="City"
          label="City (optional)"
        />
        <Button
          variant="gradient"
          size="md"
          className="mt-4"
          color="#4285F4"
          radius="md"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default Preferences;
