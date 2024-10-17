import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
  

export function TopNav(){
    return (
      <nav className="flex w-full items-center justify-between p-4 border text-xl font-semibold">
        <div className="">E Gallery</div>
        <div className="">
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
  
      </nav>
    )
  }