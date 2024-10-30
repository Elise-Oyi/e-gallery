import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {

  const image = await getImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId)

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink justify-center items-center">
        <img src={image.url} className="flex-shrink object-contain" />
      </div>

      <div className="flex w-48 flex-col flex-shrink-0 border-l">
        <div className="text-lg border-b text-center p-2">{image.name}
        </div>
        <div className="flex flex-col p-2">
          <span>Uploaded By </span> {uploaderInfo.fullName}
        </div>
        <div className="flex flex-col p-2">
          <span>Created On </span> {new Date(image.createdAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}
