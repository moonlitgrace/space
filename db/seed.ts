import { db } from "@/db";
import { posts } from "@/db/schema";
import { postsMockData } from "@/db/mock/posts";

async function main() {
  try {
    console.log('Seeding database');
    // delete previous data
    await db.delete(posts);
    // insert mock data
    await db.insert(posts).values(postsMockData);
    console.log('Seeding done!');
  } catch (err) {
    console.error(err);
    throw new Error('Failed to seed database');
  } finally {
    process.exit(1);
  }
}

main()
