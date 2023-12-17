import * as fs from 'fs';
import * as yaml from 'js-yaml';

/**
 * load data from yaml file and transform it to json
 */
export function loadLocalData(): any {
  const fileContent = fs.readFileSync(process.cwd() + '/data/links.yaml', 'utf8');
  return yaml.load(fileContent);
}

/**
 * get all categories from data with loadLocalData()
 */
export function getAllCategories(): any {
  const data = loadLocalData();
  const categories = data.reduce((acc: string[], cur: any) => {
    if (cur.category) {
      return [
        ...acc,
        ...cur.category
      ];
    }
    return acc;
  }, []);

  // remove duplicates from categories
  return [...new Set(categories)];
}

/**
 * get all tags by category from data with loadLocalData()
 */
export function getAllTagsByCategory(category: string): any {
  const data = loadLocalData();
  const tags = data.reduce((acc: string[], cur: any) => {
    if (cur.category && cur.category.includes(category)) {
      return [
        ...acc,
        ...cur.tag
      ];
    }
    return acc;
  }, []);

  // remove duplicates from tags
  return [...new Set(tags)];
}

/**
 * get all links by category and tag from data with loadLocalData()
 */
export function getAllLinksByCategoryAndTag(category: string, tag?: string): any {
  const data = loadLocalData();
  const links = data.reduce((acc: any[], cur: any) => {
    if (cur.category && cur.category.includes(category)) {
      return [
        ...acc,
        cur
      ];
    }
    return acc;
  }, []);

  if (tag) {
    return links.filter((link: any) => link.tag.includes(tag));
  }

  return links;
}