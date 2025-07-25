import { defineType, defineField } from 'sanity';

defineField({
  type: 'code',
  name: 'myCodeField',
  title: 'Code with All Options', 
  options: {
    language: 'javascript',
    languageAlternatives: [
      {title: 'Javascript', value: 'javascript'},
      {title: 'HTML', value: 'html'},
      {title: 'CSS', value: 'css'},
    ],
  },
})

defineField({
  type: 'image',
  name: 'myImageField',
  title: 'Image'
})

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
            {type: 'code'},
            {type: 'image'}
      ],
    },
  ],
};


export default project;
