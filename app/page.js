import BlogCard from "../components/BlogCard";

import styles from "./styles.module.css";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  return response.json();
}

export default async function Home() {
  const { posts } = await getPosts();

  await delay(2000);

  return (
    <div className={styles.blogsContainer}>
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
}
