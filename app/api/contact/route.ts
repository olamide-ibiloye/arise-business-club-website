import { addUserToDB } from "@/utils/database/addToDB";
import { sendEmails } from "@/utils/emails/sendEmails";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { firstName, lastName, email, message, type } = await req.json();

  try {
    // Send email notification to info@arisebusinessclub.com & confirmation email to sender
    await sendEmails({ firstName, lastName, email, message, type });

    //Add user to DB
    await addUserToDB();

    return new NextResponse(JSON.stringify("Message sent successfully"), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Failed to send message", { status: 500 });
  }
};
