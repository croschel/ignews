import { query as fq } from "faunadb";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { fauna } from "../../../services/fauna";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: "read:user",
    }),
  ],
  callbacks: {
    async session(session) {
      try {
        const userActiveSubscription = await fauna.query(
          fq.Get(
            fq.Intersection([
              fq.Match(
                fq.Index("subscription_by_user_ref"),
                fq.Select(
                  "ref",
                  fq.Get(
                    fq.Match(
                      fq.Index("user_by_email"),
                      fq.Casefold(session.user.email)
                    )
                  )
                )
              ),
              fq.Match(fq.Index("subscription_by_status"), "active"),
            ])
          )
        );
        return {
          ...session,
          activeSubscription: userActiveSubscription,
        };
      } catch {
        return {
          ...session,
          activeSubscription: null,
        };
      }
    },
    async signIn(user, account, profile) {
      const { email } = user;
      try {
        // console.log("usuário :: ", user);
        await fauna.query(
          fq.If(
            fq.Not(
              fq.Exists(fq.Match(fq.Index("user_by_email"), fq.Casefold(email)))
            ),
            fq.Create(fq.Collection("users"), { data: { email } }),
            fq.Get(fq.Match(fq.Index("user_by_email"), fq.Casefold(email)))
          )
        );

        return true;
      } catch {
        return false;
      }
    },
  },
});
