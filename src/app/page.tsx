import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

//-- to make the page dynamic and for the page to immediately recognise db changes
export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className=" flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="flex h-48 w-48 flex-col"
        >
          <Image
            src={image.url}
            alt={image.name}
            style={{ objectFit: "contain" }}
            width={192}
            height={192}
          />
          <div className="">{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="flex flex-wrap gap-4">
      <SignedOut>
        <div className="text2xl h-full w-full text-center">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
