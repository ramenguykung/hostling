

import { connectMongoDB } from "../../../../../lib/mongodb";
import User  from "../../../../../models/user";
import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";



export async function GET(req, { params }) {
    const { id } = params;
    await connectMongoDB();
    const post = await User.findOne({ _id: id });
    return NextResponse.json({ post }, { status: 200 });
}


export async function PUT(req) {
    
    const { newname: name, newsurname: surname ,id , newMonth : month ,newDay : day , newYear : year ,newJob : job ,newGender : gender,newAddress : address,newPhoneNumber : phonenumber ,newAge : age } = await req.json();
    await connectMongoDB();

  
    await User.findByIdAndUpdate(id, { name, surname,month,day,year,job,gender,address,phonenumber,age});
    return NextResponse.json({ message: "Post updated" }, { status: 200 });
}