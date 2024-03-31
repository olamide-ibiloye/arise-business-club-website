"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui";
import { useToast } from "../ui/use-toast";
import Field from "./Field";
import { disclaimerMessage } from "../constants/constants";

const SignUpFormFields = [
  {
    type: "firstName",
    label: "First Name*",
    placeholder: "first name",
  },
  {
    type: "lastName",
    label: "Last Name*",
    placeholder: "last name",
  },
  {
    type: "jobTitle",
    label: "Job Title",
    placeholder: "last name",
  },
  {
    type: "phone",
    label: "Phone",
    placeholder: "phone number",
  },
];

const emailField = {
  type: "email",
  label: "Email*",
  placeholder: "email address",
};

const messageField = {
  type: "message",
  label: "What motivated you to sign up?",
  placeholder: "type your message",
};

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name cannot be empty.",
  }),
  lastName: z.string().min(2, {
    message: "Last name cannot be empty.",
  }),
  jobTitle: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().optional(),
});

const SignUpForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const {
    reset,
    formState: { isSubmitting },
  } = form;

  const showToast = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    toast({
      title,
      description,
    });
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("/api/sign-up", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, type: "sign-up" }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Optionally, handle response data here if needed
      const responseData = await response.json();
      console.log("Form submission successful:", responseData);

      // Notify user
      showToast({
        title: "Success",
        description: "You're In! Thanks for registering.",
      });

      // Reset form fields
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);

      showToast({
        title: "Hiya!",
        description: "You're already registered!",
      });
    }
  };

  return (
    <div className="flex justify-center bg-base-200 hover:bg-white shadow-none hover:shadow-3xl px-5 py-8 lg:px-12 md:py-16 rounded mx-auto border">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 w-full"
        >
          <div className="block max-md:space-y-5 lg:grid lg:grid-cols-2 gap-4 items-center">
            {SignUpFormFields.map((entry) => (
              <Field key={entry.label} entry={entry} />
            ))}
          </div>

          <Field entry={emailField} />

          <Field entry={messageField} />

          <div className="flex justify-center">
            <button className="arise-button w-full" disabled={isSubmitting}>
              {isSubmitting ? "Registering" : "Register"}
            </button>
          </div>

          <p className="text-xs text-gray-600">{disclaimerMessage}</p>
        </form>
      </Form>
    </div>
  );
};

export default SignUpForm;
