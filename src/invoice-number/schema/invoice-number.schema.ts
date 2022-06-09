import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class InvoiceNumber extends Document {
    @Prop()
    month: string;
    @Prop()
    number: number;
}

export const InvoiceNumberSchema = SchemaFactory.createForClass(InvoiceNumber);