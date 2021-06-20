
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
  session: {
    maxAge: 60 * 60 // 1h
  }

  //database: process.env.DATABASE_URL,
});
 