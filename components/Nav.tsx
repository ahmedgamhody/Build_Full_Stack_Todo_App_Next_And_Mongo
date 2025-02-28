import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Nav() {
  return (
    <nav>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </nav>
  );
}
