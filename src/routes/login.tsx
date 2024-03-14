import { useSubmission } from '@solidjs/router';
import { logInAction } from '~/server/client';

export default function () {
  const submission = useSubmission(logInAction);
  return (
    <form action={logInAction} method="post" class="flex flex-col gap-4">
      <button class={'btn btn-primary'} type="submit">Login</button>
    </form>
  );
}
