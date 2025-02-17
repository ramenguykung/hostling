import { Resend } from 'resend';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: any,req: NextApiRequest) => {
  try {
    const { email } = await request.json();
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['wuttipong10113@gmail.com'],
      subject: 'Hello world',
      react: "ขอร้องงงงงงงงงงงงงงง",
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};
