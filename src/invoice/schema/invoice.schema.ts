import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class Invoice
    extends Document {
    @Prop()
    invoiceNo: string;
    @Prop({ type: Object })
    client: {};
    @Prop({ type: Object })
    invoice: {};
    @Prop({ type: Object })
    exchange: {};
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
