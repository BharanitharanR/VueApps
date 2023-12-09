export default class Book {
   private title ? : string;
   private author ?: string;
   private age ?: number;
   private fanFavourite ?: boolean
   public Book(){
   }
   
   public setTitle(title: string)
   {
    this.title = title;
   }

   public setAuthor(author: string)
   {
    this.author = author;
   }

   public setAge(age: number)
   {
    this.age = age;
   }
   
   public setFanFavourite(fanFavourite : boolean)
   {
    this.fanFavourite = fanFavourite;
   }
}
let book = new Book();
