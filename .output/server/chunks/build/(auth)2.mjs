import { ssr, ssrHydrationKey, createComponent, escape, ssrAttribute, isServer } from 'solid-js/web';
import { Suspense, Show, createResource, untrack, sharedConfig } from 'solid-js';
import { p as pn, g as gn } from '../runtime.mjs';
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

function v(l, e) {
  let r, s = () => !r || r.state === "unresolved" ? void 0 : r.latest;
  return [r] = createResource(() => $(l, untrack(s)), (c) => c, e), () => r();
}
class t {
  static all() {
    return new t();
  }
  static allSettled() {
    return new t();
  }
  static any() {
    return new t();
  }
  static race() {
    return new t();
  }
  static reject() {
    return new t();
  }
  static resolve() {
    return new t();
  }
  catch() {
    return new t();
  }
  then() {
    return new t();
  }
  finally() {
    return new t();
  }
}
function $(l, e) {
  if (isServer || !sharedConfig.context)
    return l(e);
  const r = fetch, s = Promise;
  try {
    return window.fetch = () => new t(), Promise = t, l(e);
  } finally {
    window.fetch = r, Promise = s;
  }
}
var o = ["<h5", ">Test APP</h5>"], x = ["<p", ">", "</p>"], A = ["<form", ' method="post" class="flex flex-col gap-4"><button type="submit">LogOut</button></form>'], S = ["<main", ' class="pt-12">', "</main>"], L = ["<div", ">Loading profile...</div>"], C = ["<p", ">Unable to load user profile.</p>"];
function R(l) {
  const e = v(() => gn());
  return [ssr(o, ssrHydrationKey()), createComponent(Suspense, { get fallback() {
    return ssr(L, ssrHydrationKey());
  }, get children() {
    return [ssr(o, ssrHydrationKey()), createComponent(Show, { get when() {
      return e();
    }, get fallback() {
      return ssr(C, ssrHydrationKey());
    }, get children() {
      return [ssr(x, ssrHydrationKey(), escape(e())), ssr(A, ssrHydrationKey() + ssrAttribute("action", escape(pn, true), false)), ssr(S, ssrHydrationKey(), escape(l.children))];
    } })];
  } })];
}

export { R as default };
//# sourceMappingURL=(auth)2.mjs.map
