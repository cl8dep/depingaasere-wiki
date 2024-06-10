import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //migrateSidebar: [{type: 'autogenerated',dirName: 'migra'}],
  //businessSidebar: [{type: 'autogenerated', dirName: 'business'}],
  // But you can create a sidebar manually

  migrateSidebar: [
    {
      type: 'autogenerated',
      dirName: 'migration'
    },
  ],
  businessSidebar: [
    {
      type: 'autogenerated',
      dirName: 'business',
    }
  ],
  ocioSidebar: [
    {
      type: 'autogenerated',
      dirName: 'leisure',
    }
  ],
  otherSidebar: [
    {
      type: 'autogenerated',
      dirName: 'others',
    }
  ]

};

export default sidebars;
