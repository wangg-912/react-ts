export default {
    routes: [
        {
            path: '/',
            component: '../components/Table.tsx',
            title: "首页",
            icon: "user"
        },
        {
            path: '/about',
            component: '../pages/about/About.tsx',
            title: "关于",
            icon: "video-camera"
        },
        {
            path: '/upload',
            component: '../pages/upload/Upload.tsx',
            title: "上传",
            icon: "upload"
        },
        {
            component: '../pages/404/Page404.tsx'
        },
    ]
}