
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { headers } from "next/headers";
import Link from "next/link";
import { db } from "~/server/db";
import { UploadButton } from "~/utils/uploadthing";

//-- to make the page dynamic and for the page to immediately recognise db changes
export const dynamic = "force-dynamic"


async function Images (){

  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id)
  })

  return(
    images.map((image)=>(
      <div key={image.id } className="w-48 p-4">
        <img src={image.url} />
      </div>
    ))
  )
}


export default async function HomePage() {
  
  return (
    <main className="flex flex-wrap gap-4">
     <SignedOut>
      <div className="h-full w-full text2xl text-center">Please sign in above</div>
     </SignedOut>
     <SignedIn>
       <Images/>
     </SignedIn>
    </main>
  );
}
 