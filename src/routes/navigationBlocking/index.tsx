import { createFileRoute } from '@tanstack/react-router';
import { useBlocker } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/navigationBlocking/')({
  component: NavigationBlocking
});

function NavigationBlocking() {
  const [formIsDirty, setFormIsDirty] = useState(false);

  useBlocker(
    () => window.confirm('Are you sure you want to leave?'),
    formIsDirty,
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button className={`bg-${formIsDirty ? 'red' : 'blue'}-500 hover:bg-${formIsDirty ? 'red' : 'blue'}-600 text-white font-bold py-2 px-4 rounded focus:outline-none`} onClick={()=>setFormIsDirty(!formIsDirty)}>
        { !formIsDirty ?  "Click here to make payment" : "Cancel Payment"}
      </button>
    </div>
  );
}
