import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import { deleteImage, getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  const uploaderInfo = await clerkClient().users.getUser(image.userId);

  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center">
      <div className="flex-shrink flex-grow">
        <img src={image.url} className="object-contain" />
      </div>

      <div className="flex h-full w-56 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-xl">{image.name}</div>
        <div className="p-2">
          <span>Uploaded By </span> {uploaderInfo.fullName}
        </div>
        <div className="p-2">
          <span>Created On </span>{" "}
          {new Date(image.createdAt).toLocaleDateString()}
        </div>
        <div className="p-2">
          <form  
            action = {async ()=> {
              "use server"
              await deleteImage(props.id)
            }}
          >
            <Button type="submit" variant="destructive" className="text-lg">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
