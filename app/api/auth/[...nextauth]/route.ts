import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        
        // Mock User for Prototype
        if (credentials?.username === "admin" && credentials?.password === "password") {
            return { id: "1", name: "Admin User", email: "admin@example.com" };
        }

        if (credentials?.username === "user" && credentials?.password === "password") {
            return { id: "2", name: "Demo User", email: "user@example.com" };
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
