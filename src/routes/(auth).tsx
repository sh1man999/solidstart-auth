import { ParentProps, Show, Suspense } from 'solid-js';
import { createAsync } from '@solidjs/router';
import { getUserProfile, logOutAction } from '~/server/client';

export const route = {
  load: () => getUserProfile(),
};

export default function Layout(props: ParentProps) {
  const userProfile = createAsync(() => getUserProfile());

  return (
    <>
      <h5>Test APP</h5>
      <Suspense fallback={<div>Loading profile...</div>}>
        <h5>Test APP</h5>
        <Show
          when={userProfile()}
          fallback={<p>Unable to load user profile.</p>}
        >
          <p>{userProfile()}</p>
          <form action={logOutAction} method="post" class="flex flex-col gap-4">
            <button type="submit">LogOut</button>
          </form>
          <main class="pt-12">{props.children}</main>
        </Show>
      </Suspense>
    </>
  );
}
