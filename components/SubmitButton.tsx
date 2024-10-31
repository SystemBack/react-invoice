'use client';

import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button className="relative w-full font-semibold">
      <span className={pending ? 'text-transparent' : ''}>Submit</span>
      {pending && (
        <span className="absolute text-gray-400 flex items-center justify-center w-full h-full">
          <LoaderCircle className="animate-spin"/>
        </span>
      )}
    </Button>
  );
}

export default SubmitButton;
