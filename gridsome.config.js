module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
      }
    },

    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 100, // Defaults to 100
        contentTypes: ['post', 'tag'],
        singleTypes: ['general'],
      }
    }
  ],
  templates: {
    StrapiPost: [
      {
        path: "/post/:id",
        component: "./src/templates/Post.vue"
      }
    ],
    StrapiTag: [
      {
        path: "/tag/:id",
        component: "./src/templates/Tag.vue"
      }
    ],

  }

}
