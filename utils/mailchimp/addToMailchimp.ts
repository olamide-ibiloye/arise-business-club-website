import mailchimp from "@mailchimp/mailchimp_marketing";
import { NextResponse } from "next/server";

mailchimp.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
  server: process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER,
});

interface AddToMailChimpProps {
  email: string;
}

export const addToMailchimp = async ({ email }: AddToMailChimpProps) => {
  try {
    const mailchimpData = await mailchimp.lists.addListMember(
      process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID!,
      { email_address: email, status: "subscribed" },
    );

    return new NextResponse(JSON.stringify({ mailchimpData }));
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({ error: JSON.parse(error.response.text) }),
    );
  }
};
