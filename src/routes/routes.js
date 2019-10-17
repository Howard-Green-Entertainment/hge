import Landing from '../pages/Landing';
import ClientInfoUpload from '../pages/ClientInfoUpload';
import ClientDetail from '../pages/ClientDetail';

export const routes = {
    LANDING: {
        path: '/',
        component: Landing,
        linkTo: () => '/'
    },
    UPLOAD: {
        path: '/upload',
        component: ClientInfoUpload,
        linkTo: () => '/upload'
    },
    CLIENT_DETAIL: {
        path: '/:clientId',
        component: ClientDetail,
        linkTo: clientId => `/${clientId}`
    }
};
