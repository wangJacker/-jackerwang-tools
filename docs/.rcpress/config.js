module.exports = {
    title: '@jackerwang/tools', // 网站标题， 可以不用设置，默认为文档所在的目录名称
    // 网站描述，用于生成seo搜索和首页的描述。
    description: '@jackerwang/tools工具函数文档',
    lastUpdated: '上次更新时间：',
    frontMatter: true,
    less: {
        modifyVars: {
            // 赋值给less-loader
            'primary-color': '#1890ff'
        }
    },
    // 一般展示在首页和左上角
    // logo: '/public/favicon.png',
    // 网站首页底部的文字，支持html格式
    // footer: '成都熊掌柜科技有限责任公司 | Copyright © 2019-2021 熊掌柜前端团队',
    // 生成网站时会向网站头部插入的一些元素，
    // 其中每个元素格式为[tagName, {/*元素属性，会原封不动附加到生成的元素上。*/},/*子节点*/]
    // head: [['link', { rel: 'icon', href: '/favicon.png' }]],
    themeConfig: {
        lastUpdated: true,
        // 网站头部链接，可以设置为important，会有红色标记显示。
        // nav: [
        //     {
        //         text: 'Guide',
        //         link: '/guide'
        //     },
        //     {
        //         text: 'GitHub',
        //         link: 'https://github.com/YvesCoding/rcpress',
        //         important: true
        //     }
        // ],
        sidebar: {
            // 注意 重点。
            // 设置的属性名必须是 你的文档目录(默认为docs)下存在的文件/目录
            // rcpress查找文件的物理路径为: docs(你设置的文档目录) + sidebar里的键名
            // 例如下面的 /guide/ 对应的物理路径是 docs/guide/
            '/guide/': [
                // 对应物理路径： docs/guide/introduction.md
                // 由于里面frontMatter设置home为true的话访问路径不带introduction，直接/guide/
                {
                    title: "计算类函数",
                    children: [
                        "TableAgGrid",
                        // "EditTable",
                    ]
                },
                // {
                //     title: "TC选择类组件",
                //     children: [
                //         "TableAgGrid",
                //         "EditTable",
                //     ]
                // },
                // {
                //     title: "报表打印类组件",
                //     children: [
                //         "PrintButton",
                //     ]
                // },

                // {
                //     title: 'page-collapsed',
                //     children: ['page-collapsed']
                // },
                // {
                //     title: 'page-group-exapmle',
                //     // 二级菜单默认是收起的，设置false为默认展开。
                //     collapsable: false,
                //     children: [
                //         // 可以设置更深一层的菜单，一共最多支持两层。
                //         // 运行初始化项目之后看到效果
                //         {
                //             // 设置三级菜单标题
                //             title: 'group-1',
                //             // 对应的物理路径： docs/guide/group-1-item.md
                //             children: ['group-1-item']
                //         },
                //         {
                //             title: 'group-2',
                //             // 对应的物理路径： docs/guide/group-2-item.md
                //             children: ['group-2-item']
                //         }
                //     ]
                // }
            ]
        },
        showBackToTop: true
    }
};