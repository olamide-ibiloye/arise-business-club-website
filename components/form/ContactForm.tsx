"use client";

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
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(10, { message: "Message cannot be less than 10 characters." })
    .max(1000, { message: "Message cannot be more than 1000 characters." }),
});

const ContactForm = () => {
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

  const {
    reset,
    formState: { isSubmitting },
  } = form;

  const showToast = () => {
    toast({
      title: "Success",
      description: "Enquiry has been sent successfully!",
    });
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, type: "contact" }),
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
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex justify-center bg-base-200 hover:bg-white shadow-none hover:shadow-3xl px-5 py-8 md:px-12 md:py-16 rounded">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 w-full md:w-[600px]"
        >
          {formFields.map((entry) => (
            <Field key={entry.label} entry={entry} />
          ))}

          <div className="flex justify-center">
            <button className="arise-button w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting" : "Submit"}
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
