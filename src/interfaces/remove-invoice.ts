export type RemoveInvoiceResponse = {
    isSucces: true,
    id: string;
    info: string;
} |
{
    isSucces: false,
    info: string;
};