import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        '323286738680-bp23c7m1ge48ds8k2rue3bnqgseqnuqb.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    // ...add more providers here
  ],

  pages: {
    signIn: '/auth/signin',
  },

  secret:
    '323286738680-bp23c7m1ge48ds8k2rue3bnqgseqnuqb.apps.googleusercontent.com',

  callbacks: {
    async session({ session, token }) {
      session.user.username = session.user.name
        .split(' ')
        .join('')
        .toLocaleLowerCase();
      session.user.uid = token.sub;
      return session;
    },
  },
});
