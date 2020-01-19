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
    CLIENT_DETAIL: {
        path: 'clients/:clientId',
        component: ClientDetail,
        linkPath: clientId => `clients/${clientId}`
    },
    CLIENTS: {
        path: 'clients',
        component: ClientList,
        linkPath: () => '/clients'
    },
    VIDEO: {
        path: 'clients/:clientId/:videoTitle',
        component: Video,
        linkPath: (clientId, videoTitle) => `/clients/${clientId}/${videoTitle}`
    }
};

export default routes;
