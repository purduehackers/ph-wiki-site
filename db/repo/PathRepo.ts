import MenuItem from "@/interfaces/MenuItem";
import { db } from "../db";
import { PathDocument } from "../model/Path";

const Path = db.Path;

const parsePath = (path: PathDocument) => {
  const menuItem: MenuItem = {
    id: path._id.toString(),
    slug: path.slug,
    name: path.name,
    type: "path",
    children: [],
  };

  /* Append children posts to current menu item */
  const childrenPosts = path.posts;
  for (const childrenPost of childrenPosts) {
    menuItem.children.push({
      id: childrenPost._id.toString(),
      slug: childrenPost.slug,
      name: childrenPost.name,
      type: "post",
      children: [],
    });
  }

  /* Recurse on children paths */
  const childrenPaths = path.children;
  for (const childrenPath of childrenPaths) {
    const subMenuItem = parsePath(childrenPath as PathDocument);
    menuItem.children.push(subMenuItem);
  }
  return menuItem;
};

const getRootMenuItem = async () => {
  /* Necessary to have root path because posts can be under the root path */
  const rootPathData = await Path.findOne({ slug: "root" });
  const rootPath = rootPathData.toObject() as PathDocument;
  const rootMenuItem = parsePath(rootPath);
  return rootMenuItem;
};

export const PathRepo = {
  getRootMenuItem,
};
