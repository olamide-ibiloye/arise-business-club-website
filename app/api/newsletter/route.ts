import { NextResponse } from "next/server";
import { addToMailchimp } from "@/utils/mailchimp/addToMailchimp";
import { sendEmails } from "@/utils/emails/sendEmails";

export const POST = async (req: Request) => {
  if (req.method !== "POST") {
    return new NextResponse("Method Not Allowed", { status: 405 });
  }

  const { email } = await req.json();

  try {
    //Add user to MailChimp
    const response = await addToMailchimp({ email });

    const { mailchimpData, error } = await response.json();

    if (error) {
      return new NextResponse("User already exists", { status: 500 });
    }

    // Send confirmation email to sender
    await sendEmails({ email });

    return new NextResponse(JSON.stringify({ mailchimpData }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Failed to send message", { status: 500 });
  }
};
