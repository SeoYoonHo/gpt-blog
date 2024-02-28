import { getRecordMap, mapImageUrl } from '@/libs/notion';
import { Post } from '@/types/post';
import { getBlurImage } from '@/utils/get-blur-image';
import {getAllPost} from '../app/api/index'

export async function getAllPostsFromNotion() {
  const allPosts: Post[] = [];

  const response = await getAllPost();
  allPosts.push(...response.data?.data?.content);

  return allPosts;
}
