import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint(process.env.ENDPOINT!)
    .setProject(process.env.PROJECTID!);

export const account = new Account(client);
export { ID } from 'appwrite'; 