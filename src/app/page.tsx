import { headers } from "next/headers";
import Link from "next/link";
import { db } from "~/server/db";

//-- to make the page dynamic and for the page to immediately recognise db changes
export const dynamic = "force-dynamic"

const mockUrls = [
    "https://images.unsplash.com/photo-1502301197179-65228ab57f78?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmFjYXRpb258ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1680497811614-4f93025d7e57?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmFjYXRpb258ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1700220858049-dafb63e12bbf?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlaWJ1cmclMjBpbSUyMGJyZWlzZ2F1fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1700220858049-dafb63e12bbf?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlaWJ1cmclMjBpbSUyMGJyZWlzZ2F1fGVufDB8fDB8fHww"
  ]

export default async function HomePage() {

  const posts = await db.query.posts.findMany()
  
  // console.log("hey")
  // console.log(posts)

  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url
  }))
  return (
    <main className="flex flex-wrap gap-4">
      {posts.map(post => ( <div>{post.name}</div>
      ))}
      {[...mockImages, ...mockImages].map((image, index)=>(
        <div key={image.id + "-" + index} className="w-48 p-4">
          <img src={image.url} />
        </div>
      ))}
    </main>
  );
}
 