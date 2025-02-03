import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const {
            surname,
            name,
            month,
            day,
            year,
            gender,
            address,
            postalcode,
            email,
            password,
        } = await req.json();
        // const { name,surname,email, password } = await req.json();

        const hashedPassword = await bcrypt.hash(password, 10);

        await connectMongoDB();
        await User.create({
            surname,
            name,
            month,
            day,
            year,
            gender,
            address,
            postalcode,
            email,
            password: hashedPassword,
        });
        // await User.create({ name,surname,email, password: hashedPassword });

        return NextResponse.json(
            { message: "User registered." },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "An error occured while registering the user." },
            { status: 500 }
        );
    }
}

export async function GET() {
    await connectMongoDB();
    const posts = await User.find({});
    return NextResponse.json({ posts });
}
