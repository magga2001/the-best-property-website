import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { newsPostType } from "./newsPostType";
import { authorType } from "./authorType";
import { propertyType } from "./propertyType";
import { houseTypeType } from "./houseTypeType";

export const schema = {
  types: [blockContentType, categoryType, newsPostType, authorType, propertyType, houseTypeType],
};
