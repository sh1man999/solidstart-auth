import {ParentProps, Show, Suspense} from 'solid-js';
import {createAsync} from '@solidjs/router';
import {getUserProfile, logOutAction} from '~/server/client';

export const route = {
    load: () => getUserProfile(),
};

export default function Layout() {
    const userProfile = createAsync(() => getUserProfile());

    return (
        <>
            <Suspense fallback={<div>Loading profile...</div>}>
                <div class="flex justify-center pt-4">
                    <div class='flex-col'>
                        <h5>Test APP</h5>
                        <Show
                            when={userProfile()}
                            fallback={<p>Unable to load user profile.</p>}
                        >
                            <p>{userProfile()}</p>
                            <form action={logOutAction} method="post" class="flex flex-col gap-4">
                                <button class='btn btn-primary w-48' type="submit">Logout</button>
                            </form>

                        </Show>
                    </div>
                </div>
            </Suspense>
        </>
    );
}
