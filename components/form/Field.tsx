import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "../ui";
import { useFormContext } from "react-hook-form";

interface EntryInputs {
  label: string;
  type: string;
  placeholder: string;
}

interface FieldProps {
  entry: EntryInputs;
}

const Field = ({ entry }: FieldProps) => {
  const form = useFormContext();

  return (
    <FormField
      key={entry.label}
      control={form.control}
      name={entry.type as "message" | "email" | "firstName" | "lastName"}
      render={({ field }) => (
        <FormItem key={entry.label}>
          <FormLabel>{entry.label}</FormLabel>
          <FormControl>
            {entry.type === "message" ? (
              <Textarea
                className="rounded-none bg-gray-50"
                rows={6}
                placeholder={entry.placeholder}
                {...field}
              />
            ) : (
              <Input
                className="bg-gray-50"
                placeholder={entry.placeholder}
                {...field}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Field;
