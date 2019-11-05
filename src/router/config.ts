
import { string, any } from "prop-types"

export interface IRoutes {
    path: string;
    component?: string;
    title: string;
    query?: string;
    icon?: string;
    route?: string;
    auth?: boolean;
    /** 是否登录校验，true不进行校验（访客） */
    login?: boolean;
}
export interface ISubRoute extends IRoutes {
    subs?: IRoutes[];
}
const routes: {
    routes: ISubRoute[];
    others: ISubRoute[] | [];
    [index: string]: any;
} = {
    routes: [
        {
            path: '/',
            component: 'XTable',
            title: "首页",
            icon: "user",
            subs: []
        },
        {
            path: '/about',
            component: 'About',
            title: "关于",
            icon: "video-camera",
            subs: []
        },
        {
            path: '/upload',
            component: 'Upload',
            title: "上传",
            icon: "upload",
            subs: []
        },
        {
            path: '*',
            component: './../pages/404/Page404.tsx',
            title: '404'
        },
    ],
    others: []
}

export default routes