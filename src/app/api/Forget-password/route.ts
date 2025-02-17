import User from "../../../../models/user";
import { connectMongoDB } from "../../../../lib/mongodb";
import { NextResponse } from "next/server";
import crypto from "crypto";
import { EmailTemplate } from '../../componants/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: any,req: NextApiRequest) => {
  const { email } = await request.json();

  await connectMongoDB();

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    return new NextResponse("Email doesn't esists.", { status: 400 });
  }

  const  resetToken = crypto.randomBytes(20).toString('hex')
  
  const passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

    
const passwordResetExpires = Date.now() + 3600000;

existingUser.resetToken  = passwordResetToken;
existingUser.resetTokenExpiry = passwordResetExpires;
const resetUrl = `localhost:3000/reset-password/${resetToken}`; 

// console.log(resetUrl);

const body = "Reset Password by clicking on following URL :" + resetUrl;

const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: [email],
    subject: 'Hello world',
    react: EmailTemplate({ firstName: 'John' }),
  });

  // console.log(email);


   if (error) {
    return Response.json(error);
  }

  return Response.json({message:"kuy"});




 
  
};