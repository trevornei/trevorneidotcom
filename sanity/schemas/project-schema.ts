const project = {
  name: 'note',
  title: 'Notes',
  type: 'document',
  fields: [
    {
      name: 'name', 
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name'},
    },
    {
      name: 'image',
      title: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt', 
          title: 'Alt',
          type: 'string', 
        },
      ],
    },
    {
      name: 'url',
      title: 'Url', 
      type: 'url',
    },
    {
      name: 'content',
      title: 'Content', 
      type: 'array',
      of: [
            {type: 'block'},
      ],
    },
  ],
};


export default project;
