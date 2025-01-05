import { defineField, defineType } from "sanity";

export const blog = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "writterImage",
      title: "Writer Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "datetime", // For date and time
    }),
    defineField({
      name: "writter",  // Author name
      title: "Writer",
      type: "string",   // You can also use reference to another document if needed (e.g., user)
    }),
  ],
});



// export default{
//     name: "blog",
//     title: "Blog",
//     type: "document",
//     fields:[
//         {
//         name:"title",
//         title:"Title",
//         type:"string"
//         },
//         {
//             name:"description",
//             title:"Description",
//             type:"text"
//             },
//             {
//                 name:"slug",
//                 title:"Slug",
//                 type:"slug",
//                 options:{
//                     source:"title",
//                     maxLenth:100
//                 }
//                 },
//                 {
//                     name:"image",
//                     title:"Image",
//                     type:"image",
//                     options:{
//                         hotspot:true
//                     }
//                     }
//     ]
// }
