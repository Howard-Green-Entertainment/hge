import Landing from '../pages/Landing';
import ClientInfoUpload from '../pages/ClientInfoUpload';
import ClientDetail from '../pages/ClientDetail';
import ClientList from '../components/info-upload-form/ClientList';
import Video from '../components/global/Video';

const routes = {
    LANDING: {
        path: '/',
        component: Landing,
        linkPath: () => '/'
    },
    UPLOAD: {
        path: '/upload',
        component: ClientInfoUpload,
        linkPath: () => '/upload'
    },
    VIDEO: {
        path: '/:clientName/:videoTitle',
        component: Video,
        linkPath: (clientName, videoTitle) => `/${clientName}/${videoTitle}`
    },
    CLIENT_DETAIL: {
        path: '/:clientName',
        component: ClientDetail,
        linkPath: (clientName) => `/${clientName}`
    },
    CLIENTS: {
        path: '/clients',
        component: ClientList,
        linkPath: () => '/clients'
    },
};

export default routes;
