import { query as fq } from "faunadb";
import { fauna } from "../../../services/fauna";
import { stripe } from "../../../services/stripe";

export async function saveSubscription(
  subscriptionId: string,
  customerId: string,
  createAction = false
) {
  // search user on faunaDB with customerId
  // save data of subscription on faunaDB
  // console.log("data on manageSubscription :: ", subscriptionId, customerId);
  const userRef = await fauna.query(
    fq.Select(
      "ref",
      fq.Get(fq.Match(fq.Index("user_by_stripe_customer_id"), customerId))
    )
  );
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);

  const subscriptionData = {
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
  };

  // console.log("DATA on Manage Subscription :: ", subscriptionData);

  if (createAction) {
    await fauna.query(
      fq.Create(fq.Collection("subscription"), { data: subscriptionData })
    );
  } else {
    await fauna.query(
      fq.Replace(
        fq.Select(
          "ref",
          fq.Get(fq.Match(fq.Index("subscription_by_id"), subscriptionId))
        ),
        { data: subscriptionData }
      )
    );
  }
}
