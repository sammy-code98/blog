export default{
    name:'posts',
    title:'Posts',
    type:'document',

  fields: [
      {
          name:'name',
          title:'Post Title',
          type:'string'
      },
      {name:'image',
      title:'Post Cover Image',
      type:'image'
    },
    {
        name:'date',
        title:'Date',
        type:'date',
        options:{
            dateFormat:'DD-MM-YYYY',
            calenderTodayLabel1:'Today'
        }
    },
    {
            name:'authors',
            title:'Post Author',
            type:'reference',
            to:[{type:'author'}]
    },
    {
        name:'slug',
        title:'Slug',
        type:'slug',
        options:{
            source:'name',
            maxLength: 200
        }
    },
    {
        name:'body',
        title:'Post Body',
        type:'array',
        of:[
            {
                title:'Body',
                type:'block',
                styles:[{title:'Normal', value:'normal'}],
                lists:[]
            }
        ]
    }
  ]

}