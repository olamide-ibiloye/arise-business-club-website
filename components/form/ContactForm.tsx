"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui";
import { formFields } from "../constants/constants";
import { useToast } from "../ui/use-toast";
import Field from "./Field";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name cannot be empty.",
  }),
  lastName: z.string().min(2, {
    message: "Last name cannot be empty.",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(5, {
    message: "Message cannot be empty.",
  }),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const showToast = () => {
    toast({
      title: "Success",
      description: "Enquiry has been sent successfully!",
    });
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Optionally, handle response data here if needed
      const responseData = await response.json();
      console.log("Form submission successful:", responseData);

      // Notify user
      showToast();

      // Reset form fields
      form.reset();

      // Optionally, show success message or redirect to a thank you page
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., show error message to the user)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center shadow-3xl px-5 py-8 md:px-12 md:py-16 rounded">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 w-full md:w-[600px]"
        >
          {formFields.map((entry) => (
            <Field key={entry.label} entry={entry} />
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
