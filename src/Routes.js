import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import AddBlog from './components/AddBlog';
import Login from './components/Login';
import Register from './components/Register';
import ShowBlogs from './components/ShowBlogs';
import SingleBlog from './components/SingleBlog';

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'showBlogs',
            component: ShowBlogs,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                requiresGuest: true
            }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                requiresGuest: true
            }
        },
        {
            path: '/add',
            name: 'addBlog',
            component: AddBlog,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/blog/:id',
            name: 'singleBlog',
            component: SingleBlog,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if(!firebase.auth().currentUser) {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            next();
        }
    } else if(to.matched.some(record => record.meta.requiresGuest)) {
        if(firebase.auth().currentUser) {
            next({
                path: '/',
                query: {
                    redirect: to.fullPath
                }
            });
        }
    } else {
        next();
    }
});

export default router;