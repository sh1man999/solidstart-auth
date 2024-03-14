globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import * as http$1 from 'node:http';
import http__default$1, { Server as Server$1 } from 'node:http';
import * as node_https from 'node:https';
import node_https__default, { Server } from 'node:https';
import * as node_zlib from 'node:zlib';
import * as node_stream from 'node:stream';
import * as node_buffer from 'node:buffer';
import * as node_util from 'node:util';
import * as node_url from 'node:url';
import { pathToFileURL, fileURLToPath } from 'node:url';
import * as node_net from 'node:net';
import * as node_fs$1 from 'node:fs';
import { promises as promises$1 } from 'node:fs';
import * as node_path$1 from 'node:path';
import { promises, existsSync } from 'fs';
import { dirname as dirname$1, resolve as resolve$1, join } from 'path';
import { AsyncLocalStorage } from 'node:async_hooks';
import invariant from 'vinxi/lib/invariant';
import { join as join$1, virtualId, handlerModule } from 'vinxi/lib/path';
import { getRequestEvent, isServer, renderToString, ssrElement, escape, mergeProps, ssr, renderToStream, createComponent as createComponent$1, ssrHydrationKey, NoHydration, useAssets, HydrationScript, ssrAttribute, Hydration, spread, delegateEvents } from 'solid-js/web';
import { provideRequestEvent } from 'solid-js/web/storage';
import { createContext as createContext$1, createSignal, getOwner, onCleanup, sharedConfig, getListener, startTransition, createMemo, $TRACK, useContext, lazy, createComponent, runWithOwner, createRenderEffect, untrack, on as on$1, resetErrorBoundaries, Suspense, ErrorBoundary, createUniqueId, children, Show, createRoot } from 'solid-js';

var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : "undefined" !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

var node$1 = {};

const require$$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(http$1);

const require$$4$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_https);

const require$$5 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_zlib);

const require$$6 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_stream);

const require$$7 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_buffer);

const require$$8 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_util);

var nodeFetchNative_61758d11 = {};

var l$2=Object.defineProperty;var o$1=(e,t)=>l$2(e,"name",{value:t,configurable:!0});var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof commonjsGlobal$1<"u"?commonjsGlobal$1:typeof self<"u"?self:{};function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}o$1(getDefaultExportFromCjs,"getDefaultExportFromCjs"),nodeFetchNative_61758d11.commonjsGlobal=commonjsGlobal,nodeFetchNative_61758d11.getDefaultExportFromCjs=getDefaultExportFromCjs;

const require$$10 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_url);

const require$$11 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_net);

const require$$0$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_fs$1);

const require$$1$2 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_path$1);

var hs$1=Object.defineProperty;var u=(c,l)=>hs$1(c,"name",{value:l,configurable:!0});var To=(c,l,d)=>{if(!l.has(c))throw TypeError("Cannot "+d)};var D$3=(c,l,d)=>(To(c,l,"read from private field"),d?d.call(c):l.get(c)),ye$1=(c,l,d)=>{if(l.has(c))throw TypeError("Cannot add the same private member more than once");l instanceof WeakSet?l.add(c):l.set(c,d);},ne$4=(c,l,d,b)=>(To(c,l,"write to private field"),b?b.call(c,d):l.set(c,d),d);var Ce$1,mt$3,ot$3,Zt,Ue$1,yt$3,gt$3,_t$1,oe$4,St$3,Me$1,xe$1,wt$3;Object.defineProperty(node$1,"__esModule",{value:!0});const http=require$$3,https=require$$4$1,zlib=require$$5,Stream=require$$6,require$$0=require$$7,require$$1=require$$8,_commonjsHelpers=nodeFetchNative_61758d11,require$$1$1=require$$10,require$$4=require$$11,node_fs=require$$0$1,node_path=require$$1$2;function _interopDefaultCompat(c){return c&&typeof c=="object"&&"default"in c?c.default:c}u(_interopDefaultCompat,"_interopDefaultCompat");const http__default=_interopDefaultCompat(http),https__default=_interopDefaultCompat(https),zlib__default=_interopDefaultCompat(zlib),Stream__default=_interopDefaultCompat(Stream);function dataUriToBuffer(c){if(!/^data:/i.test(c))throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');c=c.replace(/\r?\n/g,"");const l=c.indexOf(",");if(l===-1||l<=4)throw new TypeError("malformed data: URI");const d=c.substring(5,l).split(";");let b="",g=!1;const S=d[0]||"text/plain";let T=S;for(let Q=1;Q<d.length;Q++)d[Q]==="base64"?g=!0:d[Q]&&(T+=`;${d[Q]}`,d[Q].indexOf("charset=")===0&&(b=d[Q].substring(8)));!d[0]&&!b.length&&(T+=";charset=US-ASCII",b="US-ASCII");const R=g?"base64":"ascii",F=unescape(c.substring(l+1)),B=Buffer.from(F,R);return B.type=S,B.typeFull=T,B.charset=b,B}u(dataUriToBuffer,"dataUriToBuffer");var ponyfill_es2018={exports:{}};/**
 * @license
 * web-streams-polyfill v3.3.2
 * Copyright 2024 Mattias Buelens, Diwank Singh Tomer and other contributors.
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */var hasRequiredPonyfill_es2018;function requirePonyfill_es2018(){return hasRequiredPonyfill_es2018||(hasRequiredPonyfill_es2018=1,function(c,l){(function(d,b){b(l);})(_commonjsHelpers.commonjsGlobal,function(d){const b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol:n=>`Symbol(${n})`;function g(){}u(g,"noop");function S(n){return typeof n=="object"&&n!==null||typeof n=="function"}u(S,"typeIsObject");const T=g;function R(n,o){try{Object.defineProperty(n,"name",{value:o,configurable:!0});}catch{}}u(R,"setFunctionName");const F=Promise,B=Promise.prototype.then,Q=Promise.reject.bind(F);function j(n){return new F(n)}u(j,"newPromise");function A(n){return j(o=>o(n))}u(A,"promiseResolvedWith");function C(n){return Q(n)}u(C,"promiseRejectedWith");function q(n,o,a){return B.call(n,o,a)}u(q,"PerformPromiseThen");function $(n,o,a){q(q(n,o,a),void 0,T);}u($,"uponPromise");function N(n,o){$(n,o);}u(N,"uponFulfillment");function J(n,o){$(n,void 0,o);}u(J,"uponRejection");function G(n,o,a){return q(n,o,a)}u(G,"transformPromiseWith");function Pe(n){q(n,void 0,T);}u(Pe,"setPromiseIsHandledToTrue");let M=u(n=>{if(typeof queueMicrotask=="function")M=queueMicrotask;else {const o=A(void 0);M=u(a=>q(o,a),"_queueMicrotask");}return M(n)},"_queueMicrotask");function H(n,o,a){if(typeof n!="function")throw new TypeError("Argument is not a function");return Function.prototype.apply.call(n,o,a)}u(H,"reflectCall");function U(n,o,a){try{return A(H(n,o,a))}catch(p){return C(p)}}u(U,"promiseCall");const it=16384,jr=class jr{constructor(){this._cursor=0,this._size=0,this._front={_elements:[],_next:void 0},this._back=this._front,this._cursor=0,this._size=0;}get length(){return this._size}push(o){const a=this._back;let p=a;a._elements.length===it-1&&(p={_elements:[],_next:void 0}),a._elements.push(o),p!==a&&(this._back=p,a._next=p),++this._size;}shift(){const o=this._front;let a=o;const p=this._cursor;let y=p+1;const _=o._elements,w=_[p];return y===it&&(a=o._next,y=0),--this._size,this._cursor=y,o!==a&&(this._front=a),_[p]=void 0,w}forEach(o){let a=this._cursor,p=this._front,y=p._elements;for(;(a!==y.length||p._next!==void 0)&&!(a===y.length&&(p=p._next,y=p._elements,a=0,y.length===0));)o(y[a]),++a;}peek(){const o=this._front,a=this._cursor;return o._elements[a]}};u(jr,"SimpleQueue");let Y=jr;const nn=b("[[AbortSteps]]"),on=b("[[ErrorSteps]]"),er=b("[[CancelSteps]]"),tr=b("[[PullSteps]]"),rr=b("[[ReleaseSteps]]");function sn(n,o){n._ownerReadableStream=o,o._reader=n,o._state==="readable"?or(n):o._state==="closed"?Co(n):an(n,o._storedError);}u(sn,"ReadableStreamReaderGenericInitialize");function nr(n,o){const a=n._ownerReadableStream;return le(a,o)}u(nr,"ReadableStreamReaderGenericCancel");function ge(n){const o=n._ownerReadableStream;o._state==="readable"?ir(n,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):Po(n,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")),o._readableStreamController[rr](),o._reader=void 0,n._ownerReadableStream=void 0;}u(ge,"ReadableStreamReaderGenericRelease");function Rt(n){return new TypeError("Cannot "+n+" a stream using a released reader")}u(Rt,"readerLockException");function or(n){n._closedPromise=j((o,a)=>{n._closedPromise_resolve=o,n._closedPromise_reject=a;});}u(or,"defaultReaderClosedPromiseInitialize");function an(n,o){or(n),ir(n,o);}u(an,"defaultReaderClosedPromiseInitializeAsRejected");function Co(n){or(n),un(n);}u(Co,"defaultReaderClosedPromiseInitializeAsResolved");function ir(n,o){n._closedPromise_reject!==void 0&&(Pe(n._closedPromise),n._closedPromise_reject(o),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0);}u(ir,"defaultReaderClosedPromiseReject");function Po(n,o){an(n,o);}u(Po,"defaultReaderClosedPromiseResetToRejected");function un(n){n._closedPromise_resolve!==void 0&&(n._closedPromise_resolve(void 0),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0);}u(un,"defaultReaderClosedPromiseResolve");const ln=Number.isFinite||function(n){return typeof n=="number"&&isFinite(n)},vo=Math.trunc||function(n){return n<0?Math.ceil(n):Math.floor(n)};function Eo(n){return typeof n=="object"||typeof n=="function"}u(Eo,"isDictionary");function ce(n,o){if(n!==void 0&&!Eo(n))throw new TypeError(`${o} is not an object.`)}u(ce,"assertDictionary");function ee(n,o){if(typeof n!="function")throw new TypeError(`${o} is not a function.`)}u(ee,"assertFunction");function Ao(n){return typeof n=="object"&&n!==null||typeof n=="function"}u(Ao,"isObject");function fn(n,o){if(!Ao(n))throw new TypeError(`${o} is not an object.`)}u(fn,"assertObject");function _e(n,o,a){if(n===void 0)throw new TypeError(`Parameter ${o} is required in '${a}'.`)}u(_e,"assertRequiredArgument");function sr(n,o,a){if(n===void 0)throw new TypeError(`${o} is required in '${a}'.`)}u(sr,"assertRequiredField");function ar(n){return Number(n)}u(ar,"convertUnrestrictedDouble");function cn(n){return n===0?0:n}u(cn,"censorNegativeZero");function Bo(n){return cn(vo(n))}u(Bo,"integerPart");function ur(n,o){const p=Number.MAX_SAFE_INTEGER;let y=Number(n);if(y=cn(y),!ln(y))throw new TypeError(`${o} is not a finite number`);if(y=Bo(y),y<0||y>p)throw new TypeError(`${o} is outside the accepted range of 0 to ${p}, inclusive`);return !ln(y)||y===0?0:y}u(ur,"convertUnsignedLongLongWithEnforceRange");function lr(n,o){if(!qe(n))throw new TypeError(`${o} is not a ReadableStream.`)}u(lr,"assertReadableStream");function Ne(n){return new de(n)}u(Ne,"AcquireReadableStreamDefaultReader");function dn(n,o){n._reader._readRequests.push(o);}u(dn,"ReadableStreamAddReadRequest");function fr(n,o,a){const y=n._reader._readRequests.shift();a?y._closeSteps():y._chunkSteps(o);}u(fr,"ReadableStreamFulfillReadRequest");function Tt(n){return n._reader._readRequests.length}u(Tt,"ReadableStreamGetNumReadRequests");function hn(n){const o=n._reader;return !(o===void 0||!ve(o))}u(hn,"ReadableStreamHasDefaultReader");const Ir=class Ir{constructor(o){if(_e(o,1,"ReadableStreamDefaultReader"),lr(o,"First parameter"),ke(o))throw new TypeError("This stream has already been locked for exclusive reading by another reader");sn(this,o),this._readRequests=new Y;}get closed(){return ve(this)?this._closedPromise:C(Ct("closed"))}cancel(o=void 0){return ve(this)?this._ownerReadableStream===void 0?C(Rt("cancel")):nr(this,o):C(Ct("cancel"))}read(){if(!ve(this))return C(Ct("read"));if(this._ownerReadableStream===void 0)return C(Rt("read from"));let o,a;const p=j((_,w)=>{o=_,a=w;});return st(this,{_chunkSteps:_=>o({value:_,done:!1}),_closeSteps:()=>o({value:void 0,done:!0}),_errorSteps:_=>a(_)}),p}releaseLock(){if(!ve(this))throw Ct("releaseLock");this._ownerReadableStream!==void 0&&qo(this);}};u(Ir,"ReadableStreamDefaultReader");let de=Ir;Object.defineProperties(de.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),R(de.prototype.cancel,"cancel"),R(de.prototype.read,"read"),R(de.prototype.releaseLock,"releaseLock"),typeof b.toStringTag=="symbol"&&Object.defineProperty(de.prototype,b.toStringTag,{value:"ReadableStreamDefaultReader",configurable:!0});function ve(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_readRequests")?!1:n instanceof de}u(ve,"IsReadableStreamDefaultReader");function st(n,o){const a=n._ownerReadableStream;a._disturbed=!0,a._state==="closed"?o._closeSteps():a._state==="errored"?o._errorSteps(a._storedError):a._readableStreamController[tr](o);}u(st,"ReadableStreamDefaultReaderRead");function qo(n){ge(n);const o=new TypeError("Reader was released");pn(n,o);}u(qo,"ReadableStreamDefaultReaderRelease");function pn(n,o){const a=n._readRequests;n._readRequests=new Y,a.forEach(p=>{p._errorSteps(o);});}u(pn,"ReadableStreamDefaultReaderErrorReadRequests");function Ct(n){return new TypeError(`ReadableStreamDefaultReader.prototype.${n} can only be used on a ReadableStreamDefaultReader`)}u(Ct,"defaultReaderBrandCheckException");const bn=Object.getPrototypeOf(Object.getPrototypeOf(async function*(){}).prototype),Lr=class Lr{constructor(o,a){this._ongoingPromise=void 0,this._isFinished=!1,this._reader=o,this._preventCancel=a;}next(){const o=u(()=>this._nextSteps(),"nextSteps");return this._ongoingPromise=this._ongoingPromise?G(this._ongoingPromise,o,o):o(),this._ongoingPromise}return(o){const a=u(()=>this._returnSteps(o),"returnSteps");return this._ongoingPromise?G(this._ongoingPromise,a,a):a()}_nextSteps(){if(this._isFinished)return Promise.resolve({value:void 0,done:!0});const o=this._reader;let a,p;const y=j((w,P)=>{a=w,p=P;});return st(o,{_chunkSteps:w=>{this._ongoingPromise=void 0,M(()=>a({value:w,done:!1}));},_closeSteps:()=>{this._ongoingPromise=void 0,this._isFinished=!0,ge(o),a({value:void 0,done:!0});},_errorSteps:w=>{this._ongoingPromise=void 0,this._isFinished=!0,ge(o),p(w);}}),y}_returnSteps(o){if(this._isFinished)return Promise.resolve({value:o,done:!0});this._isFinished=!0;const a=this._reader;if(!this._preventCancel){const p=nr(a,o);return ge(a),G(p,()=>({value:o,done:!0}))}return ge(a),A({value:o,done:!0})}};u(Lr,"ReadableStreamAsyncIteratorImpl");let Pt=Lr;const mn={next(){return yn(this)?this._asyncIteratorImpl.next():C(gn("next"))},return(n){return yn(this)?this._asyncIteratorImpl.return(n):C(gn("return"))}};bn!==void 0&&Object.setPrototypeOf(mn,bn);function ko(n,o){const a=Ne(n),p=new Pt(a,o),y=Object.create(mn);return y._asyncIteratorImpl=p,y}u(ko,"AcquireReadableStreamAsyncIterator");function yn(n){if(!S(n)||!Object.prototype.hasOwnProperty.call(n,"_asyncIteratorImpl"))return !1;try{return n._asyncIteratorImpl instanceof Pt}catch{return !1}}u(yn,"IsReadableStreamAsyncIterator");function gn(n){return new TypeError(`ReadableStreamAsyncIterator.${n} can only be used on a ReadableSteamAsyncIterator`)}u(gn,"streamAsyncIteratorBrandCheckException");const _n=Number.isNaN||function(n){return n!==n};function at(n){return n.slice()}u(at,"CreateArrayFromList");function Sn(n,o,a,p,y){new Uint8Array(n).set(new Uint8Array(a,p,y),o);}u(Sn,"CopyDataBlockBytes");let Se=u(n=>(typeof n.transfer=="function"?Se=u(o=>o.transfer(),"TransferArrayBuffer"):typeof structuredClone=="function"?Se=u(o=>structuredClone(o,{transfer:[o]}),"TransferArrayBuffer"):Se=u(o=>o,"TransferArrayBuffer"),Se(n)),"TransferArrayBuffer"),Ee=u(n=>(typeof n.detached=="boolean"?Ee=u(o=>o.detached,"IsDetachedBuffer"):Ee=u(o=>o.byteLength===0,"IsDetachedBuffer"),Ee(n)),"IsDetachedBuffer");function wn(n,o,a){if(n.slice)return n.slice(o,a);const p=a-o,y=new ArrayBuffer(p);return Sn(y,0,n,o,p),y}u(wn,"ArrayBufferSlice");function vt(n,o){const a=n[o];if(a!=null){if(typeof a!="function")throw new TypeError(`${String(o)} is not a function`);return a}}u(vt,"GetMethod");function Wo(n){const o={[b.iterator]:()=>n.iterator},a=async function*(){return yield*o}(),p=a.next;return {iterator:a,nextMethod:p,done:!1}}u(Wo,"CreateAsyncFromSyncIterator");function Rn(n,o="sync",a){if(a===void 0)if(o==="async"){if(a=vt(n,b.asyncIterator),a===void 0){const _=vt(n,b.iterator),w=Rn(n,"sync",_);return Wo(w)}}else a=vt(n,b.iterator);if(a===void 0)throw new TypeError("The object is not iterable");const p=H(a,n,[]);if(!S(p))throw new TypeError("The iterator method must return an object");const y=p.next;return {iterator:p,nextMethod:y,done:!1}}u(Rn,"GetIterator");function Oo(n){const o=H(n.nextMethod,n.iterator,[]);if(!S(o))throw new TypeError("The iterator.next() method must return an object");return o}u(Oo,"IteratorNext");function zo(n){return !!n.done}u(zo,"IteratorComplete");function Fo(n){return n.value}u(Fo,"IteratorValue");function jo(n){return !(typeof n!="number"||_n(n)||n<0)}u(jo,"IsNonNegativeNumber");function Tn(n){const o=wn(n.buffer,n.byteOffset,n.byteOffset+n.byteLength);return new Uint8Array(o)}u(Tn,"CloneAsUint8Array");function cr(n){const o=n._queue.shift();return n._queueTotalSize-=o.size,n._queueTotalSize<0&&(n._queueTotalSize=0),o.value}u(cr,"DequeueValue");function dr(n,o,a){if(!jo(a)||a===1/0)throw new RangeError("Size must be a finite, non-NaN, non-negative number.");n._queue.push({value:o,size:a}),n._queueTotalSize+=a;}u(dr,"EnqueueValueWithSize");function Io(n){return n._queue.peek().value}u(Io,"PeekQueueValue");function Ae(n){n._queue=new Y,n._queueTotalSize=0;}u(Ae,"ResetQueue");function Cn(n){return n===DataView}u(Cn,"isDataViewConstructor");function Lo(n){return Cn(n.constructor)}u(Lo,"isDataView");function $o(n){return Cn(n)?1:n.BYTES_PER_ELEMENT}u($o,"arrayBufferViewElementSize");const $r=class $r{constructor(){throw new TypeError("Illegal constructor")}get view(){if(!hr(this))throw gr("view");return this._view}respond(o){if(!hr(this))throw gr("respond");if(_e(o,1,"respond"),o=ur(o,"First parameter"),this._associatedReadableByteStreamController===void 0)throw new TypeError("This BYOB request has been invalidated");if(Ee(this._view.buffer))throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");qt(this._associatedReadableByteStreamController,o);}respondWithNewView(o){if(!hr(this))throw gr("respondWithNewView");if(_e(o,1,"respondWithNewView"),!ArrayBuffer.isView(o))throw new TypeError("You can only respond with array buffer views");if(this._associatedReadableByteStreamController===void 0)throw new TypeError("This BYOB request has been invalidated");if(Ee(o.buffer))throw new TypeError("The given view's buffer has been detached and so cannot be used as a response");kt(this._associatedReadableByteStreamController,o);}};u($r,"ReadableStreamBYOBRequest");let we=$r;Object.defineProperties(we.prototype,{respond:{enumerable:!0},respondWithNewView:{enumerable:!0},view:{enumerable:!0}}),R(we.prototype.respond,"respond"),R(we.prototype.respondWithNewView,"respondWithNewView"),typeof b.toStringTag=="symbol"&&Object.defineProperty(we.prototype,b.toStringTag,{value:"ReadableStreamBYOBRequest",configurable:!0});const Dr=class Dr{constructor(){throw new TypeError("Illegal constructor")}get byobRequest(){if(!Oe(this))throw lt("byobRequest");return yr(this)}get desiredSize(){if(!Oe(this))throw lt("desiredSize");return zn(this)}close(){if(!Oe(this))throw lt("close");if(this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!");const o=this._controlledReadableByteStream._state;if(o!=="readable")throw new TypeError(`The stream (in ${o} state) is not in the readable state and cannot be closed`);ut(this);}enqueue(o){if(!Oe(this))throw lt("enqueue");if(_e(o,1,"enqueue"),!ArrayBuffer.isView(o))throw new TypeError("chunk must be an array buffer view");if(o.byteLength===0)throw new TypeError("chunk must have non-zero byteLength");if(o.buffer.byteLength===0)throw new TypeError("chunk's buffer must have non-zero byteLength");if(this._closeRequested)throw new TypeError("stream is closed or draining");const a=this._controlledReadableByteStream._state;if(a!=="readable")throw new TypeError(`The stream (in ${a} state) is not in the readable state and cannot be enqueued to`);Bt(this,o);}error(o=void 0){if(!Oe(this))throw lt("error");te(this,o);}[er](o){Pn(this),Ae(this);const a=this._cancelAlgorithm(o);return At(this),a}[tr](o){const a=this._controlledReadableByteStream;if(this._queueTotalSize>0){On(this,o);return}const p=this._autoAllocateChunkSize;if(p!==void 0){let y;try{y=new ArrayBuffer(p);}catch(w){o._errorSteps(w);return}const _={buffer:y,bufferByteLength:p,byteOffset:0,byteLength:p,bytesFilled:0,minimumFill:1,elementSize:1,viewConstructor:Uint8Array,readerType:"default"};this._pendingPullIntos.push(_);}dn(a,o),ze(this);}[rr](){if(this._pendingPullIntos.length>0){const o=this._pendingPullIntos.peek();o.readerType="none",this._pendingPullIntos=new Y,this._pendingPullIntos.push(o);}}};u(Dr,"ReadableByteStreamController");let ie=Dr;Object.defineProperties(ie.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},byobRequest:{enumerable:!0},desiredSize:{enumerable:!0}}),R(ie.prototype.close,"close"),R(ie.prototype.enqueue,"enqueue"),R(ie.prototype.error,"error"),typeof b.toStringTag=="symbol"&&Object.defineProperty(ie.prototype,b.toStringTag,{value:"ReadableByteStreamController",configurable:!0});function Oe(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledReadableByteStream")?!1:n instanceof ie}u(Oe,"IsReadableByteStreamController");function hr(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_associatedReadableByteStreamController")?!1:n instanceof we}u(hr,"IsReadableStreamBYOBRequest");function ze(n){if(!No(n))return;if(n._pulling){n._pullAgain=!0;return}n._pulling=!0;const a=n._pullAlgorithm();$(a,()=>(n._pulling=!1,n._pullAgain&&(n._pullAgain=!1,ze(n)),null),p=>(te(n,p),null));}u(ze,"ReadableByteStreamControllerCallPullIfNeeded");function Pn(n){br(n),n._pendingPullIntos=new Y;}u(Pn,"ReadableByteStreamControllerClearPendingPullIntos");function pr(n,o){let a=!1;n._state==="closed"&&(a=!0);const p=vn(o);o.readerType==="default"?fr(n,p,a):Zo(n,p,a);}u(pr,"ReadableByteStreamControllerCommitPullIntoDescriptor");function vn(n){const o=n.bytesFilled,a=n.elementSize;return new n.viewConstructor(n.buffer,n.byteOffset,o/a)}u(vn,"ReadableByteStreamControllerConvertPullIntoDescriptor");function Et(n,o,a,p){n._queue.push({buffer:o,byteOffset:a,byteLength:p}),n._queueTotalSize+=p;}u(Et,"ReadableByteStreamControllerEnqueueChunkToQueue");function En(n,o,a,p){let y;try{y=wn(o,a,a+p);}catch(_){throw te(n,_),_}Et(n,y,0,p);}u(En,"ReadableByteStreamControllerEnqueueClonedChunkToQueue");function An(n,o){o.bytesFilled>0&&En(n,o.buffer,o.byteOffset,o.bytesFilled),He(n);}u(An,"ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue");function Bn(n,o){const a=Math.min(n._queueTotalSize,o.byteLength-o.bytesFilled),p=o.bytesFilled+a;let y=a,_=!1;const w=p%o.elementSize,P=p-w;P>=o.minimumFill&&(y=P-o.bytesFilled,_=!0);const k=n._queue;for(;y>0;){const v=k.peek(),W=Math.min(y,v.byteLength),O=o.byteOffset+o.bytesFilled;Sn(o.buffer,O,v.buffer,v.byteOffset,W),v.byteLength===W?k.shift():(v.byteOffset+=W,v.byteLength-=W),n._queueTotalSize-=W,qn(n,W,o),y-=W;}return _}u(Bn,"ReadableByteStreamControllerFillPullIntoDescriptorFromQueue");function qn(n,o,a){a.bytesFilled+=o;}u(qn,"ReadableByteStreamControllerFillHeadPullIntoDescriptor");function kn(n){n._queueTotalSize===0&&n._closeRequested?(At(n),bt(n._controlledReadableByteStream)):ze(n);}u(kn,"ReadableByteStreamControllerHandleQueueDrain");function br(n){n._byobRequest!==null&&(n._byobRequest._associatedReadableByteStreamController=void 0,n._byobRequest._view=null,n._byobRequest=null);}u(br,"ReadableByteStreamControllerInvalidateBYOBRequest");function mr(n){for(;n._pendingPullIntos.length>0;){if(n._queueTotalSize===0)return;const o=n._pendingPullIntos.peek();Bn(n,o)&&(He(n),pr(n._controlledReadableByteStream,o));}}u(mr,"ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue");function Do(n){const o=n._controlledReadableByteStream._reader;for(;o._readRequests.length>0;){if(n._queueTotalSize===0)return;const a=o._readRequests.shift();On(n,a);}}u(Do,"ReadableByteStreamControllerProcessReadRequestsUsingQueue");function Mo(n,o,a,p){const y=n._controlledReadableByteStream,_=o.constructor,w=$o(_),{byteOffset:P,byteLength:k}=o,v=a*w;let W;try{W=Se(o.buffer);}catch(I){p._errorSteps(I);return}const O={buffer:W,bufferByteLength:W.byteLength,byteOffset:P,byteLength:k,bytesFilled:0,minimumFill:v,elementSize:w,viewConstructor:_,readerType:"byob"};if(n._pendingPullIntos.length>0){n._pendingPullIntos.push(O),In(y,p);return}if(y._state==="closed"){const I=new _(O.buffer,O.byteOffset,0);p._closeSteps(I);return}if(n._queueTotalSize>0){if(Bn(n,O)){const I=vn(O);kn(n),p._chunkSteps(I);return}if(n._closeRequested){const I=new TypeError("Insufficient bytes to fill elements in the given buffer");te(n,I),p._errorSteps(I);return}}n._pendingPullIntos.push(O),In(y,p),ze(n);}u(Mo,"ReadableByteStreamControllerPullInto");function xo(n,o){o.readerType==="none"&&He(n);const a=n._controlledReadableByteStream;if(_r(a))for(;Ln(a)>0;){const p=He(n);pr(a,p);}}u(xo,"ReadableByteStreamControllerRespondInClosedState");function Uo(n,o,a){if(qn(n,o,a),a.readerType==="none"){An(n,a),mr(n);return}if(a.bytesFilled<a.minimumFill)return;He(n);const p=a.bytesFilled%a.elementSize;if(p>0){const y=a.byteOffset+a.bytesFilled;En(n,a.buffer,y-p,p);}a.bytesFilled-=p,pr(n._controlledReadableByteStream,a),mr(n);}u(Uo,"ReadableByteStreamControllerRespondInReadableState");function Wn(n,o){const a=n._pendingPullIntos.peek();br(n),n._controlledReadableByteStream._state==="closed"?xo(n,a):Uo(n,o,a),ze(n);}u(Wn,"ReadableByteStreamControllerRespondInternal");function He(n){return n._pendingPullIntos.shift()}u(He,"ReadableByteStreamControllerShiftPendingPullInto");function No(n){const o=n._controlledReadableByteStream;return o._state!=="readable"||n._closeRequested||!n._started?!1:!!(hn(o)&&Tt(o)>0||_r(o)&&Ln(o)>0||zn(n)>0)}u(No,"ReadableByteStreamControllerShouldCallPull");function At(n){n._pullAlgorithm=void 0,n._cancelAlgorithm=void 0;}u(At,"ReadableByteStreamControllerClearAlgorithms");function ut(n){const o=n._controlledReadableByteStream;if(!(n._closeRequested||o._state!=="readable")){if(n._queueTotalSize>0){n._closeRequested=!0;return}if(n._pendingPullIntos.length>0){const a=n._pendingPullIntos.peek();if(a.bytesFilled%a.elementSize!==0){const p=new TypeError("Insufficient bytes to fill elements in the given buffer");throw te(n,p),p}}At(n),bt(o);}}u(ut,"ReadableByteStreamControllerClose");function Bt(n,o){const a=n._controlledReadableByteStream;if(n._closeRequested||a._state!=="readable")return;const{buffer:p,byteOffset:y,byteLength:_}=o;if(Ee(p))throw new TypeError("chunk's buffer is detached and so cannot be enqueued");const w=Se(p);if(n._pendingPullIntos.length>0){const P=n._pendingPullIntos.peek();if(Ee(P.buffer))throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");br(n),P.buffer=Se(P.buffer),P.readerType==="none"&&An(n,P);}if(hn(a))if(Do(n),Tt(a)===0)Et(n,w,y,_);else {n._pendingPullIntos.length>0&&He(n);const P=new Uint8Array(w,y,_);fr(a,P,!1);}else _r(a)?(Et(n,w,y,_),mr(n)):Et(n,w,y,_);ze(n);}u(Bt,"ReadableByteStreamControllerEnqueue");function te(n,o){const a=n._controlledReadableByteStream;a._state==="readable"&&(Pn(n),Ae(n),At(n),uo(a,o));}u(te,"ReadableByteStreamControllerError");function On(n,o){const a=n._queue.shift();n._queueTotalSize-=a.byteLength,kn(n);const p=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);o._chunkSteps(p);}u(On,"ReadableByteStreamControllerFillReadRequestFromQueue");function yr(n){if(n._byobRequest===null&&n._pendingPullIntos.length>0){const o=n._pendingPullIntos.peek(),a=new Uint8Array(o.buffer,o.byteOffset+o.bytesFilled,o.byteLength-o.bytesFilled),p=Object.create(we.prototype);Vo(p,n,a),n._byobRequest=p;}return n._byobRequest}u(yr,"ReadableByteStreamControllerGetBYOBRequest");function zn(n){const o=n._controlledReadableByteStream._state;return o==="errored"?null:o==="closed"?0:n._strategyHWM-n._queueTotalSize}u(zn,"ReadableByteStreamControllerGetDesiredSize");function qt(n,o){const a=n._pendingPullIntos.peek();if(n._controlledReadableByteStream._state==="closed"){if(o!==0)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream")}else {if(o===0)throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");if(a.bytesFilled+o>a.byteLength)throw new RangeError("bytesWritten out of range")}a.buffer=Se(a.buffer),Wn(n,o);}u(qt,"ReadableByteStreamControllerRespond");function kt(n,o){const a=n._pendingPullIntos.peek();if(n._controlledReadableByteStream._state==="closed"){if(o.byteLength!==0)throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream")}else if(o.byteLength===0)throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");if(a.byteOffset+a.bytesFilled!==o.byteOffset)throw new RangeError("The region specified by view does not match byobRequest");if(a.bufferByteLength!==o.buffer.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest");if(a.bytesFilled+o.byteLength>a.byteLength)throw new RangeError("The region specified by view is larger than byobRequest");const y=o.byteLength;a.buffer=Se(o.buffer),Wn(n,y);}u(kt,"ReadableByteStreamControllerRespondWithNewView");function Fn(n,o,a,p,y,_,w){o._controlledReadableByteStream=n,o._pullAgain=!1,o._pulling=!1,o._byobRequest=null,o._queue=o._queueTotalSize=void 0,Ae(o),o._closeRequested=!1,o._started=!1,o._strategyHWM=_,o._pullAlgorithm=p,o._cancelAlgorithm=y,o._autoAllocateChunkSize=w,o._pendingPullIntos=new Y,n._readableStreamController=o;const P=a();$(A(P),()=>(o._started=!0,ze(o),null),k=>(te(o,k),null));}u(Fn,"SetUpReadableByteStreamController");function Ho(n,o,a){const p=Object.create(ie.prototype);let y,_,w;o.start!==void 0?y=u(()=>o.start(p),"startAlgorithm"):y=u(()=>{},"startAlgorithm"),o.pull!==void 0?_=u(()=>o.pull(p),"pullAlgorithm"):_=u(()=>A(void 0),"pullAlgorithm"),o.cancel!==void 0?w=u(k=>o.cancel(k),"cancelAlgorithm"):w=u(()=>A(void 0),"cancelAlgorithm");const P=o.autoAllocateChunkSize;if(P===0)throw new TypeError("autoAllocateChunkSize must be greater than 0");Fn(n,p,y,_,w,a,P);}u(Ho,"SetUpReadableByteStreamControllerFromUnderlyingSource");function Vo(n,o,a){n._associatedReadableByteStreamController=o,n._view=a;}u(Vo,"SetUpReadableStreamBYOBRequest");function gr(n){return new TypeError(`ReadableStreamBYOBRequest.prototype.${n} can only be used on a ReadableStreamBYOBRequest`)}u(gr,"byobRequestBrandCheckException");function lt(n){return new TypeError(`ReadableByteStreamController.prototype.${n} can only be used on a ReadableByteStreamController`)}u(lt,"byteStreamControllerBrandCheckException");function Qo(n,o){ce(n,o);const a=n?.mode;return {mode:a===void 0?void 0:Go(a,`${o} has member 'mode' that`)}}u(Qo,"convertReaderOptions");function Go(n,o){if(n=`${n}`,n!=="byob")throw new TypeError(`${o} '${n}' is not a valid enumeration value for ReadableStreamReaderMode`);return n}u(Go,"convertReadableStreamReaderMode");function Yo(n,o){var a;ce(n,o);const p=(a=n?.min)!==null&&a!==void 0?a:1;return {min:ur(p,`${o} has member 'min' that`)}}u(Yo,"convertByobReadOptions");function jn(n){return new he(n)}u(jn,"AcquireReadableStreamBYOBReader");function In(n,o){n._reader._readIntoRequests.push(o);}u(In,"ReadableStreamAddReadIntoRequest");function Zo(n,o,a){const y=n._reader._readIntoRequests.shift();a?y._closeSteps(o):y._chunkSteps(o);}u(Zo,"ReadableStreamFulfillReadIntoRequest");function Ln(n){return n._reader._readIntoRequests.length}u(Ln,"ReadableStreamGetNumReadIntoRequests");function _r(n){const o=n._reader;return !(o===void 0||!Fe(o))}u(_r,"ReadableStreamHasBYOBReader");const Mr=class Mr{constructor(o){if(_e(o,1,"ReadableStreamBYOBReader"),lr(o,"First parameter"),ke(o))throw new TypeError("This stream has already been locked for exclusive reading by another reader");if(!Oe(o._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");sn(this,o),this._readIntoRequests=new Y;}get closed(){return Fe(this)?this._closedPromise:C(Wt("closed"))}cancel(o=void 0){return Fe(this)?this._ownerReadableStream===void 0?C(Rt("cancel")):nr(this,o):C(Wt("cancel"))}read(o,a={}){if(!Fe(this))return C(Wt("read"));if(!ArrayBuffer.isView(o))return C(new TypeError("view must be an array buffer view"));if(o.byteLength===0)return C(new TypeError("view must have non-zero byteLength"));if(o.buffer.byteLength===0)return C(new TypeError("view's buffer must have non-zero byteLength"));if(Ee(o.buffer))return C(new TypeError("view's buffer has been detached"));let p;try{p=Yo(a,"options");}catch(v){return C(v)}const y=p.min;if(y===0)return C(new TypeError("options.min must be greater than 0"));if(Lo(o)){if(y>o.byteLength)return C(new RangeError("options.min must be less than or equal to view's byteLength"))}else if(y>o.length)return C(new RangeError("options.min must be less than or equal to view's length"));if(this._ownerReadableStream===void 0)return C(Rt("read from"));let _,w;const P=j((v,W)=>{_=v,w=W;});return $n(this,o,y,{_chunkSteps:v=>_({value:v,done:!1}),_closeSteps:v=>_({value:v,done:!0}),_errorSteps:v=>w(v)}),P}releaseLock(){if(!Fe(this))throw Wt("releaseLock");this._ownerReadableStream!==void 0&&Ko(this);}};u(Mr,"ReadableStreamBYOBReader");let he=Mr;Object.defineProperties(he.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),R(he.prototype.cancel,"cancel"),R(he.prototype.read,"read"),R(he.prototype.releaseLock,"releaseLock"),typeof b.toStringTag=="symbol"&&Object.defineProperty(he.prototype,b.toStringTag,{value:"ReadableStreamBYOBReader",configurable:!0});function Fe(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_readIntoRequests")?!1:n instanceof he}u(Fe,"IsReadableStreamBYOBReader");function $n(n,o,a,p){const y=n._ownerReadableStream;y._disturbed=!0,y._state==="errored"?p._errorSteps(y._storedError):Mo(y._readableStreamController,o,a,p);}u($n,"ReadableStreamBYOBReaderRead");function Ko(n){ge(n);const o=new TypeError("Reader was released");Dn(n,o);}u(Ko,"ReadableStreamBYOBReaderRelease");function Dn(n,o){const a=n._readIntoRequests;n._readIntoRequests=new Y,a.forEach(p=>{p._errorSteps(o);});}u(Dn,"ReadableStreamBYOBReaderErrorReadIntoRequests");function Wt(n){return new TypeError(`ReadableStreamBYOBReader.prototype.${n} can only be used on a ReadableStreamBYOBReader`)}u(Wt,"byobReaderBrandCheckException");function ft(n,o){const{highWaterMark:a}=n;if(a===void 0)return o;if(_n(a)||a<0)throw new RangeError("Invalid highWaterMark");return a}u(ft,"ExtractHighWaterMark");function Ot(n){const{size:o}=n;return o||(()=>1)}u(Ot,"ExtractSizeAlgorithm");function zt(n,o){ce(n,o);const a=n?.highWaterMark,p=n?.size;return {highWaterMark:a===void 0?void 0:ar(a),size:p===void 0?void 0:Jo(p,`${o} has member 'size' that`)}}u(zt,"convertQueuingStrategy");function Jo(n,o){return ee(n,o),a=>ar(n(a))}u(Jo,"convertQueuingStrategySize");function Xo(n,o){ce(n,o);const a=n?.abort,p=n?.close,y=n?.start,_=n?.type,w=n?.write;return {abort:a===void 0?void 0:ei(a,n,`${o} has member 'abort' that`),close:p===void 0?void 0:ti(p,n,`${o} has member 'close' that`),start:y===void 0?void 0:ri(y,n,`${o} has member 'start' that`),write:w===void 0?void 0:ni(w,n,`${o} has member 'write' that`),type:_}}u(Xo,"convertUnderlyingSink");function ei(n,o,a){return ee(n,a),p=>U(n,o,[p])}u(ei,"convertUnderlyingSinkAbortCallback");function ti(n,o,a){return ee(n,a),()=>U(n,o,[])}u(ti,"convertUnderlyingSinkCloseCallback");function ri(n,o,a){return ee(n,a),p=>H(n,o,[p])}u(ri,"convertUnderlyingSinkStartCallback");function ni(n,o,a){return ee(n,a),(p,y)=>U(n,o,[p,y])}u(ni,"convertUnderlyingSinkWriteCallback");function Mn(n,o){if(!Ve(n))throw new TypeError(`${o} is not a WritableStream.`)}u(Mn,"assertWritableStream");function oi(n){if(typeof n!="object"||n===null)return !1;try{return typeof n.aborted=="boolean"}catch{return !1}}u(oi,"isAbortSignal");const ii=typeof AbortController=="function";function si(){if(ii)return new AbortController}u(si,"createAbortController");const xr=class xr{constructor(o={},a={}){o===void 0?o=null:fn(o,"First parameter");const p=zt(a,"Second parameter"),y=Xo(o,"First parameter");if(Un(this),y.type!==void 0)throw new RangeError("Invalid type is specified");const w=Ot(p),P=ft(p,1);Si(this,y,P,w);}get locked(){if(!Ve(this))throw $t("locked");return Qe(this)}abort(o=void 0){return Ve(this)?Qe(this)?C(new TypeError("Cannot abort a stream that already has a writer")):Ft(this,o):C($t("abort"))}close(){return Ve(this)?Qe(this)?C(new TypeError("Cannot close a stream that already has a writer")):be(this)?C(new TypeError("Cannot close an already-closing stream")):Nn(this):C($t("close"))}getWriter(){if(!Ve(this))throw $t("getWriter");return xn(this)}};u(xr,"WritableStream");let pe=xr;Object.defineProperties(pe.prototype,{abort:{enumerable:!0},close:{enumerable:!0},getWriter:{enumerable:!0},locked:{enumerable:!0}}),R(pe.prototype.abort,"abort"),R(pe.prototype.close,"close"),R(pe.prototype.getWriter,"getWriter"),typeof b.toStringTag=="symbol"&&Object.defineProperty(pe.prototype,b.toStringTag,{value:"WritableStream",configurable:!0});function xn(n){return new se(n)}u(xn,"AcquireWritableStreamDefaultWriter");function ai(n,o,a,p,y=1,_=()=>1){const w=Object.create(pe.prototype);Un(w);const P=Object.create(Be.prototype);return Zn(w,P,n,o,a,p,y,_),w}u(ai,"CreateWritableStream");function Un(n){n._state="writable",n._storedError=void 0,n._writer=void 0,n._writableStreamController=void 0,n._writeRequests=new Y,n._inFlightWriteRequest=void 0,n._closeRequest=void 0,n._inFlightCloseRequest=void 0,n._pendingAbortRequest=void 0,n._backpressure=!1;}u(Un,"InitializeWritableStream");function Ve(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_writableStreamController")?!1:n instanceof pe}u(Ve,"IsWritableStream");function Qe(n){return n._writer!==void 0}u(Qe,"IsWritableStreamLocked");function Ft(n,o){var a;if(n._state==="closed"||n._state==="errored")return A(void 0);n._writableStreamController._abortReason=o,(a=n._writableStreamController._abortController)===null||a===void 0||a.abort(o);const p=n._state;if(p==="closed"||p==="errored")return A(void 0);if(n._pendingAbortRequest!==void 0)return n._pendingAbortRequest._promise;let y=!1;p==="erroring"&&(y=!0,o=void 0);const _=j((w,P)=>{n._pendingAbortRequest={_promise:void 0,_resolve:w,_reject:P,_reason:o,_wasAlreadyErroring:y};});return n._pendingAbortRequest._promise=_,y||wr(n,o),_}u(Ft,"WritableStreamAbort");function Nn(n){const o=n._state;if(o==="closed"||o==="errored")return C(new TypeError(`The stream (in ${o} state) is not in the writable state and cannot be closed`));const a=j((y,_)=>{const w={_resolve:y,_reject:_};n._closeRequest=w;}),p=n._writer;return p!==void 0&&n._backpressure&&o==="writable"&&Br(p),wi(n._writableStreamController),a}u(Nn,"WritableStreamClose");function ui(n){return j((a,p)=>{const y={_resolve:a,_reject:p};n._writeRequests.push(y);})}u(ui,"WritableStreamAddWriteRequest");function Sr(n,o){if(n._state==="writable"){wr(n,o);return}Rr(n);}u(Sr,"WritableStreamDealWithRejection");function wr(n,o){const a=n._writableStreamController;n._state="erroring",n._storedError=o;const p=n._writer;p!==void 0&&Vn(p,o),!hi(n)&&a._started&&Rr(n);}u(wr,"WritableStreamStartErroring");function Rr(n){n._state="errored",n._writableStreamController[on]();const o=n._storedError;if(n._writeRequests.forEach(y=>{y._reject(o);}),n._writeRequests=new Y,n._pendingAbortRequest===void 0){jt(n);return}const a=n._pendingAbortRequest;if(n._pendingAbortRequest=void 0,a._wasAlreadyErroring){a._reject(o),jt(n);return}const p=n._writableStreamController[nn](a._reason);$(p,()=>(a._resolve(),jt(n),null),y=>(a._reject(y),jt(n),null));}u(Rr,"WritableStreamFinishErroring");function li(n){n._inFlightWriteRequest._resolve(void 0),n._inFlightWriteRequest=void 0;}u(li,"WritableStreamFinishInFlightWrite");function fi(n,o){n._inFlightWriteRequest._reject(o),n._inFlightWriteRequest=void 0,Sr(n,o);}u(fi,"WritableStreamFinishInFlightWriteWithError");function ci(n){n._inFlightCloseRequest._resolve(void 0),n._inFlightCloseRequest=void 0,n._state==="erroring"&&(n._storedError=void 0,n._pendingAbortRequest!==void 0&&(n._pendingAbortRequest._resolve(),n._pendingAbortRequest=void 0)),n._state="closed";const a=n._writer;a!==void 0&&eo(a);}u(ci,"WritableStreamFinishInFlightClose");function di(n,o){n._inFlightCloseRequest._reject(o),n._inFlightCloseRequest=void 0,n._pendingAbortRequest!==void 0&&(n._pendingAbortRequest._reject(o),n._pendingAbortRequest=void 0),Sr(n,o);}u(di,"WritableStreamFinishInFlightCloseWithError");function be(n){return !(n._closeRequest===void 0&&n._inFlightCloseRequest===void 0)}u(be,"WritableStreamCloseQueuedOrInFlight");function hi(n){return !(n._inFlightWriteRequest===void 0&&n._inFlightCloseRequest===void 0)}u(hi,"WritableStreamHasOperationMarkedInFlight");function pi(n){n._inFlightCloseRequest=n._closeRequest,n._closeRequest=void 0;}u(pi,"WritableStreamMarkCloseRequestInFlight");function bi(n){n._inFlightWriteRequest=n._writeRequests.shift();}u(bi,"WritableStreamMarkFirstWriteRequestInFlight");function jt(n){n._closeRequest!==void 0&&(n._closeRequest._reject(n._storedError),n._closeRequest=void 0);const o=n._writer;o!==void 0&&Er(o,n._storedError);}u(jt,"WritableStreamRejectCloseAndClosedPromiseIfNeeded");function Tr(n,o){const a=n._writer;a!==void 0&&o!==n._backpressure&&(o?Ai(a):Br(a)),n._backpressure=o;}u(Tr,"WritableStreamUpdateBackpressure");const Ur=class Ur{constructor(o){if(_e(o,1,"WritableStreamDefaultWriter"),Mn(o,"First parameter"),Qe(o))throw new TypeError("This stream has already been locked for exclusive writing by another writer");this._ownerWritableStream=o,o._writer=this;const a=o._state;if(a==="writable")!be(o)&&o._backpressure?Mt(this):to(this),Dt(this);else if(a==="erroring")Ar(this,o._storedError),Dt(this);else if(a==="closed")to(this),vi(this);else {const p=o._storedError;Ar(this,p),Xn(this,p);}}get closed(){return je(this)?this._closedPromise:C(Ie("closed"))}get desiredSize(){if(!je(this))throw Ie("desiredSize");if(this._ownerWritableStream===void 0)throw dt("desiredSize");return _i(this)}get ready(){return je(this)?this._readyPromise:C(Ie("ready"))}abort(o=void 0){return je(this)?this._ownerWritableStream===void 0?C(dt("abort")):mi(this,o):C(Ie("abort"))}close(){if(!je(this))return C(Ie("close"));const o=this._ownerWritableStream;return o===void 0?C(dt("close")):be(o)?C(new TypeError("Cannot close an already-closing stream")):Hn(this)}releaseLock(){if(!je(this))throw Ie("releaseLock");this._ownerWritableStream!==void 0&&Qn(this);}write(o=void 0){return je(this)?this._ownerWritableStream===void 0?C(dt("write to")):Gn(this,o):C(Ie("write"))}};u(Ur,"WritableStreamDefaultWriter");let se=Ur;Object.defineProperties(se.prototype,{abort:{enumerable:!0},close:{enumerable:!0},releaseLock:{enumerable:!0},write:{enumerable:!0},closed:{enumerable:!0},desiredSize:{enumerable:!0},ready:{enumerable:!0}}),R(se.prototype.abort,"abort"),R(se.prototype.close,"close"),R(se.prototype.releaseLock,"releaseLock"),R(se.prototype.write,"write"),typeof b.toStringTag=="symbol"&&Object.defineProperty(se.prototype,b.toStringTag,{value:"WritableStreamDefaultWriter",configurable:!0});function je(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_ownerWritableStream")?!1:n instanceof se}u(je,"IsWritableStreamDefaultWriter");function mi(n,o){const a=n._ownerWritableStream;return Ft(a,o)}u(mi,"WritableStreamDefaultWriterAbort");function Hn(n){const o=n._ownerWritableStream;return Nn(o)}u(Hn,"WritableStreamDefaultWriterClose");function yi(n){const o=n._ownerWritableStream,a=o._state;return be(o)||a==="closed"?A(void 0):a==="errored"?C(o._storedError):Hn(n)}u(yi,"WritableStreamDefaultWriterCloseWithErrorPropagation");function gi(n,o){n._closedPromiseState==="pending"?Er(n,o):Ei(n,o);}u(gi,"WritableStreamDefaultWriterEnsureClosedPromiseRejected");function Vn(n,o){n._readyPromiseState==="pending"?ro(n,o):Bi(n,o);}u(Vn,"WritableStreamDefaultWriterEnsureReadyPromiseRejected");function _i(n){const o=n._ownerWritableStream,a=o._state;return a==="errored"||a==="erroring"?null:a==="closed"?0:Kn(o._writableStreamController)}u(_i,"WritableStreamDefaultWriterGetDesiredSize");function Qn(n){const o=n._ownerWritableStream,a=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");Vn(n,a),gi(n,a),o._writer=void 0,n._ownerWritableStream=void 0;}u(Qn,"WritableStreamDefaultWriterRelease");function Gn(n,o){const a=n._ownerWritableStream,p=a._writableStreamController,y=Ri(p,o);if(a!==n._ownerWritableStream)return C(dt("write to"));const _=a._state;if(_==="errored")return C(a._storedError);if(be(a)||_==="closed")return C(new TypeError("The stream is closing or closed and cannot be written to"));if(_==="erroring")return C(a._storedError);const w=ui(a);return Ti(p,o,y),w}u(Gn,"WritableStreamDefaultWriterWrite");const Yn={},Nr=class Nr{constructor(){throw new TypeError("Illegal constructor")}get abortReason(){if(!Cr(this))throw vr("abortReason");return this._abortReason}get signal(){if(!Cr(this))throw vr("signal");if(this._abortController===void 0)throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");return this._abortController.signal}error(o=void 0){if(!Cr(this))throw vr("error");this._controlledWritableStream._state==="writable"&&Jn(this,o);}[nn](o){const a=this._abortAlgorithm(o);return It(this),a}[on](){Ae(this);}};u(Nr,"WritableStreamDefaultController");let Be=Nr;Object.defineProperties(Be.prototype,{abortReason:{enumerable:!0},signal:{enumerable:!0},error:{enumerable:!0}}),typeof b.toStringTag=="symbol"&&Object.defineProperty(Be.prototype,b.toStringTag,{value:"WritableStreamDefaultController",configurable:!0});function Cr(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledWritableStream")?!1:n instanceof Be}u(Cr,"IsWritableStreamDefaultController");function Zn(n,o,a,p,y,_,w,P){o._controlledWritableStream=n,n._writableStreamController=o,o._queue=void 0,o._queueTotalSize=void 0,Ae(o),o._abortReason=void 0,o._abortController=si(),o._started=!1,o._strategySizeAlgorithm=P,o._strategyHWM=w,o._writeAlgorithm=p,o._closeAlgorithm=y,o._abortAlgorithm=_;const k=Pr(o);Tr(n,k);const v=a(),W=A(v);$(W,()=>(o._started=!0,Lt(o),null),O=>(o._started=!0,Sr(n,O),null));}u(Zn,"SetUpWritableStreamDefaultController");function Si(n,o,a,p){const y=Object.create(Be.prototype);let _,w,P,k;o.start!==void 0?_=u(()=>o.start(y),"startAlgorithm"):_=u(()=>{},"startAlgorithm"),o.write!==void 0?w=u(v=>o.write(v,y),"writeAlgorithm"):w=u(()=>A(void 0),"writeAlgorithm"),o.close!==void 0?P=u(()=>o.close(),"closeAlgorithm"):P=u(()=>A(void 0),"closeAlgorithm"),o.abort!==void 0?k=u(v=>o.abort(v),"abortAlgorithm"):k=u(()=>A(void 0),"abortAlgorithm"),Zn(n,y,_,w,P,k,a,p);}u(Si,"SetUpWritableStreamDefaultControllerFromUnderlyingSink");function It(n){n._writeAlgorithm=void 0,n._closeAlgorithm=void 0,n._abortAlgorithm=void 0,n._strategySizeAlgorithm=void 0;}u(It,"WritableStreamDefaultControllerClearAlgorithms");function wi(n){dr(n,Yn,0),Lt(n);}u(wi,"WritableStreamDefaultControllerClose");function Ri(n,o){try{return n._strategySizeAlgorithm(o)}catch(a){return ct(n,a),1}}u(Ri,"WritableStreamDefaultControllerGetChunkSize");function Kn(n){return n._strategyHWM-n._queueTotalSize}u(Kn,"WritableStreamDefaultControllerGetDesiredSize");function Ti(n,o,a){try{dr(n,o,a);}catch(y){ct(n,y);return}const p=n._controlledWritableStream;if(!be(p)&&p._state==="writable"){const y=Pr(n);Tr(p,y);}Lt(n);}u(Ti,"WritableStreamDefaultControllerWrite");function Lt(n){const o=n._controlledWritableStream;if(!n._started||o._inFlightWriteRequest!==void 0)return;if(o._state==="erroring"){Rr(o);return}if(n._queue.length===0)return;const p=Io(n);p===Yn?Ci(n):Pi(n,p);}u(Lt,"WritableStreamDefaultControllerAdvanceQueueIfNeeded");function ct(n,o){n._controlledWritableStream._state==="writable"&&Jn(n,o);}u(ct,"WritableStreamDefaultControllerErrorIfNeeded");function Ci(n){const o=n._controlledWritableStream;pi(o),cr(n);const a=n._closeAlgorithm();It(n),$(a,()=>(ci(o),null),p=>(di(o,p),null));}u(Ci,"WritableStreamDefaultControllerProcessClose");function Pi(n,o){const a=n._controlledWritableStream;bi(a);const p=n._writeAlgorithm(o);$(p,()=>{li(a);const y=a._state;if(cr(n),!be(a)&&y==="writable"){const _=Pr(n);Tr(a,_);}return Lt(n),null},y=>(a._state==="writable"&&It(n),fi(a,y),null));}u(Pi,"WritableStreamDefaultControllerProcessWrite");function Pr(n){return Kn(n)<=0}u(Pr,"WritableStreamDefaultControllerGetBackpressure");function Jn(n,o){const a=n._controlledWritableStream;It(n),wr(a,o);}u(Jn,"WritableStreamDefaultControllerError");function $t(n){return new TypeError(`WritableStream.prototype.${n} can only be used on a WritableStream`)}u($t,"streamBrandCheckException$2");function vr(n){return new TypeError(`WritableStreamDefaultController.prototype.${n} can only be used on a WritableStreamDefaultController`)}u(vr,"defaultControllerBrandCheckException$2");function Ie(n){return new TypeError(`WritableStreamDefaultWriter.prototype.${n} can only be used on a WritableStreamDefaultWriter`)}u(Ie,"defaultWriterBrandCheckException");function dt(n){return new TypeError("Cannot "+n+" a stream using a released writer")}u(dt,"defaultWriterLockException");function Dt(n){n._closedPromise=j((o,a)=>{n._closedPromise_resolve=o,n._closedPromise_reject=a,n._closedPromiseState="pending";});}u(Dt,"defaultWriterClosedPromiseInitialize");function Xn(n,o){Dt(n),Er(n,o);}u(Xn,"defaultWriterClosedPromiseInitializeAsRejected");function vi(n){Dt(n),eo(n);}u(vi,"defaultWriterClosedPromiseInitializeAsResolved");function Er(n,o){n._closedPromise_reject!==void 0&&(Pe(n._closedPromise),n._closedPromise_reject(o),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0,n._closedPromiseState="rejected");}u(Er,"defaultWriterClosedPromiseReject");function Ei(n,o){Xn(n,o);}u(Ei,"defaultWriterClosedPromiseResetToRejected");function eo(n){n._closedPromise_resolve!==void 0&&(n._closedPromise_resolve(void 0),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0,n._closedPromiseState="resolved");}u(eo,"defaultWriterClosedPromiseResolve");function Mt(n){n._readyPromise=j((o,a)=>{n._readyPromise_resolve=o,n._readyPromise_reject=a;}),n._readyPromiseState="pending";}u(Mt,"defaultWriterReadyPromiseInitialize");function Ar(n,o){Mt(n),ro(n,o);}u(Ar,"defaultWriterReadyPromiseInitializeAsRejected");function to(n){Mt(n),Br(n);}u(to,"defaultWriterReadyPromiseInitializeAsResolved");function ro(n,o){n._readyPromise_reject!==void 0&&(Pe(n._readyPromise),n._readyPromise_reject(o),n._readyPromise_resolve=void 0,n._readyPromise_reject=void 0,n._readyPromiseState="rejected");}u(ro,"defaultWriterReadyPromiseReject");function Ai(n){Mt(n);}u(Ai,"defaultWriterReadyPromiseReset");function Bi(n,o){Ar(n,o);}u(Bi,"defaultWriterReadyPromiseResetToRejected");function Br(n){n._readyPromise_resolve!==void 0&&(n._readyPromise_resolve(void 0),n._readyPromise_resolve=void 0,n._readyPromise_reject=void 0,n._readyPromiseState="fulfilled");}u(Br,"defaultWriterReadyPromiseResolve");function qi(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof _commonjsHelpers.commonjsGlobal<"u")return _commonjsHelpers.commonjsGlobal}u(qi,"getGlobals");const qr=qi();function ki(n){if(!(typeof n=="function"||typeof n=="object")||n.name!=="DOMException")return !1;try{return new n,!0}catch{return !1}}u(ki,"isDOMExceptionConstructor");function Wi(){const n=qr?.DOMException;return ki(n)?n:void 0}u(Wi,"getFromGlobal");function Oi(){const n=u(function(a,p){this.message=a||"",this.name=p||"Error",Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor);},"DOMException");return R(n,"DOMException"),n.prototype=Object.create(Error.prototype),Object.defineProperty(n.prototype,"constructor",{value:n,writable:!0,configurable:!0}),n}u(Oi,"createPolyfill");const zi=Wi()||Oi();function no(n,o,a,p,y,_){const w=Ne(n),P=xn(o);n._disturbed=!0;let k=!1,v=A(void 0);return j((W,O)=>{let I;if(_!==void 0){if(I=u(()=>{const E=_.reason!==void 0?_.reason:new zi("Aborted","AbortError"),z=[];p||z.push(()=>o._state==="writable"?Ft(o,E):A(void 0)),y||z.push(()=>n._state==="readable"?le(n,E):A(void 0)),K(()=>Promise.all(z.map(L=>L())),!0,E);},"abortAlgorithm"),_.aborted){I();return}_.addEventListener("abort",I);}function fe(){return j((E,z)=>{function L(X){X?E():q(et(),L,z);}u(L,"next"),L(!1);})}u(fe,"pipeLoop");function et(){return k?A(!0):q(P._readyPromise,()=>j((E,z)=>{st(w,{_chunkSteps:L=>{v=q(Gn(P,L),void 0,g),E(!1);},_closeSteps:()=>E(!0),_errorSteps:z});}))}if(u(et,"pipeStep"),Re(n,w._closedPromise,E=>(p?re(!0,E):K(()=>Ft(o,E),!0,E),null)),Re(o,P._closedPromise,E=>(y?re(!0,E):K(()=>le(n,E),!0,E),null)),Z(n,w._closedPromise,()=>(a?re():K(()=>yi(P)),null)),be(o)||o._state==="closed"){const E=new TypeError("the destination writable stream closed before all data could be piped to it");y?re(!0,E):K(()=>le(n,E),!0,E);}Pe(fe());function We(){const E=v;return q(v,()=>E!==v?We():void 0)}u(We,"waitForWritesToFinish");function Re(E,z,L){E._state==="errored"?L(E._storedError):J(z,L);}u(Re,"isOrBecomesErrored");function Z(E,z,L){E._state==="closed"?L():N(z,L);}u(Z,"isOrBecomesClosed");function K(E,z,L){if(k)return;k=!0,o._state==="writable"&&!be(o)?N(We(),X):X();function X(){return $(E(),()=>Te(z,L),tt=>Te(!0,tt)),null}u(X,"doTheRest");}u(K,"shutdownWithAction");function re(E,z){k||(k=!0,o._state==="writable"&&!be(o)?N(We(),()=>Te(E,z)):Te(E,z));}u(re,"shutdown");function Te(E,z){return Qn(P),ge(w),_!==void 0&&_.removeEventListener("abort",I),E?O(z):W(void 0),null}u(Te,"finalize");})}u(no,"ReadableStreamPipeTo");const Hr=class Hr{constructor(){throw new TypeError("Illegal constructor")}get desiredSize(){if(!xt(this))throw Nt("desiredSize");return kr(this)}close(){if(!xt(this))throw Nt("close");if(!Ye(this))throw new TypeError("The stream is not in a state that permits close");Le(this);}enqueue(o=void 0){if(!xt(this))throw Nt("enqueue");if(!Ye(this))throw new TypeError("The stream is not in a state that permits enqueue");return Ge(this,o)}error(o=void 0){if(!xt(this))throw Nt("error");ue(this,o);}[er](o){Ae(this);const a=this._cancelAlgorithm(o);return Ut(this),a}[tr](o){const a=this._controlledReadableStream;if(this._queue.length>0){const p=cr(this);this._closeRequested&&this._queue.length===0?(Ut(this),bt(a)):ht(this),o._chunkSteps(p);}else dn(a,o),ht(this);}[rr](){}};u(Hr,"ReadableStreamDefaultController");let ae=Hr;Object.defineProperties(ae.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},desiredSize:{enumerable:!0}}),R(ae.prototype.close,"close"),R(ae.prototype.enqueue,"enqueue"),R(ae.prototype.error,"error"),typeof b.toStringTag=="symbol"&&Object.defineProperty(ae.prototype,b.toStringTag,{value:"ReadableStreamDefaultController",configurable:!0});function xt(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledReadableStream")?!1:n instanceof ae}u(xt,"IsReadableStreamDefaultController");function ht(n){if(!oo(n))return;if(n._pulling){n._pullAgain=!0;return}n._pulling=!0;const a=n._pullAlgorithm();$(a,()=>(n._pulling=!1,n._pullAgain&&(n._pullAgain=!1,ht(n)),null),p=>(ue(n,p),null));}u(ht,"ReadableStreamDefaultControllerCallPullIfNeeded");function oo(n){const o=n._controlledReadableStream;return !Ye(n)||!n._started?!1:!!(ke(o)&&Tt(o)>0||kr(n)>0)}u(oo,"ReadableStreamDefaultControllerShouldCallPull");function Ut(n){n._pullAlgorithm=void 0,n._cancelAlgorithm=void 0,n._strategySizeAlgorithm=void 0;}u(Ut,"ReadableStreamDefaultControllerClearAlgorithms");function Le(n){if(!Ye(n))return;const o=n._controlledReadableStream;n._closeRequested=!0,n._queue.length===0&&(Ut(n),bt(o));}u(Le,"ReadableStreamDefaultControllerClose");function Ge(n,o){if(!Ye(n))return;const a=n._controlledReadableStream;if(ke(a)&&Tt(a)>0)fr(a,o,!1);else {let p;try{p=n._strategySizeAlgorithm(o);}catch(y){throw ue(n,y),y}try{dr(n,o,p);}catch(y){throw ue(n,y),y}}ht(n);}u(Ge,"ReadableStreamDefaultControllerEnqueue");function ue(n,o){const a=n._controlledReadableStream;a._state==="readable"&&(Ae(n),Ut(n),uo(a,o));}u(ue,"ReadableStreamDefaultControllerError");function kr(n){const o=n._controlledReadableStream._state;return o==="errored"?null:o==="closed"?0:n._strategyHWM-n._queueTotalSize}u(kr,"ReadableStreamDefaultControllerGetDesiredSize");function Fi(n){return !oo(n)}u(Fi,"ReadableStreamDefaultControllerHasBackpressure");function Ye(n){const o=n._controlledReadableStream._state;return !n._closeRequested&&o==="readable"}u(Ye,"ReadableStreamDefaultControllerCanCloseOrEnqueue");function io(n,o,a,p,y,_,w){o._controlledReadableStream=n,o._queue=void 0,o._queueTotalSize=void 0,Ae(o),o._started=!1,o._closeRequested=!1,o._pullAgain=!1,o._pulling=!1,o._strategySizeAlgorithm=w,o._strategyHWM=_,o._pullAlgorithm=p,o._cancelAlgorithm=y,n._readableStreamController=o;const P=a();$(A(P),()=>(o._started=!0,ht(o),null),k=>(ue(o,k),null));}u(io,"SetUpReadableStreamDefaultController");function ji(n,o,a,p){const y=Object.create(ae.prototype);let _,w,P;o.start!==void 0?_=u(()=>o.start(y),"startAlgorithm"):_=u(()=>{},"startAlgorithm"),o.pull!==void 0?w=u(()=>o.pull(y),"pullAlgorithm"):w=u(()=>A(void 0),"pullAlgorithm"),o.cancel!==void 0?P=u(k=>o.cancel(k),"cancelAlgorithm"):P=u(()=>A(void 0),"cancelAlgorithm"),io(n,y,_,w,P,a,p);}u(ji,"SetUpReadableStreamDefaultControllerFromUnderlyingSource");function Nt(n){return new TypeError(`ReadableStreamDefaultController.prototype.${n} can only be used on a ReadableStreamDefaultController`)}u(Nt,"defaultControllerBrandCheckException$1");function Ii(n,o){return Oe(n._readableStreamController)?$i(n):Li(n)}u(Ii,"ReadableStreamTee");function Li(n,o){const a=Ne(n);let p=!1,y=!1,_=!1,w=!1,P,k,v,W,O;const I=j(Z=>{O=Z;});function fe(){return p?(y=!0,A(void 0)):(p=!0,st(a,{_chunkSteps:K=>{M(()=>{y=!1;const re=K,Te=K;_||Ge(v._readableStreamController,re),w||Ge(W._readableStreamController,Te),p=!1,y&&fe();});},_closeSteps:()=>{p=!1,_||Le(v._readableStreamController),w||Le(W._readableStreamController),(!_||!w)&&O(void 0);},_errorSteps:()=>{p=!1;}}),A(void 0))}u(fe,"pullAlgorithm");function et(Z){if(_=!0,P=Z,w){const K=at([P,k]),re=le(n,K);O(re);}return I}u(et,"cancel1Algorithm");function We(Z){if(w=!0,k=Z,_){const K=at([P,k]),re=le(n,K);O(re);}return I}u(We,"cancel2Algorithm");function Re(){}return u(Re,"startAlgorithm"),v=pt(Re,fe,et),W=pt(Re,fe,We),J(a._closedPromise,Z=>(ue(v._readableStreamController,Z),ue(W._readableStreamController,Z),(!_||!w)&&O(void 0),null)),[v,W]}u(Li,"ReadableStreamDefaultTee");function $i(n){let o=Ne(n),a=!1,p=!1,y=!1,_=!1,w=!1,P,k,v,W,O;const I=j(E=>{O=E;});function fe(E){J(E._closedPromise,z=>(E!==o||(te(v._readableStreamController,z),te(W._readableStreamController,z),(!_||!w)&&O(void 0)),null));}u(fe,"forwardReaderError");function et(){Fe(o)&&(ge(o),o=Ne(n),fe(o)),st(o,{_chunkSteps:z=>{M(()=>{p=!1,y=!1;const L=z;let X=z;if(!_&&!w)try{X=Tn(z);}catch(tt){te(v._readableStreamController,tt),te(W._readableStreamController,tt),O(le(n,tt));return}_||Bt(v._readableStreamController,L),w||Bt(W._readableStreamController,X),a=!1,p?Re():y&&Z();});},_closeSteps:()=>{a=!1,_||ut(v._readableStreamController),w||ut(W._readableStreamController),v._readableStreamController._pendingPullIntos.length>0&&qt(v._readableStreamController,0),W._readableStreamController._pendingPullIntos.length>0&&qt(W._readableStreamController,0),(!_||!w)&&O(void 0);},_errorSteps:()=>{a=!1;}});}u(et,"pullWithDefaultReader");function We(E,z){ve(o)&&(ge(o),o=jn(n),fe(o));const L=z?W:v,X=z?v:W;$n(o,E,1,{_chunkSteps:rt=>{M(()=>{p=!1,y=!1;const nt=z?w:_;if(z?_:w)nt||kt(L._readableStreamController,rt);else {let Ro;try{Ro=Tn(rt);}catch(Kr){te(L._readableStreamController,Kr),te(X._readableStreamController,Kr),O(le(n,Kr));return}nt||kt(L._readableStreamController,rt),Bt(X._readableStreamController,Ro);}a=!1,p?Re():y&&Z();});},_closeSteps:rt=>{a=!1;const nt=z?w:_,Yt=z?_:w;nt||ut(L._readableStreamController),Yt||ut(X._readableStreamController),rt!==void 0&&(nt||kt(L._readableStreamController,rt),!Yt&&X._readableStreamController._pendingPullIntos.length>0&&qt(X._readableStreamController,0)),(!nt||!Yt)&&O(void 0);},_errorSteps:()=>{a=!1;}});}u(We,"pullWithBYOBReader");function Re(){if(a)return p=!0,A(void 0);a=!0;const E=yr(v._readableStreamController);return E===null?et():We(E._view,!1),A(void 0)}u(Re,"pull1Algorithm");function Z(){if(a)return y=!0,A(void 0);a=!0;const E=yr(W._readableStreamController);return E===null?et():We(E._view,!0),A(void 0)}u(Z,"pull2Algorithm");function K(E){if(_=!0,P=E,w){const z=at([P,k]),L=le(n,z);O(L);}return I}u(K,"cancel1Algorithm");function re(E){if(w=!0,k=E,_){const z=at([P,k]),L=le(n,z);O(L);}return I}u(re,"cancel2Algorithm");function Te(){}return u(Te,"startAlgorithm"),v=ao(Te,Re,K),W=ao(Te,Z,re),fe(o),[v,W]}u($i,"ReadableByteStreamTee");function Di(n){return S(n)&&typeof n.getReader<"u"}u(Di,"isReadableStreamLike");function Mi(n){return Di(n)?Ui(n.getReader()):xi(n)}u(Mi,"ReadableStreamFrom");function xi(n){let o;const a=Rn(n,"async"),p=g;function y(){let w;try{w=Oo(a);}catch(k){return C(k)}const P=A(w);return G(P,k=>{if(!S(k))throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object");if(zo(k))Le(o._readableStreamController);else {const W=Fo(k);Ge(o._readableStreamController,W);}})}u(y,"pullAlgorithm");function _(w){const P=a.iterator;let k;try{k=vt(P,"return");}catch(O){return C(O)}if(k===void 0)return A(void 0);let v;try{v=H(k,P,[w]);}catch(O){return C(O)}const W=A(v);return G(W,O=>{if(!S(O))throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object")})}return u(_,"cancelAlgorithm"),o=pt(p,y,_,0),o}u(xi,"ReadableStreamFromIterable");function Ui(n){let o;const a=g;function p(){let _;try{_=n.read();}catch(w){return C(w)}return G(_,w=>{if(!S(w))throw new TypeError("The promise returned by the reader.read() method must fulfill with an object");if(w.done)Le(o._readableStreamController);else {const P=w.value;Ge(o._readableStreamController,P);}})}u(p,"pullAlgorithm");function y(_){try{return A(n.cancel(_))}catch(w){return C(w)}}return u(y,"cancelAlgorithm"),o=pt(a,p,y,0),o}u(Ui,"ReadableStreamFromDefaultReader");function Ni(n,o){ce(n,o);const a=n,p=a?.autoAllocateChunkSize,y=a?.cancel,_=a?.pull,w=a?.start,P=a?.type;return {autoAllocateChunkSize:p===void 0?void 0:ur(p,`${o} has member 'autoAllocateChunkSize' that`),cancel:y===void 0?void 0:Hi(y,a,`${o} has member 'cancel' that`),pull:_===void 0?void 0:Vi(_,a,`${o} has member 'pull' that`),start:w===void 0?void 0:Qi(w,a,`${o} has member 'start' that`),type:P===void 0?void 0:Gi(P,`${o} has member 'type' that`)}}u(Ni,"convertUnderlyingDefaultOrByteSource");function Hi(n,o,a){return ee(n,a),p=>U(n,o,[p])}u(Hi,"convertUnderlyingSourceCancelCallback");function Vi(n,o,a){return ee(n,a),p=>U(n,o,[p])}u(Vi,"convertUnderlyingSourcePullCallback");function Qi(n,o,a){return ee(n,a),p=>H(n,o,[p])}u(Qi,"convertUnderlyingSourceStartCallback");function Gi(n,o){if(n=`${n}`,n!=="bytes")throw new TypeError(`${o} '${n}' is not a valid enumeration value for ReadableStreamType`);return n}u(Gi,"convertReadableStreamType");function Yi(n,o){return ce(n,o),{preventCancel:!!n?.preventCancel}}u(Yi,"convertIteratorOptions");function so(n,o){ce(n,o);const a=n?.preventAbort,p=n?.preventCancel,y=n?.preventClose,_=n?.signal;return _!==void 0&&Zi(_,`${o} has member 'signal' that`),{preventAbort:!!a,preventCancel:!!p,preventClose:!!y,signal:_}}u(so,"convertPipeOptions");function Zi(n,o){if(!oi(n))throw new TypeError(`${o} is not an AbortSignal.`)}u(Zi,"assertAbortSignal");function Ki(n,o){ce(n,o);const a=n?.readable;sr(a,"readable","ReadableWritablePair"),lr(a,`${o} has member 'readable' that`);const p=n?.writable;return sr(p,"writable","ReadableWritablePair"),Mn(p,`${o} has member 'writable' that`),{readable:a,writable:p}}u(Ki,"convertReadableWritablePair");const Vr=class Vr{constructor(o={},a={}){o===void 0?o=null:fn(o,"First parameter");const p=zt(a,"Second parameter"),y=Ni(o,"First parameter");if(Wr(this),y.type==="bytes"){if(p.size!==void 0)throw new RangeError("The strategy for a byte stream cannot have a size function");const _=ft(p,0);Ho(this,y,_);}else {const _=Ot(p),w=ft(p,1);ji(this,y,w,_);}}get locked(){if(!qe(this))throw $e("locked");return ke(this)}cancel(o=void 0){return qe(this)?ke(this)?C(new TypeError("Cannot cancel a stream that already has a reader")):le(this,o):C($e("cancel"))}getReader(o=void 0){if(!qe(this))throw $e("getReader");return Qo(o,"First parameter").mode===void 0?Ne(this):jn(this)}pipeThrough(o,a={}){if(!qe(this))throw $e("pipeThrough");_e(o,1,"pipeThrough");const p=Ki(o,"First parameter"),y=so(a,"Second parameter");if(ke(this))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");if(Qe(p.writable))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");const _=no(this,p.writable,y.preventClose,y.preventAbort,y.preventCancel,y.signal);return Pe(_),p.readable}pipeTo(o,a={}){if(!qe(this))return C($e("pipeTo"));if(o===void 0)return C("Parameter 1 is required in 'pipeTo'.");if(!Ve(o))return C(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));let p;try{p=so(a,"Second parameter");}catch(y){return C(y)}return ke(this)?C(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")):Qe(o)?C(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")):no(this,o,p.preventClose,p.preventAbort,p.preventCancel,p.signal)}tee(){if(!qe(this))throw $e("tee");const o=Ii(this);return at(o)}values(o=void 0){if(!qe(this))throw $e("values");const a=Yi(o,"First parameter");return ko(this,a.preventCancel)}static from(o){return Mi(o)}};u(Vr,"ReadableStream");let V=Vr;Object.defineProperties(V,{from:{enumerable:!0}}),Object.defineProperties(V.prototype,{cancel:{enumerable:!0},getReader:{enumerable:!0},pipeThrough:{enumerable:!0},pipeTo:{enumerable:!0},tee:{enumerable:!0},values:{enumerable:!0},locked:{enumerable:!0}}),R(V.from,"from"),R(V.prototype.cancel,"cancel"),R(V.prototype.getReader,"getReader"),R(V.prototype.pipeThrough,"pipeThrough"),R(V.prototype.pipeTo,"pipeTo"),R(V.prototype.tee,"tee"),R(V.prototype.values,"values"),typeof b.toStringTag=="symbol"&&Object.defineProperty(V.prototype,b.toStringTag,{value:"ReadableStream",configurable:!0}),typeof b.asyncIterator=="symbol"&&Object.defineProperty(V.prototype,b.asyncIterator,{value:V.prototype.values,writable:!0,configurable:!0});function pt(n,o,a,p=1,y=()=>1){const _=Object.create(V.prototype);Wr(_);const w=Object.create(ae.prototype);return io(_,w,n,o,a,p,y),_}u(pt,"CreateReadableStream");function ao(n,o,a){const p=Object.create(V.prototype);Wr(p);const y=Object.create(ie.prototype);return Fn(p,y,n,o,a,0,void 0),p}u(ao,"CreateReadableByteStream");function Wr(n){n._state="readable",n._reader=void 0,n._storedError=void 0,n._disturbed=!1;}u(Wr,"InitializeReadableStream");function qe(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_readableStreamController")?!1:n instanceof V}u(qe,"IsReadableStream");function ke(n){return n._reader!==void 0}u(ke,"IsReadableStreamLocked");function le(n,o){if(n._disturbed=!0,n._state==="closed")return A(void 0);if(n._state==="errored")return C(n._storedError);bt(n);const a=n._reader;if(a!==void 0&&Fe(a)){const y=a._readIntoRequests;a._readIntoRequests=new Y,y.forEach(_=>{_._closeSteps(void 0);});}const p=n._readableStreamController[er](o);return G(p,g)}u(le,"ReadableStreamCancel");function bt(n){n._state="closed";const o=n._reader;if(o!==void 0&&(un(o),ve(o))){const a=o._readRequests;o._readRequests=new Y,a.forEach(p=>{p._closeSteps();});}}u(bt,"ReadableStreamClose");function uo(n,o){n._state="errored",n._storedError=o;const a=n._reader;a!==void 0&&(ir(a,o),ve(a)?pn(a,o):Dn(a,o));}u(uo,"ReadableStreamError");function $e(n){return new TypeError(`ReadableStream.prototype.${n} can only be used on a ReadableStream`)}u($e,"streamBrandCheckException$1");function lo(n,o){ce(n,o);const a=n?.highWaterMark;return sr(a,"highWaterMark","QueuingStrategyInit"),{highWaterMark:ar(a)}}u(lo,"convertQueuingStrategyInit");const fo=u(n=>n.byteLength,"byteLengthSizeFunction");R(fo,"size");const Qr=class Qr{constructor(o){_e(o,1,"ByteLengthQueuingStrategy"),o=lo(o,"First parameter"),this._byteLengthQueuingStrategyHighWaterMark=o.highWaterMark;}get highWaterMark(){if(!ho(this))throw co("highWaterMark");return this._byteLengthQueuingStrategyHighWaterMark}get size(){if(!ho(this))throw co("size");return fo}};u(Qr,"ByteLengthQueuingStrategy");let Ze=Qr;Object.defineProperties(Ze.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),typeof b.toStringTag=="symbol"&&Object.defineProperty(Ze.prototype,b.toStringTag,{value:"ByteLengthQueuingStrategy",configurable:!0});function co(n){return new TypeError(`ByteLengthQueuingStrategy.prototype.${n} can only be used on a ByteLengthQueuingStrategy`)}u(co,"byteLengthBrandCheckException");function ho(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_byteLengthQueuingStrategyHighWaterMark")?!1:n instanceof Ze}u(ho,"IsByteLengthQueuingStrategy");const po=u(()=>1,"countSizeFunction");R(po,"size");const Gr=class Gr{constructor(o){_e(o,1,"CountQueuingStrategy"),o=lo(o,"First parameter"),this._countQueuingStrategyHighWaterMark=o.highWaterMark;}get highWaterMark(){if(!mo(this))throw bo("highWaterMark");return this._countQueuingStrategyHighWaterMark}get size(){if(!mo(this))throw bo("size");return po}};u(Gr,"CountQueuingStrategy");let Ke=Gr;Object.defineProperties(Ke.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),typeof b.toStringTag=="symbol"&&Object.defineProperty(Ke.prototype,b.toStringTag,{value:"CountQueuingStrategy",configurable:!0});function bo(n){return new TypeError(`CountQueuingStrategy.prototype.${n} can only be used on a CountQueuingStrategy`)}u(bo,"countBrandCheckException");function mo(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_countQueuingStrategyHighWaterMark")?!1:n instanceof Ke}u(mo,"IsCountQueuingStrategy");function Ji(n,o){ce(n,o);const a=n?.cancel,p=n?.flush,y=n?.readableType,_=n?.start,w=n?.transform,P=n?.writableType;return {cancel:a===void 0?void 0:rs(a,n,`${o} has member 'cancel' that`),flush:p===void 0?void 0:Xi(p,n,`${o} has member 'flush' that`),readableType:y,start:_===void 0?void 0:es(_,n,`${o} has member 'start' that`),transform:w===void 0?void 0:ts(w,n,`${o} has member 'transform' that`),writableType:P}}u(Ji,"convertTransformer");function Xi(n,o,a){return ee(n,a),p=>U(n,o,[p])}u(Xi,"convertTransformerFlushCallback");function es(n,o,a){return ee(n,a),p=>H(n,o,[p])}u(es,"convertTransformerStartCallback");function ts(n,o,a){return ee(n,a),(p,y)=>U(n,o,[p,y])}u(ts,"convertTransformerTransformCallback");function rs(n,o,a){return ee(n,a),p=>U(n,o,[p])}u(rs,"convertTransformerCancelCallback");const Yr=class Yr{constructor(o={},a={},p={}){o===void 0&&(o=null);const y=zt(a,"Second parameter"),_=zt(p,"Third parameter"),w=Ji(o,"First parameter");if(w.readableType!==void 0)throw new RangeError("Invalid readableType specified");if(w.writableType!==void 0)throw new RangeError("Invalid writableType specified");const P=ft(_,0),k=Ot(_),v=ft(y,1),W=Ot(y);let O;const I=j(fe=>{O=fe;});ns(this,I,v,W,P,k),is(this,w),w.start!==void 0?O(w.start(this._transformStreamController)):O(void 0);}get readable(){if(!yo(this))throw wo("readable");return this._readable}get writable(){if(!yo(this))throw wo("writable");return this._writable}};u(Yr,"TransformStream");let Je=Yr;Object.defineProperties(Je.prototype,{readable:{enumerable:!0},writable:{enumerable:!0}}),typeof b.toStringTag=="symbol"&&Object.defineProperty(Je.prototype,b.toStringTag,{value:"TransformStream",configurable:!0});function ns(n,o,a,p,y,_){function w(){return o}u(w,"startAlgorithm");function P(I){return us(n,I)}u(P,"writeAlgorithm");function k(I){return ls(n,I)}u(k,"abortAlgorithm");function v(){return fs(n)}u(v,"closeAlgorithm"),n._writable=ai(w,P,v,k,a,p);function W(){return cs(n)}u(W,"pullAlgorithm");function O(I){return ds(n,I)}u(O,"cancelAlgorithm"),n._readable=pt(w,W,O,y,_),n._backpressure=void 0,n._backpressureChangePromise=void 0,n._backpressureChangePromise_resolve=void 0,Ht(n,!0),n._transformStreamController=void 0;}u(ns,"InitializeTransformStream");function yo(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_transformStreamController")?!1:n instanceof Je}u(yo,"IsTransformStream");function go(n,o){ue(n._readable._readableStreamController,o),Or(n,o);}u(go,"TransformStreamError");function Or(n,o){Qt(n._transformStreamController),ct(n._writable._writableStreamController,o),zr(n);}u(Or,"TransformStreamErrorWritableAndUnblockWrite");function zr(n){n._backpressure&&Ht(n,!1);}u(zr,"TransformStreamUnblockWrite");function Ht(n,o){n._backpressureChangePromise!==void 0&&n._backpressureChangePromise_resolve(),n._backpressureChangePromise=j(a=>{n._backpressureChangePromise_resolve=a;}),n._backpressure=o;}u(Ht,"TransformStreamSetBackpressure");const Zr=class Zr{constructor(){throw new TypeError("Illegal constructor")}get desiredSize(){if(!Vt(this))throw Gt("desiredSize");const o=this._controlledTransformStream._readable._readableStreamController;return kr(o)}enqueue(o=void 0){if(!Vt(this))throw Gt("enqueue");_o(this,o);}error(o=void 0){if(!Vt(this))throw Gt("error");ss(this,o);}terminate(){if(!Vt(this))throw Gt("terminate");as(this);}};u(Zr,"TransformStreamDefaultController");let me=Zr;Object.defineProperties(me.prototype,{enqueue:{enumerable:!0},error:{enumerable:!0},terminate:{enumerable:!0},desiredSize:{enumerable:!0}}),R(me.prototype.enqueue,"enqueue"),R(me.prototype.error,"error"),R(me.prototype.terminate,"terminate"),typeof b.toStringTag=="symbol"&&Object.defineProperty(me.prototype,b.toStringTag,{value:"TransformStreamDefaultController",configurable:!0});function Vt(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledTransformStream")?!1:n instanceof me}u(Vt,"IsTransformStreamDefaultController");function os(n,o,a,p,y){o._controlledTransformStream=n,n._transformStreamController=o,o._transformAlgorithm=a,o._flushAlgorithm=p,o._cancelAlgorithm=y,o._finishPromise=void 0,o._finishPromise_resolve=void 0,o._finishPromise_reject=void 0;}u(os,"SetUpTransformStreamDefaultController");function is(n,o){const a=Object.create(me.prototype);let p,y,_;o.transform!==void 0?p=u(w=>o.transform(w,a),"transformAlgorithm"):p=u(w=>{try{return _o(a,w),A(void 0)}catch(P){return C(P)}},"transformAlgorithm"),o.flush!==void 0?y=u(()=>o.flush(a),"flushAlgorithm"):y=u(()=>A(void 0),"flushAlgorithm"),o.cancel!==void 0?_=u(w=>o.cancel(w),"cancelAlgorithm"):_=u(()=>A(void 0),"cancelAlgorithm"),os(n,a,p,y,_);}u(is,"SetUpTransformStreamDefaultControllerFromTransformer");function Qt(n){n._transformAlgorithm=void 0,n._flushAlgorithm=void 0,n._cancelAlgorithm=void 0;}u(Qt,"TransformStreamDefaultControllerClearAlgorithms");function _o(n,o){const a=n._controlledTransformStream,p=a._readable._readableStreamController;if(!Ye(p))throw new TypeError("Readable side is not in a state that permits enqueue");try{Ge(p,o);}catch(_){throw Or(a,_),a._readable._storedError}Fi(p)!==a._backpressure&&Ht(a,!0);}u(_o,"TransformStreamDefaultControllerEnqueue");function ss(n,o){go(n._controlledTransformStream,o);}u(ss,"TransformStreamDefaultControllerError");function So(n,o){const a=n._transformAlgorithm(o);return G(a,void 0,p=>{throw go(n._controlledTransformStream,p),p})}u(So,"TransformStreamDefaultControllerPerformTransform");function as(n){const o=n._controlledTransformStream,a=o._readable._readableStreamController;Le(a);const p=new TypeError("TransformStream terminated");Or(o,p);}u(as,"TransformStreamDefaultControllerTerminate");function us(n,o){const a=n._transformStreamController;if(n._backpressure){const p=n._backpressureChangePromise;return G(p,()=>{const y=n._writable;if(y._state==="erroring")throw y._storedError;return So(a,o)})}return So(a,o)}u(us,"TransformStreamDefaultSinkWriteAlgorithm");function ls(n,o){const a=n._transformStreamController;if(a._finishPromise!==void 0)return a._finishPromise;const p=n._readable;a._finishPromise=j((_,w)=>{a._finishPromise_resolve=_,a._finishPromise_reject=w;});const y=a._cancelAlgorithm(o);return Qt(a),$(y,()=>(p._state==="errored"?Xe(a,p._storedError):(ue(p._readableStreamController,o),Fr(a)),null),_=>(ue(p._readableStreamController,_),Xe(a,_),null)),a._finishPromise}u(ls,"TransformStreamDefaultSinkAbortAlgorithm");function fs(n){const o=n._transformStreamController;if(o._finishPromise!==void 0)return o._finishPromise;const a=n._readable;o._finishPromise=j((y,_)=>{o._finishPromise_resolve=y,o._finishPromise_reject=_;});const p=o._flushAlgorithm();return Qt(o),$(p,()=>(a._state==="errored"?Xe(o,a._storedError):(Le(a._readableStreamController),Fr(o)),null),y=>(ue(a._readableStreamController,y),Xe(o,y),null)),o._finishPromise}u(fs,"TransformStreamDefaultSinkCloseAlgorithm");function cs(n){return Ht(n,!1),n._backpressureChangePromise}u(cs,"TransformStreamDefaultSourcePullAlgorithm");function ds(n,o){const a=n._transformStreamController;if(a._finishPromise!==void 0)return a._finishPromise;const p=n._writable;a._finishPromise=j((_,w)=>{a._finishPromise_resolve=_,a._finishPromise_reject=w;});const y=a._cancelAlgorithm(o);return Qt(a),$(y,()=>(p._state==="errored"?Xe(a,p._storedError):(ct(p._writableStreamController,o),zr(n),Fr(a)),null),_=>(ct(p._writableStreamController,_),zr(n),Xe(a,_),null)),a._finishPromise}u(ds,"TransformStreamDefaultSourceCancelAlgorithm");function Gt(n){return new TypeError(`TransformStreamDefaultController.prototype.${n} can only be used on a TransformStreamDefaultController`)}u(Gt,"defaultControllerBrandCheckException");function Fr(n){n._finishPromise_resolve!==void 0&&(n._finishPromise_resolve(),n._finishPromise_resolve=void 0,n._finishPromise_reject=void 0);}u(Fr,"defaultControllerFinishPromiseResolve");function Xe(n,o){n._finishPromise_reject!==void 0&&(Pe(n._finishPromise),n._finishPromise_reject(o),n._finishPromise_resolve=void 0,n._finishPromise_reject=void 0);}u(Xe,"defaultControllerFinishPromiseReject");function wo(n){return new TypeError(`TransformStream.prototype.${n} can only be used on a TransformStream`)}u(wo,"streamBrandCheckException"),d.ByteLengthQueuingStrategy=Ze,d.CountQueuingStrategy=Ke,d.ReadableByteStreamController=ie,d.ReadableStream=V,d.ReadableStreamBYOBReader=he,d.ReadableStreamBYOBRequest=we,d.ReadableStreamDefaultController=ae,d.ReadableStreamDefaultReader=de,d.TransformStream=Je,d.TransformStreamDefaultController=me,d.WritableStream=pe,d.WritableStreamDefaultController=Be,d.WritableStreamDefaultWriter=se;});}(ponyfill_es2018,ponyfill_es2018.exports)),ponyfill_es2018.exports}u(requirePonyfill_es2018,"requirePonyfill_es2018");const POOL_SIZE$1=65536;if(!globalThis.ReadableStream)try{const c=require("node:process"),{emitWarning:l}=c;try{c.emitWarning=()=>{},Object.assign(globalThis,require("node:stream/web")),c.emitWarning=l;}catch(d){throw c.emitWarning=l,d}}catch{Object.assign(globalThis,requirePonyfill_es2018());}try{const{Blob:c}=require("buffer");c&&!c.prototype.stream&&(c.prototype.stream=u(function(d){let b=0;const g=this;return new ReadableStream({type:"bytes",async pull(S){const R=await g.slice(b,Math.min(g.size,b+POOL_SIZE$1)).arrayBuffer();b+=R.byteLength,S.enqueue(new Uint8Array(R)),b===g.size&&S.close();}})},"name"));}catch{}/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */const POOL_SIZE=65536;async function*toIterator(c,l=!0){for(const d of c)if("stream"in d)yield*d.stream();else if(ArrayBuffer.isView(d))if(l){let b=d.byteOffset;const g=d.byteOffset+d.byteLength;for(;b!==g;){const S=Math.min(g-b,POOL_SIZE),T=d.buffer.slice(b,b+S);b+=T.byteLength,yield new Uint8Array(T);}}else yield d;else {let b=0,g=d;for(;b!==g.size;){const T=await g.slice(b,Math.min(g.size,b+POOL_SIZE)).arrayBuffer();b+=T.byteLength,yield new Uint8Array(T);}}}u(toIterator,"toIterator");const _Blob=(Ue$1=class{constructor(l=[],d={}){ye$1(this,Ce$1,[]);ye$1(this,mt$3,"");ye$1(this,ot$3,0);ye$1(this,Zt,"transparent");if(typeof l!="object"||l===null)throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");if(typeof l[Symbol.iterator]!="function")throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");if(typeof d!="object"&&typeof d!="function")throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");d===null&&(d={});const b=new TextEncoder;for(const S of l){let T;ArrayBuffer.isView(S)?T=new Uint8Array(S.buffer.slice(S.byteOffset,S.byteOffset+S.byteLength)):S instanceof ArrayBuffer?T=new Uint8Array(S.slice(0)):S instanceof Ue$1?T=S:T=b.encode(`${S}`),ne$4(this,ot$3,D$3(this,ot$3)+(ArrayBuffer.isView(T)?T.byteLength:T.size)),D$3(this,Ce$1).push(T);}ne$4(this,Zt,`${d.endings===void 0?"transparent":d.endings}`);const g=d.type===void 0?"":String(d.type);ne$4(this,mt$3,/^[\x20-\x7E]*$/.test(g)?g:"");}get size(){return D$3(this,ot$3)}get type(){return D$3(this,mt$3)}async text(){const l=new TextDecoder;let d="";for await(const b of toIterator(D$3(this,Ce$1),!1))d+=l.decode(b,{stream:!0});return d+=l.decode(),d}async arrayBuffer(){const l=new Uint8Array(this.size);let d=0;for await(const b of toIterator(D$3(this,Ce$1),!1))l.set(b,d),d+=b.length;return l.buffer}stream(){const l=toIterator(D$3(this,Ce$1),!0);return new globalThis.ReadableStream({type:"bytes",async pull(d){const b=await l.next();b.done?d.close():d.enqueue(b.value);},async cancel(){await l.return();}})}slice(l=0,d=this.size,b=""){const{size:g}=this;let S=l<0?Math.max(g+l,0):Math.min(l,g),T=d<0?Math.max(g+d,0):Math.min(d,g);const R=Math.max(T-S,0),F=D$3(this,Ce$1),B=[];let Q=0;for(const A of F){if(Q>=R)break;const C=ArrayBuffer.isView(A)?A.byteLength:A.size;if(S&&C<=S)S-=C,T-=C;else {let q;ArrayBuffer.isView(A)?(q=A.subarray(S,Math.min(C,T)),Q+=q.byteLength):(q=A.slice(S,Math.min(C,T)),Q+=q.size),T-=C,B.push(q),S=0;}}const j=new Ue$1([],{type:String(b).toLowerCase()});return ne$4(j,ot$3,R),ne$4(j,Ce$1,B),j}get[Symbol.toStringTag](){return "Blob"}static[Symbol.hasInstance](l){return l&&typeof l=="object"&&typeof l.constructor=="function"&&(typeof l.stream=="function"||typeof l.arrayBuffer=="function")&&/^(Blob|File)$/.test(l[Symbol.toStringTag])}},Ce$1=new WeakMap,mt$3=new WeakMap,ot$3=new WeakMap,Zt=new WeakMap,u(Ue$1,"Blob"),Ue$1);Object.defineProperties(_Blob.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});const Blob=_Blob,r$1=Blob,_File=(_t$1=class extends r$1{constructor(d,b,g={}){if(arguments.length<2)throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);super(d,g);ye$1(this,yt$3,0);ye$1(this,gt$3,"");g===null&&(g={});const S=g.lastModified===void 0?Date.now():Number(g.lastModified);Number.isNaN(S)||ne$4(this,yt$3,S),ne$4(this,gt$3,String(b));}get name(){return D$3(this,gt$3)}get lastModified(){return D$3(this,yt$3)}get[Symbol.toStringTag](){return "File"}static[Symbol.hasInstance](d){return !!d&&d instanceof r$1&&/^(File)$/.test(d[Symbol.toStringTag])}},yt$3=new WeakMap,gt$3=new WeakMap,u(_t$1,"File"),_t$1),File$1=_File,File$1$1=File$1;/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */var{toStringTag:t$1,iterator:i$2,hasInstance:h}=Symbol,r=Math.random,m$1="append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","),f$1=u((c,l,d)=>(c+="",/^(Blob|File)$/.test(l&&l[t$1])?[(d=d!==void 0?d+"":l[t$1]=="File"?l.name:"blob",c),l.name!==d||l[t$1]=="blob"?new File$1$1([l],d,l):l]:[c,l+""]),"f"),e$1=u((c,l)=>(l?c:c.replace(/\r?\n|\r/g,`\r
`)).replace(/\n/g,"%0A").replace(/\r/g,"%0D").replace(/"/g,"%22"),"e$1"),x$1=u((c,l,d)=>{if(l.length<d)throw new TypeError(`Failed to execute '${c}' on 'FormData': ${d} arguments required, but only ${l.length} present.`)},"x");const FormData$1=(St$3=class{constructor(...l){ye$1(this,oe$4,[]);if(l.length)throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.")}get[t$1](){return "FormData"}[i$2](){return this.entries()}static[h](l){return l&&typeof l=="object"&&l[t$1]==="FormData"&&!m$1.some(d=>typeof l[d]!="function")}append(...l){x$1("append",arguments,2),D$3(this,oe$4).push(f$1(...l));}delete(l){x$1("delete",arguments,1),l+="",ne$4(this,oe$4,D$3(this,oe$4).filter(([d])=>d!==l));}get(l){x$1("get",arguments,1),l+="";for(var d=D$3(this,oe$4),b=d.length,g=0;g<b;g++)if(d[g][0]===l)return d[g][1];return null}getAll(l,d){return x$1("getAll",arguments,1),d=[],l+="",D$3(this,oe$4).forEach(b=>b[0]===l&&d.push(b[1])),d}has(l){return x$1("has",arguments,1),l+="",D$3(this,oe$4).some(d=>d[0]===l)}forEach(l,d){x$1("forEach",arguments,1);for(var[b,g]of this)l.call(d,g,b,this);}set(...l){x$1("set",arguments,2);var d=[],b=!0;l=f$1(...l),D$3(this,oe$4).forEach(g=>{g[0]===l[0]?b&&(b=!d.push(l)):d.push(g);}),b&&d.push(l),ne$4(this,oe$4,d);}*entries(){yield*D$3(this,oe$4);}*keys(){for(var[l]of this)yield l;}*values(){for(var[,l]of this)yield l;}},oe$4=new WeakMap,u(St$3,"FormData"),St$3);function formDataToBlob(c,l=r$1){var d=`${r()}${r()}`.replace(/\./g,"").slice(-28).padStart(32,"-"),b=[],g=`--${d}\r
Content-Disposition: form-data; name="`;return c.forEach((S,T)=>typeof S=="string"?b.push(g+e$1(T)+`"\r
\r
${S.replace(/\r(?!\n)|(?<!\r)\n/g,`\r
`)}\r
`):b.push(g+e$1(T)+`"; filename="${e$1(S.name,1)}"\r
Content-Type: ${S.type||"application/octet-stream"}\r
\r
`,S,`\r
`)),b.push(`--${d}--`),new l(b,{type:"multipart/form-data; boundary="+d})}u(formDataToBlob,"formDataToBlob");const Jr$1=class Jr extends Error{constructor(l,d){super(l),Error.captureStackTrace(this,this.constructor),this.type=d;}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};u(Jr$1,"FetchBaseError");let FetchBaseError=Jr$1;const Xr$1=class Xr extends FetchBaseError{constructor(l,d,b){super(l,d),b&&(this.code=this.errno=b.code,this.erroredSysCall=b.syscall);}};u(Xr$1,"FetchError");let FetchError$1=Xr$1;const NAME=Symbol.toStringTag,isURLSearchParameters=u(c=>typeof c=="object"&&typeof c.append=="function"&&typeof c.delete=="function"&&typeof c.get=="function"&&typeof c.getAll=="function"&&typeof c.has=="function"&&typeof c.set=="function"&&typeof c.sort=="function"&&c[NAME]==="URLSearchParams","isURLSearchParameters"),isBlob=u(c=>c&&typeof c=="object"&&typeof c.arrayBuffer=="function"&&typeof c.type=="string"&&typeof c.stream=="function"&&typeof c.constructor=="function"&&/^(Blob|File)$/.test(c[NAME]),"isBlob"),isAbortSignal=u(c=>typeof c=="object"&&(c[NAME]==="AbortSignal"||c[NAME]==="EventTarget"),"isAbortSignal"),isDomainOrSubdomain=u((c,l)=>{const d=new URL(l).hostname,b=new URL(c).hostname;return d===b||d.endsWith(`.${b}`)},"isDomainOrSubdomain"),isSameProtocol=u((c,l)=>{const d=new URL(l).protocol,b=new URL(c).protocol;return d===b},"isSameProtocol"),pipeline=require$$1.promisify(Stream__default.pipeline),INTERNALS$2=Symbol("Body internals"),en=class en{constructor(l,{size:d=0}={}){let b=null;l===null?l=null:isURLSearchParameters(l)?l=require$$0.Buffer.from(l.toString()):isBlob(l)||require$$0.Buffer.isBuffer(l)||(require$$1.types.isAnyArrayBuffer(l)?l=require$$0.Buffer.from(l):ArrayBuffer.isView(l)?l=require$$0.Buffer.from(l.buffer,l.byteOffset,l.byteLength):l instanceof Stream__default||(l instanceof FormData$1?(l=formDataToBlob(l),b=l.type.split("=")[1]):l=require$$0.Buffer.from(String(l))));let g=l;require$$0.Buffer.isBuffer(l)?g=Stream__default.Readable.from(l):isBlob(l)&&(g=Stream__default.Readable.from(l.stream())),this[INTERNALS$2]={body:l,stream:g,boundary:b,disturbed:!1,error:null},this.size=d,l instanceof Stream__default&&l.on("error",S=>{const T=S instanceof FetchBaseError?S:new FetchError$1(`Invalid response body while trying to fetch ${this.url}: ${S.message}`,"system",S);this[INTERNALS$2].error=T;});}get body(){return this[INTERNALS$2].stream}get bodyUsed(){return this[INTERNALS$2].disturbed}async arrayBuffer(){const{buffer:l,byteOffset:d,byteLength:b}=await consumeBody(this);return l.slice(d,d+b)}async formData(){const l=this.headers.get("content-type");if(l.startsWith("application/x-www-form-urlencoded")){const b=new FormData$1,g=new URLSearchParams(await this.text());for(const[S,T]of g)b.append(S,T);return b}const{toFormData:d}=await import('./_/multipart-parser.mjs').then(function (n) { return n.m; });return d(this.body,l)}async blob(){const l=this.headers&&this.headers.get("content-type")||this[INTERNALS$2].body&&this[INTERNALS$2].body.type||"",d=await this.arrayBuffer();return new r$1([d],{type:l})}async json(){const l=await this.text();return JSON.parse(l)}async text(){const l=await consumeBody(this);return new TextDecoder().decode(l)}buffer(){return consumeBody(this)}};u(en,"Body");let Body=en;Body.prototype.buffer=require$$1.deprecate(Body.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer"),Object.defineProperties(Body.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:require$$1.deprecate(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function consumeBody(c){if(c[INTERNALS$2].disturbed)throw new TypeError(`body used already for: ${c.url}`);if(c[INTERNALS$2].disturbed=!0,c[INTERNALS$2].error)throw c[INTERNALS$2].error;const{body:l}=c;if(l===null||!(l instanceof Stream__default))return require$$0.Buffer.alloc(0);const d=[];let b=0;try{for await(const g of l){if(c.size>0&&b+g.length>c.size){const S=new FetchError$1(`content size at ${c.url} over limit: ${c.size}`,"max-size");throw l.destroy(S),S}b+=g.length,d.push(g);}}catch(g){throw g instanceof FetchBaseError?g:new FetchError$1(`Invalid response body while trying to fetch ${c.url}: ${g.message}`,"system",g)}if(l.readableEnded===!0||l._readableState.ended===!0)try{return d.every(g=>typeof g=="string")?require$$0.Buffer.from(d.join("")):require$$0.Buffer.concat(d,b)}catch(g){throw new FetchError$1(`Could not create Buffer from response body for ${c.url}: ${g.message}`,"system",g)}else throw new FetchError$1(`Premature close of server response while trying to fetch ${c.url}`)}u(consumeBody,"consumeBody");const clone=u((c,l)=>{let d,b,{body:g}=c[INTERNALS$2];if(c.bodyUsed)throw new Error("cannot clone body after it is used");return g instanceof Stream__default&&typeof g.getBoundary!="function"&&(d=new Stream.PassThrough({highWaterMark:l}),b=new Stream.PassThrough({highWaterMark:l}),g.pipe(d),g.pipe(b),c[INTERNALS$2].stream=d,g=b),g},"clone"),getNonSpecFormDataBoundary=require$$1.deprecate(c=>c.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),extractContentType=u((c,l)=>c===null?null:typeof c=="string"?"text/plain;charset=UTF-8":isURLSearchParameters(c)?"application/x-www-form-urlencoded;charset=UTF-8":isBlob(c)?c.type||null:require$$0.Buffer.isBuffer(c)||require$$1.types.isAnyArrayBuffer(c)||ArrayBuffer.isView(c)?null:c instanceof FormData$1?`multipart/form-data; boundary=${l[INTERNALS$2].boundary}`:c&&typeof c.getBoundary=="function"?`multipart/form-data;boundary=${getNonSpecFormDataBoundary(c)}`:c instanceof Stream__default?null:"text/plain;charset=UTF-8","extractContentType"),getTotalBytes=u(c=>{const{body:l}=c[INTERNALS$2];return l===null?0:isBlob(l)?l.size:require$$0.Buffer.isBuffer(l)?l.length:l&&typeof l.getLengthSync=="function"&&l.hasKnownLength&&l.hasKnownLength()?l.getLengthSync():null},"getTotalBytes"),writeToStream=u(async(c,{body:l})=>{l===null?c.end():await pipeline(l,c);},"writeToStream"),validateHeaderName=typeof http__default.validateHeaderName=="function"?http__default.validateHeaderName:c=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(c)){const l=new TypeError(`Header name must be a valid HTTP token [${c}]`);throw Object.defineProperty(l,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),l}},validateHeaderValue=typeof http__default.validateHeaderValue=="function"?http__default.validateHeaderValue:(c,l)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(l)){const d=new TypeError(`Invalid character in header content ["${c}"]`);throw Object.defineProperty(d,"code",{value:"ERR_INVALID_CHAR"}),d}},Kt$2=class Kt extends URLSearchParams{constructor(l){let d=[];if(l instanceof Kt){const b=l.raw();for(const[g,S]of Object.entries(b))d.push(...S.map(T=>[g,T]));}else if(l!=null)if(typeof l=="object"&&!require$$1.types.isBoxedPrimitive(l)){const b=l[Symbol.iterator];if(b==null)d.push(...Object.entries(l));else {if(typeof b!="function")throw new TypeError("Header pairs must be iterable");d=[...l].map(g=>{if(typeof g!="object"||require$$1.types.isBoxedPrimitive(g))throw new TypeError("Each header pair must be an iterable object");return [...g]}).map(g=>{if(g.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return [...g]});}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return d=d.length>0?d.map(([b,g])=>(validateHeaderName(b),validateHeaderValue(b,String(g)),[String(b).toLowerCase(),String(g)])):void 0,super(d),new Proxy(this,{get(b,g,S){switch(g){case"append":case"set":return (T,R)=>(validateHeaderName(T),validateHeaderValue(T,String(R)),URLSearchParams.prototype[g].call(b,String(T).toLowerCase(),String(R)));case"delete":case"has":case"getAll":return T=>(validateHeaderName(T),URLSearchParams.prototype[g].call(b,String(T).toLowerCase()));case"keys":return ()=>(b.sort(),new Set(URLSearchParams.prototype.keys.call(b)).keys());default:return Reflect.get(b,g,S)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(l){const d=this.getAll(l);if(d.length===0)return null;let b=d.join(", ");return /^content-encoding$/i.test(l)&&(b=b.toLowerCase()),b}forEach(l,d=void 0){for(const b of this.keys())Reflect.apply(l,d,[this.get(b),b,this]);}*values(){for(const l of this.keys())yield this.get(l);}*entries(){for(const l of this.keys())yield [l,this.get(l)];}[Symbol.iterator](){return this.entries()}raw(){return [...this.keys()].reduce((l,d)=>(l[d]=this.getAll(d),l),{})}[Symbol.for("nodejs.util.inspect.custom")](){return [...this.keys()].reduce((l,d)=>{const b=this.getAll(d);return d==="host"?l[d]=b[0]:l[d]=b.length>1?b:b[0],l},{})}};u(Kt$2,"Headers");let Headers$2=Kt$2;Object.defineProperties(Headers$2.prototype,["get","entries","forEach","values"].reduce((c,l)=>(c[l]={enumerable:!0},c),{}));function fromRawHeaders(c=[]){return new Headers$2(c.reduce((l,d,b,g)=>(b%2===0&&l.push(g.slice(b,b+2)),l),[]).filter(([l,d])=>{try{return validateHeaderName(l),validateHeaderValue(l,String(d)),!0}catch{return !1}}))}u(fromRawHeaders,"fromRawHeaders");const redirectStatus=new Set([301,302,303,307,308]),isRedirect=u(c=>redirectStatus.has(c),"isRedirect"),INTERNALS$1=Symbol("Response internals"),De$1=class De extends Body{constructor(l=null,d={}){super(l,d);const b=d.status!=null?d.status:200,g=new Headers$2(d.headers);if(l!==null&&!g.has("Content-Type")){const S=extractContentType(l,this);S&&g.append("Content-Type",S);}this[INTERNALS$1]={type:"default",url:d.url,status:b,statusText:d.statusText||"",headers:g,counter:d.counter,highWaterMark:d.highWaterMark};}get type(){return this[INTERNALS$1].type}get url(){return this[INTERNALS$1].url||""}get status(){return this[INTERNALS$1].status}get ok(){return this[INTERNALS$1].status>=200&&this[INTERNALS$1].status<300}get redirected(){return this[INTERNALS$1].counter>0}get statusText(){return this[INTERNALS$1].statusText}get headers(){return this[INTERNALS$1].headers}get highWaterMark(){return this[INTERNALS$1].highWaterMark}clone(){return new De(clone(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(l,d=302){if(!isRedirect(d))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new De(null,{headers:{location:new URL(l).toString()},status:d})}static error(){const l=new De(null,{status:0,statusText:""});return l[INTERNALS$1].type="error",l}static json(l=void 0,d={}){const b=JSON.stringify(l);if(b===void 0)throw new TypeError("data is not JSON serializable");const g=new Headers$2(d&&d.headers);return g.has("content-type")||g.set("content-type","application/json"),new De(b,{...d,headers:g})}get[Symbol.toStringTag](){return "Response"}};u(De$1,"Response");let Response$1=De$1;Object.defineProperties(Response$1.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});const getSearch=u(c=>{if(c.search)return c.search;const l=c.href.length-1,d=c.hash||(c.href[l]==="#"?"#":"");return c.href[l-d.length]==="?"?"?":""},"getSearch");function stripURLForUseAsAReferrer(c,l=!1){return c==null||(c=new URL(c),/^(about|blob|data):$/.test(c.protocol))?"no-referrer":(c.username="",c.password="",c.hash="",l&&(c.pathname="",c.search=""),c)}u(stripURLForUseAsAReferrer,"stripURLForUseAsAReferrer");const ReferrerPolicy=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),DEFAULT_REFERRER_POLICY="strict-origin-when-cross-origin";function validateReferrerPolicy(c){if(!ReferrerPolicy.has(c))throw new TypeError(`Invalid referrerPolicy: ${c}`);return c}u(validateReferrerPolicy,"validateReferrerPolicy");function isOriginPotentiallyTrustworthy(c){if(/^(http|ws)s:$/.test(c.protocol))return !0;const l=c.host.replace(/(^\[)|(]$)/g,""),d=require$$4.isIP(l);return d===4&&/^127\./.test(l)||d===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(l)?!0:c.host==="localhost"||c.host.endsWith(".localhost")?!1:c.protocol==="file:"}u(isOriginPotentiallyTrustworthy,"isOriginPotentiallyTrustworthy");function isUrlPotentiallyTrustworthy(c){return /^about:(blank|srcdoc)$/.test(c)||c.protocol==="data:"||/^(blob|filesystem):$/.test(c.protocol)?!0:isOriginPotentiallyTrustworthy(c)}u(isUrlPotentiallyTrustworthy,"isUrlPotentiallyTrustworthy");function determineRequestsReferrer(c,{referrerURLCallback:l,referrerOriginCallback:d}={}){if(c.referrer==="no-referrer"||c.referrerPolicy==="")return null;const b=c.referrerPolicy;if(c.referrer==="about:client")return "no-referrer";const g=c.referrer;let S=stripURLForUseAsAReferrer(g),T=stripURLForUseAsAReferrer(g,!0);S.toString().length>4096&&(S=T),l&&(S=l(S)),d&&(T=d(T));const R=new URL(c.url);switch(b){case"no-referrer":return "no-referrer";case"origin":return T;case"unsafe-url":return S;case"strict-origin":return isUrlPotentiallyTrustworthy(S)&&!isUrlPotentiallyTrustworthy(R)?"no-referrer":T.toString();case"strict-origin-when-cross-origin":return S.origin===R.origin?S:isUrlPotentiallyTrustworthy(S)&&!isUrlPotentiallyTrustworthy(R)?"no-referrer":T;case"same-origin":return S.origin===R.origin?S:"no-referrer";case"origin-when-cross-origin":return S.origin===R.origin?S:T;case"no-referrer-when-downgrade":return isUrlPotentiallyTrustworthy(S)&&!isUrlPotentiallyTrustworthy(R)?"no-referrer":S;default:throw new TypeError(`Invalid referrerPolicy: ${b}`)}}u(determineRequestsReferrer,"determineRequestsReferrer");function parseReferrerPolicyFromHeader(c){const l=(c.get("referrer-policy")||"").split(/[,\s]+/);let d="";for(const b of l)b&&ReferrerPolicy.has(b)&&(d=b);return d}u(parseReferrerPolicyFromHeader,"parseReferrerPolicyFromHeader");const INTERNALS=Symbol("Request internals"),isRequest=u(c=>typeof c=="object"&&typeof c[INTERNALS]=="object","isRequest"),doBadDataWarn=require$$1.deprecate(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Jt$1=class Jt extends Body{constructor(l,d={}){let b;if(isRequest(l)?b=new URL(l.url):(b=new URL(l),l={}),b.username!==""||b.password!=="")throw new TypeError(`${b} is an url with embedded credentials.`);let g=d.method||l.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(g)&&(g=g.toUpperCase()),!isRequest(d)&&"data"in d&&doBadDataWarn(),(d.body!=null||isRequest(l)&&l.body!==null)&&(g==="GET"||g==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");const S=d.body?d.body:isRequest(l)&&l.body!==null?clone(l):null;super(S,{size:d.size||l.size||0});const T=new Headers$2(d.headers||l.headers||{});if(S!==null&&!T.has("Content-Type")){const B=extractContentType(S,this);B&&T.set("Content-Type",B);}let R=isRequest(l)?l.signal:null;if("signal"in d&&(R=d.signal),R!=null&&!isAbortSignal(R))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let F=d.referrer==null?l.referrer:d.referrer;if(F==="")F="no-referrer";else if(F){const B=new URL(F);F=/^about:(\/\/)?client$/.test(B)?"client":B;}else F=void 0;this[INTERNALS]={method:g,redirect:d.redirect||l.redirect||"follow",headers:T,parsedURL:b,signal:R,referrer:F},this.follow=d.follow===void 0?l.follow===void 0?20:l.follow:d.follow,this.compress=d.compress===void 0?l.compress===void 0?!0:l.compress:d.compress,this.counter=d.counter||l.counter||0,this.agent=d.agent||l.agent,this.highWaterMark=d.highWaterMark||l.highWaterMark||16384,this.insecureHTTPParser=d.insecureHTTPParser||l.insecureHTTPParser||!1,this.referrerPolicy=d.referrerPolicy||l.referrerPolicy||"";}get method(){return this[INTERNALS].method}get url(){return require$$1$1.format(this[INTERNALS].parsedURL)}get headers(){return this[INTERNALS].headers}get redirect(){return this[INTERNALS].redirect}get signal(){return this[INTERNALS].signal}get referrer(){if(this[INTERNALS].referrer==="no-referrer")return "";if(this[INTERNALS].referrer==="client")return "about:client";if(this[INTERNALS].referrer)return this[INTERNALS].referrer.toString()}get referrerPolicy(){return this[INTERNALS].referrerPolicy}set referrerPolicy(l){this[INTERNALS].referrerPolicy=validateReferrerPolicy(l);}clone(){return new Jt(this)}get[Symbol.toStringTag](){return "Request"}};u(Jt$1,"Request");let Request$1=Jt$1;Object.defineProperties(Request$1.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});const getNodeRequestOptions=u(c=>{const{parsedURL:l}=c[INTERNALS],d=new Headers$2(c[INTERNALS].headers);d.has("Accept")||d.set("Accept","*/*");let b=null;if(c.body===null&&/^(post|put)$/i.test(c.method)&&(b="0"),c.body!==null){const R=getTotalBytes(c);typeof R=="number"&&!Number.isNaN(R)&&(b=String(R));}b&&d.set("Content-Length",b),c.referrerPolicy===""&&(c.referrerPolicy=DEFAULT_REFERRER_POLICY),c.referrer&&c.referrer!=="no-referrer"?c[INTERNALS].referrer=determineRequestsReferrer(c):c[INTERNALS].referrer="no-referrer",c[INTERNALS].referrer instanceof URL&&d.set("Referer",c.referrer),d.has("User-Agent")||d.set("User-Agent","node-fetch"),c.compress&&!d.has("Accept-Encoding")&&d.set("Accept-Encoding","gzip, deflate, br");let{agent:g}=c;typeof g=="function"&&(g=g(l));const S=getSearch(l),T={path:l.pathname+S,method:c.method,headers:d[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:c.insecureHTTPParser,agent:g};return {parsedURL:l,options:T}},"getNodeRequestOptions"),tn=class tn extends FetchBaseError{constructor(l,d="aborted"){super(l,d);}};u(tn,"AbortError");let AbortError=tn;/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */if(!globalThis.DOMException)try{const{MessageChannel:c}=require("worker_threads"),l=new c().port1,d=new ArrayBuffer;l.postMessage(d,[d,d]);}catch(c){c.constructor.name==="DOMException"&&(globalThis.DOMException=c.constructor);}var nodeDomexception=globalThis.DOMException;const DOMException$1=_commonjsHelpers.getDefaultExportFromCjs(nodeDomexception),{stat}=node_fs.promises,blobFromSync=u((c,l)=>fromBlob(node_fs.statSync(c),c,l),"blobFromSync"),blobFrom=u((c,l)=>stat(c).then(d=>fromBlob(d,c,l)),"blobFrom"),fileFrom=u((c,l)=>stat(c).then(d=>fromFile(d,c,l)),"fileFrom"),fileFromSync=u((c,l)=>fromFile(node_fs.statSync(c),c,l),"fileFromSync"),fromBlob=u((c,l,d="")=>new r$1([new BlobDataItem({path:l,size:c.size,lastModified:c.mtimeMs,start:0})],{type:d}),"fromBlob"),fromFile=u((c,l,d="")=>new File$1$1([new BlobDataItem({path:l,size:c.size,lastModified:c.mtimeMs,start:0})],node_path.basename(l),{type:d,lastModified:c.mtimeMs}),"fromFile"),Xt$1=class Xt{constructor(l){ye$1(this,Me$1,void 0);ye$1(this,xe$1,void 0);ne$4(this,Me$1,l.path),ne$4(this,xe$1,l.start),this.size=l.size,this.lastModified=l.lastModified;}slice(l,d){return new Xt({path:D$3(this,Me$1),lastModified:this.lastModified,size:d-l,start:D$3(this,xe$1)+l})}async*stream(){const{mtimeMs:l}=await stat(D$3(this,Me$1));if(l>this.lastModified)throw new DOMException$1("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.","NotReadableError");yield*node_fs.createReadStream(D$3(this,Me$1),{start:D$3(this,xe$1),end:D$3(this,xe$1)+this.size-1});}get[Symbol.toStringTag](){return "Blob"}};Me$1=new WeakMap,xe$1=new WeakMap,u(Xt$1,"BlobDataItem");let BlobDataItem=Xt$1;const supportedSchemas=new Set(["data:","http:","https:"]);async function fetch$1(c,l){return new Promise((d,b)=>{const g=new Request$1(c,l),{parsedURL:S,options:T}=getNodeRequestOptions(g);if(!supportedSchemas.has(S.protocol))throw new TypeError(`node-fetch cannot load ${c}. URL scheme "${S.protocol.replace(/:$/,"")}" is not supported.`);if(S.protocol==="data:"){const q=dataUriToBuffer(g.url),$=new Response$1(q,{headers:{"Content-Type":q.typeFull}});d($);return}const R=(S.protocol==="https:"?https__default:http__default).request,{signal:F}=g;let B=null;const Q=u(()=>{const q=new AbortError("The operation was aborted.");b(q),g.body&&g.body instanceof Stream__default.Readable&&g.body.destroy(q),!(!B||!B.body)&&B.body.emit("error",q);},"abort");if(F&&F.aborted){Q();return}const j=u(()=>{Q(),C();},"abortAndFinalize"),A=R(S.toString(),T);F&&F.addEventListener("abort",j);const C=u(()=>{A.abort(),F&&F.removeEventListener("abort",j);},"finalize");A.on("error",q=>{b(new FetchError$1(`request to ${g.url} failed, reason: ${q.message}`,"system",q)),C();}),fixResponseChunkedTransferBadEnding(A,q=>{B&&B.body&&B.body.destroy(q);}),process.version<"v14"&&A.on("socket",q=>{let $;q.prependListener("end",()=>{$=q._eventsCount;}),q.prependListener("close",N=>{if(B&&$<q._eventsCount&&!N){const J=new Error("Premature close");J.code="ERR_STREAM_PREMATURE_CLOSE",B.body.emit("error",J);}});}),A.on("response",q=>{A.setTimeout(0);const $=fromRawHeaders(q.rawHeaders);if(isRedirect(q.statusCode)){const M=$.get("Location");let H=null;try{H=M===null?null:new URL(M,g.url);}catch{if(g.redirect!=="manual"){b(new FetchError$1(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),C();return}}switch(g.redirect){case"error":b(new FetchError$1(`uri requested responds with a redirect, redirect mode is set to error: ${g.url}`,"no-redirect")),C();return;case"manual":break;case"follow":{if(H===null)break;if(g.counter>=g.follow){b(new FetchError$1(`maximum redirect reached at: ${g.url}`,"max-redirect")),C();return}const U={headers:new Headers$2(g.headers),follow:g.follow,counter:g.counter+1,agent:g.agent,compress:g.compress,method:g.method,body:clone(g),signal:g.signal,size:g.size,referrer:g.referrer,referrerPolicy:g.referrerPolicy};if(!isDomainOrSubdomain(g.url,H)||!isSameProtocol(g.url,H))for(const Y of ["authorization","www-authenticate","cookie","cookie2"])U.headers.delete(Y);if(q.statusCode!==303&&g.body&&l.body instanceof Stream__default.Readable){b(new FetchError$1("Cannot follow redirect with body being a readable stream","unsupported-redirect")),C();return}(q.statusCode===303||(q.statusCode===301||q.statusCode===302)&&g.method==="POST")&&(U.method="GET",U.body=void 0,U.headers.delete("content-length"));const it=parseReferrerPolicyFromHeader($);it&&(U.referrerPolicy=it),d(fetch$1(new Request$1(H,U))),C();return}default:return b(new TypeError(`Redirect option '${g.redirect}' is not a valid value of RequestRedirect`))}}F&&q.once("end",()=>{F.removeEventListener("abort",j);});let N=Stream.pipeline(q,new Stream.PassThrough,M=>{M&&b(M);});process.version<"v12.10"&&q.on("aborted",j);const J={url:g.url,status:q.statusCode,statusText:q.statusMessage,headers:$,size:g.size,counter:g.counter,highWaterMark:g.highWaterMark},G=$.get("Content-Encoding");if(!g.compress||g.method==="HEAD"||G===null||q.statusCode===204||q.statusCode===304){B=new Response$1(N,J),d(B);return}const Pe={flush:zlib__default.Z_SYNC_FLUSH,finishFlush:zlib__default.Z_SYNC_FLUSH};if(G==="gzip"||G==="x-gzip"){N=Stream.pipeline(N,zlib__default.createGunzip(Pe),M=>{M&&b(M);}),B=new Response$1(N,J),d(B);return}if(G==="deflate"||G==="x-deflate"){const M=Stream.pipeline(q,new Stream.PassThrough,H=>{H&&b(H);});M.once("data",H=>{(H[0]&15)===8?N=Stream.pipeline(N,zlib__default.createInflate(),U=>{U&&b(U);}):N=Stream.pipeline(N,zlib__default.createInflateRaw(),U=>{U&&b(U);}),B=new Response$1(N,J),d(B);}),M.once("end",()=>{B||(B=new Response$1(N,J),d(B));});return}if(G==="br"){N=Stream.pipeline(N,zlib__default.createBrotliDecompress(),M=>{M&&b(M);}),B=new Response$1(N,J),d(B);return}B=new Response$1(N,J),d(B);}),writeToStream(A,g).catch(b);})}u(fetch$1,"fetch$1");function fixResponseChunkedTransferBadEnding(c,l){const d=require$$0.Buffer.from(`0\r
\r
`);let b=!1,g=!1,S;c.on("response",T=>{const{headers:R}=T;b=R["transfer-encoding"]==="chunked"&&!R["content-length"];}),c.on("socket",T=>{const R=u(()=>{if(b&&!g){const B=new Error("Premature close");B.code="ERR_STREAM_PREMATURE_CLOSE",l(B);}},"onSocketClose"),F=u(B=>{g=require$$0.Buffer.compare(B.slice(-5),d)===0,!g&&S&&(g=require$$0.Buffer.compare(S.slice(-3),d.slice(0,3))===0&&require$$0.Buffer.compare(B.slice(-2),d.slice(3))===0),S=B;},"onData");T.prependListener("close",R),T.on("data",F),c.on("close",()=>{T.removeListener("close",R),T.removeListener("data",F);});});}u(fixResponseChunkedTransferBadEnding,"fixResponseChunkedTransferBadEnding");const privateData=new WeakMap,wrappers=new WeakMap;function pd(c){const l=privateData.get(c);return console.assert(l!=null,"'this' is expected an Event object, but got",c),l}u(pd,"pd");function setCancelFlag(c){if(c.passiveListener!=null){typeof console<"u"&&typeof console.error=="function"&&console.error("Unable to preventDefault inside passive event listener invocation.",c.passiveListener);return}c.event.cancelable&&(c.canceled=!0,typeof c.event.preventDefault=="function"&&c.event.preventDefault());}u(setCancelFlag,"setCancelFlag");function Event$1(c,l){privateData.set(this,{eventTarget:c,event:l,eventPhase:2,currentTarget:c,canceled:!1,stopped:!1,immediateStopped:!1,passiveListener:null,timeStamp:l.timeStamp||Date.now()}),Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0});const d=Object.keys(l);for(let b=0;b<d.length;++b){const g=d[b];g in this||Object.defineProperty(this,g,defineRedirectDescriptor(g));}}u(Event$1,"Event"),Event$1.prototype={get type(){return pd(this).event.type},get target(){return pd(this).eventTarget},get currentTarget(){return pd(this).currentTarget},composedPath(){const c=pd(this).currentTarget;return c==null?[]:[c]},get NONE(){return 0},get CAPTURING_PHASE(){return 1},get AT_TARGET(){return 2},get BUBBLING_PHASE(){return 3},get eventPhase(){return pd(this).eventPhase},stopPropagation(){const c=pd(this);c.stopped=!0,typeof c.event.stopPropagation=="function"&&c.event.stopPropagation();},stopImmediatePropagation(){const c=pd(this);c.stopped=!0,c.immediateStopped=!0,typeof c.event.stopImmediatePropagation=="function"&&c.event.stopImmediatePropagation();},get bubbles(){return !!pd(this).event.bubbles},get cancelable(){return !!pd(this).event.cancelable},preventDefault(){setCancelFlag(pd(this));},get defaultPrevented(){return pd(this).canceled},get composed(){return !!pd(this).event.composed},get timeStamp(){return pd(this).timeStamp},get srcElement(){return pd(this).eventTarget},get cancelBubble(){return pd(this).stopped},set cancelBubble(c){if(!c)return;const l=pd(this);l.stopped=!0,typeof l.event.cancelBubble=="boolean"&&(l.event.cancelBubble=!0);},get returnValue(){return !pd(this).canceled},set returnValue(c){c||setCancelFlag(pd(this));},initEvent(){}},Object.defineProperty(Event$1.prototype,"constructor",{value:Event$1,configurable:!0,writable:!0});function defineRedirectDescriptor(c){return {get(){return pd(this).event[c]},set(l){pd(this).event[c]=l;},configurable:!0,enumerable:!0}}u(defineRedirectDescriptor,"defineRedirectDescriptor");function defineCallDescriptor(c){return {value(){const l=pd(this).event;return l[c].apply(l,arguments)},configurable:!0,enumerable:!0}}u(defineCallDescriptor,"defineCallDescriptor");function defineWrapper(c,l){const d=Object.keys(l);if(d.length===0)return c;function b(g,S){c.call(this,g,S);}u(b,"CustomEvent"),b.prototype=Object.create(c.prototype,{constructor:{value:b,configurable:!0,writable:!0}});for(let g=0;g<d.length;++g){const S=d[g];if(!(S in c.prototype)){const R=typeof Object.getOwnPropertyDescriptor(l,S).value=="function";Object.defineProperty(b.prototype,S,R?defineCallDescriptor(S):defineRedirectDescriptor(S));}}return b}u(defineWrapper,"defineWrapper");function getWrapper(c){if(c==null||c===Object.prototype)return Event$1;let l=wrappers.get(c);return l==null&&(l=defineWrapper(getWrapper(Object.getPrototypeOf(c)),c),wrappers.set(c,l)),l}u(getWrapper,"getWrapper");function wrapEvent(c,l){const d=getWrapper(Object.getPrototypeOf(l));return new d(c,l)}u(wrapEvent,"wrapEvent");function isStopped(c){return pd(c).immediateStopped}u(isStopped,"isStopped");function setEventPhase(c,l){pd(c).eventPhase=l;}u(setEventPhase,"setEventPhase");function setCurrentTarget(c,l){pd(c).currentTarget=l;}u(setCurrentTarget,"setCurrentTarget");function setPassiveListener(c,l){pd(c).passiveListener=l;}u(setPassiveListener,"setPassiveListener");const listenersMap=new WeakMap,CAPTURE=1,BUBBLE=2,ATTRIBUTE=3;function isObject(c){return c!==null&&typeof c=="object"}u(isObject,"isObject");function getListeners(c){const l=listenersMap.get(c);if(l==null)throw new TypeError("'this' is expected an EventTarget object, but got another value.");return l}u(getListeners,"getListeners");function defineEventAttributeDescriptor(c){return {get(){let d=getListeners(this).get(c);for(;d!=null;){if(d.listenerType===ATTRIBUTE)return d.listener;d=d.next;}return null},set(l){typeof l!="function"&&!isObject(l)&&(l=null);const d=getListeners(this);let b=null,g=d.get(c);for(;g!=null;)g.listenerType===ATTRIBUTE?b!==null?b.next=g.next:g.next!==null?d.set(c,g.next):d.delete(c):b=g,g=g.next;if(l!==null){const S={listener:l,listenerType:ATTRIBUTE,passive:!1,once:!1,next:null};b===null?d.set(c,S):b.next=S;}},configurable:!0,enumerable:!0}}u(defineEventAttributeDescriptor,"defineEventAttributeDescriptor");function defineEventAttribute(c,l){Object.defineProperty(c,`on${l}`,defineEventAttributeDescriptor(l));}u(defineEventAttribute,"defineEventAttribute");function defineCustomEventTarget(c){function l(){EventTarget.call(this);}u(l,"CustomEventTarget"),l.prototype=Object.create(EventTarget.prototype,{constructor:{value:l,configurable:!0,writable:!0}});for(let d=0;d<c.length;++d)defineEventAttribute(l.prototype,c[d]);return l}u(defineCustomEventTarget,"defineCustomEventTarget");function EventTarget(){if(this instanceof EventTarget){listenersMap.set(this,new Map);return}if(arguments.length===1&&Array.isArray(arguments[0]))return defineCustomEventTarget(arguments[0]);if(arguments.length>0){const c=new Array(arguments.length);for(let l=0;l<arguments.length;++l)c[l]=arguments[l];return defineCustomEventTarget(c)}throw new TypeError("Cannot call a class as a function")}u(EventTarget,"EventTarget"),EventTarget.prototype={addEventListener(c,l,d){if(l==null)return;if(typeof l!="function"&&!isObject(l))throw new TypeError("'listener' should be a function or an object.");const b=getListeners(this),g=isObject(d),T=(g?!!d.capture:!!d)?CAPTURE:BUBBLE,R={listener:l,listenerType:T,passive:g&&!!d.passive,once:g&&!!d.once,next:null};let F=b.get(c);if(F===void 0){b.set(c,R);return}let B=null;for(;F!=null;){if(F.listener===l&&F.listenerType===T)return;B=F,F=F.next;}B.next=R;},removeEventListener(c,l,d){if(l==null)return;const b=getListeners(this),S=(isObject(d)?!!d.capture:!!d)?CAPTURE:BUBBLE;let T=null,R=b.get(c);for(;R!=null;){if(R.listener===l&&R.listenerType===S){T!==null?T.next=R.next:R.next!==null?b.set(c,R.next):b.delete(c);return}T=R,R=R.next;}},dispatchEvent(c){if(c==null||typeof c.type!="string")throw new TypeError('"event.type" should be a string.');const l=getListeners(this),d=c.type;let b=l.get(d);if(b==null)return !0;const g=wrapEvent(this,c);let S=null;for(;b!=null;){if(b.once?S!==null?S.next=b.next:b.next!==null?l.set(d,b.next):l.delete(d):S=b,setPassiveListener(g,b.passive?b.listener:null),typeof b.listener=="function")try{b.listener.call(this,g);}catch(T){typeof console<"u"&&typeof console.error=="function"&&console.error(T);}else b.listenerType!==ATTRIBUTE&&typeof b.listener.handleEvent=="function"&&b.listener.handleEvent(g);if(isStopped(g))break;b=b.next;}return setPassiveListener(g,null),setEventPhase(g,0),setCurrentTarget(g,null),!g.defaultPrevented}},Object.defineProperty(EventTarget.prototype,"constructor",{value:EventTarget,configurable:!0,writable:!0});const rn=class rn extends EventTarget{constructor(){throw super(),new TypeError("AbortSignal cannot be constructed directly")}get aborted(){const l=abortedFlags.get(this);if(typeof l!="boolean")throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this===null?"null":typeof this}`);return l}};u(rn,"AbortSignal");let AbortSignal=rn;defineEventAttribute(AbortSignal.prototype,"abort");function createAbortSignal(){const c=Object.create(AbortSignal.prototype);return EventTarget.call(c),abortedFlags.set(c,!1),c}u(createAbortSignal,"createAbortSignal");function abortSignal(c){abortedFlags.get(c)===!1&&(abortedFlags.set(c,!0),c.dispatchEvent({type:"abort"}));}u(abortSignal,"abortSignal");const abortedFlags=new WeakMap;Object.defineProperties(AbortSignal.prototype,{aborted:{enumerable:!0}}),typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(AbortSignal.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortSignal"});let AbortController$1$1=(wt$3=class{constructor(){signals.set(this,createAbortSignal());}get signal(){return getSignal(this)}abort(){abortSignal(getSignal(this));}},u(wt$3,"AbortController"),wt$3);const signals=new WeakMap;function getSignal(c){const l=signals.get(c);if(l==null)throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${c===null?"null":typeof c}`);return l}u(getSignal,"getSignal"),Object.defineProperties(AbortController$1$1.prototype,{signal:{enumerable:!0},abort:{enumerable:!0}}),typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(AbortController$1$1.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortController"});var t$2=Object.defineProperty,e$2=u((c,l)=>t$2(c,"name",{value:l,configurable:!0}),"e");const fetch$2=fetch$1;s$1();function s$1(){!globalThis.process?.versions?.node&&!globalThis.process?.env.DISABLE_NODE_FETCH_NATIVE_WARN&&console.warn("[node-fetch-native] Node.js compatible build of `node-fetch-native` is being used in a non-Node.js environment. Please make sure you are using proper export conditions or report this issue to https://github.com/unjs/node-fetch-native. You can set `process.env.DISABLE_NODE_FETCH_NATIVE_WARN` to disable this warning.");}u(s$1,"s"),e$2(s$1,"checkNodeEnvironment"),node$1.AbortController=AbortController$1$1,node$1.AbortError=AbortError,node$1.Blob=r$1,node$1.FetchError=FetchError$1,node$1.File=File$1$1,node$1.FormData=FormData$1,node$1.Headers=Headers$2,node$1.Request=Request$1,node$1.Response=Response$1,node$1.blobFrom=blobFrom,node$1.blobFromSync=blobFromSync,node$1.default=fetch$2,node$1.fetch=fetch$2,node$1.fileFrom=fileFrom,node$1.fileFromSync=fileFromSync,node$1.isRedirect=isRedirect;

var n=Object.defineProperty;var i$1=(r,o)=>n(r,"name",{value:o,configurable:!0});const node=node$1;var t=Object.defineProperty,a=i$1((r,o)=>t(r,"name",{value:o,configurable:!0}),"a");function e(r,o){if(!(r in globalThis))try{globalThis[r]=o;}catch{}}i$1(e,"e"),a(e,"polyfill"),e("fetch",node.fetch),e("Blob",node.Blob),e("File",node.File),e("FormData",node.FormData),e("Headers",node.Headers),e("Request",node.Request),e("Response",node.Response),e("AbortController",node.AbortController);

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode$1(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode$1(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode$1(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode$1(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split("?");
  return (s0.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  const [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  const { pathname, search, hash } = parsePath(
    path.replace(/\/(?=[A-Za-z]:)/, "")
  );
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const fieldContentRegExp = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = options || {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function serialize(name, value, options) {
  const opt = options || {};
  const enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  const encodedValue = enc(value);
  if (encodedValue && !fieldContentRegExp.test(encodedValue)) {
    throw new TypeError("argument val is invalid");
  }
  let str = name + "=" + encodedValue;
  if (void 0 !== opt.maxAge && opt.maxAge !== null) {
    const maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge) || !Number.isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (!isDate(opt.expires) || Number.isNaN(opt.expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    const priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function isDate(val) {
  return Object.prototype.toString.call(val) === "[object Date]" || val instanceof Date;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function encode(val) {
  return encodeURIComponent(val);
}

const defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function objectHash(object, options) {
  if (options) {
    options = { ...defaults, ...options };
  } else {
    options = defaults;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
const defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */ new Map();
  const write = (str) => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === void 0) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter((key) => {
            return !options.excludeKeys(key);
          });
          extraKeys = extraKeys.filter((key) => {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry);
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        );
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn);
      }
    },
    number(number) {
      return write("number:" + number);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex) {
      return write("regex:" + regex.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set) {
      write("set:");
      const arr = [...set];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number) {
      return write("bigint:" + number.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}

class WordArray {
  constructor(words, sigBytes) {
    words = this.words = words || [];
    this.sigBytes = sigBytes === void 0 ? words.length * 4 : sigBytes;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
    } else {
      for (let j = 0; j < wordArray.sigBytes; j += 4) {
        this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new WordArray([...this.words]);
  }
}
const Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16), (bite & 15).toString(16));
    }
    return hexChars.join("");
  }
};
const Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = wordArray.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    return base64Chars.join("");
  }
};
const Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
const Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
class BufferedBlockAlgorithm {
  constructor() {
    this._data = new WordArray();
    this._nDataBytes = 0;
    this._minBufferSize = 0;
    this.blockSize = 512 / 32;
  }
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _doProcessBlock(_dataWords, _offset) {
  }
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
        this._doProcessBlock(this._data.words, offset);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
}
class Hasher extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
}

const H$2 = [
  1779033703,
  -1150833019,
  1013904242,
  -1521486534,
  1359893119,
  -1694144372,
  528734635,
  1541459225
];
const K$1 = [
  1116352408,
  1899447441,
  -1245643825,
  -373957723,
  961987163,
  1508970993,
  -1841331548,
  -1424204075,
  -670586216,
  310598401,
  607225278,
  1426881987,
  1925078388,
  -2132889090,
  -1680079193,
  -1046744716,
  -459576895,
  -272742522,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  -1740746414,
  -1473132947,
  -1341970488,
  -1084653625,
  -958395405,
  -710438585,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  -2117940946,
  -1838011259,
  -1564481375,
  -1474664885,
  -1035236496,
  -949202525,
  -778901479,
  -694614492,
  -200395387,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  -2067236844,
  -1933114872,
  -1866530822,
  -1538233109,
  -1090935817,
  -965641998
];
const W$2 = [];
class SHA256 extends Hasher {
  constructor() {
    super(...arguments);
    this._hash = new WordArray([...H$2]);
  }
  reset() {
    super.reset();
    this._hash = new WordArray([...H$2]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d = H2[3];
    let e = H2[4];
    let f = H2[5];
    let g = H2[6];
    let h = H2[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        W$2[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W$2[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W$2[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W$2[i] = gamma0 + W$2[i - 7] + gamma1 + W$2[i - 16];
      }
      const ch = e & f ^ ~e & g;
      const maj = a & b ^ a & c ^ b & c;
      const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h + sigma1 + ch + K$1[i] + W$2[i];
      const t2 = sigma0 + maj;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f | 0;
    H2[6] = H2[6] + g | 0;
    H2[7] = H2[7] + h | 0;
  }
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(
      nBitsTotal / 4294967296
    );
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}

function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    // @ts-ignore
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode !== void 0) {
      node = nextNode;
    } else {
      node = node.placeholderChildNode;
      if (node !== null) {
        params[node.paramName] = section;
        paramsFound = true;
      } else {
        break;
      }
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildNode = childNode;
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      node = childNode;
    }
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections[sections.length - 1];
    node.data = null;
    if (Object.keys(node.children).length === 0) {
      const parentNode = node.parent;
      parentNode.children.delete(lastSection);
      parentNode.wildcardChildNode = null;
      parentNode.placeholderChildNode = null;
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildNode: null
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table);
}
function _createMatcher(table) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table) {
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path.startsWith(key)) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        table.static.set(path, node.data);
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function rawHeaders(headers) {
  const rawHeaders2 = [];
  for (const key in headers) {
    if (Array.isArray(headers[key])) {
      for (const h of headers[key]) {
        rawHeaders2.push(key, h);
      }
    } else {
      rawHeaders2.push(key, headers[key]);
    }
  }
  return rawHeaders2;
}
function mergeFns(...functions) {
  return function(...args) {
    for (const fn of functions) {
      fn(...args);
    }
  };
}
function createNotImplementedError(name) {
  throw new Error(`[unenv] ${name} is not implemented yet!`);
}

let defaultMaxListeners = 10;
let EventEmitter$1 = class EventEmitter {
  __unenv__ = true;
  _events = /* @__PURE__ */ Object.create(null);
  _maxListeners;
  static get defaultMaxListeners() {
    return defaultMaxListeners;
  }
  static set defaultMaxListeners(arg) {
    if (typeof arg !== "number" || arg < 0 || Number.isNaN(arg)) {
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + "."
      );
    }
    defaultMaxListeners = arg;
  }
  setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
      throw new RangeError(
        'The value of "n" is out of range. It must be a non-negative number. Received ' + n + "."
      );
    }
    this._maxListeners = n;
    return this;
  }
  getMaxListeners() {
    return _getMaxListeners(this);
  }
  emit(type, ...args) {
    if (!this._events[type] || this._events[type].length === 0) {
      return false;
    }
    if (type === "error") {
      let er;
      if (args.length > 0) {
        er = args[0];
      }
      if (er instanceof Error) {
        throw er;
      }
      const err = new Error(
        "Unhandled error." + (er ? " (" + er.message + ")" : "")
      );
      err.context = er;
      throw err;
    }
    for (const _listener of this._events[type]) {
      (_listener.listener || _listener).apply(this, args);
    }
    return true;
  }
  addListener(type, listener) {
    return _addListener(this, type, listener, false);
  }
  on(type, listener) {
    return _addListener(this, type, listener, false);
  }
  prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  }
  once(type, listener) {
    return this.on(type, _wrapOnce(this, type, listener));
  }
  prependOnceListener(type, listener) {
    return this.prependListener(type, _wrapOnce(this, type, listener));
  }
  removeListener(type, listener) {
    return _removeListener(this, type, listener);
  }
  off(type, listener) {
    return this.removeListener(type, listener);
  }
  removeAllListeners(type) {
    return _removeAllListeners(this, type);
  }
  listeners(type) {
    return _listeners(this, type, true);
  }
  rawListeners(type) {
    return _listeners(this, type, false);
  }
  listenerCount(type) {
    return this.rawListeners(type).length;
  }
  eventNames() {
    return Object.keys(this._events);
  }
};
function _addListener(target, type, listener, prepend) {
  _checkListener(listener);
  if (target._events.newListener !== void 0) {
    target.emit("newListener", type, listener.listener || listener);
  }
  if (!target._events[type]) {
    target._events[type] = [];
  }
  if (prepend) {
    target._events[type].unshift(listener);
  } else {
    target._events[type].push(listener);
  }
  const maxListeners = _getMaxListeners(target);
  if (maxListeners > 0 && target._events[type].length > maxListeners && !target._events[type].warned) {
    target._events[type].warned = true;
    const warning = new Error(
      `[unenv] Possible EventEmitter memory leak detected. ${target._events[type].length} ${type} listeners added. Use emitter.setMaxListeners() to increase limit`
    );
    warning.name = "MaxListenersExceededWarning";
    warning.emitter = target;
    warning.type = type;
    warning.count = target._events[type]?.length;
    console.warn(warning);
  }
  return target;
}
function _removeListener(target, type, listener) {
  _checkListener(listener);
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  const lenBeforeFilter = target._events[type].length;
  target._events[type] = target._events[type].filter((fn) => fn !== listener);
  if (lenBeforeFilter === target._events[type].length) {
    return target;
  }
  if (target._events.removeListener) {
    target.emit("removeListener", type, listener.listener || listener);
  }
  if (target._events[type].length === 0) {
    delete target._events[type];
  }
  return target;
}
function _removeAllListeners(target, type) {
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  if (target._events.removeListener) {
    for (const _listener of target._events[type]) {
      target.emit("removeListener", type, _listener.listener || _listener);
    }
  }
  delete target._events[type];
  return target;
}
function _wrapOnce(target, type, listener) {
  let fired = false;
  const wrapper = (...args) => {
    if (fired) {
      return;
    }
    target.removeListener(type, wrapper);
    fired = true;
    return args.length === 0 ? listener.call(target) : listener.apply(target, args);
  };
  wrapper.listener = listener;
  return wrapper;
}
function _getMaxListeners(target) {
  return target._maxListeners ?? EventEmitter$1.defaultMaxListeners;
}
function _listeners(target, type, unwrap) {
  let listeners = target._events[type];
  if (typeof listeners === "function") {
    listeners = [listeners];
  }
  return unwrap ? listeners.map((l) => l.listener || l) : listeners;
}
function _checkListener(listener) {
  if (typeof listener !== "function") {
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' + typeof listener
    );
  }
}

const EventEmitter = globalThis.EventEmitter || EventEmitter$1;

class _Readable extends EventEmitter {
  __unenv__ = true;
  readableEncoding = null;
  readableEnded = true;
  readableFlowing = false;
  readableHighWaterMark = 0;
  readableLength = 0;
  readableObjectMode = false;
  readableAborted = false;
  readableDidRead = false;
  closed = false;
  errored = null;
  readable = false;
  destroyed = false;
  static from(_iterable, options) {
    return new _Readable(options);
  }
  constructor(_opts) {
    super();
  }
  _read(_size) {
  }
  read(_size) {
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  isPaused() {
    return true;
  }
  unpipe(_destination) {
    return this;
  }
  unshift(_chunk, _encoding) {
  }
  wrap(_oldStream) {
    return this;
  }
  push(_chunk, _encoding) {
    return false;
  }
  _destroy(_error, _callback) {
    this.removeAllListeners();
  }
  destroy(error) {
    this.destroyed = true;
    this._destroy(error);
    return this;
  }
  pipe(_destenition, _options) {
    return {};
  }
  compose(stream, options) {
    throw new Error("[unenv] Method not implemented.");
  }
  [Symbol.asyncDispose]() {
    this.destroy();
    return Promise.resolve();
  }
  async *[Symbol.asyncIterator]() {
    throw createNotImplementedError("Readable.asyncIterator");
  }
  iterator(options) {
    throw createNotImplementedError("Readable.iterator");
  }
  map(fn, options) {
    throw createNotImplementedError("Readable.map");
  }
  filter(fn, options) {
    throw createNotImplementedError("Readable.filter");
  }
  forEach(fn, options) {
    throw createNotImplementedError("Readable.forEach");
  }
  reduce(fn, initialValue, options) {
    throw createNotImplementedError("Readable.reduce");
  }
  find(fn, options) {
    throw createNotImplementedError("Readable.find");
  }
  findIndex(fn, options) {
    throw createNotImplementedError("Readable.findIndex");
  }
  some(fn, options) {
    throw createNotImplementedError("Readable.some");
  }
  toArray(options) {
    throw createNotImplementedError("Readable.toArray");
  }
  every(fn, options) {
    throw createNotImplementedError("Readable.every");
  }
  flatMap(fn, options) {
    throw createNotImplementedError("Readable.flatMap");
  }
  drop(limit, options) {
    throw createNotImplementedError("Readable.drop");
  }
  take(limit, options) {
    throw createNotImplementedError("Readable.take");
  }
  asIndexedPairs(options) {
    throw createNotImplementedError("Readable.asIndexedPairs");
  }
}
const Readable = globalThis.Readable || _Readable;

class _Writable extends EventEmitter {
  __unenv__ = true;
  writable = true;
  writableEnded = false;
  writableFinished = false;
  writableHighWaterMark = 0;
  writableLength = 0;
  writableObjectMode = false;
  writableCorked = 0;
  closed = false;
  errored = null;
  writableNeedDrain = false;
  destroyed = false;
  _data;
  _encoding = "utf-8";
  constructor(_opts) {
    super();
  }
  pipe(_destenition, _options) {
    return {};
  }
  _write(chunk, encoding, callback) {
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return;
    }
    if (this._data === void 0) {
      this._data = chunk;
    } else {
      const a = typeof this._data === "string" ? Buffer.from(this._data, this._encoding || encoding || "utf8") : this._data;
      const b = typeof chunk === "string" ? Buffer.from(chunk, encoding || this._encoding || "utf8") : chunk;
      this._data = Buffer.concat([a, b]);
    }
    this._encoding = encoding;
    if (callback) {
      callback();
    }
  }
  _writev(_chunks, _callback) {
  }
  _destroy(_error, _callback) {
  }
  _final(_callback) {
  }
  write(chunk, arg2, arg3) {
    const encoding = typeof arg2 === "string" ? this._encoding : "utf-8";
    const cb = typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    this._write(chunk, encoding, cb);
    return true;
  }
  setDefaultEncoding(_encoding) {
    return this;
  }
  end(arg1, arg2, arg3) {
    const callback = typeof arg1 === "function" ? arg1 : typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return this;
    }
    const data = arg1 === callback ? void 0 : arg1;
    if (data) {
      const encoding = arg2 === callback ? void 0 : arg2;
      this.write(data, encoding, callback);
    }
    this.writableEnded = true;
    this.writableFinished = true;
    this.emit("close");
    this.emit("finish");
    return this;
  }
  cork() {
  }
  uncork() {
  }
  destroy(_error) {
    this.destroyed = true;
    delete this._data;
    this.removeAllListeners();
    return this;
  }
  compose(stream, options) {
    throw new Error("[h3] Method not implemented.");
  }
}
const Writable = globalThis.Writable || _Writable;

const __Duplex = class {
  allowHalfOpen = true;
  _destroy;
  constructor(readable = new Readable(), writable = new Writable()) {
    Object.assign(this, readable);
    Object.assign(this, writable);
    this._destroy = mergeFns(readable._destroy, writable._destroy);
  }
};
function getDuplex() {
  Object.assign(__Duplex.prototype, Readable.prototype);
  Object.assign(__Duplex.prototype, Writable.prototype);
  return __Duplex;
}
const _Duplex = /* @__PURE__ */ getDuplex();
const Duplex = globalThis.Duplex || _Duplex;

class Socket extends Duplex {
  __unenv__ = true;
  bufferSize = 0;
  bytesRead = 0;
  bytesWritten = 0;
  connecting = false;
  destroyed = false;
  pending = false;
  localAddress = "";
  localPort = 0;
  remoteAddress = "";
  remoteFamily = "";
  remotePort = 0;
  autoSelectFamilyAttemptedAddresses = [];
  readyState = "readOnly";
  constructor(_options) {
    super();
  }
  write(_buffer, _arg1, _arg2) {
    return false;
  }
  connect(_arg1, _arg2, _arg3) {
    return this;
  }
  end(_arg1, _arg2, _arg3) {
    return this;
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  setTimeout(_timeout, _callback) {
    return this;
  }
  setNoDelay(_noDelay) {
    return this;
  }
  setKeepAlive(_enable, _initialDelay) {
    return this;
  }
  address() {
    return {};
  }
  unref() {
    return this;
  }
  ref() {
    return this;
  }
  destroySoon() {
    this.destroy();
  }
  resetAndDestroy() {
    const err = new Error("ERR_SOCKET_CLOSED");
    err.code = "ERR_SOCKET_CLOSED";
    this.destroy(err);
    return this;
  }
}

class IncomingMessage extends Readable {
  __unenv__ = {};
  aborted = false;
  httpVersion = "1.1";
  httpVersionMajor = 1;
  httpVersionMinor = 1;
  complete = true;
  connection;
  socket;
  headers = {};
  trailers = {};
  method = "GET";
  url = "/";
  statusCode = 200;
  statusMessage = "";
  closed = false;
  errored = null;
  readable = false;
  constructor(socket) {
    super();
    this.socket = this.connection = socket || new Socket();
  }
  get rawHeaders() {
    return rawHeaders(this.headers);
  }
  get rawTrailers() {
    return [];
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  get headersDistinct() {
    return _distinct(this.headers);
  }
  get trailersDistinct() {
    return _distinct(this.trailers);
  }
}
function _distinct(obj) {
  const d = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key) {
      d[key] = (Array.isArray(value) ? value : [value]).filter(
        Boolean
      );
    }
  }
  return d;
}

class ServerResponse extends Writable {
  __unenv__ = true;
  statusCode = 200;
  statusMessage = "";
  upgrading = false;
  chunkedEncoding = false;
  shouldKeepAlive = false;
  useChunkedEncodingByDefault = false;
  sendDate = false;
  finished = false;
  headersSent = false;
  strictContentLength = false;
  connection = null;
  socket = null;
  req;
  _headers = {};
  constructor(req) {
    super();
    this.req = req;
  }
  assignSocket(socket) {
    socket._httpMessage = this;
    this.socket = socket;
    this.connection = socket;
    this.emit("socket", socket);
    this._flush();
  }
  _flush() {
    this.flushHeaders();
  }
  detachSocket(_socket) {
  }
  writeContinue(_callback) {
  }
  writeHead(statusCode, arg1, arg2) {
    if (statusCode) {
      this.statusCode = statusCode;
    }
    if (typeof arg1 === "string") {
      this.statusMessage = arg1;
      arg1 = void 0;
    }
    const headers = arg2 || arg1;
    if (headers) {
      if (Array.isArray(headers)) ; else {
        for (const key in headers) {
          this.setHeader(key, headers[key]);
        }
      }
    }
    this.headersSent = true;
    return this;
  }
  writeProcessing() {
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  appendHeader(name, value) {
    name = name.toLowerCase();
    const current = this._headers[name];
    const all = [
      ...Array.isArray(current) ? current : [current],
      ...Array.isArray(value) ? value : [value]
    ].filter(Boolean);
    this._headers[name] = all.length > 1 ? all : all[0];
    return this;
  }
  setHeader(name, value) {
    this._headers[name.toLowerCase()] = value;
    return this;
  }
  getHeader(name) {
    return this._headers[name.toLowerCase()];
  }
  getHeaders() {
    return this._headers;
  }
  getHeaderNames() {
    return Object.keys(this._headers);
  }
  hasHeader(name) {
    return name.toLowerCase() in this._headers;
  }
  removeHeader(name) {
    delete this._headers[name.toLowerCase()];
  }
  addTrailers(_headers) {
  }
  flushHeaders() {
  }
  writeEarlyHints(_headers, cb) {
    if (typeof cb === "function") {
      cb();
    }
  }
}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => {
  __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Error extends Error {
  constructor(message, opts = {}) {
    super(message, opts);
    __publicField$2(this, "statusCode", 500);
    __publicField$2(this, "fatal", false);
    __publicField$2(this, "unhandled", false);
    __publicField$2(this, "statusMessage");
    __publicField$2(this, "data");
    __publicField$2(this, "cause");
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
__publicField$2(H3Error, "__h3_error__", true);
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}
function isMethod(event, expected, allowHead) {
  if (allowHead && event.method === "HEAD") {
    return true;
  }
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected, allowHead)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const xForwardedHost = event.node.req.headers["x-forwarded-host"];
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}
function getRequestIP(event, opts = {}) {
  if (event.context.clientAddress) {
    return event.context.clientAddress;
  }
  if (opts.xForwardedFor) {
    const xForwardedFor = getRequestHeader(event, "x-forwarded-for")?.split(",").shift()?.trim();
    if (xForwardedFor) {
      return xForwardedFor;
    }
  }
  if (event.node.req.socket.remoteAddress) {
    return event.node.req.socket.remoteAddress;
  }
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}

function parseCookies(event) {
  return parse(event.node.req.headers.cookie || "");
}
function getCookie(event, name) {
  return parseCookies(event)[name];
}
function setCookie(event, name, value, serializeOptions) {
  serializeOptions = { path: "/", ...serializeOptions };
  const cookieStr = serialize(name, value, serializeOptions);
  let setCookies = event.node.res.getHeader("set-cookie");
  if (!Array.isArray(setCookies)) {
    setCookies = [setCookies];
  }
  const _optionsHash = objectHash(serializeOptions);
  setCookies = setCookies.filter((cookieValue) => {
    return cookieValue && _optionsHash !== objectHash(parse(cookieValue));
  });
  event.node.res.setHeader("set-cookie", [...setCookies, cookieStr]);
}
function deleteCookie(event, name, serializeOptions) {
  setCookie(event, name, "", {
    ...serializeOptions,
    maxAge: 0
  });
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeaders(event) {
  return event.node.res.getHeaders();
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(name, value);
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
const setHeader = setResponseHeader;
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders(
    getProxyRequestHeaders(event),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  const response = await _getFetch(opts.fetch)(target, {
    headers: opts.headers,
    ignoreResponseError: true,
    // make $ofetch.raw transparent
    ...opts.fetchOptions
  });
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name)) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Event {
  constructor(req, res) {
    __publicField$1(this, "__is_event__", true);
    // Context
    __publicField$1(this, "node");
    // Node
    __publicField$1(this, "web");
    // Web
    __publicField$1(this, "context", {});
    // Shared
    // Request
    __publicField$1(this, "_method");
    __publicField$1(this, "_path");
    __publicField$1(this, "_headers");
    __publicField$1(this, "_requestBody");
    // Response
    __publicField$1(this, "_handled", false);
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. **/
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. **/
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      await options.onAfterResponse(event, void 0);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const { pathname } = parseURL(info.url || "/");
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === void 0 && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      await sendError(event, error, !!app.options.debug);
    }
  };
  return toNodeHandle;
}

const s=globalThis.Headers,i=globalThis.AbortController,l$1=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function mergeFetchOptions(input, defaults, Headers = globalThis.Headers) {
  const merged = {
    ...defaults,
    ...input
  };
  if (defaults?.params && input?.params) {
    merged.params = {
      ...defaults?.params,
      ...input?.params
    };
  }
  if (defaults?.query && input?.query) {
    merged.query = {
      ...defaults?.query,
      ...input?.query
    };
  }
  if (defaults?.headers && input?.headers) {
    merged.headers = new Headers(defaults?.headers || {});
    for (const [key, value] of new Headers(input?.headers || {})) {
      merged.headers.set(key, value);
    }
  }
  return merged;
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  //  Gateway Timeout
]);
const nullBodyResponses$1 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch$1(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1,
          timeout: context.options.timeout
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: mergeFetchOptions(_options, globalOptions.defaults, Headers),
      response: void 0,
      error: void 0
    };
    context.options.method = context.options.method?.toUpperCase();
    if (context.options.onRequest) {
      await context.options.onRequest(context);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query || context.options.params) {
        context.request = withQuery(context.request, {
          ...context.options.params,
          ...context.options.query
        });
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      setTimeout(() => controller.abort(), context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await context.options.onRequestError(context);
      }
      return await onError(context);
    }
    const hasBody = context.response.body && !nullBodyResponses$1.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await context.options.onResponse(context);
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await context.options.onResponseError(context);
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}) => createFetch$1({
    ...globalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l$1;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http__default$1.Agent(agentOptions);
  const httpsAgent = new node_https__default.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l$1(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch || createNodeFetch();
const Headers$1 = globalThis.Headers || s;
const AbortController$1 = globalThis.AbortController || i;
createFetch$1({ fetch, Headers: Headers$1, AbortController: AbortController$1 });

const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createCall(handle) {
  return function callHandle(context) {
    const req = new IncomingMessage();
    const res = new ServerResponse(req);
    req.url = context.url || "/";
    req.method = context.method || "GET";
    req.headers = {};
    if (context.headers) {
      const headerEntries = typeof context.headers.entries === "function" ? context.headers.entries() : Object.entries(context.headers);
      for (const [name, value] of headerEntries) {
        if (!value) {
          continue;
        }
        req.headers[name.toLowerCase()] = value;
      }
    }
    req.headers.host = req.headers.host || context.host || "localhost";
    req.connection.encrypted = // @ts-ignore
    req.connection.encrypted || context.protocol === "https";
    req.body = context.body || null;
    req.__unenv__ = context.context;
    return handle(req, res).then(() => {
      let body = res._data;
      if (nullBodyResponses.has(res.statusCode) || req.method.toUpperCase() === "HEAD") {
        body = null;
        delete res._headers["content-length"];
      }
      const r = {
        body,
        headers: res._headers,
        status: res.statusCode,
        statusText: res.statusMessage
      };
      req.destroy();
      res.destroy();
      return r;
    });
  };
}

function createFetch(call, _fetch = global.fetch) {
  return async function ufetch(input, init) {
    const url = input.toString();
    if (!url.startsWith("/")) {
      return _fetch(url, init);
    }
    try {
      const r = await call({ url, ...init });
      return new Response(r.body, {
        status: r.status,
        statusText: r.statusText,
        headers: Object.fromEntries(
          Object.entries(r.headers).map(([name, value]) => [
            name,
            Array.isArray(value) ? value.join(",") : String(value) || ""
          ])
        )
      });
    } catch (error) {
      return new Response(error.toString(), {
        status: Number.parseInt(error.statusCode || error.code) || 500,
        statusText: error.statusText
      });
    }
  };
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = separators ?? STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner ?? "-") : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const inlineAppConfig = {};



const appConfig$1 = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {}
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig$1));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (typeof Buffer === void 0) {
    throw new TypeError("[unstorage] Buffer is not supported!");
  }
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  checkBufferSupport();
  const base64 = Buffer.from(value).toString("base64");
  return BASE64_PREFIX + base64;
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  checkBufferSupport();
  return Buffer.from(value.slice(BASE64_PREFIX.length), "base64");
}

const storageKeyProperties = [
  "hasItem",
  "getItem",
  "getItemRaw",
  "setItem",
  "setItemRaw",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    options: {},
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return Array.from(data.keys());
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          await asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        const keys = rawKeys.map((key) => mount.mountpoint + normalizeKey$1(key)).filter((key) => !maskedMounts.some((p) => key.startsWith(p)));
        allKeys.push(...keys);
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      return base ? allKeys.filter((key) => key.startsWith(base) && !key.endsWith("$")) : allKeys.filter((key) => !key.endsWith("$"));
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    }
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        const dirFiles = await readdirRecursive(entryPath, ignore);
        files.push(...dirFiles.map((f) => entry.name + "/" + f));
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.\:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys() {
      return readdirRecursive(r("."), opts.ignore);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/home/sh1man999/solidstart-auth/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());

const nitroAsyncContext = getContext("nitro-app", {
  asyncContext: true,
  AsyncLocalStorage: AsyncLocalStorage 
});

const appConfig = {"name":"vinxi","routers":[{"name":"public","type":"static","base":"/","dir":"./public","root":"/home/sh1man999/solidstart-auth","order":0,"outDir":"/home/sh1man999/solidstart-auth/.vinxi/build/public"},{"name":"ssr","type":"http","link":{"client":"client"},"handler":"src/entry-server.tsx","extensions":["js","jsx","ts","tsx"],"target":"server","root":"/home/sh1man999/solidstart-auth","base":"/","outDir":"/home/sh1man999/solidstart-auth/.vinxi/build/ssr","order":1},{"name":"client","type":"client","base":"/_build","handler":"src/entry-client.tsx","extensions":["js","jsx","ts","tsx"],"target":"browser","root":"/home/sh1man999/solidstart-auth","outDir":"/home/sh1man999/solidstart-auth/.vinxi/build/client","order":2},{"name":"server-fns","type":"http","base":"/_server","handler":"node_modules/.pnpm/@solidjs+start@0.7.4_solid-js@1.8.15_vinxi@0.3.10_vite@5.1.4/node_modules/@solidjs/start/dist/runtime/server-handler.js","target":"server","root":"/home/sh1man999/solidstart-auth","outDir":"/home/sh1man999/solidstart-auth/.vinxi/build/server-fns","order":3}],"server":{"compressPublicAssets":{"brotli":true},"experimental":{"asyncContext":true}},"root":"/home/sh1man999/solidstart-auth"};
				const buildManifest = {"ssr":{"_client-BSRlgb_c.js":{"file":"assets/client-BSRlgb_c.js"},"src/routes/(auth).tsx?pick=default&pick=$css":{"file":"(auth).js","src":"src/routes/(auth).tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_client-BSRlgb_c.js"]},"src/routes/(auth)/(main).tsx?pick=default&pick=$css":{"file":"(main).js","src":"src/routes/(auth)/(main).tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true},"src/routes/login.tsx?pick=default&pick=$css":{"file":"login.js","src":"src/routes/login.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_client-BSRlgb_c.js"]},"virtual:#vinxi/handler/ssr":{"file":"ssr.js","src":"virtual:#vinxi/handler/ssr","isEntry":true,"imports":["_client-BSRlgb_c.js"],"dynamicImports":["src/routes/(auth).tsx?pick=default&pick=$css","src/routes/(auth).tsx?pick=default&pick=$css","src/routes/login.tsx?pick=default&pick=$css","src/routes/login.tsx?pick=default&pick=$css","src/routes/(auth)/(main).tsx?pick=default&pick=$css","src/routes/(auth)/(main).tsx?pick=default&pick=$css"],"css":["assets/ssr-DwuTyoZc.css"]}},"client":{"_client-BEg59hxz.js":{"file":"assets/client-BEg59hxz.js"},"src/routes/(auth).tsx?pick=default&pick=$css":{"file":"assets/(auth)-DAShUm1-.js","src":"src/routes/(auth).tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_client-BEg59hxz.js"]},"src/routes/(auth)/(main).tsx?pick=default&pick=$css":{"file":"assets/(main)-vec-_dOZ.js","src":"src/routes/(auth)/(main).tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true},"src/routes/login.tsx?pick=default&pick=$css":{"file":"assets/login-C0nghsom.js","src":"src/routes/login.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_client-BEg59hxz.js"]},"virtual:#vinxi/handler/client":{"file":"assets/client-ChY1_Ccb.js","src":"virtual:#vinxi/handler/client","isEntry":true,"imports":["_client-BEg59hxz.js"],"dynamicImports":["src/routes/(auth).tsx?pick=default&pick=$css","src/routes/login.tsx?pick=default&pick=$css","src/routes/(auth)/(main).tsx?pick=default&pick=$css"],"css":["assets/client-DwuTyoZc.css"]}},"server-fns":{"_rpc.mjs":{"file":"rpc.mjs"},"_server-fns.mjs":{"file":"server-fns.mjs","imports":["_rpc.mjs"],"dynamicImports":["src/routes/(auth).tsx?pick=default&pick=$css","src/routes/(auth).tsx?pick=default&pick=$css","src/routes/login.tsx?pick=default&pick=$css","src/routes/login.tsx?pick=default&pick=$css","src/routes/(auth)/(main).tsx?pick=default&pick=$css","src/routes/(auth)/(main).tsx?pick=default&pick=$css","src/app.tsx"]},"src/app.tsx":{"file":"app.mjs","src":"src/app.tsx","isDynamicEntry":true,"imports":["_server-fns.mjs","_rpc.mjs"],"css":["assets/app-DwuTyoZc.css"]},"src/routes/(auth).tsx?pick=default&pick=$css":{"file":"(auth).mjs","src":"src/routes/(auth).tsx?pick=default&pick=$css","isDynamicEntry":true,"imports":["_server-fns.mjs","_rpc.mjs"]},"src/routes/(auth)/(main).tsx?pick=default&pick=$css":{"file":"(main).mjs","src":"src/routes/(auth)/(main).tsx?pick=default&pick=$css","isDynamicEntry":true},"src/routes/login.tsx?pick=default&pick=$css":{"file":"login.mjs","src":"src/routes/login.tsx?pick=default&pick=$css","isDynamicEntry":true,"imports":["_server-fns.mjs","_rpc.mjs"]},"src/server/rpc.ts":{"file":"c_4631.mjs","src":"src/server/rpc.ts","isEntry":true,"imports":["_rpc.mjs"]},"virtual:#vinxi/handler/server-fns":{"file":"entry.mjs","src":"virtual:#vinxi/handler/server-fns","isEntry":true,"imports":["_server-fns.mjs","_rpc.mjs"]}}};

				const routeManifest = {"ssr":{},"client":{},"server-fns":{}};

        function createProdApp(appConfig) {
          return {
            config: { ...appConfig, buildManifest, routeManifest },
            getRouter(name) {
              return appConfig.routers.find(router => router.name === name)
            }
          }
        }

        function plugin$2(app) {
          const prodApp = createProdApp(appConfig);
          globalThis.app = prodApp;
        }

function plugin$1(app) {
	globalThis.$handle = (event) => app.h3App.handler(event);
}

/**
 * Traverses the module graph and collects assets for a given chunk
 *
 * @param {any} manifest Client manifest
 * @param {string} id Chunk id
 * @param {Map<string, string[]>} assetMap Cache of assets
 * @returns Array of asset URLs
 */
const findAssetsInViteManifest = (manifest, id, assetMap = new Map()) => {
	const stack = [];

	/**
	 * @param {string} id
	 */
	function traverse(id) {
		if (stack.includes(id)) {
			return [];
		}

		const cached = assetMap.get(id);
		if (cached) {
			return cached;
		}
		const chunk = manifest[id];
		if (!chunk) {
			return [];
		}

		stack.push(id);

		const assets = [
			...(chunk.assets || []),
			...(chunk.css || []),
			...(chunk.imports?.flatMap(traverse) || []),
		];
		const imports = chunk.imports?.flatMap(traverse) || [];
		const all = [...assets, ...imports].filter(Boolean);
		all.push(chunk.file);
		assetMap.set(id, all);

		stack.pop();

		return Array.from(new Set(all));
	}
	return traverse(id);
};

/** @typedef {import("../app.js").App & { config: { buildManifest: { [key:string]: any } }}} ProdApp */

function createHtmlTagsForAssets(router, app, assets) {
	return assets
		.filter(
			(asset) =>
				asset.endsWith(".css") ||
				asset.endsWith(".js") ||
				asset.endsWith(".mjs"),
		)
		.map((asset) => ({
			tag: "link",
			attrs: {
				href: joinURL(app.config.server.baseURL ?? "/", router.base, asset),
				key: join$1(app.config.server.baseURL ?? "", router.base, asset),
				...(asset.endsWith(".css")
					? { rel: "stylesheet", precendence: "high" }
					: { rel: "modulepreload" }),
			},
		}));
}

/**
 *
 * @param {ProdApp} app
 * @returns
 */
function createProdManifest(app) {
	const manifest = new Proxy(
		{},
		{
			get(target, routerName) {
				invariant(typeof routerName === "string", "Bundler name expected");
				const router = app.getRouter(routerName);
				const bundlerManifest = app.config.buildManifest[routerName];

				invariant(
					router.type !== "static",
					"manifest not available for static router",
				);
				return {
					handler: router.handler,
					async assets() {
						/** @type {{ [key: string]: string[] }} */
						let assets = {};
						assets[router.handler] = await this.inputs[router.handler].assets();
						for (const route of (await router.internals.routes?.getRoutes()) ??
							[]) {
							assets[route.filePath] = await this.inputs[
								route.filePath
							].assets();
						}
						return assets;
					},
					async routes() {
						return (await router.internals.routes?.getRoutes()) ?? [];
					},
					async json() {
						/** @type {{ [key: string]: { output: string; assets: string[]} }} */
						let json = {};
						for (const input of Object.keys(this.inputs)) {
							json[input] = {
								output: this.inputs[input].output.path,
								assets: await this.inputs[input].assets(),
							};
						}
						return json;
					},
					chunks: new Proxy(
						{},
						{
							get(target, chunk) {
								invariant(typeof chunk === "string", "Chunk expected");
								const chunkPath = join$1(
									router.outDir,
									router.base,
									chunk + ".mjs",
								);
								return {
									import() {
										if (globalThis.$$chunks[chunk + ".mjs"]) {
											return globalThis.$$chunks[chunk + ".mjs"];
										}
										return import(
											/* @vite-ignore */ pathToFileURL(chunkPath).href
										);
									},
									output: {
										path: chunkPath,
									},
								};
							},
						},
					),
					inputs: new Proxy(
						{},
						{
							ownKeys(target) {
								const keys = Object.keys(bundlerManifest)
									.filter((id) => bundlerManifest[id].isEntry)
									.map((id) => id);
								return keys;
							},
							getOwnPropertyDescriptor(k) {
								return {
									enumerable: true,
									configurable: true,
								};
							},
							get(target, input) {
								invariant(typeof input === "string", "Input expected");
								if (router.target === "server") {
									const id =
										input === router.handler
											? virtualId(handlerModule(router))
											: input;
									return {
										assets() {
											return createHtmlTagsForAssets(
												router,
												app,
												findAssetsInViteManifest(bundlerManifest, id),
											);
										},
										output: {
											path: join$1(
												router.outDir,
												router.base,
												bundlerManifest[id].file,
											),
										},
									};
								} else if (router.target === "browser") {
									const id =
										input === router.handler && !input.endsWith(".html")
											? virtualId(handlerModule(router))
											: input;
									return {
										import() {
											return import(
												/* @vite-ignore */ joinURL(
													app.config.server.baseURL ?? "",
													router.base,
													bundlerManifest[id].file,
												)
											);
										},
										assets() {
											return createHtmlTagsForAssets(
												router,
												app,
												findAssetsInViteManifest(bundlerManifest, id),
											);
										},
										output: {
											path: joinURL(
												app.config.server.baseURL ?? "",
												router.base,
												bundlerManifest[id].file,
											),
										},
									};
								}
							},
						},
					),
				};
			},
		},
	);

	return manifest;
}

function plugin() {
	globalThis.MANIFEST =
		createProdManifest(globalThis.app)
			;
}

function B$2(t={}){let e,n=!1;const r=s=>{if(e&&e!==s)throw new Error("Context conflict")};let a;if(t.asyncContext){const s=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;s?a=new s:console.warn("[unctx] `AsyncLocalStorage` is not provided.");}const c=()=>{if(a&&e===void 0){const s=a.getStore();if(s!==void 0)return s}return e};return {use:()=>{const s=c();if(s===void 0)throw new Error("Context is not available");return s},tryUse:()=>c(),set:(s,i)=>{i||r(s),e=s,n=!0;},unset:()=>{e=void 0,n=!1;},call:(s,i)=>{r(s),e=s;try{return a?a.run(s,i):i()}finally{n||(e=void 0);}},async callAsync(s,i){e=s;const u=()=>{e=s;},h=()=>e===s?u:void 0;m.add(h);try{const x=a?a.run(s,i):i();return n||(e=void 0),await x}finally{m.delete(h);}}}}function G$2(t={}){const e={};return {get(n,r={}){return e[n]||(e[n]=B$2({...t,...r})),e[n],e[n]}}}const f=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:{},R$2="__unctx__",X$3=f[R$2]||(f[R$2]=G$2()),z$1=(t,e={})=>X$3.get(t,e),v="__unctx_async_handlers__",m=f[v]||(f[v]=new Set);function D$2(t){let e;const n=H$1(t),r={duplex:"half",method:t.method,headers:t.headers};return t.node.req.body instanceof ArrayBuffer?new Request(n,{...r,body:t.node.req.body}):new Request(n,{...r,get body(){return e||(e=ae$2(t),e)}})}function J$3(t){return t.web??={request:D$2(t),url:H$1(t)},t.web.request}function Q$3(){return le$1()}const w$1=Symbol("$HTTPEvent");function V$1(t){return typeof t=="object"&&(t instanceof H3Event||t?.[w$1]instanceof H3Event||t?.__is_event__===!0)}function o(t){return function(...e){let n=e[0];if(V$1(n))e[0]=n instanceof H3Event||n.__is_event__?n:n[w$1];else {if(!globalThis.app.config.server.experimental?.asyncContext)throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");if(n=Q$3(),!n)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");e.unshift(n);}return t(...e)}}const H$1=o(getRequestURL),Y$1=o(getRequestIP),S$1=o(setResponseStatus),b=o(getResponseStatus),Z$2=o(getResponseStatusText),l=o(getResponseHeaders),_$2=o(getResponseHeader),ee$1=o(setResponseHeader),te$1=o(appendResponseHeader),ne$3=o(getCookie),se$1=o(setCookie),re$2=o(deleteCookie),oe$3=o(setHeader),ae$2=o(getRequestWebStream),ie$2=o(removeResponseHeader),ce$2=o(J$3);function ue$1(){return z$1("nitro-app",{asyncContext:!!globalThis.app.config.server.experimental?.asyncContext,AsyncLocalStorage:AsyncLocalStorage})}function le$1(){return ue$1().use().event}const d=Symbol("fetchEvent");function fe$1(t){return {request:ce$2(t),response:ge$2(t),clientAddress:Y$1(t),locals:{},nativeEvent:t}}function de$2(t){return {...t}}function me$2(t){if(!t[d]){const e=fe$1(t);t[d]=e;}return t[d]}function Se$2(t,e){for(const[n,r]of e.entries())oe$3(t,n,r);}let pe$2 = class pe{event;constructor(e){this.event=e;}get(e){const n=_$2(this.event,e);return Array.isArray(n)?n.join(", "):n||null}has(e){return this.get(e)!==void 0}set(e,n){return ee$1(this.event,e,n)}delete(e){return ie$2(this.event,e)}append(e,n){te$1(this.event,e,n);}getSetCookie(){const e=_$2(this.event,"Set-Cookie");return Array.isArray(e)?e:[e]}forEach(e){return Object.entries(l(this.event)).forEach(([n,r])=>e(Array.isArray(r)?r.join(", "):r,n,this))}entries(){return Object.entries(l(this.event)).map(([e,n])=>[e,Array.isArray(n)?n.join(", "):n])[Symbol.iterator]()}keys(){return Object.keys(l(this.event))[Symbol.iterator]()}values(){return Object.values(l(this.event)).map(e=>Array.isArray(e)?e.join(", "):e)[Symbol.iterator]()}[Symbol.iterator](){return this.entries()[Symbol.iterator]()}};function ge$2(t){return {get status(){return b(t)},set status(e){S$1(t,e);},get statusText(){return Z$2(t)},set statusText(e){S$1(t,b(),e);},headers:new pe$2(t)}}function g(t,e=302){let n,r;typeof e=="number"?n={status:e}:({revalidate:r,...n}=e,typeof n.status>"u"&&(n.status=302));const a=new Headers(n.headers);return a.set("Location",t),r&&a.set("X-Revalidate",r.toString()),new Response(null,{...n,headers:a})}function y(t,e,n){if(typeof t!="function")throw new Error("Export from a 'use server' module must be a function");const r="";return new Proxy(t,{get(a,c,s){if(c==="url")return `${r}/_server?id=${encodeURIComponent(e)}&name=${encodeURIComponent(n)}`;if(c==="GET")return s},apply(a,c,s){const i=getRequestEvent();if(!i)throw new Error("Cannot call server function outside of a request");const u=de$2(i);return u.locals.serverFunctionMeta={id:e+"#"+n},u.serverOnly=!0,provideRequestEvent(u,()=>t.apply(c,s))}})}const be$2=y(async t=>(se$1("auth_token","test_token"),g("/")),"c_4631","logInServer"),_e$1=y(async t=>(re$2("auth_token"),g("/login")),"c_4631","logOutServer"),we$2=y(async()=>{const t=ne$3("auth_token");return console.log(t),t?2e7:g("/login")},"c_4631","getUserProfileServer");

const mod_0_3 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	getUserProfileServer: we$2,
	logInServer: be$2,
	logOutServer: _e$1
});

const chunks = {};
				chunks['c_4631.mjs'] = mod_0_3;
			
			 function app() {
				 globalThis.$$chunks = chunks;
			 }

const plugins = [
  plugin$2,
plugin$1,
plugin,
app
];

function defineNitroErrorHandler(handler) {
  return handler;
}
const errorHandler = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const { stack, statusCode, statusMessage, message } = normalizeError(error);
    const errorObject = {
      url: event.path || "",
      statusCode,
      statusMessage,
      message,
      stack: void 0
    };
    if (error.unhandled || error.fatal) {
      const tags = [
        "[nitro]",
        "[request error]",
        error.unhandled && "[unhandled]",
        error.fatal && "[fatal]"
      ].filter(Boolean).join(" ");
      console.error(
        tags,
        error.message + "\n" + stack.map((l) => "  " + l.text).join("  \n")
      );
    }
    setResponseStatus(event, statusCode, statusMessage);
    if (isJsonRequest(event)) {
      setResponseHeader(event, "Content-Type", "application/json");
      return send(event, JSON.stringify(errorObject));
    } else {
      setResponseHeader(event, "Content-Type", "text/html");
      return send(event, renderHTMLError(errorObject));
    }
  }
);
function renderHTMLError(error) {
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Request Error";
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${statusCode} ${statusMessage}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css">
  </head>
  <body>
    <main class="container">
      <dialog open>
        <article>
          <header>
            <h2>${statusCode} ${statusMessage}</h2>
          </header>
          <code>
            ${error.message}<br><br>
            ${"\n" + (error.stack || []).map((i) => `&nbsp;&nbsp;${i}`).join("<br>")}
          </code>
          <footer>
            <a href="/" onclick="event.preventDefault();history.back();">Go Back</a>
          </footer>
        </article>
      </dialog>
    </main>
  </body>
</html>
`;
}

const assets = {
  "/_build/server-functions-manifest.json": {
    "type": "application/json",
    "etag": "\"4c-G4bZm8yJ8poGZbc88ZeEoM5gPrY\"",
    "mtime": "2024-03-14T00:22:05.740Z",
    "size": 76,
    "path": "../public/_build/server-functions-manifest.json"
  },
  "/assets/client-BSRlgb_c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"41a8-X7oSVqjREA0t2RzjTIMl9WyRZjs\"",
    "mtime": "2024-03-14T00:22:05.737Z",
    "size": 16808,
    "path": "../public/assets/client-BSRlgb_c.js"
  },
  "/assets/client-BSRlgb_c.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1936-nK50SAbN5vLLW/zkppJDxhUu4u8\"",
    "mtime": "2024-03-14T00:22:06.638Z",
    "size": 6454,
    "path": "../public/assets/client-BSRlgb_c.js.br"
  },
  "/assets/client-BSRlgb_c.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1bee-p0dhOKbfAQLLfP+l5WDihL8aQq0\"",
    "mtime": "2024-03-14T00:22:06.638Z",
    "size": 7150,
    "path": "../public/assets/client-BSRlgb_c.js.gz"
  },
  "/assets/ssr-DwuTyoZc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1e1f-xcjTa7/w4sce9mVCXbem9/eVWII\"",
    "mtime": "2024-03-14T00:22:05.737Z",
    "size": 7711,
    "path": "../public/assets/ssr-DwuTyoZc.css"
  },
  "/assets/ssr-DwuTyoZc.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"7dc-WUAWhffPypt/yZGnW0akp5cJjsM\"",
    "mtime": "2024-03-14T00:22:06.638Z",
    "size": 2012,
    "path": "../public/assets/ssr-DwuTyoZc.css.br"
  },
  "/assets/ssr-DwuTyoZc.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"94f-w3FGZ+xbj+7/8DDJx+DEK0y9aGA\"",
    "mtime": "2024-03-14T00:22:06.638Z",
    "size": 2383,
    "path": "../public/assets/ssr-DwuTyoZc.css.gz"
  },
  "/_build/.vite/manifest.json": {
    "type": "application/json",
    "etag": "\"4e8-Wbm/7annDalLxTLWdGUJzjd9xWE\"",
    "mtime": "2024-03-14T00:22:05.740Z",
    "size": 1256,
    "path": "../public/_build/.vite/manifest.json"
  },
  "/_build/.vite/manifest.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"117-lbgiYqlzYAVXG9+jcj4EADx5dAA\"",
    "mtime": "2024-03-14T00:22:06.638Z",
    "size": 279,
    "path": "../public/_build/.vite/manifest.json.br"
  },
  "/_build/.vite/manifest.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"13f-l0HS2wJuwvCj3ToeVd8rEeJfb+w\"",
    "mtime": "2024-03-14T00:22:06.638Z",
    "size": 319,
    "path": "../public/_build/.vite/manifest.json.gz"
  },
  "/_build/assets/(auth)-DAShUm1-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"49e-FakTOXp9YxOYuFA7FoBEHQAyHdo\"",
    "mtime": "2024-03-14T00:22:05.740Z",
    "size": 1182,
    "path": "../public/_build/assets/(auth)-DAShUm1-.js"
  },
  "/_build/assets/(auth)-DAShUm1-.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1fd-cjVONr++47xttnJ6qSs+83C/0iM\"",
    "mtime": "2024-03-14T00:22:06.638Z",
    "size": 509,
    "path": "../public/_build/assets/(auth)-DAShUm1-.js.br"
  },
  "/_build/assets/(auth)-DAShUm1-.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"259-DJ4jGSQkhQYD5BYb+8kak5ZVQS0\"",
    "mtime": "2024-03-14T00:22:06.638Z",
    "size": 601,
    "path": "../public/_build/assets/(auth)-DAShUm1-.js.gz"
  },
  "/_build/assets/(main)-vec-_dOZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2e-QFsP0/Bkyp43NR51zHhOzQ/5C/w\"",
    "mtime": "2024-03-14T00:22:05.740Z",
    "size": 46,
    "path": "../public/_build/assets/(main)-vec-_dOZ.js"
  },
  "/_build/assets/client-BEg59hxz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d9a8-xwbjsbuAuSadtph0MFzHRMm5emg\"",
    "mtime": "2024-03-14T00:22:05.740Z",
    "size": 55720,
    "path": "../public/_build/assets/client-BEg59hxz.js"
  },
  "/_build/assets/client-BEg59hxz.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4280-KCQdAgbJnoR8565rS1/SepBWmmM\"",
    "mtime": "2024-03-14T00:22:06.638Z",
    "size": 17024,
    "path": "../public/_build/assets/client-BEg59hxz.js.br"
  },
  "/_build/assets/client-BEg59hxz.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4933-eF+BI/Ho5EOnkHNdYW0lNwxAaMo\"",
    "mtime": "2024-03-14T00:22:06.638Z",
    "size": 18739,
    "path": "../public/_build/assets/client-BEg59hxz.js.gz"
  },
  "/_build/assets/client-ChY1_Ccb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"410d-ZN+y14EpYxjOjfXqrUtneV7QK9Y\"",
    "mtime": "2024-03-14T00:22:05.740Z",
    "size": 16653,
    "path": "../public/_build/assets/client-ChY1_Ccb.js"
  },
  "/_build/assets/client-ChY1_Ccb.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1746-+OhaIHpq5209OUXUqNRg49sNGK8\"",
    "mtime": "2024-03-14T00:22:06.638Z",
    "size": 5958,
    "path": "../public/_build/assets/client-ChY1_Ccb.js.br"
  },
  "/_build/assets/client-ChY1_Ccb.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1a09-vgLKRacHkyXQzalNMnOjYsOh2EE\"",
    "mtime": "2024-03-14T00:22:06.638Z",
    "size": 6665,
    "path": "../public/_build/assets/client-ChY1_Ccb.js.gz"
  },
  "/_build/assets/client-DwuTyoZc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1e1f-xcjTa7/w4sce9mVCXbem9/eVWII\"",
    "mtime": "2024-03-14T00:22:05.740Z",
    "size": 7711,
    "path": "../public/_build/assets/client-DwuTyoZc.css"
  },
  "/_build/assets/client-DwuTyoZc.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"7dc-WUAWhffPypt/yZGnW0akp5cJjsM\"",
    "mtime": "2024-03-14T00:22:06.638Z",
    "size": 2012,
    "path": "../public/_build/assets/client-DwuTyoZc.css.br"
  },
  "/_build/assets/client-DwuTyoZc.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"94f-w3FGZ+xbj+7/8DDJx+DEK0y9aGA\"",
    "mtime": "2024-03-14T00:22:06.638Z",
    "size": 2383,
    "path": "../public/_build/assets/client-DwuTyoZc.css.gz"
  },
  "/_build/assets/login-C0nghsom.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f3-5Xp9AwoEhQx9P8DLRmjlfyL/LcY\"",
    "mtime": "2024-03-14T00:22:05.740Z",
    "size": 243,
    "path": "../public/_build/assets/login-C0nghsom.js"
  },
  "/_server/assets/app-DwuTyoZc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1e1f-xcjTa7/w4sce9mVCXbem9/eVWII\"",
    "mtime": "2024-03-14T00:22:05.742Z",
    "size": 7711,
    "path": "../public/_server/assets/app-DwuTyoZc.css"
  },
  "/_server/assets/app-DwuTyoZc.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"7dc-WUAWhffPypt/yZGnW0akp5cJjsM\"",
    "mtime": "2024-03-14T00:22:06.638Z",
    "size": 2012,
    "path": "../public/_server/assets/app-DwuTyoZc.css.br"
  },
  "/_server/assets/app-DwuTyoZc.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"94f-w3FGZ+xbj+7/8DDJx+DEK0y9aGA\"",
    "mtime": "2024-03-14T00:22:06.638Z",
    "size": 2383,
    "path": "../public/_server/assets/app-DwuTyoZc.css.gz"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises$1.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

var Qt$1=(t=>(t[t.AggregateError=1]="AggregateError",t[t.ArrowFunction=2]="ArrowFunction",t[t.ErrorPrototypeStack=4]="ErrorPrototypeStack",t[t.ObjectAssign=8]="ObjectAssign",t[t.BigIntTypedArray=16]="BigIntTypedArray",t))(Qt$1||{});function A(t,e){if(!t)throw e}function Yt$1(t){switch(t){case'"':return '\\"';case"\\":return "\\\\";case`
`:return "\\n";case"\r":return "\\r";case"\b":return "\\b";case"	":return "\\t";case"\f":return "\\f";case"<":return "\\x3C";case"\u2028":return "\\u2028";case"\u2029":return "\\u2029";default:return}}function w(t){let e="",r=0,s;for(let i=0,n=t.length;i<n;i++)s=Yt$1(t[i]),s&&(e+=t.slice(r,i)+s,r=i+1);return r===0?e=t:e+=t.slice(r),e}function er(t){switch(t){case"\\\\":return "\\";case'\\"':return '"';case"\\n":return `
`;case"\\r":return "\r";case"\\b":return "\b";case"\\t":return "	";case"\\f":return "\f";case"\\x3C":return "<";case"\\u2028":return "\u2028";case"\\u2029":return "\u2029";default:return t}}function I$2(t){return t.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g,er)}var D$1="__SEROVAL_REFS__",X$2="$R",H=`self.${X$2}`;function tr(t){return t==null?`${H}=${H}||[]`:`(${H}=${H}||{})["${w(t)}"]=[]`}var Je$1=new Map,C$1=new Map;function de$1(t){return Je$1.has(t)}function rr(t){return C$1.has(t)}function sr(t){return A(de$1(t),new Br(t)),Je$1.get(t)}function ir(t){return A(rr(t),new Wr(t)),C$1.get(t)}typeof globalThis<"u"?Object.defineProperty(globalThis,D$1,{value:C$1,configurable:!0,writable:!1,enumerable:!1}):typeof self<"u"?Object.defineProperty(self,D$1,{value:C$1,configurable:!0,writable:!1,enumerable:!1}):typeof global<"u"&&Object.defineProperty(global,D$1,{value:C$1,configurable:!0,writable:!1,enumerable:!1});function Ze$2(t,e){for(let r=0,s=e.length;r<s;r++){let i=e[r];t.has(i)||(t.add(i),i.extends&&Ze$2(t,i.extends));}}function Qe$1(t){if(t){let e=new Set;return Ze$2(e,t),[...e]}}var nr={0:"Symbol.asyncIterator",1:"Symbol.hasInstance",2:"Symbol.isConcatSpreadable",3:"Symbol.iterator",4:"Symbol.match",5:"Symbol.matchAll",6:"Symbol.replace",7:"Symbol.search",8:"Symbol.species",9:"Symbol.split",10:"Symbol.toPrimitive",11:"Symbol.toStringTag",12:"Symbol.unscopables"},Ye$1={[Symbol.asyncIterator]:0,[Symbol.hasInstance]:1,[Symbol.isConcatSpreadable]:2,[Symbol.iterator]:3,[Symbol.match]:4,[Symbol.matchAll]:5,[Symbol.replace]:6,[Symbol.search]:7,[Symbol.species]:8,[Symbol.split]:9,[Symbol.toPrimitive]:10,[Symbol.toStringTag]:11,[Symbol.unscopables]:12},ar={0:Symbol.asyncIterator,1:Symbol.hasInstance,2:Symbol.isConcatSpreadable,3:Symbol.iterator,4:Symbol.match,5:Symbol.matchAll,6:Symbol.replace,7:Symbol.search,8:Symbol.species,9:Symbol.split,10:Symbol.toPrimitive,11:Symbol.toStringTag,12:Symbol.unscopables},or={2:"!0",3:"!1",1:"void 0",0:"null",4:"-0",5:"1/0",6:"-1/0",7:"0/0"},lr={2:!0,3:!1,1:void 0,0:null,4:-0,5:1/0,6:-1/0,7:NaN},et$2={0:"Error",1:"EvalError",2:"RangeError",3:"ReferenceError",4:"SyntaxError",5:"TypeError",6:"URIError"},cr={0:Error,1:EvalError,2:RangeError,3:ReferenceError,4:SyntaxError,5:TypeError,6:URIError};function x(t){return {t:2,i:void 0,s:t,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}var he=x(2),fe=x(3),ur=x(1),dr=x(0),hr=x(4),fr=x(5),pr=x(6),vr=x(7);function be$1(t){return t instanceof EvalError?1:t instanceof RangeError?2:t instanceof ReferenceError?3:t instanceof SyntaxError?4:t instanceof TypeError?5:t instanceof URIError?6:0}function gr(t){let e=et$2[be$1(t)];return t.name!==e?{name:t.name}:t.constructor.name!==e?{name:t.constructor.name}:{}}function Oe(t,e){let r=gr(t),s=Object.getOwnPropertyNames(t);for(let i=0,n=s.length,a;i<n;i++)a=s[i],a!=="name"&&a!=="message"&&(a==="stack"?e&4&&(r=r||{},r[a]=t[a]):(r=r||{},r[a]=t[a]));return r}function tt$2(t){return Object.isFrozen(t)?3:Object.isSealed(t)?2:Object.isExtensible(t)?0:1}function mr(t){switch(t){case 1/0:return fr;case-1/0:return pr}return t!==t?vr:Object.is(t,-0)?hr:{t:0,i:void 0,s:t,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function pe$1(t){return {t:1,i:void 0,s:w(t),l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function yr(t){return {t:3,i:void 0,s:""+t,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function br(t){return {t:4,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function wr(t,e){return {t:5,i:t,s:e.toISOString(),l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,f:void 0,a:void 0,b:void 0,o:void 0}}function zr(t,e){return {t:6,i:t,s:void 0,l:void 0,c:w(e.source),m:e.flags,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function Sr(t,e){let r=new Uint8Array(e),s=r.length,i=new Array(s);for(let n=0;n<s;n++)i[n]=r[n];return {t:19,i:t,s:i,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function Rr(t,e){return {t:17,i:t,s:Ye$1[e],l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function $e(t,e){return {t:18,i:t,s:w(sr(e)),l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function rt$2(t,e,r){return {t:25,i:t,s:r,l:void 0,c:w(e),m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function Ar(t,e,r){return {t:9,i:t,s:void 0,l:e.length,c:void 0,m:void 0,p:void 0,e:void 0,a:r,f:void 0,b:void 0,o:tt$2(e)}}function xr(t,e){return {t:21,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:e,b:void 0,o:void 0}}function Er(t,e,r){return {t:15,i:t,s:void 0,l:e.length,c:e.constructor.name,m:void 0,p:void 0,e:void 0,a:void 0,f:r,b:e.byteOffset,o:void 0}}function Pr(t,e,r){return {t:16,i:t,s:void 0,l:e.length,c:e.constructor.name,m:void 0,p:void 0,e:void 0,a:void 0,f:r,b:e.byteOffset,o:void 0}}function Ir(t,e,r){return {t:20,i:t,s:void 0,l:e.byteLength,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:r,b:e.byteOffset,o:void 0}}function kr(t,e,r){return {t:13,i:t,s:be$1(e),l:void 0,c:void 0,m:w(e.message),p:r,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function Fr(t,e,r){return {t:14,i:t,s:be$1(e),l:void 0,c:void 0,m:w(e.message),p:r,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function Or(t,e,r){return {t:7,i:t,s:void 0,l:e,c:void 0,m:void 0,p:void 0,e:void 0,a:r,f:void 0,b:void 0,o:void 0}}function st$2(t,e){return {t:28,i:void 0,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:[t,e],f:void 0,b:void 0,o:void 0}}function it$2(t,e){return {t:30,i:void 0,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:[t,e],f:void 0,b:void 0,o:void 0}}function nt$2(t,e,r){return {t:31,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:r,f:e,b:void 0,o:void 0}}function $r(t,e){return {t:32,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:e,b:void 0,o:void 0}}function Cr(t,e){return {t:33,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:e,b:void 0,o:void 0}}function jr(t,e){return {t:34,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:e,b:void 0,o:void 0}}function at$2(t){let e=[],r=-1,s=-1,i=t[Symbol.iterator]();for(;;)try{let n=i.next();if(e.push(n.value),n.done){s=e.length-1;break}}catch(n){r=e.length,e.push(n);}return {v:e,t:r,d:s}}function Tr(t){return ()=>{let e=0;return {[Symbol.iterator](){return this},next(){if(e>t.d)return {done:!0,value:void 0};let r=e++,s=t.v[r];if(r===t.t)throw s;return {done:r===t.d,value:s}}}}}var Vr={},Dr={},Mr={0:{},1:{},2:{},3:{},4:{}},{toString:we$1}=Object.prototype;function Nr(t,e){return e instanceof Error?`Seroval caught an error during the ${t} process.
  
${e.name}
${e.message}

- For more information, please check the "cause" property of this error.
- If you believe this is an error in Seroval, please submit an issue at https://github.com/lxsmnsyc/seroval/issues/new`:`Seroval caught an error during the ${t} process.

"${we$1.call(e)}"

For more information, please check the "cause" property of this error.`}var ze$1=class ze extends Error{constructor(e,r){super(Nr(e,r)),this.cause=r;}},Lr=class extends ze$1{constructor(t){super("parsing",t);}},Ur=class extends ze$1{constructor(t){super("serialization",t);}},_r=class extends ze$1{constructor(t){super("deserialization",t);}},J$2=class J extends Error{constructor(e){super(`The value ${we$1.call(e)} of type "${typeof e}" cannot be parsed/serialized.
      
There are few workarounds for this problem:
- Transform the value in a way that it can be serialized.
- If the reference is present on multiple runtimes (isomorphic), you can use the Reference API to map the references.`),this.value=e;}},ot$2=class ot extends Error{constructor(e){super('Unsupported node type "'+e.t+'".');}},lt$2=class lt extends Error{constructor(e){super('Missing plugin for tag "'+e+'".');}},V=class extends Error{constructor(e){super('Missing "'+e+'" instance.');}},Br=class extends Error{constructor(e){super('Missing reference for the value "'+we$1.call(e)+'" of type "'+typeof e+'"'),this.value=e;}},Wr=class extends Error{constructor(t){super('Missing reference for id "'+w(t)+'"');}},qr=class extends Error{constructor(t){super('Unknown TypedArray "'+t+'"');}},Kr=class{constructor(e){this.marked=new Set,this.plugins=e.plugins,this.features=31^(e.disabledFeatures||0),this.refs=e.refs||new Map;}markRef(e){this.marked.add(e);}isMarked(e){return this.marked.has(e)}getIndexedValue(e){let r=this.refs.get(e);if(r!=null)return this.markRef(r),{type:1,value:br(r)};let s=this.refs.size;return this.refs.set(e,s),{type:0,value:s}}getReference(e){let r=this.getIndexedValue(e);return r.type===1?r:de$1(e)?{type:2,value:$e(r.value,e)}:r}getStrictReference(e){A(de$1(e),new J$2(e));let r=this.getIndexedValue(e);return r.type===1?r.value:$e(r.value,e)}parseFunction(e){return this.getStrictReference(e)}parseWellKnownSymbol(e){let r=this.getReference(e);return r.type!==0?r.value:(A(e in Ye$1,new J$2(e)),Rr(r.value,e))}parseSpecialReference(e){let r=this.getIndexedValue(Mr[e]);return r.type===1?r.value:{t:26,i:r.value,s:e,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}parseIteratorFactory(){let e=this.getIndexedValue(Vr);return e.type===1?e.value:{t:27,i:e.value,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:this.parseWellKnownSymbol(Symbol.iterator),b:void 0,o:void 0}}parseAsyncIteratorFactory(){let e=this.getIndexedValue(Dr);return e.type===1?e.value:{t:29,i:e.value,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:[this.parseSpecialReference(1),this.parseWellKnownSymbol(Symbol.asyncIterator)],f:void 0,b:void 0,o:void 0}}createObjectNode(e,r,s,i){return {t:s?11:10,i:e,s:void 0,l:void 0,c:void 0,m:void 0,p:i,e:void 0,a:void 0,f:void 0,b:void 0,o:tt$2(r)}}createMapNode(e,r,s,i){return {t:8,i:e,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:{k:r,v:s,s:i},a:void 0,f:this.parseSpecialReference(0),b:void 0,o:void 0}}createPromiseConstructorNode(e){return {t:22,i:e,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:this.parseSpecialReference(1),b:void 0,o:void 0}}};function ve$1(){let t,e;return {promise:new Promise((r,s)=>{t=r,e=s;}),resolve(r){t(r);},reject(r){e(r);}}}function Hr(t){return "__SEROVAL_STREAM__"in t}function W$1(){let t=new Set,e=[],r=!0,s=!1;function i(o){for(let l of t.keys())l.next(o);}function n(o){for(let l of t.keys())l.throw(o);}function a(o){for(let l of t.keys())l.return(o);}return {__SEROVAL_STREAM__:!0,on(o){r&&t.add(o);for(let l=0,c=e.length;l<c;l++){let d=e[l];l===c-1?s?o.return(d):o.throw(d):o.next(d);}return ()=>{r&&t.delete(o);}},next(o){r&&(e.push(o),i(o));},throw(o){r&&(e.push(o),n(o),r=!1,s=!1,t.clear());},return(o){r&&(e.push(o),a(o),r=!1,s=!0,t.clear());}}}function Xr(t){let e=W$1(),r=t[Symbol.asyncIterator]();async function s(){try{let i=await r.next();i.done?e.return(i.value):(e.next(i.value),await s());}catch(i){e.throw(i);}}return s().catch(()=>{}),e}function Gr(t){return ()=>{let e=[],r=[],s=0,i=-1,n=!1;function a(){for(let l=0,c=r.length;l<c;l++)r[l].resolve({done:!0,value:void 0});}t.on({next(l){let c=r.shift();c&&c.resolve({done:!1,value:l}),e.push(l);},throw(l){let c=r.shift();c&&c.reject(l),a(),i=e.length,e.push(l),n=!0;},return(l){let c=r.shift();c&&c.resolve({done:!0,value:l}),a(),i=e.length,e.push(l);}});function o(){let l=s++,c=e[l];if(l!==i)return {done:!1,value:c};if(n)throw c;return {done:!0,value:c}}return {[Symbol.asyncIterator](){return this},async next(){if(i===-1){let l=s++;if(l>=e.length){let c=ve$1();return r.push(c),await c.promise}return {done:!1,value:e[l]}}return s>i?{done:!0,value:void 0}:o()}}}}function Jr(t){switch(t){case"Int8Array":return Int8Array;case"Int16Array":return Int16Array;case"Int32Array":return Int32Array;case"Uint8Array":return Uint8Array;case"Uint16Array":return Uint16Array;case"Uint32Array":return Uint32Array;case"Uint8ClampedArray":return Uint8ClampedArray;case"Float32Array":return Float32Array;case"Float64Array":return Float64Array;case"BigInt64Array":return BigInt64Array;case"BigUint64Array":return BigUint64Array;default:throw new qr(t)}}function Ce(t,e){switch(e){case 3:return Object.freeze(t);case 1:return Object.preventExtensions(t);case 2:return Object.seal(t);default:return t}}var Zr=class{constructor(e){this.plugins=e.plugins,this.refs=e.refs||new Map;}deserializeReference(e){return this.assignIndexedValue(e.i,ir(I$2(e.s)))}deserializeArray(e){let r=e.l,s=this.assignIndexedValue(e.i,new Array(r)),i;for(let n=0;n<r;n++)i=e.a[n],i&&(s[n]=this.deserialize(i));return Ce(s,e.o),s}deserializeProperties(e,r){let s=e.s;if(s){let i=e.k,n=e.v;for(let a=0,o;a<s;a++)o=i[a],typeof o=="string"?r[I$2(o)]=this.deserialize(n[a]):r[this.deserialize(o)]=this.deserialize(n[a]);}return r}deserializeObject(e){let r=this.assignIndexedValue(e.i,e.t===10?{}:Object.create(null));return this.deserializeProperties(e.p,r),Ce(r,e.o),r}deserializeDate(e){return this.assignIndexedValue(e.i,new Date(e.s))}deserializeRegExp(e){return this.assignIndexedValue(e.i,new RegExp(I$2(e.c),e.m))}deserializeSet(e){let r=this.assignIndexedValue(e.i,new Set),s=e.a;for(let i=0,n=e.l;i<n;i++)r.add(this.deserialize(s[i]));return r}deserializeMap(e){let r=this.assignIndexedValue(e.i,new Map),s=e.e.k,i=e.e.v;for(let n=0,a=e.e.s;n<a;n++)r.set(this.deserialize(s[n]),this.deserialize(i[n]));return r}deserializeArrayBuffer(e){let r=new Uint8Array(e.s);return this.assignIndexedValue(e.i,r.buffer)}deserializeTypedArray(e){let r=Jr(e.c),s=this.deserialize(e.f);return this.assignIndexedValue(e.i,new r(s,e.b,e.l))}deserializeDataView(e){let r=this.deserialize(e.f);return this.assignIndexedValue(e.i,new DataView(r,e.b,e.l))}deserializeDictionary(e,r){if(e.p){let s=this.deserializeProperties(e.p,{});Object.assign(r,s);}return r}deserializeAggregateError(e){let r=this.assignIndexedValue(e.i,new AggregateError([],I$2(e.m)));return this.deserializeDictionary(e,r)}deserializeError(e){let r=cr[e.s],s=this.assignIndexedValue(e.i,new r(I$2(e.m)));return this.deserializeDictionary(e,s)}deserializePromise(e){let r=ve$1(),s=this.assignIndexedValue(e.i,r),i=this.deserialize(e.f);return e.s?r.resolve(i):r.reject(i),s.promise}deserializeBoxed(e){return this.assignIndexedValue(e.i,Object(this.deserialize(e.f)))}deserializePlugin(e){let r=this.plugins;if(r){let s=I$2(e.c);for(let i=0,n=r.length;i<n;i++){let a=r[i];if(a.tag===s)return this.assignIndexedValue(e.i,a.deserialize(e.s,this,{id:e.i}))}}throw new lt$2(e.c)}deserializePromiseConstructor(e){return this.assignIndexedValue(e.i,ve$1()).promise}deserializePromiseResolve(e){let r=this.refs.get(e.i);A(r,new V("Promise")),r.resolve(this.deserialize(e.a[1]));}deserializePromiseReject(e){let r=this.refs.get(e.i);A(r,new V("Promise")),r.reject(this.deserialize(e.a[1]));}deserializeIteratorFactoryInstance(e){this.deserialize(e.a[0]);let r=this.deserialize(e.a[1]);return Tr(r)}deserializeAsyncIteratorFactoryInstance(e){this.deserialize(e.a[0]);let r=this.deserialize(e.a[1]);return Gr(r)}deserializeStreamConstructor(e){let r=this.assignIndexedValue(e.i,W$1()),s=e.a.length;if(s)for(let i=0;i<s;i++)this.deserialize(e.a[i]);return r}deserializeStreamNext(e){let r=this.refs.get(e.i);A(r,new V("Stream")),r.next(this.deserialize(e.f));}deserializeStreamThrow(e){let r=this.refs.get(e.i);A(r,new V("Stream")),r.throw(this.deserialize(e.f));}deserializeStreamReturn(e){let r=this.refs.get(e.i);A(r,new V("Stream")),r.return(this.deserialize(e.f));}deserializeIteratorFactory(e){this.deserialize(e.f);}deserializeAsyncIteratorFactory(e){this.deserialize(e.a[1]);}deserialize(e){try{switch(e.t){case 2:return lr[e.s];case 0:return e.s;case 1:return I$2(e.s);case 3:return BigInt(e.s);case 4:return this.refs.get(e.i);case 18:return this.deserializeReference(e);case 9:return this.deserializeArray(e);case 10:case 11:return this.deserializeObject(e);case 5:return this.deserializeDate(e);case 6:return this.deserializeRegExp(e);case 7:return this.deserializeSet(e);case 8:return this.deserializeMap(e);case 19:return this.deserializeArrayBuffer(e);case 16:case 15:return this.deserializeTypedArray(e);case 20:return this.deserializeDataView(e);case 14:return this.deserializeAggregateError(e);case 13:return this.deserializeError(e);case 12:return this.deserializePromise(e);case 17:return ar[e.s];case 21:return this.deserializeBoxed(e);case 25:return this.deserializePlugin(e);case 22:return this.deserializePromiseConstructor(e);case 23:return this.deserializePromiseResolve(e);case 24:return this.deserializePromiseReject(e);case 28:return this.deserializeIteratorFactoryInstance(e);case 30:return this.deserializeAsyncIteratorFactoryInstance(e);case 31:return this.deserializeStreamConstructor(e);case 32:return this.deserializeStreamNext(e);case 33:return this.deserializeStreamThrow(e);case 34:return this.deserializeStreamReturn(e);case 27:return this.deserializeIteratorFactory(e);case 29:return this.deserializeAsyncIteratorFactory(e);default:throw new ot$2(e)}}catch(r){throw new _r(r)}}},Qr=class extends Zr{constructor(e){super(e),this.mode="vanilla",this.marked=new Set(e.markedRefs);}assignIndexedValue(e,r){return this.marked.has(e)&&this.refs.set(e,r),r}},Yr=/^[$A-Z_][0-9A-Z_$]*$/i;function je(t){let e=t[0];return (e==="$"||e==="_"||e>="A"&&e<="Z"||e>="a"&&e<="z")&&Yr.test(t)}function M$2(t){switch(t.t){case 0:return t.s+"="+t.v;case 2:return t.s+".set("+t.k+","+t.v+")";case 1:return t.s+".add("+t.v+")";case 3:return t.s+".delete("+t.k+")"}}function es(t){let e=[],r=t[0];for(let s=1,i=t.length,n,a=r;s<i;s++)n=t[s],n.t===0&&n.v===a.v?r={t:0,s:n.s,k:void 0,v:M$2(r)}:n.t===2&&n.s===a.s?r={t:2,s:M$2(r),k:n.k,v:n.v}:n.t===1&&n.s===a.s?r={t:1,s:M$2(r),k:void 0,v:n.v}:n.t===3&&n.s===a.s?r={t:3,s:M$2(r),k:n.k,v:void 0}:(e.push(r),r=n),a=n;return e.push(r),e}function Te(t){if(t.length){let e="",r=es(t);for(let s=0,i=r.length;s<i;s++)e+=M$2(r[s])+",";return e}}var ts="Object.create(null)",rs="new Set",ss="new Map",is="Promise.resolve",ns="Promise.reject",as={3:"Object.freeze",2:"Object.seal",1:"Object.preventExtensions",0:void 0},os=class{constructor(t){this.stack=[],this.flags=[],this.assignments=[],this.plugins=t.plugins,this.features=t.features,this.marked=new Set(t.markedRefs);}createFunction(t,e){return this.features&2?(t.length===1?t[0]:"("+t.join(",")+")")+"=>"+e:"function("+t.join(",")+"){return "+e+"}"}createEffectfulFunction(t,e){return this.features&2?(t.length===1?t[0]:"("+t.join(",")+")")+"=>{"+e+"}":"function("+t.join(",")+"){"+e+"}"}markRef(t){this.marked.add(t);}isMarked(t){return this.marked.has(t)}pushObjectFlag(t,e){t!==0&&(this.markRef(e),this.flags.push({type:t,value:this.getRefParam(e)}));}resolveFlags(){let t="";for(let e=0,r=this.flags,s=r.length;e<s;e++){let i=r[e];t+=as[i.type]+"("+i.value+"),";}return t}resolvePatches(){let t=Te(this.assignments),e=this.resolveFlags();return t?e?t+e:t:e}createAssignment(t,e){this.assignments.push({t:0,s:t,k:void 0,v:e});}createAddAssignment(t,e){this.assignments.push({t:1,s:this.getRefParam(t),k:void 0,v:e});}createSetAssignment(t,e,r){this.assignments.push({t:2,s:this.getRefParam(t),k:e,v:r});}createDeleteAssignment(t,e){this.assignments.push({t:3,s:this.getRefParam(t),k:e,v:void 0});}createArrayAssign(t,e,r){this.createAssignment(this.getRefParam(t)+"["+e+"]",r);}createObjectAssign(t,e,r){this.createAssignment(this.getRefParam(t)+"."+e,r);}isIndexedValueInStack(t){return t.t===4&&this.stack.includes(t.i)}serializeReference(t){return this.assignIndexedValue(t.i,D$1+'.get("'+t.s+'")')}serializeArrayItem(t,e,r){return e?this.isIndexedValueInStack(e)?(this.markRef(t),this.createArrayAssign(t,r,this.getRefParam(e.i)),""):this.serialize(e):""}serializeArray(t){let e=t.i;if(t.l){this.stack.push(e);let r=t.a,s=this.serializeArrayItem(e,r[0],0),i=s==="";for(let n=1,a=t.l,o;n<a;n++)o=this.serializeArrayItem(e,r[n],n),s+=","+o,i=o==="";return this.stack.pop(),this.pushObjectFlag(t.o,t.i),this.assignIndexedValue(e,"["+s+(i?",]":"]"))}return this.assignIndexedValue(e,"[]")}serializeProperty(t,e,r){if(typeof e=="string"){let s=Number(e),i=s>=0&&s.toString()===e||je(e);if(this.isIndexedValueInStack(r)){let n=this.getRefParam(r.i);return this.markRef(t.i),i&&s!==s?this.createObjectAssign(t.i,e,n):this.createArrayAssign(t.i,i?e:'"'+e+'"',n),""}return (i?e:'"'+e+'"')+":"+this.serialize(r)}return "["+this.serialize(e)+"]:"+this.serialize(r)}serializeProperties(t,e){let r=e.s;if(r){let s=e.k,i=e.v;this.stack.push(t.i);let n=this.serializeProperty(t,s[0],i[0]);for(let a=1,o=n;a<r;a++)o=this.serializeProperty(t,s[a],i[a]),n+=(o&&n&&",")+o;return this.stack.pop(),"{"+n+"}"}return "{}"}serializeObject(t){return this.pushObjectFlag(t.o,t.i),this.assignIndexedValue(t.i,this.serializeProperties(t,t.p))}serializeWithObjectAssign(t,e,r){let s=this.serializeProperties(t,e);return s!=="{}"?"Object.assign("+r+","+s+")":r}serializeStringKeyAssignment(t,e,r,s){let i=this.serialize(s),n=Number(r),a=n>=0&&n.toString()===r||je(r);if(this.isIndexedValueInStack(s))a&&n!==n?this.createObjectAssign(t.i,r,i):this.createArrayAssign(t.i,a?r:'"'+r+'"',i);else {let o=this.assignments;this.assignments=e,a&&n!==n?this.createObjectAssign(t.i,r,i):this.createArrayAssign(t.i,a?r:'"'+r+'"',i),this.assignments=o;}}serializeAssignment(t,e,r,s){if(typeof r=="string")this.serializeStringKeyAssignment(t,e,r,s);else {let i=this.stack;this.stack=[];let n=this.serialize(s);this.stack=i;let a=this.assignments;this.assignments=e,this.createArrayAssign(t.i,this.serialize(r),n),this.assignments=a;}}serializeAssignments(t,e){let r=e.s;if(r){let s=[],i=e.k,n=e.v;this.stack.push(t.i);for(let a=0;a<r;a++)this.serializeAssignment(t,s,i[a],n[a]);return this.stack.pop(),Te(s)}}serializeDictionary(t,e){if(t.p)if(this.features&8)e=this.serializeWithObjectAssign(t,t.p,e);else {this.markRef(t.i);let r=this.serializeAssignments(t,t.p);if(r)return "("+this.assignIndexedValue(t.i,e)+","+r+this.getRefParam(t.i)+")"}return this.assignIndexedValue(t.i,e)}serializeNullConstructor(t){return this.pushObjectFlag(t.o,t.i),this.serializeDictionary(t,ts)}serializeDate(t){return this.assignIndexedValue(t.i,'new Date("'+t.s+'")')}serializeRegExp(t){return this.assignIndexedValue(t.i,"/"+t.c+"/"+t.m)}serializeSetItem(t,e){return this.isIndexedValueInStack(e)?(this.markRef(t),this.createAddAssignment(t,this.getRefParam(e.i)),""):this.serialize(e)}serializeSet(t){let e=rs,r=t.l,s=t.i;if(r){let i=t.a;this.stack.push(s);let n=this.serializeSetItem(s,i[0]);for(let a=1,o=n;a<r;a++)o=this.serializeSetItem(s,i[a]),n+=(o&&n&&",")+o;this.stack.pop(),n&&(e+="(["+n+"])");}return this.assignIndexedValue(s,e)}serializeMapEntry(t,e,r,s){if(this.isIndexedValueInStack(e)){let i=this.getRefParam(e.i);if(this.markRef(t),this.isIndexedValueInStack(r)){let a=this.getRefParam(r.i);return this.createSetAssignment(t,i,a),""}if(r.t!==4&&r.i!=null&&this.isMarked(r.i)){let a="("+this.serialize(r)+",["+s+","+s+"])";return this.createSetAssignment(t,i,this.getRefParam(r.i)),this.createDeleteAssignment(t,s),a}let n=this.stack;return this.stack=[],this.createSetAssignment(t,i,this.serialize(r)),this.stack=n,""}if(this.isIndexedValueInStack(r)){let i=this.getRefParam(r.i);if(this.markRef(t),e.t!==4&&e.i!=null&&this.isMarked(e.i)){let a="("+this.serialize(e)+",["+s+","+s+"])";return this.createSetAssignment(t,this.getRefParam(e.i),i),this.createDeleteAssignment(t,s),a}let n=this.stack;return this.stack=[],this.createSetAssignment(t,this.serialize(e),i),this.stack=n,""}return "["+this.serialize(e)+","+this.serialize(r)+"]"}serializeMap(t){let e=ss,r=t.e.s,s=t.i,i=t.f,n=this.getRefParam(i.i);if(r){let a=t.e.k,o=t.e.v;this.stack.push(s);let l=this.serializeMapEntry(s,a[0],o[0],n);for(let c=1,d=l;c<r;c++)d=this.serializeMapEntry(s,a[c],o[c],n),l+=(d&&l&&",")+d;this.stack.pop(),l&&(e+="(["+l+"])");}return i.t===26&&(this.markRef(i.i),e="("+this.serialize(i)+","+e+")"),this.assignIndexedValue(s,e)}serializeArrayBuffer(t){let e="new Uint8Array(",r=t.s,s=r.length;if(s){e+="["+r[0];for(let i=1;i<s;i++)e+=","+r[i];e+="]";}return this.assignIndexedValue(t.i,e+").buffer")}serializeTypedArray(t){return this.assignIndexedValue(t.i,"new "+t.c+"("+this.serialize(t.f)+","+t.b+","+t.l+")")}serializeDataView(t){return this.assignIndexedValue(t.i,"new DataView("+this.serialize(t.f)+","+t.b+","+t.l+")")}serializeAggregateError(t){let e=t.i;this.stack.push(e);let r=this.serializeDictionary(t,'new AggregateError([],"'+t.m+'")');return this.stack.pop(),r}serializeError(t){return this.serializeDictionary(t,"new "+et$2[t.s]+'("'+t.m+'")')}serializePromise(t){let e,r=t.f,s=t.i,i=t.s?is:ns;if(this.isIndexedValueInStack(r)){let n=this.getRefParam(r.i);e=i+(t.s?"().then("+this.createFunction([],n)+")":"().catch("+this.createEffectfulFunction([],"throw "+n)+")");}else {this.stack.push(s);let n=this.serialize(r);this.stack.pop(),e=i+"("+n+")";}return this.assignIndexedValue(s,e)}serializeWellKnownSymbol(t){return this.assignIndexedValue(t.i,nr[t.s])}serializeBoxed(t){return this.assignIndexedValue(t.i,"Object("+this.serialize(t.f)+")")}serializePlugin(t){let e=this.plugins;if(e)for(let r=0,s=e.length;r<s;r++){let i=e[r];if(i.tag===t.c)return this.assignIndexedValue(t.i,i.serialize(t.s,this,{id:t.i}))}throw new lt$2(t.c)}getConstructor(t){let e=this.serialize(t);return e===this.getRefParam(t.i)?e:"("+e+")"}serializePromiseConstructor(t){return this.assignIndexedValue(t.i,this.getConstructor(t.f)+"()")}serializePromiseResolve(t){return this.getConstructor(t.a[0])+"("+this.getRefParam(t.i)+","+this.serialize(t.a[1])+")"}serializePromiseReject(t){return this.getConstructor(t.a[0])+"("+this.getRefParam(t.i)+","+this.serialize(t.a[1])+")"}serializeSpecialReferenceValue(t){switch(t){case 0:return "[]";case 1:return this.createFunction(["s","f","p"],"((p=new Promise("+this.createEffectfulFunction(["a","b"],"s=a,f=b")+")).s=s,p.f=f,p)");case 2:return this.createEffectfulFunction(["p","d"],'p.s(d),p.status="success",p.value=d;delete p.s;delete p.f');case 3:return this.createEffectfulFunction(["p","d"],'p.f(d),p.status="failure",p.value=d;delete p.s;delete p.f');case 4:return this.createFunction(["b","a","s","l","p","f","e","n"],"(b=[],a=!0,s=!1,l=[],p=0,f="+this.createEffectfulFunction(["v","m","x"],"for(x=0;x<p;x++)l[x]&&l[x][m](v)")+",n="+this.createEffectfulFunction(["o","x","z","c"],'for(x=0,z=b.length;x<z;x++)(c=b[x],x===z-1?o[s?"return":"throw"](c):o.next(c))')+",e="+this.createFunction(["o","t"],"(a&&(l[t=p++]=o),n(o),"+this.createEffectfulFunction([],"a&&(l[t]=void 0)")+")")+",{__SEROVAL_STREAM__:!0,on:"+this.createFunction(["o"],"e(o)")+",next:"+this.createEffectfulFunction(["v"],'a&&(b.push(v),f(v,"next"))')+",throw:"+this.createEffectfulFunction(["v"],'a&&(b.push(v),f(v,"throw"),a=s=!1,l.length=0)')+",return:"+this.createEffectfulFunction(["v"],'a&&(b.push(v),f(v,"return"),a=!1,s=!0,l.length=0)')+"})");default:return ""}}serializeSpecialReference(t){return this.assignIndexedValue(t.i,this.serializeSpecialReferenceValue(t.s))}serializeIteratorFactory(t){let e="",r=!1;return t.f.t!==4&&(this.markRef(t.f.i),e="("+this.serialize(t.f)+",",r=!0),e+=this.assignIndexedValue(t.i,this.createFunction(["s"],this.createFunction(["i","c","d","t"],"(i=0,t={["+this.getRefParam(t.f.i)+"]:"+this.createFunction([],"t")+",next:"+this.createEffectfulFunction([],"if(i>s.d)return{done:!0,value:void 0};if(d=s.v[c=i++],c===s.t)throw d;return{done:c===s.d,value:d}")+"})"))),r&&(e+=")"),e}serializeIteratorFactoryInstance(t){return this.getConstructor(t.a[0])+"("+this.serialize(t.a[1])+")"}serializeAsyncIteratorFactory(t){let e=t.a[0],r=t.a[1],s="";e.t!==4&&(this.markRef(e.i),s+="("+this.serialize(e)),r.t!==4&&(this.markRef(r.i),s+=(s?",":"(")+this.serialize(r)),s&&(s+=",");let i=this.assignIndexedValue(t.i,this.createFunction(["s"],this.createFunction(["b","c","p","d","e","t","f"],"(b=[],c=0,p=[],d=-1,e=!1,f="+this.createEffectfulFunction(["i","l"],"for(i=0,l=p.length;i<l;i++)p[i].s({done:!0,value:void 0})")+",s.on({next:"+this.createEffectfulFunction(["v","t"],"if(t=p.shift())t.s({done:!1,value:v});b.push(v)")+",throw:"+this.createEffectfulFunction(["v","t"],"if(t=p.shift())t.f(v);f(),d=b.length,e=!0,b.push(v)")+",return:"+this.createEffectfulFunction(["v","t"],"if(t=p.shift())t.s({done:!0,value:v});f(),d=b.length,b.push(v)")+"}),t={["+this.getRefParam(r.i)+"]:"+this.createFunction([],"t")+",next:"+this.createEffectfulFunction(["i","t","v"],"if(d===-1){return((i=c++)>=b.length)?(p.push(t="+this.getRefParam(e.i)+"()),t):{done:!0,value:b[i]}}if(c>d)return{done:!0,value:void 0};if(v=b[i=c++],i!==d)return{done:!1,value:v};if(e)throw v;return{done:!0,value:v}")+"})")));return s?s+i+")":i}serializeAsyncIteratorFactoryInstance(t){return this.getConstructor(t.a[0])+"("+this.serialize(t.a[1])+")"}serializeStreamConstructor(t){let e=this.assignIndexedValue(t.i,this.getConstructor(t.f)+"()"),r=t.a.length;if(r){let s=this.serialize(t.a[0]);for(let i=1;i<r;i++)s+=","+this.serialize(t.a[i]);return "("+e+","+s+","+this.getRefParam(t.i)+")"}return e}serializeStreamNext(t){return this.getRefParam(t.i)+".next("+this.serialize(t.f)+")"}serializeStreamThrow(t){return this.getRefParam(t.i)+".throw("+this.serialize(t.f)+")"}serializeStreamReturn(t){return this.getRefParam(t.i)+".return("+this.serialize(t.f)+")"}serialize(t){try{switch(t.t){case 2:return or[t.s];case 0:return ""+t.s;case 1:return '"'+t.s+'"';case 3:return t.s+"n";case 4:return this.getRefParam(t.i);case 18:return this.serializeReference(t);case 9:return this.serializeArray(t);case 10:return this.serializeObject(t);case 11:return this.serializeNullConstructor(t);case 5:return this.serializeDate(t);case 6:return this.serializeRegExp(t);case 7:return this.serializeSet(t);case 8:return this.serializeMap(t);case 19:return this.serializeArrayBuffer(t);case 16:case 15:return this.serializeTypedArray(t);case 20:return this.serializeDataView(t);case 14:return this.serializeAggregateError(t);case 13:return this.serializeError(t);case 12:return this.serializePromise(t);case 17:return this.serializeWellKnownSymbol(t);case 21:return this.serializeBoxed(t);case 22:return this.serializePromiseConstructor(t);case 23:return this.serializePromiseResolve(t);case 24:return this.serializePromiseReject(t);case 25:return this.serializePlugin(t);case 26:return this.serializeSpecialReference(t);case 27:return this.serializeIteratorFactory(t);case 28:return this.serializeIteratorFactoryInstance(t);case 29:return this.serializeAsyncIteratorFactory(t);case 30:return this.serializeAsyncIteratorFactoryInstance(t);case 31:return this.serializeStreamConstructor(t);case 32:return this.serializeStreamNext(t);case 33:return this.serializeStreamThrow(t);case 34:return this.serializeStreamReturn(t);default:throw new ot$2(t)}}catch(e){throw new Ur(e)}}},ls=class extends Kr{parseItems(e){let r=[];for(let s=0,i=e.length;s<i;s++)s in e&&(r[s]=this.parse(e[s]));return r}parseArray(e,r){return Ar(e,r,this.parseItems(r))}parseProperties(e){let r=Object.entries(e),s=[],i=[];for(let a=0,o=r.length;a<o;a++)s.push(w(r[a][0])),i.push(this.parse(r[a][1]));let n=Symbol.iterator;return n in e&&(s.push(this.parseWellKnownSymbol(n)),i.push(st$2(this.parseIteratorFactory(),this.parse(at$2(e))))),n=Symbol.asyncIterator,n in e&&(s.push(this.parseWellKnownSymbol(n)),i.push(it$2(this.parseAsyncIteratorFactory(),this.parse(W$1())))),n=Symbol.toStringTag,n in e&&(s.push(this.parseWellKnownSymbol(n)),i.push(pe$1(e[n]))),n=Symbol.isConcatSpreadable,n in e&&(s.push(this.parseWellKnownSymbol(n)),i.push(e[n]?he:fe)),{k:s,v:i,s:s.length}}parsePlainObject(e,r,s){return this.createObjectNode(e,r,s,this.parseProperties(r))}parseBoxed(e,r){return xr(e,this.parse(r.valueOf()))}parseTypedArray(e,r){return Er(e,r,this.parse(r.buffer))}parseBigIntTypedArray(e,r){return Pr(e,r,this.parse(r.buffer))}parseDataView(e,r){return Ir(e,r,this.parse(r.buffer))}parseError(e,r){let s=Oe(r,this.features);return kr(e,r,s?this.parseProperties(s):void 0)}parseAggregateError(e,r){let s=Oe(r,this.features);return Fr(e,r,s?this.parseProperties(s):void 0)}parseMap(e,r){let s=[],i=[];for(let[n,a]of r.entries())s.push(this.parse(n)),i.push(this.parse(a));return this.createMapNode(e,s,i,r.size)}parseSet(e,r){let s=[];for(let i of r.keys())s.push(this.parse(i));return Or(e,r.size,s)}parsePlugin(e,r){let s=this.plugins;if(s)for(let i=0,n=s.length;i<n;i++){let a=s[i];if(a.parse.sync&&a.test(r))return rt$2(e,a.tag,a.parse.sync(r,this,{id:e}))}}parseStream(e,r){return nt$2(e,this.parseSpecialReference(4),[])}parsePromise(e,r){return this.createPromiseConstructorNode(e)}parseObject(e,r){if(Array.isArray(r))return this.parseArray(e,r);if(Hr(r))return this.parseStream(e,r);let s=this.parsePlugin(e,r);if(s)return s;let i=r.constructor;switch(i){case Object:return this.parsePlainObject(e,r,!1);case void 0:return this.parsePlainObject(e,r,!0);case Date:return wr(e,r);case RegExp:return zr(e,r);case Error:case EvalError:case RangeError:case ReferenceError:case SyntaxError:case TypeError:case URIError:return this.parseError(e,r);case Number:case Boolean:case String:case BigInt:return this.parseBoxed(e,r);case ArrayBuffer:return Sr(e,r);case Int8Array:case Int16Array:case Int32Array:case Uint8Array:case Uint16Array:case Uint32Array:case Uint8ClampedArray:case Float32Array:case Float64Array:return this.parseTypedArray(e,r);case DataView:return this.parseDataView(e,r);case Map:return this.parseMap(e,r);case Set:return this.parseSet(e,r)}if(i===Promise||r instanceof Promise)return this.parsePromise(e,r);let n=this.features;if(n&16)switch(i){case BigInt64Array:case BigUint64Array:return this.parseBigIntTypedArray(e,r)}if(n&1&&typeof AggregateError<"u"&&(i===AggregateError||r instanceof AggregateError))return this.parseAggregateError(e,r);if(r instanceof Error)return this.parseError(e,r);if(Symbol.iterator in r||Symbol.asyncIterator in r)return this.parsePlainObject(e,r,!!i);throw new J$2(r)}parse(e){try{switch(typeof e){case"boolean":return e?he:fe;case"undefined":return ur;case"string":return pe$1(e);case"number":return mr(e);case"bigint":return yr(e);case"object":{if(e){let r=this.getReference(e);return r.type===0?this.parseObject(r.value,e):r.value}return dr}case"symbol":return this.parseWellKnownSymbol(e);case"function":return this.parseFunction(e);default:throw new J$2(e)}}catch(r){throw new Lr(r)}}};function cs(t,e={}){let r=Qe$1(e.plugins);return new Qr({plugins:r,markedRefs:t.m}).deserialize(t.t)}var us=class extends os{constructor(e){super(e),this.mode="cross",this.scopeId=e.scopeId;}getRefParam(e){return X$2+"["+e+"]"}assignIndexedValue(e,r){return this.getRefParam(e)+"="+r}serializeTop(e){let r=this.serialize(e),s=e.i;if(s==null)return r;let i=this.resolvePatches(),n=this.getRefParam(s),a=this.scopeId==null?"":X$2,o=i?r+","+i+n:r;if(a==="")return i?"("+o+")":o;let l=this.scopeId==null?"()":"("+X$2+'["'+w(this.scopeId)+'"])';return "("+this.createFunction([a],o)+")"+l}},ds=class extends ls{constructor(e){super(e),this.alive=!0,this.pending=0,this.initial=!0,this.buffer=[],this.onParseCallback=e.onParse,this.onErrorCallback=e.onError,this.onDoneCallback=e.onDone;}onParseInternal(e,r){try{this.onParseCallback(e,r);}catch(s){this.onError(s);}}flush(){for(let e=0,r=this.buffer.length;e<r;e++)this.onParseInternal(this.buffer[e],!1);}onParse(e){this.initial?this.buffer.push(e):this.onParseInternal(e,!1);}onError(e){if(this.onErrorCallback)this.onErrorCallback(e);else throw e}onDone(){this.onDoneCallback&&this.onDoneCallback();}pushPendingState(){this.pending++;}popPendingState(){--this.pending<=0&&this.onDone();}parseProperties(e){let r=Object.entries(e),s=[],i=[];for(let a=0,o=r.length;a<o;a++)s.push(w(r[a][0])),i.push(this.parse(r[a][1]));let n=Symbol.iterator;return n in e&&(s.push(this.parseWellKnownSymbol(n)),i.push(st$2(this.parseIteratorFactory(),this.parse(at$2(e))))),n=Symbol.asyncIterator,n in e&&(s.push(this.parseWellKnownSymbol(n)),i.push(it$2(this.parseAsyncIteratorFactory(),this.parse(Xr(e))))),n=Symbol.toStringTag,n in e&&(s.push(this.parseWellKnownSymbol(n)),i.push(pe$1(e[n]))),n=Symbol.isConcatSpreadable,n in e&&(s.push(this.parseWellKnownSymbol(n)),i.push(e[n]?he:fe)),{k:s,v:i,s:s.length}}parsePromise(e,r){return r.then(s=>{let i=this.parseWithError(s);i&&this.onParse({t:23,i:e,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:[this.parseSpecialReference(2),i],f:void 0,b:void 0,o:void 0}),this.popPendingState();},s=>{if(this.alive){let i=this.parseWithError(s);i&&this.onParse({t:24,i:e,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:[this.parseSpecialReference(3),i],f:void 0,b:void 0,o:void 0});}this.popPendingState();}),this.pushPendingState(),this.createPromiseConstructorNode(e)}parsePlugin(e,r){let s=this.plugins;if(s)for(let i=0,n=s.length;i<n;i++){let a=s[i];if(a.parse.stream&&a.test(r))return rt$2(e,a.tag,a.parse.stream(r,this,{id:e}))}}parseStream(e,r){let s=nt$2(e,this.parseSpecialReference(4),[]);return this.pushPendingState(),r.on({next:i=>{if(this.alive){let n=this.parseWithError(i);n&&this.onParse($r(e,n));}},throw:i=>{if(this.alive){let n=this.parseWithError(i);n&&this.onParse(Cr(e,n));}this.popPendingState();},return:i=>{if(this.alive){let n=this.parseWithError(i);n&&this.onParse(jr(e,n));}this.popPendingState();}}),s}parseWithError(e){try{return this.parse(e)}catch(r){this.onError(r);return}}start(e){let r=this.parseWithError(e);r&&(this.onParseInternal(r,!0),this.initial=!1,this.flush(),this.pending<=0&&this.destroy());}destroy(){this.alive&&(this.onDone(),this.alive=!1);}isAlive(){return this.alive}},hs=class extends ds{constructor(){super(...arguments),this.mode="cross";}};function fs(t,e){let r=Qe$1(e.plugins),s=new hs({plugins:r,refs:e.refs,disabledFeatures:e.disabledFeatures,onParse(i,n){let a=new us({plugins:r,features:s.features,scopeId:e.scopeId,markedRefs:s.marked}),o;try{o=a.serializeTop(i);}catch(l){e.onError&&e.onError(l);return}e.onSerialize(o,n);},onError:e.onError,onDone:e.onDone});return s.start(t),()=>{s.destroy();}}function ie$1(t){return {detail:t.detail,bubbles:t.bubbles,cancelable:t.cancelable,composed:t.composed}}var ps={tag:"seroval-plugins/web/CustomEvent",test(t){return typeof CustomEvent>"u"?!1:t instanceof CustomEvent},parse:{sync(t,e){return {type:e.parse(t.type),options:e.parse(ie$1(t))}},async async(t,e){return {type:await e.parse(t.type),options:await e.parse(ie$1(t))}},stream(t,e){return {type:e.parse(t.type),options:e.parse(ie$1(t))}}},serialize(t,e){return "new CustomEvent("+e.serialize(t.type)+","+e.serialize(t.options)+")"},deserialize(t,e){return new CustomEvent(e.deserialize(t.type),e.deserialize(t.options))}},ct$1=ps,vs={tag:"seroval-plugins/web/DOMException",test(t){return typeof DOMException>"u"?!1:t instanceof DOMException},parse:{sync(t,e){return {name:e.parse(t.name),message:e.parse(t.message)}},async async(t,e){return {name:await e.parse(t.name),message:await e.parse(t.message)}},stream(t,e){return {name:e.parse(t.name),message:e.parse(t.message)}}},serialize(t,e){return "new DOMException("+e.serialize(t.message)+","+e.serialize(t.name)+")"},deserialize(t,e){return new DOMException(e.deserialize(t.message),e.deserialize(t.name))}},ut$2=vs;function ne$2(t){return {bubbles:t.bubbles,cancelable:t.cancelable,composed:t.composed}}var gs={tag:"seroval-plugins/web/Event",test(t){return typeof Event>"u"?!1:t instanceof Event},parse:{sync(t,e){return {type:e.parse(t.type),options:e.parse(ne$2(t))}},async async(t,e){return {type:await e.parse(t.type),options:await e.parse(ne$2(t))}},stream(t,e){return {type:e.parse(t.type),options:e.parse(ne$2(t))}}},serialize(t,e){return "new Event("+e.serialize(t.type)+","+e.serialize(t.options)+")"},deserialize(t,e){return new Event(e.deserialize(t.type),e.deserialize(t.options))}},dt$2=gs,ms={tag:"seroval-plugins/web/File",test(t){return typeof File>"u"?!1:t instanceof File},parse:{async async(t,e){return {name:await e.parse(t.name),options:await e.parse({type:t.type,lastModified:t.lastModified}),buffer:await e.parse(await t.arrayBuffer())}}},serialize(t,e){return "new File(["+e.serialize(t.buffer)+"],"+e.serialize(t.name)+","+e.serialize(t.options)+")"},deserialize(t,e){return new File([e.deserialize(t.buffer)],e.deserialize(t.name),e.deserialize(t.options))}},ys=ms;function ae$1(t){let e=[];return t.forEach((r,s)=>{e.push([s,r]);}),e}var L$1={},bs={tag:"seroval-plugins/web/FormDataFactory",test(t){return t===L$1},parse:{sync(){},async async(){return await Promise.resolve(void 0)},stream(){}},serialize(t,e){return e.createEffectfulFunction(["e","f","i","s","t"],"f=new FormData;for(i=0,s=e.length;i<s;i++)f.append((t=e[i])[0],t[1]);return f")},deserialize(){return L$1}},ws={tag:"seroval-plugins/web/FormData",extends:[ys,bs],test(t){return typeof FormData>"u"?!1:t instanceof FormData},parse:{sync(t,e){return {factory:e.parse(L$1),entries:e.parse(ae$1(t))}},async async(t,e){return {factory:await e.parse(L$1),entries:await e.parse(ae$1(t))}},stream(t,e){return {factory:e.parse(L$1),entries:e.parse(ae$1(t))}}},serialize(t,e){return "("+e.serialize(t.factory)+")("+e.serialize(t.entries)+")"},deserialize(t,e){let r=new FormData,s=e.deserialize(t.entries);for(let i=0,n=s.length;i<n;i++){let a=s[i];r.append(a[0],a[1]);}return r}},ht$2=ws;function oe$2(t){let e=[];return t.forEach((r,s)=>{e.push([s,r]);}),e}var zs={tag:"seroval-plugins/web/Headers",test(t){return typeof Headers>"u"?!1:t instanceof Headers},parse:{sync(t,e){return e.parse(oe$2(t))},async async(t,e){return await e.parse(oe$2(t))},stream(t,e){return e.parse(oe$2(t))}},serialize(t,e){return "new Headers("+e.serialize(t)+")"},deserialize(t,e){return new Headers(e.deserialize(t))}},Z$1=zs,U$2={},Ss={tag:"seroval-plugins/web/ReadableStreamFactory",test(t){return t===U$2},parse:{sync(){},async async(){return await Promise.resolve(void 0)},stream(){}},serialize(t,e){return e.createFunction(["d"],"new ReadableStream({start:"+e.createEffectfulFunction(["c"],"d.on({next:"+e.createEffectfulFunction(["v"],"c.enqueue(v)")+",throw:"+e.createEffectfulFunction(["v"],"c.error(v)")+",return:"+e.createEffectfulFunction([],"c.close()")+"})")+"})")},deserialize(){return U$2}};function Ve$1(t){let e=W$1(),r=t.getReader();async function s(){try{let i=await r.read();i.done?e.return(i.value):(e.next(i.value),await s());}catch(i){e.throw(i);}}return s().catch(()=>{}),e}var Rs={tag:"seroval/plugins/web/ReadableStream",extends:[Ss],test(t){return typeof ReadableStream>"u"?!1:t instanceof ReadableStream},parse:{sync(t,e){return {factory:e.parse(U$2),stream:e.parse(W$1())}},async async(t,e){return {factory:await e.parse(U$2),stream:await e.parse(Ve$1(t))}},stream(t,e){return {factory:e.parse(U$2),stream:e.parse(Ve$1(t))}}},serialize(t,e){return "("+e.serialize(t.factory)+")("+e.serialize(t.stream)+")"},deserialize(t,e){let r=e.deserialize(t.stream);return new ReadableStream({start(s){r.on({next(i){s.enqueue(i);},throw(i){s.error(i);},return(){s.close();}});}})}},Q$2=Rs;function De(t,e){return {body:e,cache:t.cache,credentials:t.credentials,headers:t.headers,integrity:t.integrity,keepalive:t.keepalive,method:t.method,mode:t.mode,redirect:t.redirect,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var As={tag:"seroval-plugins/web/Request",extends:[Q$2,Z$1],test(t){return typeof Request>"u"?!1:t instanceof Request},parse:{async async(t,e){return {url:await e.parse(t.url),options:await e.parse(De(t,t.body?await t.clone().arrayBuffer():null))}},stream(t,e){return {url:e.parse(t.url),options:e.parse(De(t,t.clone().body))}}},serialize(t,e){return "new Request("+e.serialize(t.url)+","+e.serialize(t.options)+")"},deserialize(t,e){return new Request(e.deserialize(t.url),e.deserialize(t.options))}},ft$2=As;function Me(t){return {headers:t.headers,status:t.status,statusText:t.statusText}}var xs={tag:"seroval-plugins/web/Response",extends:[Q$2,Z$1],test(t){return typeof Response>"u"?!1:t instanceof Response},parse:{async async(t,e){return {body:await e.parse(t.body?await t.clone().arrayBuffer():null),options:await e.parse(Me(t))}},stream(t,e){return {body:e.parse(t.clone().body),options:e.parse(Me(t))}}},serialize(t,e){return "new Response("+e.serialize(t.body)+","+e.serialize(t.options)+")"},deserialize(t,e){return new Response(e.deserialize(t.body),e.deserialize(t.options))}},pt$2=xs,Es={tag:"seroval-plugins/web/URLSearchParams",test(t){return typeof URLSearchParams>"u"?!1:t instanceof URLSearchParams},parse:{sync(t,e){return e.parse(t.toString())},async async(t,e){return await e.parse(t.toString())},stream(t,e){return e.parse(t.toString())}},serialize(t,e){return "new URLSearchParams("+e.serialize(t)+")"},deserialize(t,e){return new URLSearchParams(e.deserialize(t))}},vt$2=Es,Ps={tag:"seroval-plugins/web/URL",test(t){return typeof URL>"u"?!1:t instanceof URL},parse:{sync(t,e){return e.parse(t.href)},async async(t,e){return await e.parse(t.href)},stream(t,e){return e.parse(t.href)}},serialize(t,e){return "new URL("+e.serialize(t)+")"},deserialize(t,e){return new URL(e.deserialize(t))}},gt$2=Ps;const le="Invariant Violation",{setPrototypeOf:Is=function(t,e){return t.__proto__=e,t}}=Object;let Se$1 = class Se extends Error{framesToPop=1;name=le;constructor(e=le){super(typeof e=="number"?`${le}: ${e} (see https://github.com/apollographql/invariant-packages)`:e),Is(this,Se.prototype);}};function ks(t,e){if(!t)throw new Se$1(e)}var Os=" ";const $s={style:t=>ssrElement("style",t.attrs,()=>escape(t.children),!0),link:t=>ssrElement("link",t.attrs,void 0,!0),script:t=>t.attrs.src?ssrElement("script",mergeProps(()=>t.attrs,{get id(){return t.key}}),()=>ssr(Os),!0):null};function Cs(t){let{tag:e,attrs:{key:r,...s}={key:void 0},children:i}=t;return $s[e]({attrs:s,key:r,children:i})}function js(t,e,r,s="default"){return lazy(async()=>{{const n=(await t.import())[s],o=(await e.inputs?.[t.src].assets()).filter(c=>c.tag==="style"||c.attrs.rel==="stylesheet");return {default:c=>[...o.map(d=>Cs(d)),createComponent(n,c)]}}})}const j$1={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function Ts(t={}){const e={options:t,rootNode:mt$2(),staticRoutesMap:{}},r=s=>t.strictTrailingSlash?s:s.replace(/\/$/,"")||"/";if(t.routes)for(const s in t.routes)Ne(e,r(s),t.routes[s]);return {ctx:e,lookup:s=>Vs(e,r(s)),insert:(s,i)=>Ne(e,r(s),i),remove:s=>Ds(e,r(s))}}function Vs(t,e){const r=t.staticRoutesMap[e];if(r)return r.data;const s=e.split("/"),i={};let n=!1,a=null,o=t.rootNode,l=null;for(let c=0;c<s.length;c++){const d=s[c];o.wildcardChildNode!==null&&(a=o.wildcardChildNode,l=s.slice(c).join("/"));const u=o.children.get(d);if(u!==void 0)o=u;else if(o=o.placeholderChildNode,o!==null)i[o.paramName]=d,n=!0;else break}return (o===null||o.data===null)&&a!==null&&(o=a,i[o.paramName||"_"]=l,n=!0),o?n?{...o.data,params:n?i:void 0}:o.data:null}function Ne(t,e,r){let s=!0;const i=e.split("/");let n=t.rootNode,a=0;for(const o of i){let l;if(l=n.children.get(o))n=l;else {const c=Ms(o);l=mt$2({type:c,parent:n}),n.children.set(o,l),c===j$1.PLACEHOLDER?(l.paramName=o==="*"?`_${a++}`:o.slice(1),n.placeholderChildNode=l,s=!1):c===j$1.WILDCARD&&(n.wildcardChildNode=l,l.paramName=o.slice(3)||"_",s=!1),n=l;}}return n.data=r,s===!0&&(t.staticRoutesMap[e]=n),n}function Ds(t,e){let r=!1;const s=e.split("/");let i=t.rootNode;for(const n of s)if(i=i.children.get(n),!i)return r;if(i.data){const n=s[s.length-1];if(i.data=null,Object.keys(i.children).length===0){const a=i.parent;a.children.delete(n),a.wildcardChildNode=null,a.placeholderChildNode=null;}r=!0;}return r}function mt$2(t={}){return {type:t.type||j$1.NORMAL,parent:t.parent||null,children:new Map,data:t.data||null,paramName:t.paramName||null,wildcardChildNode:null,placeholderChildNode:null}}function Ms(t){return t.startsWith("**")?j$1.WILDCARD:t[0]===":"||t==="*"?j$1.PLACEHOLDER:j$1.NORMAL}function Ns(){let t=new Set;function e(i){return t.add(i),()=>t.delete(i)}let r=!1;function s(i,n){if(r)return !(r=!1);const a={to:i,options:n,defaultPrevented:!1,preventDefault:()=>a.defaultPrevented=!0};for(const o of t)o.listener({...a,from:o.location,retry:l=>{l&&(r=!0),o.navigate(i,{...n,resolve:!1});}});return !a.defaultPrevented}return {subscribe:e,confirm:s}}let ge$1;function yt$2(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),ge$1=window.history.state._depth;}isServer||yt$2();function Mi(t){return {...t,_depth:window.history.state&&window.history.state._depth}}function Ni(t,e){let r=!1;return ()=>{const s=ge$1;yt$2();const i=s==null?null:ge$1-s;if(r){r=!1;return}i&&e(i)?(r=!0,window.history.go(-i)):t();}}const Ls=/^(?:[a-z0-9]+:)?\/\//i,Us=/^\/+|(\/)\/+$/g,bt$2="http://sr";function _$1(t,e=!1){const r=t.replace(Us,"$1");return r?e||/^[?#]/.test(r)?r:"/"+r:""}function G$1(t,e,r){if(Ls.test(e))return;const s=_$1(t),i=r&&_$1(r);let n="";return !i||e.startsWith("/")?n=s:i.toLowerCase().indexOf(s.toLowerCase())!==0?n=s+i:n=i,(n||"/")+_$1(e,!n)}function _s(t,e){if(t==null)throw new Error(e);return t}function Bs(t,e){return _$1(t).replace(/\/*(\*.*)?$/g,"")+_$1(e)}function wt$2(t){const e={};return t.searchParams.forEach((r,s)=>{e[s]=r;}),e}function Ws(t,e,r){const[s,i]=t.split("/*",2),n=s.split("/").filter(Boolean),a=n.length;return o=>{const l=o.split("/").filter(Boolean),c=l.length-a;if(c<0||c>0&&i===void 0&&!e)return null;const d={path:a?"":"/",params:{}},u=h=>r===void 0?void 0:r[h];for(let h=0;h<a;h++){const v=n[h],f=l[h],g=v[0]===":",y=g?v.slice(1):v;if(g&&ce$1(f,u(y)))d.params[y]=f;else if(g||!ce$1(f,v))return null;d.path+=`/${f}`;}if(i){const h=c?l.slice(-c).join("/"):"";if(ce$1(h,u(i)))d.params[i]=h;else return null}return d}}function ce$1(t,e){const r=s=>s.localeCompare(t,void 0,{sensitivity:"base"})===0;return e===void 0?!0:typeof e=="string"?r(e):typeof e=="function"?e(t):Array.isArray(e)?e.some(r):e instanceof RegExp?e.test(t):!1}function qs(t){const[e,r]=t.pattern.split("/*",2),s=e.split("/").filter(Boolean);return s.reduce((i,n)=>i+(n.startsWith(":")?2:3),s.length-(r===void 0?0:1))}function Ks(t){const e=new Map,r=getOwner();return new Proxy({},{get(s,i){return e.has(i)||runWithOwner(r,()=>e.set(i,createMemo(()=>t()[i]))),e.get(i)()},getOwnPropertyDescriptor(){return {enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(t())}})}function zt$1(t){let e=/(\/?\:[^\/]+)\?/.exec(t);if(!e)return [t];let r=t.slice(0,e.index),s=t.slice(e.index+e[0].length);const i=[r,r+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(s);)i.push(r+=e[1]),s=s.slice(e[0].length);return zt$1(s).reduce((n,a)=>[...n,...i.map(o=>o+a)],[])}const Hs=100,Xs=createContext$1(),Gs=createContext$1(),St$2=()=>_s(useContext(Xs),"<A> and 'use' router primitives can be only used inside a Route."),Js=()=>St$2().navigatorFactory();function Zs(t,e=""){const{component:r,load:s,children:i,info:n}=t,a=!i||Array.isArray(i)&&!i.length,o={key:t,component:r,load:s,info:n};return Rt$2(t.path).reduce((l,c)=>{for(const d of zt$1(c)){const u=Bs(e,d);let h=a?u:u.split("/*",1)[0];h=h.split("/").map(v=>v.startsWith(":")||v.startsWith("*")?v:encodeURIComponent(v)).join("/"),l.push({...o,originalPath:d,pattern:h,matcher:Ws(h,!a,t.matchFilters)});}return l},[])}function Qs(t,e=0){return {routes:t,score:qs(t[t.length-1])*1e4-e,matcher(r){const s=[];for(let i=t.length-1;i>=0;i--){const n=t[i],a=n.matcher(r);if(!a)return null;s.unshift({...a,route:n});}return s}}}function Rt$2(t){return Array.isArray(t)?t:[t]}function Ys(t,e="",r=[],s=[]){const i=Rt$2(t);for(let n=0,a=i.length;n<a;n++){const o=i[n];if(o&&typeof o=="object"){o.hasOwnProperty("path")||(o.path="");const l=Zs(o,e);for(const c of l){r.push(c);const d=Array.isArray(o.children)&&o.children.length===0;if(o.children&&!d)Ys(o.children,c.pattern,r,s);else {const u=Qs([...r],s.length);s.push(u);}r.pop();}}}return r.length?s:s.sort((n,a)=>a.score-n.score)}function ei(t,e){for(let r=0,s=t.length;r<s;r++){const i=t[r].matcher(e);if(i)return i}return []}function ti(t,e){const r=new URL(bt$2),s=createMemo(l=>{const c=t();try{return new URL(c,r)}catch{return console.error(`Invalid path ${c}`),l}},r,{equals:(l,c)=>l.href===c.href}),i=createMemo(()=>s().pathname),n=createMemo(()=>s().search,!0),a=createMemo(()=>s().hash),o=()=>"";return {get pathname(){return i()},get search(){return n()},get hash(){return a()},get state(){return e()},get key(){return o()},query:Ks(on$1(n,()=>wt$2(s())))}}let R$1;function ri(){return R$1}function Li(t,e,r,s={}){const{signal:[i,n],utils:a={}}=t,o=a.parsePath||(p=>p),l=a.renderPath||(p=>p),c=a.beforeLeave||Ns(),d=G$1("",s.base||"");if(d===void 0)throw new Error(`${d} is not a valid base path`);d&&!i().value&&n({value:d,replace:!0,scroll:!1});const[u,h]=createSignal(!1),v=async p=>{h(!0);try{await startTransition(p);}finally{h(!1);}},[f,g]=createSignal(i().value),[y,Ae]=createSignal(i().state),kt=ti(f,y),T=[],ee=createSignal(isServer?jt():[]),xe={pattern:d,params:{},path:()=>d,outlet:()=>null,resolvePath(p){return G$1(d,p)}};return createRenderEffect(()=>{const{value:p,state:m}=i();untrack(()=>{p!==f()&&v(()=>{R$1="native",g(p),Ae(m),resetErrorBoundaries(),ee[1]([]);}).then(()=>{R$1=void 0;});});}),{base:xe,location:kt,isRouting:u,renderPath:l,parsePath:o,navigatorFactory:Ot,beforeLeave:c,preloadRoute:Ct,singleFlight:s.singleFlight===void 0?!0:s.singleFlight,submissions:ee};function Ft(p,m,E){untrack(()=>{if(typeof m=="number"){m&&(a.go?a.go(m):console.warn("Router integration does not support relative routing"));return}const{replace:q,resolve:te,scroll:P,state:$}={replace:!1,resolve:!0,scroll:!0,...E},z=te?p.resolvePath(m):G$1("",m);if(z===void 0)throw new Error(`Path '${m}' is not a routable path`);if(T.length>=Hs)throw new Error("Too many redirects");const Ee=f();if(z!==Ee||$!==y()){if(isServer){const K=getRequestEvent();K&&(K.response={status:302,headers:new Headers({Location:z})}),n({value:z,replace:q,scroll:P,state:$});}else if(c.confirm(z,E)){const K=T.push({value:Ee,replace:q,scroll:P,state:y()});v(()=>{R$1="navigate",g(z),Ae($),resetErrorBoundaries(),ee[1]([]);}).then(()=>{T.length===K&&(R$1=void 0,$t({value:z,state:$}));});}}});}function Ot(p){return p=p||useContext(Gs)||xe,(m,E)=>Ft(p,m,E)}function $t(p){const m=T[0];m&&((p.value!==m.value||p.state!==m.state)&&n({...p,replace:m.replace,scroll:m.scroll}),T.length=0);}function Ct(p,m){const E=ei(r(),p.pathname),q=R$1;R$1="preload";for(let te in E){const{route:P,params:$}=E[te];P.component&&P.component.preload&&P.component.preload();const{load:z}=P;m&&z&&runWithOwner(e(),()=>z({params:$,location:{pathname:p.pathname,search:p.search,hash:p.hash,query:wt$2(p),state:null,key:""},intent:"preload"}));}R$1=q;}function jt(){const p=getRequestEvent();return p&&p.router&&p.router.submission?[p.router.submission]:[]}}function Ui(t,e,r,s,i){const{base:n,location:a}=t,{pattern:o,component:l,load:c}=s().route,d=createMemo(()=>s().path);l&&l.preload&&l.preload();const u=c?c({params:i,location:a,intent:R$1||"initial"}):void 0;return {parent:e,pattern:o,path:d,params:i,outlet:()=>l?createComponent(l,{params:i,location:a,data:u,get children(){return r()}}):r(),resolvePath(v){return G$1(n.path(),v,d())}}}const si="Location",ii=5e3,ni=18e4;let B$1=new Map;isServer||setInterval(()=>{const t=Date.now();for(let[e,r]of B$1.entries())!r[3].count&&t-r[0]>ni&&B$1.delete(e);},3e5);function Re$1(){if(!isServer)return B$1;const t=getRequestEvent();if(!t)throw new Error("Cannot find cache context");return (t.router||(t.router={})).cache||(t.router.cache=new Map)}function ai(t,e=!0){return startTransition(()=>{const r=Date.now();At$2(t,s=>{e&&(s[0]=0),s[3][1](r);});})}function At$2(t,e){t&&!Array.isArray(t)&&(t=[t]);for(let r of B$1.keys())(t===void 0||oi(r,t))&&e(B$1.get(r));}function Y(t,e){t.GET&&(t=t.GET);const r=(...s)=>{const i=Re$1(),n=ri(),o=getOwner()?Js():void 0,l=Date.now(),c=e+me$1(s);let d=i.get(c),u;if(isServer){const f=getRequestEvent();if(f){const g=(f.router||(f.router={})).dataOnly;if(g){const y=f&&(f.router.data||(f.router.data={}));if(y&&c in y)return y[c];if(Array.isArray(g)&&!g.includes(c))return y[c]=void 0,Promise.resolve()}}}if(getListener()&&!isServer&&(u=!0,onCleanup(()=>d[3].count--)),d&&d[0]&&(isServer||n==="native"||d[3].count||Date.now()-d[0]<ii)){u&&(d[3].count++,d[3][0]()),d[2]==="preload"&&n!=="preload"&&(d[0]=l);let f=d[1];return n!=="preload"&&(f="then"in d[1]?d[1].then(v(!1),v(!0)):v(!1)(d[1]),!isServer&&n==="navigate"&&startTransition(()=>d[3][1](d[0]))),f}let h=!isServer&&sharedConfig.context&&sharedConfig.has(c)?sharedConfig.load(c):t(...s);if(d?(d[0]=l,d[1]=h,d[2]=n,!isServer&&n==="navigate"&&startTransition(()=>d[3][1](d[0]))):(i.set(c,d=[l,h,n,createSignal(l)]),d[3].count=0),u&&(d[3].count++,d[3][0]()),isServer){const f=getRequestEvent();if(f&&f.router.dataOnly)return f.router.data[c]=h}if(n!=="preload"&&(h="then"in h?h.then(v(!1),v(!0)):v(!1)(h)),isServer&&sharedConfig.context&&sharedConfig.context.async&&!sharedConfig.context.noHydrate){const f=getRequestEvent();(!f||!f.serverOnly)&&sharedConfig.context.serialize(c,h);}return h;function v(f){return async g=>{if(g instanceof Response){if(g.headers.has("Location")){o&&startTransition(()=>{let y=g.headers.get(si);y&&y.startsWith("/")?o(y,{replace:!0}):!isServer&&y&&(window.location.href=y);});return}g.customBody&&(g=await g.customBody());}if(f)throw g;return g}}};return r.keyFor=(...s)=>e+me$1(s),r.key=e,r}Y.set=(t,e)=>{const r=Re$1(),s=Date.now();let i=r.get(t);i?(i[0]=s,i[1]=e,i[2]="preload"):(r.set(t,i=[s,e,,createSignal(s)]),i[3].count=0);};Y.clear=()=>Re$1().clear();function oi(t,e){for(let r of e)if(t.startsWith(r))return !0;return !1}function me$1(t){return JSON.stringify(t,(e,r)=>li(r)?Object.keys(r).sort().reduce((s,i)=>(s[i]=r[i],s),{}):r)}function li(t){let e;return t!=null&&typeof t=="object"&&(!(e=Object.getPrototypeOf(t))||e===Object.prototype)}const Le=new Map;function ci(t,e){const r=St$2(),s=createMemo(()=>r.submissions[0]().filter(i=>i.url===t.toString()&&(!e||e(i.input))));return new Proxy([],{get(i,n){return n===$TRACK?s():n==="pending"?s().some(a=>!a.result):s()[n]}})}function _i(t,e){const r=ci(t,e);return new Proxy({},{get(s,i){return r[r.length-1]?.[i]}})}function xt$2(t,e){function r(...i){const n=this.r,a=this.f,o=(n.singleFlight&&t.withOptions?t.withOptions({headers:{"X-Single-Flight":"true"}}):t)(...i),[l,c]=createSignal();let d;function u(h){return async v=>{const f=await di(v,h,n.navigatorFactory());if(!f)return d.clear();if(c(f),f.error&&!a)throw f.error;return f.data}}return n.submissions[1](h=>[...h,d={input:i,url:s,get result(){return l()?.data},get error(){return l()?.error},get pending(){return !l()},clear(){n.submissions[1](v=>v.filter(f=>f.input!==i));},retry(){return c(void 0),t(...i).then(u(),u(!0))}}]),o.then(u(),u(!0))}const s=t.url||e&&`https://action/${e}`||(isServer?"":`https://action/${ui(t.toString())}`);return Et$2(r,s)}function Et$2(t,e){return t.toString=()=>{if(!e)throw new Error("Client Actions need explicit names if server rendered");return e},t.with=function(...r){const s=function(...n){return t.call(this,...r,...n)},i=new URL(e,bt$2);return i.searchParams.set("args",me$1(r)),Et$2(s,(i.origin==="https://action"?i.origin:"")+i.pathname+i.search)},t.url=e,isServer||(Le.set(e,t),getOwner()&&onCleanup(()=>Le.delete(e))),t}const ui=t=>t.split("").reduce((e,r)=>(e<<5)-e+r.charCodeAt(0)|0,0);async function di(t,e,r){let s,i,n;if(t instanceof Response){if(t.headers.has("X-Revalidate")&&(i=n=t.headers.get("X-Revalidate").split(",")),t.customBody&&(s=await t.customBody(),t.headers.has("X-Single-Flight")&&(i||(i=[]),n||(n=[]),Object.keys(s).forEach(a=>{a!=="_$value"&&(i.push(a),Y.set(a,s[a]));}),s=s._$value)),t.headers.has("Location")){const a=t.headers.get("Location")||"/";a.startsWith("http")?window.location.href=a:r(a);}}else {if(e)return {error:t};s=t;}return At$2(n,a=>a[0]=0),await ai(i,!1),s!=null?{data:s}:void 0}const Bi=xt$2(be$2),Wi=xt$2(_e$1),hi=Y(we$2,"userProfile"),fi={load:()=>hi()},Pt$2=[{$component:{src:"src/routes/(auth).tsx?pick=default&pick=$css",build:()=>import('./build/(auth).mjs'),import:()=>import('./build/(auth).mjs')},$$route:{require:()=>({route:fi}),src:"src/routes/(auth).tsx?pick=route"},path:"/(auth)",filePath:"/home/sh1man999/solidstart-auth/src/routes/(auth).tsx"},{$component:{src:"src/routes/login.tsx?pick=default&pick=$css",build:()=>import('./build/login.mjs'),import:()=>import('./build/login.mjs')},path:"/login",filePath:"/home/sh1man999/solidstart-auth/src/routes/login.tsx"},{$component:{src:"src/routes/(auth)/(main).tsx?pick=default&pick=$css",build:()=>import('./build/(main).mjs'),import:()=>import('./build/(main).mjs')},path:"/(auth)/(main)",filePath:"/home/sh1man999/solidstart-auth/src/routes/(auth)/(main).tsx"}],pi=vi(Pt$2.filter(t=>t.$component));function vi(t){function e(r,s,i,n){const a=Object.values(r).find(o=>i.startsWith(o.id+"/"));return a?(e(a.children||(a.children=[]),s,i.slice(a.id.length)),r):(r.push({...s,id:i,path:i.replace(/\/\([^)/]+\)/g,"").replace(/\./g,"/")}),r)}return t.sort((r,s)=>r.path.length-s.path.length).reduce((r,s)=>e(r,s,s.path,s.path),[])}function gi(t){return t.$GET||t.$POST||t.$PUT||t.$PATCH||t.$DELETE}Ts({routes:Pt$2.reduce((t,e)=>{if(!gi(e))return t;let r=e.path.replace(/\(.*\)\/?/g,"").replace(/\*([^/]*)/g,(s,i)=>`**:${i}`);if(/:[^/]*\?/g.test(r))throw new Error(`Optional parameters are not supported in API routes: ${r}`);if(t[r])throw new Error(`Duplicate API routes for "${r}" found at "${t[r].route.path}" and "${e.path}"`);return t[r]={route:e},t},{})});function It$2(){function t(r){return {...r,...r.$$route?r.$$route.require().route:void 0,info:{...r.$$route?r.$$route.require().route.info:{},filesystem:!0},component:js(r.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:r.children?r.children.map(t):void 0}}return pi.map(t)}let Ue;const qi=isServer?()=>getRequestEvent().routes:()=>Ue||(Ue=It$2());function mi(t){const e=ne$3(t.nativeEvent,"flash");if(!e)return;let r=JSON.parse(e);if(!r||!r.result)return;const s=[...r.input.slice(0,-1),new Map(r.input[r.input.length-1])];return se$1(t.nativeEvent,"flash","",{maxAge:0}),{input:s,url:r.url,pending:!1,result:r.error?new Error(r.result):r.result}}async function yi(t){const e=globalThis.MANIFEST.client;return globalThis.MANIFEST.ssr,t.response.headers.set("Content-Type","text/html"),Object.assign(t,{manifest:await e.json(),assets:[...await e.inputs[e.handler].assets()],router:{submission:mi(t)},routes:It$2(),$islands:new Set})}function bi(t){const r=t.length.toString(16),s="00000000".substring(0,8-r.length)+r;return new TextEncoder().encode(`;0x${s};${t}`)}function _e(t,e){return new ReadableStream({start(r){fs(e,{scopeId:t,plugins:[ct$1,ut$2,dt$2,ht$2,Z$1,Q$2,ft$2,pt$2,vt$2,gt$2],onSerialize(s,i){r.enqueue(bi(i?`(${tr(t)},${s})`:s));},onDone(){r.close();},onError(s){r.error(s);}});}})}async function wi(t){const e=me$2(t),r=e.request,s=r.headers.get("X-Server-Id"),i=r.headers.get("X-Server-Instance"),n=r.headers.has("X-Single-Flight"),a=new URL(r.url);let o,l;if(s)ks(typeof s=="string","Invalid server function"),[o,l]=s.split("#");else if(o=a.searchParams.get("id"),l=a.searchParams.get("name"),!o||!l)throw new Error("Invalid request");const c=(await globalThis.MANIFEST["server-fns"].chunks[o].import())[l];let d=[];if(!i||t.method==="GET"){const u=a.searchParams.get("args");u&&JSON.parse(u).forEach(h=>d.push(h));}if(t.method==="POST"){const u=r.headers.get("content-type");if(u?.startsWith("multipart/form-data")||u?.startsWith("application/x-www-form-urlencoded"))d.push(await new Request(r,{...r,body:t.node.req.body}).formData());else if(u?.startsWith("application/json")){const h=new Request(r,{...r,body:t.node.req.body});d=cs(await h.json(),{plugins:[ct$1,ut$2,dt$2,ht$2,Z$1,Q$2,ft$2,pt$2,vt$2,gt$2]});}}try{let u=await provideRequestEvent(e,async()=>(sharedConfig.context={event:e},e.locals.serverFunctionMeta={id:o+"#"+l},c(...d)));if(n&&i&&(u=await Be(e,u)),u instanceof Response&&i&&(u.headers&&Se$2(t,u.headers),u.status&&(u.status<300||u.status>=400)&&S$1(t,u.status),u.customBody?u=await u.customBody():u.body==null&&(u=null)),!i){const h=u instanceof Error;let v=new URL(r.headers.get("referer")).toString();return u instanceof Response&&u.headers.has("Location")&&(v=new URL(u.headers.get("Location"),new URL(r.url).origin+"").toString()),new Response(null,{status:302,headers:{Location:v,...u?{"Set-Cookie":`flash=${JSON.stringify({url:a.pathname+encodeURIComponent(a.search),result:h?u.message:u,error:h,input:[...d.slice(0,-1),[...d[d.length-1].entries()]]})}; Secure; HttpOnly;`}:{}}})}return oe$3(t,"content-type","text/javascript"),_e(i,u)}catch(u){if(u instanceof Response)n&&i&&(u=await Be(e,u)),u.headers&&Se$2(t,u.headers),u.status&&(!i||u.status<300||u.status>=400)&&S$1(t,u.status),u.customBody?u=u.customBody():u.body==null&&(u=null);else {const h=u instanceof Error?u.message:typeof u=="string"?u:"true";oe$3(t,"X-Error",h);}return i?(oe$3(t,"content-type","text/javascript"),_e(i,u)):u}}let ue;async function Be(t,e){let r,s=new URL(t.request.headers.get("referer")).toString();e instanceof Response&&(e.headers.has("X-Revalidate")&&(r=e.headers.get("X-Revalidate").split(",")),e.headers.has("Location")&&(s=new URL(e.headers.get("Location"),new URL(t.request.url).origin+"").toString()));const i=de$2(t);return i.request=new Request(s),await provideRequestEvent(i,async()=>{await yi(i),ue||(ue=(await import('./build/app.mjs')).default),i.router.dataOnly=r||!0,i.router.previousUrl=t.request.headers.get("referer");try{renderToString(()=>{sharedConfig.context.event=i,ue();});}catch(o){console.log(o);}const n=i.router.data;if(!n)return e;let a=!1;for(const o in n)n[o]===void 0?delete n[o]:a=!0;return a&&(e instanceof Response?e.customBody&&(n._$value=e.customBody()):(n._$value=e,e=new Response(null,{status:200})),e.customBody=()=>n,e.headers.set("X-Single-Flight","true")),e})}const Ki=eventHandler(wi);

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
function Ze$1() {
  let e = /* @__PURE__ */ new Set();
  function t(r) {
    return e.add(r), () => e.delete(r);
  }
  let n = false;
  function o(r, a) {
    if (n)
      return !(n = false);
    const s = { to: r, options: a, defaultPrevented: false, preventDefault: () => s.defaultPrevented = true };
    for (const c of e)
      c.listener({ ...s, from: c.location, retry: (u) => {
        u && (n = true), c.navigate(r, { ...a, resolve: false });
      } });
    return !s.defaultPrevented;
  }
  return { subscribe: t, confirm: o };
}
let N;
function de() {
  (!window.history.state || window.history.state._depth == null) && window.history.replaceState({ ...window.history.state, _depth: window.history.length - 1 }, ""), N = window.history.state._depth;
}
isServer || de();
function on(e) {
  return { ...e, _depth: window.history.state && window.history.state._depth };
}
function sn(e, t) {
  let n = false;
  return () => {
    const o = N;
    de();
    const r = o == null ? null : N - o;
    if (n) {
      n = false;
      return;
    }
    r && t(r) ? (n = true, window.history.go(-r)) : e();
  };
}
const et$1 = /^(?:[a-z0-9]+:)?\/\//i, tt$1 = /^\/+|(\/)\/+$/g, pe = "http://sr";
function $(e, t = false) {
  const n = e.replace(tt$1, "$1");
  return n ? t || /^[?#]/.test(n) ? n : "/" + n : "";
}
function F(e, t, n) {
  if (et$1.test(t))
    return;
  const o = $(e), r = n && $(n);
  let a = "";
  return !r || t.startsWith("/") ? a = o : r.toLowerCase().indexOf(o.toLowerCase()) !== 0 ? a = o + r : a = r, (a || "/") + $(t, !a);
}
function nt$1(e, t) {
  if (e == null)
    throw new Error(t);
  return e;
}
function rt$1(e, t) {
  return $(e).replace(/\/*(\*.*)?$/g, "") + $(t);
}
function ge(e) {
  const t = {};
  return e.searchParams.forEach((n, o) => {
    t[o] = n;
  }), t;
}
function ot$1(e, t, n) {
  const [o, r] = e.split("/*", 2), a = o.split("/").filter(Boolean), s = a.length;
  return (c) => {
    const u = c.split("/").filter(Boolean), l = u.length - s;
    if (l < 0 || l > 0 && r === void 0 && !t)
      return null;
    const i = { path: s ? "" : "/", params: {} }, g = (h) => n === void 0 ? void 0 : n[h];
    for (let h = 0; h < s; h++) {
      const p = a[h], f = u[h], y = p[0] === ":", w = y ? p.slice(1) : p;
      if (y && M$1(f, g(w)))
        i.params[w] = f;
      else if (y || !M$1(f, p))
        return null;
      i.path += `/${f}`;
    }
    if (r) {
      const h = l ? u.slice(-l).join("/") : "";
      if (M$1(h, g(r)))
        i.params[r] = h;
      else
        return null;
    }
    return i;
  };
}
function M$1(e, t) {
  const n = (o) => o.localeCompare(e, void 0, { sensitivity: "base" }) === 0;
  return t === void 0 ? true : typeof t == "string" ? n(t) : typeof t == "function" ? t(e) : Array.isArray(t) ? t.some(n) : t instanceof RegExp ? t.test(e) : false;
}
function st$1(e) {
  const [t, n] = e.pattern.split("/*", 2), o = t.split("/").filter(Boolean);
  return o.reduce((r, a) => r + (a.startsWith(":") ? 2 : 3), o.length - (n === void 0 ? 0 : 1));
}
function at$1(e) {
  const t = /* @__PURE__ */ new Map(), n = getOwner();
  return new Proxy({}, { get(o, r) {
    return t.has(r) || runWithOwner(n, () => t.set(r, createMemo(() => e()[r]))), t.get(r)();
  }, getOwnPropertyDescriptor() {
    return { enumerable: true, configurable: true };
  }, ownKeys() {
    return Reflect.ownKeys(e());
  } });
}
function ye(e) {
  let t = /(\/?\:[^\/]+)\?/.exec(e);
  if (!t)
    return [e];
  let n = e.slice(0, t.index), o = e.slice(t.index + t[0].length);
  const r = [n, n += t[1]];
  for (; t = /^(\/\:[^\/]+)\?/.exec(o); )
    r.push(n += t[1]), o = o.slice(t[0].length);
  return ye(o).reduce((a, s) => [...a, ...r.map((c) => c + s)], []);
}
const it$1 = 100, ct = createContext$1(), ut$1 = createContext$1(), me = () => nt$1(useContext(ct), "<A> and 'use' router primitives can be only used inside a Route."), lt$1 = () => me().navigatorFactory();
function ft$1(e, t = "") {
  const { component: n, load: o, children: r, info: a } = e, s = !r || Array.isArray(r) && !r.length, c = { key: e, component: n, load: o, info: a };
  return we(e.path).reduce((u, l) => {
    for (const i of ye(l)) {
      const g = rt$1(t, i);
      let h = s ? g : g.split("/*", 1)[0];
      h = h.split("/").map((p) => p.startsWith(":") || p.startsWith("*") ? p : encodeURIComponent(p)).join("/"), u.push({ ...c, originalPath: i, pattern: h, matcher: ot$1(h, !s, e.matchFilters) });
    }
    return u;
  }, []);
}
function ht$1(e, t = 0) {
  return { routes: e, score: st$1(e[e.length - 1]) * 1e4 - t, matcher(n) {
    const o = [];
    for (let r = e.length - 1; r >= 0; r--) {
      const a = e[r], s = a.matcher(n);
      if (!s)
        return null;
      o.unshift({ ...s, route: a });
    }
    return o;
  } };
}
function we(e) {
  return Array.isArray(e) ? e : [e];
}
function dt$1(e, t = "", n = [], o = []) {
  const r = we(e);
  for (let a = 0, s = r.length; a < s; a++) {
    const c = r[a];
    if (c && typeof c == "object") {
      c.hasOwnProperty("path") || (c.path = "");
      const u = ft$1(c, t);
      for (const l of u) {
        n.push(l);
        const i = Array.isArray(c.children) && c.children.length === 0;
        if (c.children && !i)
          dt$1(c.children, l.pattern, n, o);
        else {
          const g = ht$1([...n], o.length);
          o.push(g);
        }
        n.pop();
      }
    }
  }
  return n.length ? o : o.sort((a, s) => s.score - a.score);
}
function pt$1(e, t) {
  for (let n = 0, o = e.length; n < o; n++) {
    const r = e[n].matcher(t);
    if (r)
      return r;
  }
  return [];
}
function gt$1(e, t) {
  const n = new URL(pe), o = createMemo((u) => {
    const l = e();
    try {
      return new URL(l, n);
    } catch {
      return console.error(`Invalid path ${l}`), u;
    }
  }, n, { equals: (u, l) => u.href === l.href }), r = createMemo(() => o().pathname), a = createMemo(() => o().search, true), s = createMemo(() => o().hash), c = () => "";
  return { get pathname() {
    return r();
  }, get search() {
    return a();
  }, get hash() {
    return s();
  }, get state() {
    return t();
  }, get key() {
    return c();
  }, query: at$1(on$1(a, () => ge(o()))) };
}
let S;
function yt$1() {
  return S;
}
function an(e, t, n, o = {}) {
  const { signal: [r, a], utils: s = {} } = e, c = s.parsePath || ((d) => d), u = s.renderPath || ((d) => d), l = s.beforeLeave || Ze$1(), i = F("", o.base || "");
  if (i === void 0)
    throw new Error(`${i} is not a valid base path`);
  i && !r().value && a({ value: i, replace: true, scroll: false });
  const [g, h] = createSignal(false), p = async (d) => {
    h(true);
    try {
      await startTransition(d);
    } finally {
      h(false);
    }
  }, [f, y] = createSignal(r().value), [w, V] = createSignal(r().state), Ce = gt$1(f, w), H = [], W = createSignal(isServer ? Oe() : []), Y = { pattern: i, params: {}, path: () => i, outlet: () => null, resolvePath(d) {
    return F(i, d);
  } };
  return createRenderEffect(() => {
    const { value: d, state: m } = r();
    untrack(() => {
      d !== f() && p(() => {
        S = "native", y(d), V(m), resetErrorBoundaries(), W[1]([]);
      }).then(() => {
        S = void 0;
      });
    });
  }), { base: Y, location: Ce, isRouting: g, renderPath: u, parsePath: c, navigatorFactory: Ee, beforeLeave: l, preloadRoute: Pe, singleFlight: o.singleFlight === void 0 ? true : o.singleFlight, submissions: W };
  function Ae(d, m, x) {
    untrack(() => {
      if (typeof m == "number") {
        m && (s.go ? s.go(m) : console.warn("Router integration does not support relative routing"));
        return;
      }
      const { replace: q, resolve: B, scroll: C, state: O } = { replace: false, resolve: true, scroll: true, ...x }, b = B ? d.resolvePath(m) : F("", m);
      if (b === void 0)
        throw new Error(`Path '${m}' is not a routable path`);
      if (H.length >= it$1)
        throw new Error("Too many redirects");
      const Z = f();
      if (b !== Z || O !== w()) {
        if (isServer) {
          const k = getRequestEvent();
          k && (k.response = { status: 302, headers: new Headers({ Location: b }) }), a({ value: b, replace: q, scroll: C, state: O });
        } else if (l.confirm(b, x)) {
          const k = H.push({ value: Z, replace: q, scroll: C, state: w() });
          p(() => {
            S = "navigate", y(b), V(O), resetErrorBoundaries(), W[1]([]);
          }).then(() => {
            H.length === k && (S = void 0, _e({ value: b, state: O }));
          });
        }
      }
    });
  }
  function Ee(d) {
    return d = d || useContext(ut$1) || Y, (m, x) => Ae(d, m, x);
  }
  function _e(d) {
    const m = H[0];
    m && ((d.value !== m.value || d.state !== m.state) && a({ ...d, replace: m.replace, scroll: m.scroll }), H.length = 0);
  }
  function Pe(d, m) {
    const x = pt$1(n(), d.pathname), q = S;
    S = "preload";
    for (let B in x) {
      const { route: C, params: O } = x[B];
      C.component && C.component.preload && C.component.preload();
      const { load: b } = C;
      m && b && runWithOwner(t(), () => b({ params: O, location: { pathname: d.pathname, search: d.search, hash: d.hash, query: ge(d), state: null, key: "" }, intent: "preload" }));
    }
    S = q;
  }
  function Oe() {
    const d = getRequestEvent();
    return d && d.router && d.router.submission ? [d.router.submission] : [];
  }
}
function cn(e, t, n, o, r) {
  const { base: a, location: s } = e, { pattern: c, component: u, load: l } = o().route, i = createMemo(() => o().path);
  u && u.preload && u.preload();
  const g = l ? l({ params: r, location: s, intent: S || "initial" }) : void 0;
  return { parent: t, pattern: c, path: i, params: r, outlet: () => u ? createComponent(u, { params: r, location: s, data: g, get children() {
    return n();
  } }) : n(), resolvePath(p) {
    return F(a.path(), p, i());
  } };
}
const mt$1 = "Location", wt$1 = 5e3, Rt$1 = 18e4;
let L = /* @__PURE__ */ new Map();
isServer || setInterval(() => {
  const e = Date.now();
  for (let [t, n] of L.entries())
    !n[3].count && e - n[0] > Rt$1 && L.delete(t);
}, 3e5);
function G() {
  if (!isServer)
    return L;
  const e = getRequestEvent();
  if (!e)
    throw new Error("Cannot find cache context");
  return (e.router || (e.router = {})).cache || (e.router.cache = /* @__PURE__ */ new Map());
}
function vt$1(e, t = true) {
  return startTransition(() => {
    const n = Date.now();
    Re(e, (o) => {
      t && (o[0] = 0), o[3][1](n);
    });
  });
}
function Re(e, t) {
  e && !Array.isArray(e) && (e = [e]);
  for (let n of L.keys())
    (e === void 0 || bt$1(n, e)) && t(L.get(n));
}
function U$1(e, t) {
  e.GET && (e = e.GET);
  const n = (...o) => {
    const r = G(), a = yt$1(), c = getOwner() ? lt$1() : void 0, u = Date.now(), l = t + X$1(o);
    let i = r.get(l), g;
    if (isServer) {
      const f = getRequestEvent();
      if (f) {
        const y = (f.router || (f.router = {})).dataOnly;
        if (y) {
          const w = f && (f.router.data || (f.router.data = {}));
          if (w && l in w)
            return w[l];
          if (Array.isArray(y) && !y.includes(l))
            return w[l] = void 0, Promise.resolve();
        }
      }
    }
    if (getListener() && !isServer && (g = true, onCleanup(() => i[3].count--)), i && i[0] && (isServer || a === "native" || i[3].count || Date.now() - i[0] < wt$1)) {
      g && (i[3].count++, i[3][0]()), i[2] === "preload" && a !== "preload" && (i[0] = u);
      let f = i[1];
      return a !== "preload" && (f = "then" in i[1] ? i[1].then(p(false), p(true)) : p(false)(i[1]), !isServer && a === "navigate" && startTransition(() => i[3][1](i[0]))), f;
    }
    let h = !isServer && sharedConfig.context && sharedConfig.has(l) ? sharedConfig.load(l) : e(...o);
    if (i ? (i[0] = u, i[1] = h, i[2] = a, !isServer && a === "navigate" && startTransition(() => i[3][1](i[0]))) : (r.set(l, i = [u, h, a, createSignal(u)]), i[3].count = 0), g && (i[3].count++, i[3][0]()), isServer) {
      const f = getRequestEvent();
      if (f && f.router.dataOnly)
        return f.router.data[l] = h;
    }
    if (a !== "preload" && (h = "then" in h ? h.then(p(false), p(true)) : p(false)(h)), isServer && sharedConfig.context && sharedConfig.context.async && !sharedConfig.context.noHydrate) {
      const f = getRequestEvent();
      (!f || !f.serverOnly) && sharedConfig.context.serialize(l, h);
    }
    return h;
    function p(f) {
      return async (y) => {
        if (y instanceof Response) {
          if (y.headers.has("Location")) {
            c && startTransition(() => {
              let w = y.headers.get(mt$1);
              w && w.startsWith("/") ? c(w, { replace: true }) : !isServer && w && (window.location.href = w);
            });
            return;
          }
          y.customBody && (y = await y.customBody());
        }
        if (f)
          throw y;
        return y;
      };
    }
  };
  return n.keyFor = (...o) => t + X$1(o), n.key = t, n;
}
U$1.set = (e, t) => {
  const n = G(), o = Date.now();
  let r = n.get(e);
  r ? (r[0] = o, r[1] = t, r[2] = "preload") : (n.set(e, r = [o, t, , createSignal(o)]), r[3].count = 0);
};
U$1.clear = () => G().clear();
function bt$1(e, t) {
  for (let n of t)
    if (e.startsWith(n))
      return true;
  return false;
}
function X$1(e) {
  return JSON.stringify(e, (t, n) => St$1(n) ? Object.keys(n).sort().reduce((o, r) => (o[r] = n[r], o), {}) : n);
}
function St$1(e) {
  let t;
  return e != null && typeof e == "object" && (!(t = Object.getPrototypeOf(e)) || t === Object.prototype);
}
const ne$1 = /* @__PURE__ */ new Map();
function xt$1(e, t) {
  const n = me(), o = createMemo(() => n.submissions[0]().filter((r) => r.url === e.toString() && (!t || t(r.input))));
  return new Proxy([], { get(r, a) {
    return a === $TRACK ? o() : a === "pending" ? o().some((s) => !s.result) : o()[a];
  } });
}
function un(e, t) {
  const n = xt$1(e, t);
  return new Proxy({}, { get(o, r) {
    var _a;
    return (_a = n[n.length - 1]) == null ? void 0 : _a[r];
  } });
}
function ve(e, t) {
  function n(...r) {
    const a = this.r, s = this.f, c = (a.singleFlight && e.withOptions ? e.withOptions({ headers: { "X-Single-Flight": "true" } }) : e)(...r), [u, l] = createSignal();
    let i;
    function g(h) {
      return async (p) => {
        const f = await At$1(p, h, a.navigatorFactory());
        if (!f)
          return i.clear();
        if (l(f), f.error && !s)
          throw f.error;
        return f.data;
      };
    }
    return a.submissions[1]((h) => [...h, i = { input: r, url: o, get result() {
      var _a;
      return (_a = u()) == null ? void 0 : _a.data;
    }, get error() {
      var _a;
      return (_a = u()) == null ? void 0 : _a.error;
    }, get pending() {
      return !u();
    }, clear() {
      a.submissions[1]((p) => p.filter((f) => f.input !== r));
    }, retry() {
      return l(void 0), e(...r).then(g(), g(true));
    } }]), c.then(g(), g(true));
  }
  const o = e.url || t && `https://action/${t}` || (isServer ? "" : `https://action/${Ct$1(e.toString())}`);
  return be(n, o);
}
function be(e, t) {
  return e.toString = () => {
    if (!t)
      throw new Error("Client Actions need explicit names if server rendered");
    return t;
  }, e.with = function(...n) {
    const o = function(...a) {
      return e.call(this, ...n, ...a);
    }, r = new URL(t, pe);
    return r.searchParams.set("args", X$1(n)), be(o, (r.origin === "https://action" ? r.origin : "") + r.pathname + r.search);
  }, e.url = t, isServer || (ne$1.set(t, e), getOwner() && onCleanup(() => ne$1.delete(t))), e;
}
const Ct$1 = (e) => e.split("").reduce((t, n) => (t << 5) - t + n.charCodeAt(0) | 0, 0);
async function At$1(e, t, n) {
  let o, r, a;
  if (e instanceof Response) {
    if (e.headers.has("X-Revalidate") && (r = a = e.headers.get("X-Revalidate").split(",")), e.customBody && (o = await e.customBody(), e.headers.has("X-Single-Flight") && (r || (r = []), a || (a = []), Object.keys(o).forEach((s) => {
      s !== "_$value" && (r.push(s), U$1.set(s, o[s]));
    }), o = o._$value)), e.headers.has("Location")) {
      const s = e.headers.get("Location") || "/";
      s.startsWith("http") ? window.location.href = s : n(s);
    }
  } else {
    if (t)
      return { error: e };
    o = e;
  }
  return Re(a, (s) => s[0] = 0), await vt$1(r, false), o != null ? { data: o } : void 0;
}
function J$1(e, t = 302) {
  let n, o;
  typeof t == "number" ? n = { status: t } : ({ revalidate: o, ...n } = t, typeof n.status > "u" && (n.status = 302));
  const r = new Headers(n.headers);
  return r.set("Location", e), o && r.set("X-Revalidate", o.toString()), new Response(null, { ...n, headers: r });
}
function Et$1(e = {}) {
  let t, n = false;
  const o = (s) => {
    if (t && t !== s)
      throw new Error("Context conflict");
  };
  let r;
  if (e.asyncContext) {
    const s = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    s ? r = new s() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
  }
  const a = () => {
    if (r && t === void 0) {
      const s = r.getStore();
      if (s !== void 0)
        return s;
    }
    return t;
  };
  return { use: () => {
    const s = a();
    if (s === void 0)
      throw new Error("Context is not available");
    return s;
  }, tryUse: () => a(), set: (s, c) => {
    c || o(s), t = s, n = true;
  }, unset: () => {
    t = void 0, n = false;
  }, call: (s, c) => {
    o(s), t = s;
    try {
      return r ? r.run(s, c) : c();
    } finally {
      n || (t = void 0);
    }
  }, async callAsync(s, c) {
    t = s;
    const u = () => {
      t = s;
    }, l = () => t === s ? u : void 0;
    se.add(l);
    try {
      const i = r ? r.run(s, c) : c();
      return n || (t = void 0), await i;
    } finally {
      se.delete(l);
    }
  } };
}
function _t(e = {}) {
  const t = {};
  return { get(n, o = {}) {
    return t[n] || (t[n] = Et$1({ ...e, ...o })), t[n], t[n];
  } };
}
const j = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : {}, re$1 = "__unctx__", Pt$1 = j[re$1] || (j[re$1] = _t()), Ot$1 = (e, t = {}) => Pt$1.get(e, t), oe$1 = "__unctx_async_handlers__", se = j[oe$1] || (j[oe$1] = /* @__PURE__ */ new Set());
function Ht(e) {
  let t;
  const n = xe(e), o = { duplex: "half", method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer ? new Request(n, { ...o, body: e.node.req.body }) : new Request(n, { ...o, get body() {
    return t || (t = Bt(e), t);
  } });
}
function Tt$1(e) {
  var _a;
  return (_a = e.web) != null ? _a : e.web = { request: Ht(e), url: xe(e) }, e.web.request;
}
function $t$1() {
  return Nt$1();
}
const Se = Symbol("$HTTPEvent");
function Lt$1(e) {
  return typeof e == "object" && (e instanceof H3Event || (e == null ? void 0 : e[Se]) instanceof H3Event || (e == null ? void 0 : e.__is_event__) === true);
}
function R(e) {
  return function(...t) {
    var _a;
    let n = t[0];
    if (Lt$1(n))
      t[0] = n instanceof H3Event || n.__is_event__ ? n : n[Se];
    else {
      if (!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext))
        throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (n = $t$1(), !n)
        throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      t.unshift(n);
    }
    return e(...t);
  };
}
const xe = R(getRequestURL), qt$1 = R(getRequestIP), ae = R(setResponseStatus), ie = R(getResponseStatus), kt$1 = R(getResponseStatusText), I$1 = R(getResponseHeaders), ce = R(getResponseHeader), It$1 = R(setResponseHeader), Ft$1 = R(appendResponseHeader), ln = R(sendRedirect), jt = R(getCookie), Ut = R(setCookie), Wt = R(deleteCookie), fn = R(setHeader), Bt = R(getRequestWebStream), Mt$1 = R(removeResponseHeader), Dt = R(Tt$1);
function Kt$1() {
  var _a;
  return Ot$1("nitro-app", { asyncContext: !!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext), AsyncLocalStorage: AsyncLocalStorage });
}
function Nt$1() {
  return Kt$1().use().event;
}
const D = Symbol("fetchEvent");
function Xt(e) {
  return { request: Dt(e), response: Jt(e), clientAddress: qt$1(e), locals: {}, nativeEvent: e };
}
function zt(e) {
  return { ...e };
}
function hn(e) {
  if (!e[D]) {
    const t = Xt(e);
    e[D] = t;
  }
  return e[D];
}
class Gt {
  constructor(t) {
    __publicField(this, "event");
    this.event = t;
  }
  get(t) {
    const n = ce(this.event, t);
    return Array.isArray(n) ? n.join(", ") : n || null;
  }
  has(t) {
    return this.get(t) !== void 0;
  }
  set(t, n) {
    return It$1(this.event, t, n);
  }
  delete(t) {
    return Mt$1(this.event, t);
  }
  append(t, n) {
    Ft$1(this.event, t, n);
  }
  getSetCookie() {
    const t = ce(this.event, "Set-Cookie");
    return Array.isArray(t) ? t : [t];
  }
  forEach(t) {
    return Object.entries(I$1(this.event)).forEach(([n, o]) => t(Array.isArray(o) ? o.join(", ") : o, n, this));
  }
  entries() {
    return Object.entries(I$1(this.event)).map(([t, n]) => [t, Array.isArray(n) ? n.join(", ") : n])[Symbol.iterator]();
  }
  keys() {
    return Object.keys(I$1(this.event))[Symbol.iterator]();
  }
  values() {
    return Object.values(I$1(this.event)).map((t) => Array.isArray(t) ? t.join(", ") : t)[Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return this.entries()[Symbol.iterator]();
  }
}
function Jt(e) {
  return { get status() {
    return ie(e);
  }, set status(t) {
    ae(e, t);
  }, get statusText() {
    return kt$1(e);
  }, set statusText(t) {
    ae(e, ie(), t);
  }, headers: new Gt(e) };
}
function Q$1(e, t, n) {
  if (typeof e != "function")
    throw new Error("Export from a 'use server' module must be a function");
  const o = "";
  return new Proxy(e, { get(r, a, s) {
    if (a === "url")
      return `${o}/_server?id=${encodeURIComponent(t)}&name=${encodeURIComponent(n)}`;
    if (a === "GET")
      return s;
  }, apply(r, a, s) {
    const c = getRequestEvent();
    if (!c)
      throw new Error("Cannot call server function outside of a request");
    const u = zt(c);
    return u.locals.serverFunctionMeta = { id: t + "#" + n }, u.serverOnly = true, provideRequestEvent(u, () => e.apply(a, s));
  } });
}
const Qt = Q$1(async (e) => (Ut("auth_token", "test_token"), J$1("/")), "c_4631", "logInServer"), Vt = Q$1(async (e) => (Wt("auth_token"), J$1("/login")), "c_4631", "logOutServer"), Yt = Q$1(async () => {
  const e = jt("auth_token");
  return console.log(e), e ? 2e7 : J$1("/login");
}, "c_4631", "getUserProfileServer"), dn = ve(Qt), pn = ve(Vt), gn = U$1(Yt, "userProfile");

const Q = createContext$1(), X = ["title", "meta"], M = [], I = ["name", "http-equiv", "content", "charset", "media"].concat(["property"]), k = (e, n) => {
  const t = Object.fromEntries(Object.entries(e.props).filter(([r]) => n.includes(r)).sort());
  return (Object.hasOwn(t, "name") || Object.hasOwn(t, "property")) && (t.name = t.name || t.property, delete t.property), e.tag + JSON.stringify(t);
};
function We() {
  if (!sharedConfig.context) {
    const t = document.head.querySelectorAll("[data-sm]");
    Array.prototype.forEach.call(t, (r) => r.parentNode.removeChild(r));
  }
  const e = /* @__PURE__ */ new Map();
  function n(t) {
    if (t.ref)
      return t.ref;
    let r = document.querySelector(`[data-sm="${t.id}"]`);
    return r ? (r.tagName.toLowerCase() !== t.tag && (r.parentNode && r.parentNode.removeChild(r), r = document.createElement(t.tag)), r.removeAttribute("data-sm")) : r = document.createElement(t.tag), r;
  }
  return { addTag(t) {
    if (X.indexOf(t.tag) !== -1) {
      const s = t.tag === "title" ? M : I, a = k(t, s);
      e.has(a) || e.set(a, []);
      let i = e.get(a), l = i.length;
      i = [...i, t], e.set(a, i);
      let d = n(t);
      t.ref = d, spread(d, t.props);
      let m = null;
      for (var r = l - 1; r >= 0; r--)
        if (i[r] != null) {
          m = i[r];
          break;
        }
      return d.parentNode != document.head && document.head.appendChild(d), m && m.ref && document.head.removeChild(m.ref), l;
    }
    let o = n(t);
    return t.ref = o, spread(o, t.props), o.parentNode != document.head && document.head.appendChild(o), -1;
  }, removeTag(t, r) {
    const o = t.tag === "title" ? M : I, s = k(t, o);
    if (t.ref) {
      const a = e.get(s);
      if (a) {
        if (t.ref.parentNode) {
          t.ref.parentNode.removeChild(t.ref);
          for (let i = r - 1; i >= 0; i--)
            a[i] != null && document.head.appendChild(a[i].ref);
        }
        a[r] = null, e.set(s, a);
      } else
        t.ref.parentNode && t.ref.parentNode.removeChild(t.ref);
    }
  } };
}
function Je() {
  const e = [];
  return useAssets(() => ssr(Ge(e))), { addTag(n) {
    if (X.indexOf(n.tag) !== -1) {
      const t = n.tag === "title" ? M : I, r = k(n, t), o = e.findIndex((s) => s.tag === n.tag && k(s, t) === r);
      o !== -1 && e.splice(o, 1);
    }
    return e.push(n), e.length;
  }, removeTag(n, t) {
  } };
}
const ze = (e) => {
  const n = isServer ? Je() : We();
  return createComponent$1(Q.Provider, { value: n, get children() {
    return e.children;
  } });
}, Z = (e, n, t) => (Ve({ tag: e, props: n, setting: t, id: createUniqueId(), get name() {
  return n.name || n.property;
} }), null);
function Ve(e) {
  const n = useContext(Q);
  if (!n)
    throw new Error("<MetaProvider /> should be in the tree");
  createRenderEffect(() => {
    const t = n.addTag(e);
    onCleanup(() => n.removeTag(e, t));
  });
}
function Ge(e) {
  return e.map((n) => {
    var _a, _b;
    const r = Object.keys(n.props).map((s) => s === "children" ? "" : ` ${s}="${escape(n.props[s], true)}"`).join(""), o = n.props.children;
    return ((_a = n.setting) == null ? void 0 : _a.close) ? `<${n.tag} data-sm="${n.id}"${r}>${((_b = n.setting) == null ? void 0 : _b.escape) ? escape(o) : o || ""}</${n.tag}>` : `<${n.tag} data-sm="${n.id}"${r}/>`;
  }).join("");
}
const Ye = (e) => Z("title", e, { escape: true, close: true }), U = (e) => Z("meta", e), ee = (e) => (n) => {
  const { base: t } = n, r = children(() => n.children), o = createMemo(() => dt$1(r(), n.base || ""));
  let s;
  const a = an(e, () => s, o, { base: t, singleFlight: n.singleFlight }), i = a.location;
  return e.create && e.create(a), createComponent$1(ct.Provider, { value: a, get children() {
    return createComponent$1(Qe, { location: i, get root() {
      return n.root;
    }, get load() {
      return n.rootLoad;
    }, get children() {
      return [(s = getOwner()) && null, createComponent$1(Xe, { routerState: a, get branches() {
        return o();
      } })];
    } });
  } });
};
function Qe(e) {
  const n = e.location, t = createMemo(() => e.load && untrack(() => e.load({ params: {}, location: n, intent: "preload" })));
  return createComponent$1(Show, { get when() {
    return e.root;
  }, keyed: true, get fallback() {
    return e.children;
  }, children: (r) => createComponent$1(r, { params: {}, location: n, get data() {
    return t();
  }, get children() {
    return e.children;
  } }) });
}
function Xe(e) {
  const n = createMemo(() => pt$1(e.branches, e.routerState.location.pathname));
  if (isServer) {
    const a = getRequestEvent();
    if (a && a.router && a.router.dataOnly) {
      Ze(a, e.routerState, e.branches);
      return;
    }
    a && ((a.router || (a.router = {})).matches || (a.router.matches = n().map(({ route: i, path: l, params: d }) => ({ path: i.originalPath, pattern: i.pattern, match: l, params: d, info: i.info }))));
  }
  const t = at$1(() => {
    const a = n(), i = {};
    for (let l = 0; l < a.length; l++)
      Object.assign(i, a[l].params);
    return i;
  }), r = [];
  let o;
  const s = createMemo(on$1(n, (a, i, l) => {
    let d = i && a.length === i.length;
    const m = [];
    for (let f = 0, y = a.length; f < y; f++) {
      const w = i && i[f], c = a[f];
      l && w && c.route.key === w.route.key ? m[f] = l[f] : (d = false, r[f] && r[f](), createRoot((u) => {
        r[f] = u, m[f] = cn(e.routerState, m[f - 1] || e.routerState.base, _(() => s()[f + 1]), () => n()[f], t);
      }));
    }
    return r.splice(a.length).forEach((f) => f()), l && d ? l : (o = m[0], m);
  }));
  return _(() => s() && o)();
}
const _ = (e) => () => createComponent$1(Show, { get when() {
  return e();
}, keyed: true, children: (n) => createComponent$1(ut$1.Provider, { value: n, get children() {
  return n.outlet();
} }) });
function Ze(e, n, t) {
  const r = new URL(e.request.url), o = pt$1(t, new URL(e.router.previousUrl || e.request.url).pathname), s = pt$1(t, r.pathname);
  for (let a = 0; a < s.length; a++) {
    (!o[a] || s[a].route !== o[a].route) && (e.router.dataOnly = true);
    const { route: i, params: l } = s[a];
    i.load && i.load({ params: l, location: n.location, intent: "preload" });
  }
}
function et([e, n], t, r) {
  return [t ? () => t(e()) : e, r ? (o) => n(r(o)) : n];
}
function tt(e) {
  if (e === "#")
    return null;
  try {
    return document.querySelector(e);
  } catch {
    return null;
  }
}
function nt(e) {
  let n = false;
  const t = (o) => typeof o == "string" ? { value: o } : o, r = et(createSignal(t(e.get()), { equals: (o, s) => o.value === s.value }), void 0, (o) => (!n && e.set(o), o));
  return e.init && onCleanup(e.init((o = e.get()) => {
    n = true, r[1](t(o)), n = false;
  })), ee({ signal: r, create: e.create, utils: e.utils });
}
function rt(e, n, t) {
  return e.addEventListener(n, t), () => e.removeEventListener(n, t);
}
function ot(e, n) {
  const t = tt(`#${e}`);
  t ? t.scrollIntoView() : n && window.scrollTo(0, 0);
}
function at(e) {
  const n = new URL(e);
  return n.pathname + n.search;
}
function st(e) {
  let n;
  const t = { value: e.url || (n = getRequestEvent()) && at(n.request.url) || "" };
  return ee({ signal: [() => t, (r) => Object.assign(t, r)] })(e);
}
function it(e = true, n = false, t = "/_server") {
  return (r) => {
    const o = r.base.path(), s = r.navigatorFactory(r.base);
    let a = {};
    function i(c) {
      return c.namespaceURI === "http://www.w3.org/2000/svg";
    }
    function l(c) {
      if (c.defaultPrevented || c.button !== 0 || c.metaKey || c.altKey || c.ctrlKey || c.shiftKey)
        return;
      const u = c.composedPath().find((j) => j instanceof Node && j.nodeName.toUpperCase() === "A");
      if (!u || n && !u.hasAttribute("link"))
        return;
      const g = i(u), p = g ? u.href.baseVal : u.href;
      if ((g ? u.target.baseVal : u.target) || !p && !u.hasAttribute("state"))
        return;
      const S = (u.getAttribute("rel") || "").split(/\s+/);
      if (u.hasAttribute("download") || S && S.includes("external"))
        return;
      const R = g ? new URL(p, document.baseURI) : new URL(p);
      if (!(R.origin !== window.location.origin || o && R.pathname && !R.pathname.toLowerCase().startsWith(o.toLowerCase())))
        return [u, R];
    }
    function d(c) {
      const u = l(c);
      if (!u)
        return;
      const [g, p] = u, F = r.parsePath(p.pathname + p.search + p.hash), S = g.getAttribute("state");
      c.preventDefault(), s(F, { resolve: false, replace: g.hasAttribute("replace"), scroll: !g.hasAttribute("noscroll"), state: S && JSON.parse(S) });
    }
    function m(c) {
      const u = l(c);
      if (!u)
        return;
      const [g, p] = u;
      a[p.pathname] || r.preloadRoute(p, g.getAttribute("preload") !== "false");
    }
    function f(c) {
      const u = l(c);
      if (!u)
        return;
      const [g, p] = u;
      a[p.pathname] || (a[p.pathname] = setTimeout(() => {
        r.preloadRoute(p, g.getAttribute("preload") !== "false"), delete a[p.pathname];
      }, 200));
    }
    function y(c) {
      const u = l(c);
      if (!u)
        return;
      const [, g] = u;
      a[g.pathname] && (clearTimeout(a[g.pathname]), delete a[g.pathname]);
    }
    function w(c) {
      let u = c.submitter && c.submitter.hasAttribute("formaction") ? c.submitter.getAttribute("formaction") : c.target.getAttribute("action");
      if (!u)
        return;
      if (!u.startsWith("https://action/")) {
        const p = new URL(u, pe);
        if (u = r.parsePath(p.pathname + p.search), !u.startsWith(t))
          return;
      }
      if (c.target.method.toUpperCase() !== "POST")
        throw new Error("Only POST forms are supported for Actions");
      const g = ne$1.get(u);
      if (g) {
        c.preventDefault();
        const p = new FormData(c.target);
        c.submitter && c.submitter.name && p.append(c.submitter.name, c.submitter.value), g.call({ r, f: c.target }, p);
      }
    }
    delegateEvents(["click", "submit"]), document.addEventListener("click", d), e && (document.addEventListener("mouseover", f), document.addEventListener("mouseout", y), document.addEventListener("focusin", m), document.addEventListener("touchstart", m)), document.addEventListener("submit", w), onCleanup(() => {
      document.removeEventListener("click", d), e && (document.removeEventListener("mouseover", f), document.removeEventListener("mouseout", y), document.removeEventListener("focusin", m), document.removeEventListener("touchstart", m)), document.removeEventListener("submit", w);
    });
  };
}
function lt(e) {
  if (isServer)
    return st(e);
  const n = () => ({ value: window.location.pathname + window.location.search + window.location.hash, state: window.history.state }), t = Ze$1();
  return nt({ get: n, set({ value: r, replace: o, scroll: s, state: a }) {
    o ? window.history.replaceState(on(a), "", r) : window.history.pushState(a, "", r), ot(window.location.hash.slice(1), s), de();
  }, init: (r) => rt(window, "popstate", sn(r, (o) => {
    if (o && o < 0)
      return !t.confirm(o);
    {
      const s = n();
      return !t.confirm(s.value, { state: s.state });
    }
  })), create: it(e.preload, e.explicitLinks, e.actionBase), utils: { go: (r) => window.history.go(r), beforeLeave: t } })(e);
}
var ut = " ";
const dt = { style: (e) => ssrElement("style", e.attrs, () => escape(e.children), true), link: (e) => ssrElement("link", e.attrs, void 0, true), script: (e) => e.attrs.src ? ssrElement("script", mergeProps(() => e.attrs, { get id() {
  return e.key;
} }), () => ssr(ut), true) : null };
function q(e) {
  let { tag: n, attrs: { key: t, ...r } = { key: void 0 }, children: o } = e;
  return dt[n]({ attrs: r, key: t, children: o });
}
function ht(e, n, t, r = "default") {
  return lazy(async () => {
    var _a;
    {
      const s = (await e.import())[r], i = (await ((_a = n.inputs) == null ? void 0 : _a[e.src].assets())).filter((d) => d.tag === "style" || d.attrs.rel === "stylesheet");
      return { default: (d) => [...i.map((m) => q(m)), createComponent(s, d)] };
    }
  });
}
const C = { NORMAL: 0, WILDCARD: 1, PLACEHOLDER: 2 };
function ft(e = {}) {
  const n = { options: e, rootNode: te(), staticRoutesMap: {} }, t = (r) => e.strictTrailingSlash ? r : r.replace(/\/$/, "") || "/";
  if (e.routes)
    for (const r in e.routes)
      B(n, t(r), e.routes[r]);
  return { ctx: n, lookup: (r) => mt(n, t(r)), insert: (r, o) => B(n, t(r), o), remove: (r) => pt(n, t(r)) };
}
function mt(e, n) {
  const t = e.staticRoutesMap[n];
  if (t)
    return t.data;
  const r = n.split("/"), o = {};
  let s = false, a = null, i = e.rootNode, l = null;
  for (let d = 0; d < r.length; d++) {
    const m = r[d];
    i.wildcardChildNode !== null && (a = i.wildcardChildNode, l = r.slice(d).join("/"));
    const f = i.children.get(m);
    if (f !== void 0)
      i = f;
    else if (i = i.placeholderChildNode, i !== null)
      o[i.paramName] = m, s = true;
    else
      break;
  }
  return (i === null || i.data === null) && a !== null && (i = a, o[i.paramName || "_"] = l, s = true), i ? s ? { ...i.data, params: s ? o : void 0 } : i.data : null;
}
function B(e, n, t) {
  let r = true;
  const o = n.split("/");
  let s = e.rootNode, a = 0;
  for (const i of o) {
    let l;
    if (l = s.children.get(i))
      s = l;
    else {
      const d = gt(i);
      l = te({ type: d, parent: s }), s.children.set(i, l), d === C.PLACEHOLDER ? (l.paramName = i === "*" ? `_${a++}` : i.slice(1), s.placeholderChildNode = l, r = false) : d === C.WILDCARD && (s.wildcardChildNode = l, l.paramName = i.slice(3) || "_", r = false), s = l;
    }
  }
  return s.data = t, r === true && (e.staticRoutesMap[n] = s), s;
}
function pt(e, n) {
  let t = false;
  const r = n.split("/");
  let o = e.rootNode;
  for (const s of r)
    if (o = o.children.get(s), !o)
      return t;
  if (o.data) {
    const s = r[r.length - 1];
    if (o.data = null, Object.keys(o.children).length === 0) {
      const a = o.parent;
      a.children.delete(s), a.wildcardChildNode = null, a.placeholderChildNode = null;
    }
    t = true;
  }
  return t;
}
function te(e = {}) {
  return { type: e.type || C.NORMAL, parent: e.parent || null, children: /* @__PURE__ */ new Map(), data: e.data || null, paramName: e.paramName || null, wildcardChildNode: null, placeholderChildNode: null };
}
function gt(e) {
  return e.startsWith("**") ? C.WILDCARD : e[0] === ":" || e === "*" ? C.PLACEHOLDER : C.NORMAL;
}
const wt = { load: () => gn() }, ne = [{ $component: { src: "src/routes/(auth).tsx?pick=default&pick=$css", build: () => import('./build/(auth)2.mjs'), import: () => import('./build/(auth)2.mjs') }, $$route: { require: () => ({ route: wt }), src: "src/routes/(auth).tsx?pick=route" }, path: "/(auth)", filePath: "/home/sh1man999/solidstart-auth/src/routes/(auth).tsx" }, { $component: { src: "src/routes/login.tsx?pick=default&pick=$css", build: () => import('./build/login2.mjs'), import: () => import('./build/login2.mjs') }, path: "/login", filePath: "/home/sh1man999/solidstart-auth/src/routes/login.tsx" }, { $component: { src: "src/routes/(auth)/(main).tsx?pick=default&pick=$css", build: () => import('./build/(main)2.mjs'), import: () => import('./build/(main)2.mjs') }, path: "/(auth)/(main)", filePath: "/home/sh1man999/solidstart-auth/src/routes/(auth)/(main).tsx" }], yt = vt(ne.filter((e) => e.$component));
function vt(e) {
  function n(t, r, o, s) {
    const a = Object.values(t).find((i) => o.startsWith(i.id + "/"));
    return a ? (n(a.children || (a.children = []), r, o.slice(a.id.length)), t) : (t.push({ ...r, id: o, path: o.replace(/\/\([^)/]+\)/g, "").replace(/\./g, "/") }), t);
  }
  return e.sort((t, r) => t.path.length - r.path.length).reduce((t, r) => n(t, r, r.path, r.path), []);
}
function bt(e, n) {
  const t = Ct.lookup(e);
  if (t) {
    const r = t.route[`$${n}`];
    return r === void 0 ? void 0 : { handler: r, params: t.params };
  }
}
function Et(e) {
  return e.$GET || e.$POST || e.$PUT || e.$PATCH || e.$DELETE;
}
const Ct = ft({ routes: ne.reduce((e, n) => {
  if (!Et(n))
    return e;
  let t = n.path.replace(/\(.*\)\/?/g, "").replace(/\*([^/]*)/g, (r, o) => `**:${o}`);
  if (/:[^/]*\?/g.test(t))
    throw new Error(`Optional parameters are not supported in API routes: ${t}`);
  if (e[t])
    throw new Error(`Duplicate API routes for "${t}" found at "${e[t].route.path}" and "${n.path}"`);
  return e[t] = { route: n }, e;
}, {}) });
function re() {
  function e(t) {
    return { ...t, ...t.$$route ? t.$$route.require().route : void 0, info: { ...t.$$route ? t.$$route.require().route.info : {}, filesystem: true }, component: ht(t.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: t.children ? t.children.map(e) : void 0 };
  }
  return yt.map(e);
}
let K;
const $t = isServer ? () => getRequestEvent().routes : () => K || (K = re());
function St() {
  return createComponent$1(lt, { root: (e) => createComponent$1(ze, { get children() {
    return [[createComponent$1(Ye, { children: "PDF parser" }), createComponent$1(U, { charset: "utf-8" }), createComponent$1(U, { content: "width=device-width, initial-scale=1", name: "viewport" })], createComponent$1(Suspense, { get children() {
      return e.children;
    } })];
  } }), get children() {
    return createComponent$1($t, {});
  } });
}
const Nt = isServer ? (e) => {
  const n = getRequestEvent();
  return n.response.status = e.code, n.response.statusText = e.text, onCleanup(() => !n.nativeEvent.handled && (n.response.status = 200)), null;
} : (e) => null;
var Rt = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">', "</span>"];
const Tt = (e) => {
  const n = isServer ? "500 | Internal Server Error" : "Error | Uncaught Client Exception";
  return createComponent$1(ErrorBoundary, { get fallback() {
    return [ssr(Rt, ssrHydrationKey(), escape(n)), createComponent$1(Nt, { code: 500 })];
  }, get children() {
    return e.children;
  } });
};
var W = ["<script", ">", "<\/script>"], At = ["<script", ' type="module"', " async", "><\/script>"], Lt = ["<script", ' type="module" async', "><\/script>"];
const kt = ssr("<!DOCTYPE html>");
function oe(e, n, t = []) {
  for (let r = 0; r < n.length; r++) {
    const o = n[r];
    if (o.path !== e[0].path)
      continue;
    let s = [...t, o];
    if (o.children) {
      const a = e.slice(1);
      if (a.length === 0 || (s = oe(a, o.children, s), !s))
        continue;
    }
    return s;
  }
}
function Pt(e) {
  const n = getRequestEvent(), t = n.nonce;
  let r = [];
  return Promise.resolve().then(async () => {
    if (n.router && n.router.matches) {
      const o = [...n.router.matches];
      for (; o.length && (!o[0].info || !o[0].info.filesystem); )
        o.shift();
      const s = o.length && oe(o, n.routes);
      if (s)
        for (let a = 0; a < s.length; a++) {
          const i = s[a], d = await globalThis.MANIFEST.client.inputs[i.$component.src].assets();
          r.push.apply(r, d);
        }
      else
        console.warn("No route matched for preloading js assets");
    }
    r = [...new Map(r.map((o) => [o.attrs.key, o])).values()].filter((o) => o.attrs.rel === "modulepreload" && !n.assets.find((s) => s.attrs.key === o.attrs.key));
  }), useAssets(() => r.length ? r.map((o) => q(o)) : void 0), createComponent$1(NoHydration, { get children() {
    return [kt, createComponent$1(e.document, { get assets() {
      return [createComponent$1(HydrationScript, {}), n.assets.map((o) => q(o))];
    }, get scripts() {
      return t ? [ssr(W, ssrHydrationKey() + ssrAttribute("nonce", escape(t, true), false), `window.manifest = ${JSON.stringify(n.manifest)}`), ssr(At, ssrHydrationKey(), ssrAttribute("nonce", escape(t, true), false), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))] : [ssr(W, ssrHydrationKey(), `window.manifest = ${JSON.stringify(n.manifest)}`), ssr(Lt, ssrHydrationKey(), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))];
    }, get children() {
      return createComponent$1(Hydration, { get children() {
        return createComponent$1(Tt, { get children() {
          return createComponent$1(St, {});
        } });
      } });
    } })];
  } });
}
function Ot(e) {
  const n = jt(e.nativeEvent, "flash");
  if (!n)
    return;
  let t = JSON.parse(n);
  if (!t || !t.result)
    return;
  const r = [...t.input.slice(0, -1), new Map(t.input[t.input.length - 1])];
  return Ut(e.nativeEvent, "flash", "", { maxAge: 0 }), { input: r, url: t.url, pending: false, result: t.error ? new Error(t.result) : t.result };
}
async function xt(e) {
  const n = globalThis.MANIFEST.client;
  return globalThis.MANIFEST.ssr, e.response.headers.set("Content-Type", "text/html"), Object.assign(e, { manifest: await n.json(), assets: [...await n.inputs[n.handler].assets()], router: { submission: Ot(e) }, routes: re(), $islands: /* @__PURE__ */ new Set() });
}
function Mt(e, n, t = {}) {
  return eventHandler({ handler: (r) => {
    const o = hn(r);
    return provideRequestEvent(o, async () => {
      const s = bt(new URL(o.request.url).pathname, o.request.method);
      if (s) {
        const w = (await s.handler.import())[o.request.method];
        o.params = s.params || {}, sharedConfig.context = { event: o };
        const c = await w(o);
        if (c !== void 0)
          return c;
        if (o.request.method !== "GET")
          throw new Error(`API handler for ${o.request.method} "${o.request.url}" did not return a response.`);
      }
      const a = await n(o);
      typeof t == "function" && (t = await t(a));
      const i = t.mode || "stream";
      if (t.nonce && (a.nonce = t.nonce), i === "sync") {
        const y = renderToString(() => (sharedConfig.context.event = a, e(a)), t);
        return a.response && a.response.headers.get("Location") ? ln(r, a.response.headers.get("Location")) : y;
      }
      let l = { ...t };
      if (l.onCompleteAll) {
        const y = l.onCompleteAll;
        l.onCompleteAll = (w) => {
          z(a)(w), y(w);
        };
      } else
        l.onCompleteAll = z(a);
      if (l.onCompleteShell) {
        const y = l.onCompleteShell;
        l.onCompleteShell = (w) => {
          J(a, r)(), y(w);
        };
      } else
        l.onCompleteShell = J(a, r);
      const d = renderToStream(() => (sharedConfig.context.event = a, e(a)), l);
      if (a.response && a.response.headers.get("Location"))
        return ln(r, a.response.headers.get("Location"));
      if (i === "async")
        return d;
      const { writable: m, readable: f } = new TransformStream();
      return d.pipeTo(m), f;
    });
  } });
}
function J(e, n) {
  return () => {
    e.response && e.response.headers.get("Location") && (ae(n, 302), fn(n, "Location", e.response.headers.get("Location")));
  };
}
function z(e) {
  return ({ write: n }) => {
    const t = e.response && e.response.headers.get("Location");
    t && n(`<script>window.location="${t}"<\/script>`);
  };
}
function It(e, n) {
  return Mt(e, xt, n);
}
var qt = ['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico">', "</head>"], Ft = ["<html", ' lang="en">', '<body><div id="app">', "</div><!--$-->", "<!--/--></body></html>"];
const Kt = It(() => createComponent$1(Pt, { document: ({ assets: e, children: n, scripts: t }) => ssr(Ft, ssrHydrationKey(), createComponent$1(NoHydration, { get children() {
  return ssr(qt, escape(e));
} }), escape(n), escape(t)) }));

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: Ki, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: Kt, lazy: false, middleware: true, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  {
    const _handler = h3App.handler;
    h3App.handler = (event) => {
      const ctx = { event };
      return nitroAsyncContext.callAsync(ctx, () => _handler(event));
    };
  }
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((err) => {
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http__default$1.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
  }
  server.on("request", function(req, res) {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", function() {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", function(socket) {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", function() {
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    if (options.development) {
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        return Promise.resolve(false);
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((err) => {
      const errString = typeof err === "string" ? err : JSON.stringify(err);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { Bi as B, Gs as G, Ks as K, Li as L, Mi as M, Ns as N, Ui as U, Wi as W, Xs as X, Ys as Y, _i as _, Ni as a, bt$2 as b, Le as c, dn as d, ei as e, nodeServer as f, gn as g, hi as h, node$1 as n, pn as p, qi as q, un as u, yt$2 as y };
//# sourceMappingURL=runtime.mjs.map
