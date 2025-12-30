import { useState } from 'react';
import QuoteFormDialog from '../QuoteFormDialog';
import { Button } from '@/components/ui/button';

export default function QuoteFormDialogExample() {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Quote Form</Button>
      <QuoteFormDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}
