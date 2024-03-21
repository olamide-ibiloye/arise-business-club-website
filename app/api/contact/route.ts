import { addUserToDB } from "@/utils/addToDB";
import { sendEmails } from "@/utils/sendEmails";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { firstName, lastName, email, message } = await req.json();

  try {
    // Send email notification to info@arisebusinessclub.com & confirmation email to sender
    await sendEmails({ firstName, lastName, email, message });

    //Add user to DB
    await addUserToDB();

    return new NextResponse(JSON.stringify("Message sent successfully"), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Failed to send message", { status: 500 });
  }
};
