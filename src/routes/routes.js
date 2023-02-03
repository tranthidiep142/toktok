import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Menu from '~/pages/Menu';
// import Beauty from '~/pages/Beauty';
// import Cartoon from '~/pages/Cartoon';
// import Live from '~/pages/Live';
//
import Library from '~/pages/Library';

import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Program from '~/pages/Program';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.program, component: Program },
    { path: config.routes.beauty, component: Menu },
    // { path: config.routes.cartoon, component: Cartoon },
    { path: config.routes.live, component: Menu },
    //
    { path: config.routes.recent, component: Library },
    { path: config.routes.favourites, component: Library },
    { path: config.routes.saved, component: Library },
    { path: config.routes.mine, component: Library },
    //
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
