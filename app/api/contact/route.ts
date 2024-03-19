import {
  sendConfirmationEmail,
  sendEmailNotification,
} from "@/utils/sendEmails";

interface ReqData {
  name: string;
  email: string;
  message: string;
}

export const POST = async (req: {
  json: () => PromiseLike<ReqData> | ReqData;
}) => {
  const { name, email, message } = await req.json();

  try {
    // Send email notification to info@arisebusinessclub.com
    await sendEmailNotification({ name, email, message });

    // Send confirmation email to sender
    await sendConfirmationEmail(email);

    //Add user to DB

    return new Response(JSON.stringify("Message sent successfully"), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to send message", { status: 500 });
  }
};
