import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class Login extends Document {
    @Prop()
    login: string;
    @Prop()
    password: string;

}

export const LoginSchema = SchemaFactory.createForClass(Login);