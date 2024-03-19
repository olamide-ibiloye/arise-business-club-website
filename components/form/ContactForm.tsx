"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "../ui";
import { formFields } from "../constants/constants";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name cannot be empty.",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(2, {
    message: "Message cannot be empty.",
  }),
});

const ContactForm = () => {
  // Assuming you have form setup using react-hook-form
  const { reset } = useForm<z.infer<typeof formSchema>>();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      const data = {
        ...values,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Optionally, handle response data here if needed
      const responseData = await response.json();
      console.log("Form submission successful:", responseData);

      // Reset form fields
      reset();

      // Optionally, show success message or redirect to a thank you page
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., show error message to the user)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center shadow-3xl px-12 py-16 rounded">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 w-full md:w-[600px]"
        >
          {formFields.map((entry) => (
            <FormField
              key={entry.label}
              control={form.control}
              name={entry.type as "message" | "email" | "name"}
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
          ))}

          <div className="flex justify-center">
            <button className="arise-button w-[200px]" disabled={loading}>
              {loading ? "Submitting" : "Submit"}
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
