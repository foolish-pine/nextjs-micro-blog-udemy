import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "src/posts");

export function getPostsData() {
  const fileNames = fs.readdirSync(postsDir);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData;
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDir);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDir, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContent);

  const blogContent = await remark().use(html).process(matterResult.content);
  const blogContentHTML = blogContent.toString();

  return {
    id,
    blogContentHTML,
    ...matterResult.data,
  };
}
