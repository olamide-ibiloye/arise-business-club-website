"use client";
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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(2, {
    message: "Message cannot be empty.",
  }),
});

const formFields = [
  {
    type: "name",
    label: "Name",
    placeholder: "name",
  },
  {
    type: "email",
    label: "Email",
    placeholder: "email",
  },
  {
    type: "message",
    label: "Message",
    placeholder: "type your message",
  },
];

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex justify-center ">
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
                        className="rounded-none"
                        placeholder={entry.placeholder}
                        {...field}
                      />
                    ) : (
                      <Input placeholder={entry.placeholder} {...field} />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <button className="btn w-[200px] bg-accent outline-none text-white hover:bg-white hover:text-black duration-200 transition-colors">
            Submit
          </button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
