import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "../../../../../lib/mongodb";
import User from "../../../../../models/user";
import bcrypt from "bcryptjs";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                const { email, password } = credentials;

                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email });

                    if (!user) {
                        return null;
                    }

                    const passwordMatch = await bcrypt.compare(
                        password,
                        user.password
                    );

                    if (!passwordMatch) {
                        return null;
                    }

                    return user;
                } catch (error) {
                    console.log("Error: ", error);
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return {
                    ...token,
                    id: user._id,
                    role: user.role,
                    surname: user.surname, // เพิ่มฟิลด์ surname ลงใน Token
                    name: user.name, // เพิ่มฟิลด์ name ลงใน Token
                    email: user.email,
                    day: user.day,
                    month: user.month,
                    year: user.year,
                    age: user.age,
                    occupation: user.occupation,
                    gender: user.gender,
                    address: user.address,
                    postalcode: user.postalcode,
                };
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.role = token.role;
            session.user.surname = token.surname; // เพิ่มฟิลด์ surname ลงใน Session
            session.user.name = token.name; // เพิ่มฟิลด์ name ลงใน Session
            session.user.email = token.email; // เพิ่มฟิลด์ email ลงใน Session
            session.user.day = token.day;
            session.user.month = token.month;
            session.user.year = token.year;         
            session.user.occupation = token.occupation;
            session.user.age = token.age;
            session.user.gender = token.gender;
            session.user.address = token.address;
            session.user.postalcode = token.postalcode;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
