import { sendEmails } from "@/utils/emails/sendEmails";
import { addToMailchimp } from "@/utils/mailchimp/addToMailchimp";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  if (req.method !== "POST") {
    return new NextResponse("Method Not Allowed", { status: 405 });
  }

  const { email } = await req.json();

  try {
    // Send confirmation email to sender
    await sendEmails({ email });

    //Add user to MailChimp
    await addToMailchimp({ email });

    return new NextResponse(JSON.stringify("Message sent successfully"), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Failed to send message", { status: 500 });
  }
};
