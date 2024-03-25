import {
  MOCK_USER,
  MOCK_USER_PASSWORD,
} from "../../../../../__mock__/user.mock";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "kalyan@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "123456",
        },
      },
      async authorize(credentials, req) {
        const user = MOCK_USER;
        if (
          user.email === credentials?.username &&
          MOCK_USER_PASSWORD === credentials?.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
