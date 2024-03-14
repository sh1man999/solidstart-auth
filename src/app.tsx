// @refresh reload
import './app.css';
import { Meta, MetaProvider, Title } from '@solidjs/meta';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { lazy, Suspense } from 'solid-js';

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <>
            <Title>PDF parser</Title>
            <Meta charset="utf-8" />
            <Meta
              content="width=device-width, initial-scale=1"
              name="viewport"
            />
          </>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
