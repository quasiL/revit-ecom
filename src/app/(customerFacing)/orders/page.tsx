"use client";

import { emailOrderHistory } from "@/actions/ordes";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState, useFormStatus } from "react-dom";

export default function MyOrdersPage() {
  const [data, action] = useFormState(emailOrderHistory, {});

  return (
    <div className="container mx-auto py-6 px-6">
      <h2 className="text-3xl font-bold pb-6 text-revitGold">My Orders</h2>
      <form action={action} className="max-w-xl">
        <Card>
          <CardHeader>
            <CardTitle>My Orders</CardTitle>
            <CardDescription>
              Enter your email and we will email you your order history and
              download links
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" required name="email" id="email" />
              {data.error && (
                <div className="text-destructive">{data.error}</div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            {data.message ? <p>{data.message}</p> : <SubmitButton />}
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full" size="lg" disabled={pending} type="submit">
      {pending ? "Sending..." : "Send"}
    </Button>
  );
}
