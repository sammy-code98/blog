export default {
  name: "author",
  title: "Author",
  type: "document",

  fields: [
    { name: "name", title: "Author's name", type: "string" },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
        name:'bio',
        title:'Bio',
        type:'array',
        of:[
            {
                title:'Block',
                type:'block',
                styles:[{title:'Normal', value:'normal'}],
                lists:[]
            }
        ]
    },
  ],
};
