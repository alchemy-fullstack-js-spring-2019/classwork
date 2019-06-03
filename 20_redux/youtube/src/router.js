import React from 'react';
import {
  Route
} from 'react-router-dom';

export const getRoutes = () => {
  const context = require.context('./pages', false, /\.js$/);

  return context.keys().map(c => {
    const path = c.slice(1).replace('.js', '').toLowerCase();
    console.log(path);
    const Component = context(c).default;
    return (
      <Route exact path={path} component={Component} />
    );
  });
};
