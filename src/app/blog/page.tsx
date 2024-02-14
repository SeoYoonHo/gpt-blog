import CategoryFilter from '@/components/filter/category-filter';
import SearchBar from '@/components/filter/search-bar';
import PostsGrid from '@/components/posts/posts-grid';
import { getAllPostsFromNotion } from '@/services/posts';
import { toUniqueArray } from '@/utils/to-unique-array';

export const metadata = {
  title: 'Blog',
  description: 'All posts are created by notion ai.',
};

export default async function BlogPage() {
  // const allPosts = await getAllPostsFromNotion();
  const allPosts = [];
  const tempPost = {
    id: "string;",
    slug: "string;",
    title: "dddd",
    categories: ["ddd","aaaa"],
    cover: "cover",
    date: "2023-07-12",
    published: true,
    lastEditedAt: 1010,
    blurUrl: "//images.app.goo.gl/Y2dteYs21DghSsaJ8",
  };

  allPosts.push(tempPost);

  const allCategories = toUniqueArray(
    allPosts
      .filter((post) => post.published)
      .map((post) => post.categories)
      .flat()
  ).sort();

  return (
    <>
      <section className="mb-16 mt-0 space-y-8 md:mt-20">
        <SearchBar />
        <CategoryFilter allCategories={allCategories} />
      </section>
      <PostsGrid allPosts={allPosts} />
    </>
  );
}
