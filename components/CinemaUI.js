// Add this inside your CinemaUI component
const createPayPalButtons = () => {
  // $29 Monthly Subscription
  paypal.Buttons({
    style: { label: 'subscribe' },
    createSubscription: (data, actions) => {
      return actions.subscription.create({ 'plan_id': 'P-SUBSCRIPTION_ID' });
    }
  }).render('#paypal-subs-container');

  // $9 One-time Fee
  paypal.Buttons({
    createOrder: (data, actions) => {
      return actions.order.create({
        purchase_units: [{ amount: { value: '9.00' }, payee: { email_address: 'Rangerbleau11@gmail.com' } }]
      });
    }
  }).render('#paypal-onetime-container');
};
