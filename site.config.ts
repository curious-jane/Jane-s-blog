import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'bf27c9b9f92e42dfab8860baa7157f41',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: "Jane's Blog",
  domain: 'https://janeliu.site',
  author: 'Jane Liu',

  // open graph metadata (optional)
  description: "Jane's blog",

  // social usernames (optional)
  //twitter: 'transitive_bs',
  //github: 'transitive-bullshit',
  //linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  // pageUrlOverrides: {
  //    '/about': '72f4268a70474d6897b1036309244f67',
  //    '/contact': '8c5cb835044e4e38ae162ac3d1777eea'
  //  },
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //   navigationStyle: 'default',

  navigationStyle: 'custom',
  navigationLinks: [
     {
        title: 'About',
        pageId: '72f4268a70474d6897b1036309244f67'
      },
    {
        title: 'Contact',
        pageId: '8c5cb835044e4e38ae162ac3d1777eea'
      }
  ]
})
