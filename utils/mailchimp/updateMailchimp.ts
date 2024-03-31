import mailchimp from "@mailchimp/mailchimp_marketing";
import { NextResponse } from "next/server";
import md5 from "md5";

mailchimp.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
  server: process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER,
});

interface AddToMailChimpProps {
  email: string;
  merge_fields?: any;
}

export const updateMailchimp = async ({
  email,
  merge_fields,
}: AddToMailChimpProps) => {
  let mailchimpData;
  const subscriberHash = md5(email);

  try {
    mailchimpData = await mailchimp.lists.setListMember(
      process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID!,
      subscriberHash,
      { email_address: email, status_if_new: "subscribed", merge_fields },
    );

    return new NextResponse(JSON.stringify({ mailchimpData }));
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({ error: JSON.parse(error.response.text) }),
    );
  }
};
