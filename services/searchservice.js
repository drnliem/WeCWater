import { fetchPosts as fetchForumPosts } from '../services/postservice';
import { fetchPosts as fetchEventPosts } from '../services/eventservice';
import { fetchPosts as fetchreportPosts } from '../services/postservice';

export async function searchAllPosts(keyword) {
  const [forums, events, reports] = await Promise.all([
    fetchForumPosts(),
    fetchEventPosts(),
    fetchreportPosts(),
  ]);

  const allPosts = [...forums, ...events, ...reports];

  if (!keyword) return allPosts;

  const lowerKeyword = keyword.toLowerCase();

  return allPosts.filter(post => 
    post.Title?.toLowerCase().includes(lowerKeyword) ||
    post.Lokasi?.toLowerCase().includes(lowerKeyword) ||
    post.author?.toLowerCase().includes(lowerKeyword) ||
    post.type?.toLowerCase().includes(lowerKeyword)
  );
}
