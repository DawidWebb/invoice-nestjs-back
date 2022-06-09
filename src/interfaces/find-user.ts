export type FindUserResponse = {
    isSucces: true,
    id: string;
    login: string;
} |
{
    isSucces: false,
    info: string;
};