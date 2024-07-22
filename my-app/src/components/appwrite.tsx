import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_PROJECTID!);

export const account = new Account(client);
export { ID } from 'appwrite'; 