import { NextResponse } from "next/server";
import { updateMailchimp } from "@/utils/mailchimp/updateMailchimp";

export const PUT = async (req: Request) => {
  if (req.method !== "PUT") {
    return new NextResponse("Method Not Allowed", { status: 405 });
  }

  const {
    firstName: FNAME,
    lastName: LNAME,
    jobTitle: JOBTITLE,
    phone: PHONE,
    message: MESSAGE,
    email,
  } = await req.json();

  const merge_fields = {
    FNAME,
    LNAME,
    PHONE,
    JOBTITLE,
    MESSAGE,
  };

  try {
    //Add user to MailChimp
    const response = await updateMailchimp({
      email,
      merge_fields,
    });

    const { mailchimpData, error } = await response.json();

    if (error) {
      return new NextResponse("You've already signed up!", { status: 500 });
    }

    return new NextResponse(JSON.stringify({ mailchimpData }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Failed to send message", { status: 500 });
  }
};
