"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui";
import { useToast } from "../ui/use-toast";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "../ui";
import Socials from "../footer/Socials";

const entry = {
  type: "email",
  label: "Enter your email address*",
  placeholder: "username@site.com",
};

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

interface ToastProps {
  title: string;
  description: string;
}

const NewsletterForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const {
    reset,
    formState: { isSubmitting },
  } = form;

  const showToast = ({ title, description }: ToastProps) => {
    toast({
      title,
      description,
    });
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, type: "newsletter" }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // const responseData = await response.json();
      // console.log("Form submission successful:", responseData);

      // Notify user
      showToast({
        title: "Success",
        description: "You're In! Thanks for subscribing.",
      });

      // Reset form fields
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);

      showToast({
        title: "Hiya!",
        description:
          "You're already a subscriber! You'd be hearing from us soon",
      });
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <FormField
              control={form.control}
              name={entry.type as "email"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{entry.label}</FormLabel>
                  <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2">
                    <FormControl className="w-[250px]">
                      <Input
                        className="bg-gray-50 h-[48px]"
                        placeholder={entry.placeholder}
                        {...field}
                      />
                    </FormControl>

                    <div className="hidden sm:block">
                      <button
                        className="arise-button sm:w-[120px] w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Subscribing" : "Subscribe"}
                      </button>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="block sm:hidden mt-2">
              <button
                className="arise-button sm:w-[120px] w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing" : "Subscribe"}
              </button>
            </div>
          </div>
        </form>
      </Form>

      <Socials />
    </>
  );
};

export default NewsletterForm;
