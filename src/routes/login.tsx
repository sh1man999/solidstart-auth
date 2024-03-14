import { useSubmission } from '@solidjs/router';
import { logInAction } from '~/server/client';

export default function () {
  const submission = useSubmission(logInAction);
  return (
    <form action={logInAction} method="post" class="flex justify-center pt-4">
      <button class='btn btn-primary  w-48' type="submit">Login</button>
    </form>
  );
}
