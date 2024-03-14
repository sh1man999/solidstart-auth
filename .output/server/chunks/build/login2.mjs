import { ssr, ssrHydrationKey, ssrAttribute, escape } from 'solid-js/web';
import { u as un, d as dn } from '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'node:async_hooks';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'solid-js/web/storage';
import 'solid-js';

var m = ["<form", ' method="post" class="flex flex-col gap-4"><button type="submit">Sub</button></form>'];
function b() {
  return un(dn), ssr(m, ssrHydrationKey() + ssrAttribute("action", escape(dn, true), false));
}

export { b as default };
//# sourceMappingURL=login2.mjs.map
