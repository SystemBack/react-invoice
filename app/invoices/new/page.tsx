'use client';

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createAction } from "@/app/actions";
import { startTransition, SyntheticEvent, useState } from "react";
import SubmitButton from "@/components/SubmitButton";
import Form from 'next/form';

  export default function Home() {

    const [status, setStatus] = useState('ready');

    async function handleOnSubmit(event: SyntheticEvent) {
      if (status === 'pending'){
        event.preventDefault();
        return;
      }

      setStatus('pending');
    }

    return (
      <main className="flex flex-col justify-center h-full max-w-5xl gap-6 mx-auto my-12">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">
            Crete Invoice
          </h1>
        </div>

        <Form action={createAction} onSubmit={handleOnSubmit} className="grid gap-4 max-w-sm">
          <div>
            <Label htmlFor="name" className="block font-semibold text-sm mb-2">Name</Label>
            <Input id="name" name="name" type="text" />
          </div>
          <div>
            <Label htmlFor="email" className="block font-semibold text-sm mb-2">Email</Label>
            <Input id="email" name="email" type="text" />
          </div>
          <div>
            <Label htmlFor="value" className="block font-semibold text-sm mb-2">Value</Label>
            <Input id="value" name="value" type="text" />
          </div>
          <div>
            <Label htmlFor="description" className="block font-semibold text-sm mb-2">Description</Label>
            <Textarea id="description" name="description">
            </Textarea>
          </div>
          <div>
            <SubmitButton />
          </div>
        </Form>
      </main>
    );
  }
