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
        path: 'clients/:clientName/:videoTitle',
        component: Video,
        linkPath: (clientId, videoTitle) => `/clients/${clientId}/${videoTitle}`
    },
    CLIENT_DETAIL: {
        path: 'clients/:clientName',
        component: ClientDetail,
        linkPath: (clientName) => `clients/${clientName}`
    },
    CLIENTS: {
        path: 'clients',
        component: ClientList,
        linkPath: () => '/clients'
    },
};

export default routes;
