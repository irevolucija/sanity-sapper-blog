export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600198a014eaf31731ab7fe8',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-v895q4xw',
                  apiId: '4878de74-5157-4fd2-b462-1cdb0b06e831'
                },
                {
                  buildHookId: '600198a075dde50202105280',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-iaiy8etd',
                  apiId: '78e98087-f4e5-4535-8274-47905b140a9a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/irevolucija/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-iaiy8etd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
