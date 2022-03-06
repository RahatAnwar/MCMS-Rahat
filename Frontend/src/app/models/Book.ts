import {Author} from "./author";
import {Genre} from "./genre";
export class Book {
  id?: any;
  title?: string;
  price?: number;
  author?: Author[];
  genre?: Genre[];
  publisher?: string;
  year_of_publishing?: string;
  // date?: Date;

}
