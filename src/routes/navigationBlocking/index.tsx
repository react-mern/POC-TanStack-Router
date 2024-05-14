import { createFileRoute } from '@tanstack/react-router';
import { useBlocker } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/navigationBlocking/')({
  component: NavigationBlocking
});

function NavigationBlocking() {
  const [paymentStatus, setPaymentStatus] = useState(false);

  // block user from navigating to other routes 
  // here while payment is on going user won't be able to navigate and confirm promt will be shown.
  useBlocker(
    () => window.confirm('Are you sure you want to leave?'),
    paymentStatus,
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button className={`bg-${paymentStatus ? 'red' : 'blue'}-500 hover:bg-${paymentStatus ? 'red' : 'blue'}-600 text-white font-bold py-2 px-4 rounded focus:outline-none`} onClick={() => setPaymentStatus(!paymentStatus)}>
        {!paymentStatus ? "Click here to make payment" : "Cancel Payment"}
      </button>
    </div>
  );
}
