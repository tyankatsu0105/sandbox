import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';

import * as Pages from '../views/pages';

import * as PageTransition from '../shared/components/animation/page-transition';

const routes = [
  { path: '/', Component: Pages.Home },
  { path: '/login', Component: Pages.Login },
  { path: '/register', Component: Pages.Register },
  { path: '/settings', Component: Pages.Settings },
  { path: '/article/:articleId', Component: Pages.Article },
  { path: '/editor/:articleSlug', Component: Pages.EditorArticle },
  { path: '/editor', Component: Pages.Editor },
  { path: '/@:username/favorites', Component: Pages.ProfileFavorites },
  { path: '/@:username', Component: Pages.Profile },
];

export const Routes = () => {
  return (
    <>
      {routes.map(({ path, Component }) => (
        <ReactRouterDOM.Route key={path} exact path={path}>
          {({ match }) => (
            <PageTransition.Component match={match}>
              <Component />
            </PageTransition.Component>
          )}
        </ReactRouterDOM.Route>
      ))}
    </>
  );
};
