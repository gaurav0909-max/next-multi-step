import { CheckCircle2 } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4 text-center">
      <CheckCircle2 className="h-32 w-32 mx-auto" />
      <h1 className="text-2xl">Thank you!</h1>
      <p className="text-muted-foreground text-sm">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please fell free to email us at
        support@loremgamin.com.
      </p>
    </div>
  );
}
