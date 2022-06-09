import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class Describe extends Document {
    @Prop()
    describeName: string;
}

export const DescribeSchema = SchemaFactory.createForClass(Describe);