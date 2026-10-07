(() => {
  // node_modules/tslib/tslib.es6.mjs
  function __decorate(decorators, target, key, desc) {
    var c5 = arguments.length, r6 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r6 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r6 = (c5 < 3 ? d3(r6) : c5 > 3 ? d3(target, key, r6) : d3(target, key)) || r6;
    return c5 > 3 && r6 && Object.defineProperty(target, key, r6), r6;
  }

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var t = (t5) => (e8, o8) => {
    void 0 !== o8 ? o8.addInitializer(() => {
      customElements.define(t5, e8);
    }) : customElements.define(t5, e8);
  };

  // node_modules/@lit/reactive-element/css-tag.js
  var t2 = globalThis;
  var e = t2.ShadowRoot && (void 0 === t2.ShadyCSS || t2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = /* @__PURE__ */ Symbol();
  var o = /* @__PURE__ */ new WeakMap();
  var n = class {
    constructor(t5, e8, o8) {
      if (this._$cssResult$ = true, o8 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t5, this.t = e8;
    }
    get styleSheet() {
      let t5 = this.o;
      const s4 = this.t;
      if (e && void 0 === t5) {
        const e8 = void 0 !== s4 && 1 === s4.length;
        e8 && (t5 = o.get(s4)), void 0 === t5 && ((this.o = t5 = new CSSStyleSheet()).replaceSync(this.cssText), e8 && o.set(s4, t5));
      }
      return t5;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t5) => new n("string" == typeof t5 ? t5 : t5 + "", void 0, s);
  var i = (t5, ...e8) => {
    const o8 = 1 === t5.length ? t5[0] : e8.reduce((e9, s4, o9) => e9 + ((t6) => {
      if (true === t6._$cssResult$) return t6.cssText;
      if ("number" == typeof t6) return t6;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t6 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s4) + t5[o9 + 1], t5[0]);
    return new n(o8, t5, s);
  };
  var S = (s4, o8) => {
    if (e) s4.adoptedStyleSheets = o8.map((t5) => t5 instanceof CSSStyleSheet ? t5 : t5.styleSheet);
    else for (const e8 of o8) {
      const o9 = document.createElement("style"), n6 = t2.litNonce;
      void 0 !== n6 && o9.setAttribute("nonce", n6), o9.textContent = e8.cssText, s4.appendChild(o9);
    }
  };
  var c = e ? (t5) => t5 : (t5) => t5 instanceof CSSStyleSheet ? ((t6) => {
    let e8 = "";
    for (const s4 of t6.cssRules) e8 += s4.cssText;
    return r(e8);
  })(t5) : t5;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = (t5, s4) => t5;
  var u = { toAttribute(t5, s4) {
    switch (s4) {
      case Boolean:
        t5 = t5 ? l : null;
        break;
      case Object:
      case Array:
        t5 = null == t5 ? t5 : JSON.stringify(t5);
    }
    return t5;
  }, fromAttribute(t5, s4) {
    let i7 = t5;
    switch (s4) {
      case Boolean:
        i7 = null !== t5;
        break;
      case Number:
        i7 = null === t5 ? null : Number(t5);
        break;
      case Object:
      case Array:
        try {
          i7 = JSON.parse(t5);
        } catch (t6) {
          i7 = null;
        }
    }
    return i7;
  } };
  var f = (t5, s4) => !i2(t5, s4);
  var b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
  Symbol.metadata ?? (Symbol.metadata = /* @__PURE__ */ Symbol("metadata")), a.litPropertyMetadata ?? (a.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
  var y = class extends HTMLElement {
    static addInitializer(t5) {
      this._$Ei(), (this.l ?? (this.l = [])).push(t5);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t5, s4 = b) {
      if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t5) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t5, s4), !s4.noAccessor) {
        const i7 = /* @__PURE__ */ Symbol(), h3 = this.getPropertyDescriptor(t5, i7, s4);
        void 0 !== h3 && e2(this.prototype, t5, h3);
      }
    }
    static getPropertyDescriptor(t5, s4, i7) {
      const { get: e8, set: r6 } = h(this.prototype, t5) ?? { get() {
        return this[s4];
      }, set(t6) {
        this[s4] = t6;
      } };
      return { get: e8, set(s5) {
        const h3 = e8?.call(this);
        r6?.call(this, s5), this.requestUpdate(t5, h3, i7);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t5) {
      return this.elementProperties.get(t5) ?? b;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties"))) return;
      const t5 = n2(this);
      t5.finalize(), void 0 !== t5.l && (this.l = [...t5.l]), this.elementProperties = new Map(t5.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t6 = this.properties, s4 = [...r2(t6), ...o2(t6)];
        for (const i7 of s4) this.createProperty(i7, t6[i7]);
      }
      const t5 = this[Symbol.metadata];
      if (null !== t5) {
        const s4 = litPropertyMetadata.get(t5);
        if (void 0 !== s4) for (const [t6, i7] of s4) this.elementProperties.set(t6, i7);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t6, s4] of this.elementProperties) {
        const i7 = this._$Eu(t6, s4);
        void 0 !== i7 && this._$Eh.set(i7, t6);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s4) {
      const i7 = [];
      if (Array.isArray(s4)) {
        const e8 = new Set(s4.flat(1 / 0).reverse());
        for (const s5 of e8) i7.unshift(c(s5));
      } else void 0 !== s4 && i7.push(c(s4));
      return i7;
    }
    static _$Eu(t5, s4) {
      const i7 = s4.attribute;
      return false === i7 ? void 0 : "string" == typeof i7 ? i7 : "string" == typeof t5 ? t5.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise((t5) => this.enableUpdating = t5), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t5) => t5(this));
    }
    addController(t5) {
      (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t5), void 0 !== this.renderRoot && this.isConnected && t5.hostConnected?.();
    }
    removeController(t5) {
      this._$EO?.delete(t5);
    }
    _$E_() {
      const t5 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
      for (const i7 of s4.keys()) this.hasOwnProperty(i7) && (t5.set(i7, this[i7]), delete this[i7]);
      t5.size > 0 && (this._$Ep = t5);
    }
    createRenderRoot() {
      const t5 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S(t5, this.constructor.elementStyles), t5;
    }
    connectedCallback() {
      this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), this._$EO?.forEach((t5) => t5.hostConnected?.());
    }
    enableUpdating(t5) {
    }
    disconnectedCallback() {
      this._$EO?.forEach((t5) => t5.hostDisconnected?.());
    }
    attributeChangedCallback(t5, s4, i7) {
      this._$AK(t5, i7);
    }
    _$ET(t5, s4) {
      const i7 = this.constructor.elementProperties.get(t5), e8 = this.constructor._$Eu(t5, i7);
      if (void 0 !== e8 && true === i7.reflect) {
        const h3 = (void 0 !== i7.converter?.toAttribute ? i7.converter : u).toAttribute(s4, i7.type);
        this._$Em = t5, null == h3 ? this.removeAttribute(e8) : this.setAttribute(e8, h3), this._$Em = null;
      }
    }
    _$AK(t5, s4) {
      const i7 = this.constructor, e8 = i7._$Eh.get(t5);
      if (void 0 !== e8 && this._$Em !== e8) {
        const t6 = i7.getPropertyOptions(e8), h3 = "function" == typeof t6.converter ? { fromAttribute: t6.converter } : void 0 !== t6.converter?.fromAttribute ? t6.converter : u;
        this._$Em = e8;
        const r6 = h3.fromAttribute(s4, t6.type);
        this[e8] = r6 ?? this._$Ej?.get(e8) ?? r6, this._$Em = null;
      }
    }
    requestUpdate(t5, s4, i7, e8 = false, h3) {
      if (void 0 !== t5) {
        const r6 = this.constructor;
        if (false === e8 && (h3 = this[t5]), i7 ?? (i7 = r6.getPropertyOptions(t5)), !((i7.hasChanged ?? f)(h3, s4) || i7.useDefault && i7.reflect && h3 === this._$Ej?.get(t5) && !this.hasAttribute(r6._$Eu(t5, i7)))) return;
        this.C(t5, s4, i7);
      }
      false === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t5, s4, { useDefault: i7, reflect: e8, wrapped: h3 }, r6) {
      i7 && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t5) && (this._$Ej.set(t5, r6 ?? s4 ?? this[t5]), true !== h3 || void 0 !== r6) || (this._$AL.has(t5) || (this.hasUpdated || i7 || (s4 = void 0), this._$AL.set(t5, s4)), true === e8 && this._$Em !== t5 && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t5));
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t6) {
        Promise.reject(t6);
      }
      const t5 = this.scheduleUpdate();
      return null != t5 && await t5, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
          for (const [t7, s5] of this._$Ep) this[t7] = s5;
          this._$Ep = void 0;
        }
        const t6 = this.constructor.elementProperties;
        if (t6.size > 0) for (const [s5, i7] of t6) {
          const { wrapped: t7 } = i7, e8 = this[s5];
          true !== t7 || this._$AL.has(s5) || void 0 === e8 || this.C(s5, void 0, i7, e8);
        }
      }
      let t5 = false;
      const s4 = this._$AL;
      try {
        t5 = this.shouldUpdate(s4), t5 ? (this.willUpdate(s4), this._$EO?.forEach((t6) => t6.hostUpdate?.()), this.update(s4)) : this._$EM();
      } catch (s5) {
        throw t5 = false, this._$EM(), s5;
      }
      t5 && this._$AE(s4);
    }
    willUpdate(t5) {
    }
    _$AE(t5) {
      this._$EO?.forEach((t6) => t6.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t5)), this.updated(t5);
    }
    _$EM() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t5) {
      return true;
    }
    update(t5) {
      this._$Eq && (this._$Eq = this._$Eq.forEach((t6) => this._$ET(t6, this[t6]))), this._$EM();
    }
    updated(t5) {
    }
    firstUpdated(t5) {
    }
  };
  y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ?? (a.reactiveElementVersions = [])).push("2.1.2");

  // node_modules/@lit/reactive-element/decorators/property.js
  var o3 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  var r3 = (t5 = o3, e8, r6) => {
    const { kind: n6, metadata: i7 } = r6;
    let s4 = globalThis.litPropertyMetadata.get(i7);
    if (void 0 === s4 && globalThis.litPropertyMetadata.set(i7, s4 = /* @__PURE__ */ new Map()), "setter" === n6 && ((t5 = Object.create(t5)).wrapped = true), s4.set(r6.name, t5), "accessor" === n6) {
      const { name: o8 } = r6;
      return { set(r7) {
        const n7 = e8.get.call(this);
        e8.set.call(this, r7), this.requestUpdate(o8, n7, t5, true, r7);
      }, init(e9) {
        return void 0 !== e9 && this.C(o8, void 0, t5, e9), e9;
      } };
    }
    if ("setter" === n6) {
      const { name: o8 } = r6;
      return function(r7) {
        const n7 = this[o8];
        e8.call(this, r7), this.requestUpdate(o8, n7, t5, true, r7);
      };
    }
    throw Error("Unsupported decorator location: " + n6);
  };
  function n3(t5) {
    return (e8, o8) => "object" == typeof o8 ? r3(t5, e8, o8) : ((t6, e9, o9) => {
      const r6 = e9.hasOwnProperty(o9);
      return e9.constructor.createProperty(o9, t6), r6 ? Object.getOwnPropertyDescriptor(e9, o9) : void 0;
    })(t5, e8, o8);
  }

  // node_modules/@lit/reactive-element/decorators/state.js
  function r4(r6) {
    return n3({ ...r6, state: true, attribute: false });
  }

  // node_modules/@lit/reactive-element/decorators/base.js
  var e3 = (e8, t5, c5) => (c5.configurable = true, c5.enumerable = true, Reflect.decorate && "object" != typeof t5 && Object.defineProperty(e8, t5, c5), c5);

  // node_modules/@lit/reactive-element/decorators/query.js
  function e4(e8, r6) {
    return (n6, s4, i7) => {
      const o8 = (t5) => t5.renderRoot?.querySelector(e8) ?? null;
      if (r6) {
        const { get: e9, set: r7 } = "object" == typeof s4 ? n6 : i7 ?? /* @__PURE__ */ (() => {
          const t5 = /* @__PURE__ */ Symbol();
          return { get() {
            return this[t5];
          }, set(e10) {
            this[t5] = e10;
          } };
        })();
        return e3(n6, s4, { get() {
          let t5 = e9.call(this);
          return void 0 === t5 && (t5 = o8(this), (null !== t5 || this.hasUpdated) && r7.call(this, t5)), t5;
        } });
      }
      return e3(n6, s4, { get() {
        return o8(this);
      } });
    };
  }

  // node_modules/lit-html/lit-html.js
  var t3 = globalThis;
  var i3 = (t5) => t5;
  var s2 = t3.trustedTypes;
  var e5 = s2 ? s2.createPolicy("lit-html", { createHTML: (t5) => t5 }) : void 0;
  var h2 = "$lit$";
  var o4 = `lit$${Math.random().toFixed(9).slice(2)}$`;
  var n4 = "?" + o4;
  var r5 = `<${n4}>`;
  var l2 = document;
  var c3 = () => l2.createComment("");
  var a2 = (t5) => null === t5 || "object" != typeof t5 && "function" != typeof t5;
  var u2 = Array.isArray;
  var d2 = (t5) => u2(t5) || "function" == typeof t5?.[Symbol.iterator];
  var f2 = "[ 	\n\f\r]";
  var v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var _ = /-->/g;
  var m = />/g;
  var p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var g = /'/g;
  var $ = /"/g;
  var y2 = /^(?:script|style|textarea|title)$/i;
  var x = (t5) => (i7, ...s4) => ({ _$litType$: t5, strings: i7, values: s4 });
  var b2 = x(1);
  var w = x(2);
  var T = x(3);
  var E = /* @__PURE__ */ Symbol.for("lit-noChange");
  var A = /* @__PURE__ */ Symbol.for("lit-nothing");
  var C = /* @__PURE__ */ new WeakMap();
  var P = l2.createTreeWalker(l2, 129);
  function V(t5, i7) {
    if (!u2(t5) || !t5.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== e5 ? e5.createHTML(i7) : i7;
  }
  var N = (t5, i7) => {
    const s4 = t5.length - 1, e8 = [];
    let n6, l4 = 2 === i7 ? "<svg>" : 3 === i7 ? "<math>" : "", c5 = v;
    for (let i8 = 0; i8 < s4; i8++) {
      const s5 = t5[i8];
      let a4, u4, d3 = -1, f3 = 0;
      for (; f3 < s5.length && (c5.lastIndex = f3, u4 = c5.exec(s5), null !== u4); ) f3 = c5.lastIndex, c5 === v ? "!--" === u4[1] ? c5 = _ : void 0 !== u4[1] ? c5 = m : void 0 !== u4[2] ? (y2.test(u4[2]) && (n6 = RegExp("</" + u4[2], "g")), c5 = p2) : void 0 !== u4[3] && (c5 = p2) : c5 === p2 ? ">" === u4[0] ? (c5 = n6 ?? v, d3 = -1) : void 0 === u4[1] ? d3 = -2 : (d3 = c5.lastIndex - u4[2].length, a4 = u4[1], c5 = void 0 === u4[3] ? p2 : '"' === u4[3] ? $ : g) : c5 === $ || c5 === g ? c5 = p2 : c5 === _ || c5 === m ? c5 = v : (c5 = p2, n6 = void 0);
      const x2 = c5 === p2 && t5[i8 + 1].startsWith("/>") ? " " : "";
      l4 += c5 === v ? s5 + r5 : d3 >= 0 ? (e8.push(a4), s5.slice(0, d3) + h2 + s5.slice(d3) + o4 + x2) : s5 + o4 + (-2 === d3 ? i8 : x2);
    }
    return [V(t5, l4 + (t5[s4] || "<?>") + (2 === i7 ? "</svg>" : 3 === i7 ? "</math>" : "")), e8];
  };
  var S2 = class _S {
    constructor({ strings: t5, _$litType$: i7 }, e8) {
      let r6;
      this.parts = [];
      let l4 = 0, a4 = 0;
      const u4 = t5.length - 1, d3 = this.parts, [f3, v2] = N(t5, i7);
      if (this.el = _S.createElement(f3, e8), P.currentNode = this.el.content, 2 === i7 || 3 === i7) {
        const t6 = this.el.content.firstChild;
        t6.replaceWith(...t6.childNodes);
      }
      for (; null !== (r6 = P.nextNode()) && d3.length < u4; ) {
        if (1 === r6.nodeType) {
          if (r6.hasAttributes()) for (const t6 of r6.getAttributeNames()) if (t6.endsWith(h2)) {
            const i8 = v2[a4++], s4 = r6.getAttribute(t6).split(o4), e9 = /([.?@])?(.*)/.exec(i8);
            d3.push({ type: 1, index: l4, name: e9[2], strings: s4, ctor: "." === e9[1] ? I : "?" === e9[1] ? L : "@" === e9[1] ? z : H }), r6.removeAttribute(t6);
          } else t6.startsWith(o4) && (d3.push({ type: 6, index: l4 }), r6.removeAttribute(t6));
          if (y2.test(r6.tagName)) {
            const t6 = r6.textContent.split(o4), i8 = t6.length - 1;
            if (i8 > 0) {
              r6.textContent = s2 ? s2.emptyScript : "";
              for (let s4 = 0; s4 < i8; s4++) r6.append(t6[s4], c3()), P.nextNode(), d3.push({ type: 2, index: ++l4 });
              r6.append(t6[i8], c3());
            }
          }
        } else if (8 === r6.nodeType) if (r6.data === n4) d3.push({ type: 2, index: l4 });
        else {
          let t6 = -1;
          for (; -1 !== (t6 = r6.data.indexOf(o4, t6 + 1)); ) d3.push({ type: 7, index: l4 }), t6 += o4.length - 1;
        }
        l4++;
      }
    }
    static createElement(t5, i7) {
      const s4 = l2.createElement("template");
      return s4.innerHTML = t5, s4;
    }
  };
  function M(t5, i7, s4 = t5, e8) {
    if (i7 === E) return i7;
    let h3 = void 0 !== e8 ? s4._$Co?.[e8] : s4._$Cl;
    const o8 = a2(i7) ? void 0 : i7._$litDirective$;
    return h3?.constructor !== o8 && (h3?._$AO?.(false), void 0 === o8 ? h3 = void 0 : (h3 = new o8(t5), h3._$AT(t5, s4, e8)), void 0 !== e8 ? (s4._$Co ?? (s4._$Co = []))[e8] = h3 : s4._$Cl = h3), void 0 !== h3 && (i7 = M(t5, h3._$AS(t5, i7.values), h3, e8)), i7;
  }
  var R = class {
    constructor(t5, i7) {
      this._$AV = [], this._$AN = void 0, this._$AD = t5, this._$AM = i7;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t5) {
      const { el: { content: i7 }, parts: s4 } = this._$AD, e8 = (t5?.creationScope ?? l2).importNode(i7, true);
      P.currentNode = e8;
      let h3 = P.nextNode(), o8 = 0, n6 = 0, r6 = s4[0];
      for (; void 0 !== r6; ) {
        if (o8 === r6.index) {
          let i8;
          2 === r6.type ? i8 = new k(h3, h3.nextSibling, this, t5) : 1 === r6.type ? i8 = new r6.ctor(h3, r6.name, r6.strings, this, t5) : 6 === r6.type && (i8 = new Z(h3, this, t5)), this._$AV.push(i8), r6 = s4[++n6];
        }
        o8 !== r6?.index && (h3 = P.nextNode(), o8++);
      }
      return P.currentNode = l2, e8;
    }
    p(t5) {
      let i7 = 0;
      for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t5, s4, i7), i7 += s4.strings.length - 2) : s4._$AI(t5[i7])), i7++;
    }
  };
  var k = class _k {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t5, i7, s4, e8) {
      this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t5, this._$AB = i7, this._$AM = s4, this.options = e8, this._$Cv = e8?.isConnected ?? true;
    }
    get parentNode() {
      let t5 = this._$AA.parentNode;
      const i7 = this._$AM;
      return void 0 !== i7 && 11 === t5?.nodeType && (t5 = i7.parentNode), t5;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t5, i7 = this) {
      t5 = M(this, t5, i7), a2(t5) ? t5 === A || null == t5 || "" === t5 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t5 !== this._$AH && t5 !== E && this._(t5) : void 0 !== t5._$litType$ ? this.$(t5) : void 0 !== t5.nodeType ? this.T(t5) : d2(t5) ? this.k(t5) : this._(t5);
    }
    O(t5) {
      return this._$AA.parentNode.insertBefore(t5, this._$AB);
    }
    T(t5) {
      this._$AH !== t5 && (this._$AR(), this._$AH = this.O(t5));
    }
    _(t5) {
      this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t5 : this.T(l2.createTextNode(t5)), this._$AH = t5;
    }
    $(t5) {
      const { values: i7, _$litType$: s4 } = t5, e8 = "number" == typeof s4 ? this._$AC(t5) : (void 0 === s4.el && (s4.el = S2.createElement(V(s4.h, s4.h[0]), this.options)), s4);
      if (this._$AH?._$AD === e8) this._$AH.p(i7);
      else {
        const t6 = new R(e8, this), s5 = t6.u(this.options);
        t6.p(i7), this.T(s5), this._$AH = t6;
      }
    }
    _$AC(t5) {
      let i7 = C.get(t5.strings);
      return void 0 === i7 && C.set(t5.strings, i7 = new S2(t5)), i7;
    }
    k(t5) {
      u2(this._$AH) || (this._$AH = [], this._$AR());
      const i7 = this._$AH;
      let s4, e8 = 0;
      for (const h3 of t5) e8 === i7.length ? i7.push(s4 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s4 = i7[e8], s4._$AI(h3), e8++;
      e8 < i7.length && (this._$AR(s4 && s4._$AB.nextSibling, e8), i7.length = e8);
    }
    _$AR(t5 = this._$AA.nextSibling, s4) {
      for (this._$AP?.(false, true, s4); t5 !== this._$AB; ) {
        const s5 = i3(t5).nextSibling;
        i3(t5).remove(), t5 = s5;
      }
    }
    setConnected(t5) {
      void 0 === this._$AM && (this._$Cv = t5, this._$AP?.(t5));
    }
  };
  var H = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t5, i7, s4, e8, h3) {
      this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t5, this.name = i7, this._$AM = e8, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = A;
    }
    _$AI(t5, i7 = this, s4, e8) {
      const h3 = this.strings;
      let o8 = false;
      if (void 0 === h3) t5 = M(this, t5, i7, 0), o8 = !a2(t5) || t5 !== this._$AH && t5 !== E, o8 && (this._$AH = t5);
      else {
        const e9 = t5;
        let n6, r6;
        for (t5 = h3[0], n6 = 0; n6 < h3.length - 1; n6++) r6 = M(this, e9[s4 + n6], i7, n6), r6 === E && (r6 = this._$AH[n6]), o8 || (o8 = !a2(r6) || r6 !== this._$AH[n6]), r6 === A ? t5 = A : t5 !== A && (t5 += (r6 ?? "") + h3[n6 + 1]), this._$AH[n6] = r6;
      }
      o8 && !e8 && this.j(t5);
    }
    j(t5) {
      t5 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t5 ?? "");
    }
  };
  var I = class extends H {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t5) {
      this.element[this.name] = t5 === A ? void 0 : t5;
    }
  };
  var L = class extends H {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t5) {
      this.element.toggleAttribute(this.name, !!t5 && t5 !== A);
    }
  };
  var z = class extends H {
    constructor(t5, i7, s4, e8, h3) {
      super(t5, i7, s4, e8, h3), this.type = 5;
    }
    _$AI(t5, i7 = this) {
      if ((t5 = M(this, t5, i7, 0) ?? A) === E) return;
      const s4 = this._$AH, e8 = t5 === A && s4 !== A || t5.capture !== s4.capture || t5.once !== s4.once || t5.passive !== s4.passive, h3 = t5 !== A && (s4 === A || e8);
      e8 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t5), this._$AH = t5;
    }
    handleEvent(t5) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t5) : this._$AH.handleEvent(t5);
    }
  };
  var Z = class {
    constructor(t5, i7, s4) {
      this.element = t5, this.type = 6, this._$AN = void 0, this._$AM = i7, this.options = s4;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t5) {
      M(this, t5);
    }
  };
  var B = t3.litHtmlPolyfillSupport;
  B?.(S2, k), (t3.litHtmlVersions ?? (t3.litHtmlVersions = [])).push("3.3.3");
  var D = (t5, i7, s4) => {
    const e8 = s4?.renderBefore ?? i7;
    let h3 = e8._$litPart$;
    if (void 0 === h3) {
      const t6 = s4?.renderBefore ?? null;
      e8._$litPart$ = h3 = new k(i7.insertBefore(c3(), t6), t6, void 0, s4 ?? {});
    }
    return h3._$AI(t5), h3;
  };

  // node_modules/lit-element/lit-element.js
  var s3 = globalThis;
  var i4 = class extends y {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var _a;
      const t5 = super.createRenderRoot();
      return (_a = this.renderOptions).renderBefore ?? (_a.renderBefore = t5.firstChild), t5;
    }
    update(t5) {
      const r6 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t5), this._$Do = D(r6, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return E;
    }
  };
  i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
  var o5 = s3.litElementPolyfillSupport;
  o5?.({ LitElement: i4 });
  (s3.litElementVersions ?? (s3.litElementVersions = [])).push("4.2.2");

  // node_modules/lit-html/is-server.js
  var o6 = false;

  // node_modules/@material/web/iconbutton/internal/filled-styles.cssresult.js
  var styles = i`:host{--_container-color: var(--md-filled-icon-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-height: var(--md-filled-icon-button-container-height, 40px);--_container-width: var(--md-filled-icon-button-container-width, 40px);--_disabled-container-color: var(--md-filled-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-icon-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-icon-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-icon-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-icon-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-icon-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-icon-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-icon-button-selected-container-color, var(--md-sys-color-primary, #6750a4));--_toggle-selected-focus-icon-color: var(--md-filled-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-icon-color: var(--md-filled-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-state-layer-color: var(--md-filled-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-icon-color: var(--md-filled-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-icon-color: var(--md-filled-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-state-layer-color: var(--md-filled-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_unselected-container-color: var(--md-filled-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_toggle-focus-icon-color: var(--md-filled-icon-button-toggle-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-hover-icon-color: var(--md-filled-icon-button-toggle-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-hover-state-layer-color: var(--md-filled-icon-button-toggle-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_toggle-icon-color: var(--md-filled-icon-button-toggle-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-pressed-icon-color: var(--md-filled-icon-button-toggle-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-pressed-state-layer-color: var(--md-filled-icon-button-toggle-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-filled-icon-button-container-shape-start-start, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-icon-button-container-shape-start-end, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-icon-button-container-shape-end-end, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-icon-button-container-shape-end-start, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)))}.icon-button{color:var(--_icon-color)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:is(:disabled,[aria-disabled=true]){color:var(--_disabled-icon-color)}.icon-button{--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:is(:disabled,[aria-disabled=true])::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:is(:disabled,[aria-disabled=true]) .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled:not(:disabled,[aria-disabled=true]){color:var(--_toggle-icon-color)}.toggle-filled:not(:disabled,[aria-disabled=true]):hover{color:var(--_toggle-hover-icon-color)}.toggle-filled:not(:disabled,[aria-disabled=true]):focus{color:var(--_toggle-focus-icon-color)}.toggle-filled:not(:disabled,[aria-disabled=true]):active{color:var(--_toggle-pressed-icon-color)}.toggle-filled{--md-ripple-hover-color: var(--_toggle-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-pressed-state-layer-color)}.toggle-filled:not(:disabled,[aria-disabled=true])::before{background-color:var(--_unselected-container-color)}.selected:not(:disabled,[aria-disabled=true]){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled,[aria-disabled=true]):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled,[aria-disabled=true]):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled,[aria-disabled=true]):active{color:var(--_toggle-selected-pressed-icon-color)}.selected{--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled,[aria-disabled=true])::before{background-color:var(--_selected-container-color)}
`;
  var filled_styles_cssresult_default = styles.styleSheet;

  // node_modules/@material/web/internal/controller/attachable-controller.js
  var ATTACHABLE_CONTROLLER = /* @__PURE__ */ Symbol("attachableController");
  var FOR_ATTRIBUTE_OBSERVER;
  if (!o6) {
    FOR_ATTRIBUTE_OBSERVER = new MutationObserver((records) => {
      for (const record of records) {
        record.target[ATTACHABLE_CONTROLLER]?.hostConnected();
      }
    });
  }
  var AttachableController = class {
    get htmlFor() {
      return this.host.getAttribute("for");
    }
    set htmlFor(htmlFor) {
      if (htmlFor === null) {
        this.host.removeAttribute("for");
      } else {
        this.host.setAttribute("for", htmlFor);
      }
    }
    get control() {
      if (this.host.hasAttribute("for")) {
        if (!this.htmlFor || !this.host.isConnected) {
          return null;
        }
        return this.host.getRootNode().querySelector(`#${this.htmlFor}`);
      }
      return this.currentControl || this.host.parentElement;
    }
    set control(control) {
      if (control) {
        this.attach(control);
      } else {
        this.detach();
      }
    }
    /**
     * Creates a new controller for an `Attachable` element.
     *
     * @param host The `Attachable` element.
     * @param onControlChange A callback with two parameters for the previous and
     *     next control. An `Attachable` element may perform setup or teardown
     *     logic whenever the control changes.
     */
    constructor(host, onControlChange) {
      this.host = host;
      this.onControlChange = onControlChange;
      this.currentControl = null;
      host.addController(this);
      host[ATTACHABLE_CONTROLLER] = this;
      FOR_ATTRIBUTE_OBSERVER?.observe(host, { attributeFilter: ["for"] });
    }
    attach(control) {
      if (control === this.currentControl) {
        return;
      }
      this.setCurrentControl(control);
      this.host.removeAttribute("for");
    }
    detach() {
      this.setCurrentControl(null);
      this.host.setAttribute("for", "");
    }
    /** @private */
    hostConnected() {
      this.setCurrentControl(this.control);
    }
    /** @private */
    hostDisconnected() {
      this.setCurrentControl(null);
    }
    setCurrentControl(control) {
      this.onControlChange(this.currentControl, control);
      this.currentControl = control;
    }
  };

  // node_modules/@material/web/focus/internal/focus-ring.js
  var EVENTS = ["focusin", "focusout", "pointerdown"];
  var FocusRing = class extends i4 {
    constructor() {
      super(...arguments);
      this.visible = false;
      this.inward = false;
      this.attachableController = new AttachableController(this, this.onControlChange.bind(this));
    }
    get htmlFor() {
      return this.attachableController.htmlFor;
    }
    set htmlFor(htmlFor) {
      this.attachableController.htmlFor = htmlFor;
    }
    get control() {
      return this.attachableController.control;
    }
    set control(control) {
      this.attachableController.control = control;
    }
    attach(control) {
      this.attachableController.attach(control);
    }
    detach() {
      this.attachableController.detach();
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("aria-hidden", "true");
    }
    /** @private */
    handleEvent(event) {
      if (event[HANDLED_BY_FOCUS_RING]) {
        return;
      }
      switch (event.type) {
        default:
          return;
        case "focusin":
          this.visible = this.control?.matches(":focus-visible") ?? false;
          break;
        case "focusout":
        case "pointerdown":
          this.visible = false;
          break;
      }
      event[HANDLED_BY_FOCUS_RING] = true;
    }
    onControlChange(prev, next) {
      if (o6)
        return;
      for (const event of EVENTS) {
        prev?.removeEventListener(event, this);
        next?.addEventListener(event, this);
      }
    }
    update(changed) {
      if (changed.has("visible")) {
        this.dispatchEvent(new Event("visibility-changed"));
      }
      super.update(changed);
    }
  };
  __decorate([
    n3({ type: Boolean, reflect: true })
  ], FocusRing.prototype, "visible", void 0);
  __decorate([
    n3({ type: Boolean, reflect: true })
  ], FocusRing.prototype, "inward", void 0);
  var HANDLED_BY_FOCUS_RING = /* @__PURE__ */ Symbol("handledByFocusRing");

  // node_modules/@material/web/focus/internal/focus-ring-styles.cssresult.js
  var styles2 = i`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;
  var focus_ring_styles_cssresult_default = styles2.styleSheet;

  // node_modules/@material/web/focus/md-focus-ring.js
  var MdFocusRing = class MdFocusRing2 extends FocusRing {
  };
  MdFocusRing.styles = [styles2];
  MdFocusRing = __decorate([
    t("md-focus-ring")
  ], MdFocusRing);

  // node_modules/lit-html/directive.js
  var t4 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e6 = (t5) => (...e8) => ({ _$litDirective$: t5, values: e8 });
  var i5 = class {
    constructor(t5) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t5, e8, i7) {
      this._$Ct = t5, this._$AM = e8, this._$Ci = i7;
    }
    _$AS(t5, e8) {
      return this.update(t5, e8);
    }
    update(t5, e8) {
      return this.render(...e8);
    }
  };

  // node_modules/lit-html/directives/class-map.js
  var e7 = e6(class extends i5 {
    constructor(t5) {
      if (super(t5), t5.type !== t4.ATTRIBUTE || "class" !== t5.name || t5.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t5) {
      return " " + Object.keys(t5).filter((s4) => t5[s4]).join(" ") + " ";
    }
    update(s4, [i7]) {
      if (void 0 === this.st) {
        this.st = /* @__PURE__ */ new Set(), void 0 !== s4.strings && (this.nt = new Set(s4.strings.join(" ").split(/\s/).filter((t5) => "" !== t5)));
        for (const t5 in i7) i7[t5] && !this.nt?.has(t5) && this.st.add(t5);
        return this.render(i7);
      }
      const r6 = s4.element.classList;
      for (const t5 of this.st) t5 in i7 || (r6.remove(t5), this.st.delete(t5));
      for (const t5 in i7) {
        const s5 = !!i7[t5];
        s5 === this.st.has(t5) || this.nt?.has(t5) || (s5 ? (r6.add(t5), this.st.add(t5)) : (r6.remove(t5), this.st.delete(t5)));
      }
      return E;
    }
  });

  // node_modules/@material/web/internal/motion/animation.js
  var EASING = {
    STANDARD: "cubic-bezier(0.2, 0, 0, 1)",
    STANDARD_ACCELERATE: "cubic-bezier(.3,0,1,1)",
    STANDARD_DECELERATE: "cubic-bezier(0,0,0,1)",
    EMPHASIZED: "cubic-bezier(.3,0,0,1)",
    EMPHASIZED_ACCELERATE: "cubic-bezier(.3,0,.8,.15)",
    EMPHASIZED_DECELERATE: "cubic-bezier(.05,.7,.1,1)"
  };

  // node_modules/@material/web/ripple/internal/ripple.js
  var PRESS_GROW_MS = 450;
  var MINIMUM_PRESS_MS = 225;
  var INITIAL_ORIGIN_SCALE = 0.2;
  var PADDING = 10;
  var SOFT_EDGE_MINIMUM_SIZE = 75;
  var SOFT_EDGE_CONTAINER_RATIO = 0.35;
  var PRESS_PSEUDO = "::after";
  var ANIMATION_FILL = "forwards";
  var State;
  (function(State2) {
    State2[State2["INACTIVE"] = 0] = "INACTIVE";
    State2[State2["TOUCH_DELAY"] = 1] = "TOUCH_DELAY";
    State2[State2["HOLDING"] = 2] = "HOLDING";
    State2[State2["WAITING_FOR_CLICK"] = 3] = "WAITING_FOR_CLICK";
  })(State || (State = {}));
  var EVENTS2 = [
    "click",
    "contextmenu",
    "pointercancel",
    "pointerdown",
    "pointerenter",
    "pointerleave",
    "pointerup"
  ];
  var TOUCH_DELAY_MS = 150;
  var FORCED_COLORS = o6 ? null : window.matchMedia("(forced-colors: active)");
  var Ripple = class extends i4 {
    constructor() {
      super(...arguments);
      this.disabled = false;
      this.hovered = false;
      this.pressed = false;
      this.rippleSize = "";
      this.rippleScale = "";
      this.initialSize = 0;
      this.state = State.INACTIVE;
      this.attachableController = new AttachableController(this, this.onControlChange.bind(this));
    }
    get htmlFor() {
      return this.attachableController.htmlFor;
    }
    set htmlFor(htmlFor) {
      this.attachableController.htmlFor = htmlFor;
    }
    get control() {
      return this.attachableController.control;
    }
    set control(control) {
      this.attachableController.control = control;
    }
    attach(control) {
      this.attachableController.attach(control);
    }
    detach() {
      this.attachableController.detach();
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("aria-hidden", "true");
    }
    render() {
      const classes = {
        "hovered": this.hovered,
        "pressed": this.pressed
      };
      return b2`<div class="surface ${e7(classes)}"></div>`;
    }
    update(changedProps) {
      if (changedProps.has("disabled") && this.disabled) {
        this.hovered = false;
        this.pressed = false;
      }
      super.update(changedProps);
    }
    /**
     * TODO(b/269799771): make private
     * @private only public for slider
     */
    handlePointerenter(event) {
      if (!this.shouldReactToEvent(event)) {
        return;
      }
      this.hovered = true;
    }
    /**
     * TODO(b/269799771): make private
     * @private only public for slider
     */
    handlePointerleave(event) {
      if (!this.shouldReactToEvent(event)) {
        return;
      }
      this.hovered = false;
      if (this.state !== State.INACTIVE) {
        this.endPressAnimation();
      }
    }
    handlePointerup(event) {
      if (!this.shouldReactToEvent(event)) {
        return;
      }
      if (this.state === State.HOLDING) {
        this.state = State.WAITING_FOR_CLICK;
        return;
      }
      if (this.state === State.TOUCH_DELAY) {
        this.state = State.WAITING_FOR_CLICK;
        this.startPressAnimation(this.rippleStartEvent);
        return;
      }
    }
    async handlePointerdown(event) {
      if (!this.shouldReactToEvent(event)) {
        return;
      }
      this.rippleStartEvent = event;
      if (!this.isTouch(event)) {
        this.state = State.WAITING_FOR_CLICK;
        this.startPressAnimation(event);
        return;
      }
      this.state = State.TOUCH_DELAY;
      await new Promise((resolve) => {
        setTimeout(resolve, TOUCH_DELAY_MS);
      });
      if (this.state !== State.TOUCH_DELAY) {
        return;
      }
      this.state = State.HOLDING;
      this.startPressAnimation(event);
    }
    handleClick() {
      if (this.disabled) {
        return;
      }
      if (this.state === State.WAITING_FOR_CLICK) {
        this.endPressAnimation();
        return;
      }
      if (this.state === State.INACTIVE) {
        this.startPressAnimation();
        this.endPressAnimation();
      }
    }
    handlePointercancel(event) {
      if (!this.shouldReactToEvent(event)) {
        return;
      }
      this.endPressAnimation();
    }
    handleContextmenu() {
      if (this.disabled) {
        return;
      }
      this.endPressAnimation();
    }
    determineRippleSize() {
      const { height, width } = this.getBoundingClientRect();
      const maxDim = Math.max(height, width);
      const softEdgeSize = Math.max(SOFT_EDGE_CONTAINER_RATIO * maxDim, SOFT_EDGE_MINIMUM_SIZE);
      const zoom = this.currentCSSZoom ?? 1;
      const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE / zoom);
      const hypotenuse = Math.sqrt(width ** 2 + height ** 2);
      const maxRadius = hypotenuse + PADDING;
      this.initialSize = initialSize;
      const maybeZoomedScale = (maxRadius + softEdgeSize) / initialSize;
      this.rippleScale = `${maybeZoomedScale / zoom}`;
      this.rippleSize = `${initialSize}px`;
    }
    getNormalizedPointerEventCoords(pointerEvent) {
      const { scrollX, scrollY } = window;
      const { left, top } = this.getBoundingClientRect();
      const documentX = scrollX + left;
      const documentY = scrollY + top;
      const { pageX, pageY } = pointerEvent;
      const zoom = this.currentCSSZoom ?? 1;
      return {
        x: (pageX - documentX) / zoom,
        y: (pageY - documentY) / zoom
      };
    }
    getTranslationCoordinates(positionEvent) {
      const { height, width } = this.getBoundingClientRect();
      const zoom = this.currentCSSZoom ?? 1;
      const endPoint = {
        x: (width / zoom - this.initialSize) / 2,
        y: (height / zoom - this.initialSize) / 2
      };
      let startPoint;
      if (positionEvent instanceof PointerEvent) {
        startPoint = this.getNormalizedPointerEventCoords(positionEvent);
      } else {
        startPoint = {
          x: width / zoom / 2,
          y: height / zoom / 2
        };
      }
      startPoint = {
        x: startPoint.x - this.initialSize / 2,
        y: startPoint.y - this.initialSize / 2
      };
      return { startPoint, endPoint };
    }
    startPressAnimation(positionEvent) {
      if (!this.mdRoot) {
        return;
      }
      this.pressed = true;
      this.growAnimation?.cancel();
      this.determineRippleSize();
      const { startPoint, endPoint } = this.getTranslationCoordinates(positionEvent);
      const translateStart = `${startPoint.x}px, ${startPoint.y}px`;
      const translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
      this.growAnimation = this.mdRoot.animate({
        top: [0, 0],
        left: [0, 0],
        height: [this.rippleSize, this.rippleSize],
        width: [this.rippleSize, this.rippleSize],
        transform: [
          `translate(${translateStart}) scale(1)`,
          `translate(${translateEnd}) scale(${this.rippleScale})`
        ]
      }, {
        pseudoElement: PRESS_PSEUDO,
        duration: PRESS_GROW_MS,
        easing: EASING.STANDARD,
        fill: ANIMATION_FILL
      });
    }
    async endPressAnimation() {
      this.rippleStartEvent = void 0;
      this.state = State.INACTIVE;
      const animation = this.growAnimation;
      let pressAnimationPlayState = Infinity;
      if (typeof animation?.currentTime === "number") {
        pressAnimationPlayState = animation.currentTime;
      } else if (animation?.currentTime) {
        pressAnimationPlayState = animation.currentTime.to("ms").value;
      }
      if (pressAnimationPlayState >= MINIMUM_PRESS_MS) {
        this.pressed = false;
        return;
      }
      await new Promise((resolve) => {
        setTimeout(resolve, MINIMUM_PRESS_MS - pressAnimationPlayState);
      });
      if (this.growAnimation !== animation) {
        return;
      }
      this.pressed = false;
    }
    /**
     * Returns `true` if
     *  - the ripple element is enabled
     *  - the pointer is primary for the input type
     *  - the pointer is the pointer that started the interaction, or will start
     * the interaction
     *  - the pointer is a touch, or the pointer state has the primary button
     * held, or the pointer is hovering
     */
    shouldReactToEvent(event) {
      if (this.disabled || !event.isPrimary) {
        return false;
      }
      if (this.rippleStartEvent && this.rippleStartEvent.pointerId !== event.pointerId) {
        return false;
      }
      if (event.type === "pointerenter" || event.type === "pointerleave") {
        return !this.isTouch(event);
      }
      const isPrimaryButton = event.buttons === 1;
      return this.isTouch(event) || isPrimaryButton;
    }
    isTouch({ pointerType }) {
      return pointerType === "touch";
    }
    /** @private */
    async handleEvent(event) {
      if (FORCED_COLORS?.matches) {
        return;
      }
      switch (event.type) {
        case "click":
          this.handleClick();
          break;
        case "contextmenu":
          this.handleContextmenu();
          break;
        case "pointercancel":
          this.handlePointercancel(event);
          break;
        case "pointerdown":
          await this.handlePointerdown(event);
          break;
        case "pointerenter":
          this.handlePointerenter(event);
          break;
        case "pointerleave":
          this.handlePointerleave(event);
          break;
        case "pointerup":
          this.handlePointerup(event);
          break;
        default:
          break;
      }
    }
    onControlChange(prev, next) {
      if (o6)
        return;
      for (const event of EVENTS2) {
        prev?.removeEventListener(event, this);
        next?.addEventListener(event, this);
      }
    }
  };
  __decorate([
    n3({ type: Boolean, reflect: true })
  ], Ripple.prototype, "disabled", void 0);
  __decorate([
    r4()
  ], Ripple.prototype, "hovered", void 0);
  __decorate([
    r4()
  ], Ripple.prototype, "pressed", void 0);
  __decorate([
    e4(".surface")
  ], Ripple.prototype, "mdRoot", void 0);

  // node_modules/@material/web/ripple/internal/ripple-styles.cssresult.js
  var styles3 = i`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;
  var ripple_styles_cssresult_default = styles3.styleSheet;

  // node_modules/@material/web/ripple/ripple.js
  var MdRipple = class MdRipple2 extends Ripple {
  };
  MdRipple.styles = [styles3];
  MdRipple = __decorate([
    t("md-ripple")
  ], MdRipple);

  // node_modules/lit-html/static.js
  var a3 = /* @__PURE__ */ Symbol.for("");
  var o7 = (t5) => {
    if (t5?.r === a3) return t5?._$litStatic$;
  };
  var i6 = (t5, ...r6) => ({ _$litStatic$: r6.reduce((r7, e8, a4) => r7 + ((t6) => {
    if (void 0 !== t6._$litStatic$) return t6._$litStatic$;
    throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t6}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
  })(e8) + t5[a4 + 1], t5[0]), r: a3 });
  var l3 = /* @__PURE__ */ new Map();
  var n5 = (t5) => (r6, ...e8) => {
    const a4 = e8.length;
    let s4, i7;
    const n6 = [], u4 = [];
    let c5, $3 = 0, f3 = false;
    for (; $3 < a4; ) {
      for (c5 = r6[$3]; $3 < a4 && void 0 !== (i7 = e8[$3], s4 = o7(i7)); ) c5 += s4 + r6[++$3], f3 = true;
      $3 !== a4 && u4.push(i7), n6.push(c5), $3++;
    }
    if ($3 === a4 && n6.push(r6[a4]), f3) {
      const t6 = n6.join("$$lit$$");
      void 0 === (r6 = l3.get(t6)) && (n6.raw = n6, l3.set(t6, r6 = n6)), e8 = u4;
    }
    return t5(r6, ...e8);
  };
  var u3 = n5(b2);
  var c4 = n5(w);
  var $2 = n5(T);

  // node_modules/@material/web/internal/aria/aria.js
  var ARIA_PROPERTIES = [
    "role",
    "ariaAtomic",
    "ariaAutoComplete",
    "ariaBusy",
    "ariaChecked",
    "ariaColCount",
    "ariaColIndex",
    "ariaColSpan",
    "ariaCurrent",
    "ariaDisabled",
    "ariaExpanded",
    "ariaHasPopup",
    "ariaHidden",
    "ariaInvalid",
    "ariaKeyShortcuts",
    "ariaLabel",
    "ariaLevel",
    "ariaLive",
    "ariaModal",
    "ariaMultiLine",
    "ariaMultiSelectable",
    "ariaOrientation",
    "ariaPlaceholder",
    "ariaPosInSet",
    "ariaPressed",
    "ariaReadOnly",
    "ariaRequired",
    "ariaRoleDescription",
    "ariaRowCount",
    "ariaRowIndex",
    "ariaRowSpan",
    "ariaSelected",
    "ariaSetSize",
    "ariaSort",
    "ariaValueMax",
    "ariaValueMin",
    "ariaValueNow",
    "ariaValueText"
  ];
  var ARIA_ATTRIBUTES = ARIA_PROPERTIES.map(ariaPropertyToAttribute);
  function isAriaAttribute(attribute) {
    return ARIA_ATTRIBUTES.includes(attribute);
  }
  function ariaPropertyToAttribute(property) {
    return property.replace("aria", "aria-").replace(/Elements?/g, "").toLowerCase();
  }

  // node_modules/@material/web/internal/aria/delegate.js
  var privateIgnoreAttributeChangesFor = /* @__PURE__ */ Symbol("privateIgnoreAttributeChangesFor");
  function mixinDelegatesAria(base) {
    var _a;
    if (o6) {
      return base;
    }
    class WithDelegatesAriaElement extends base {
      constructor() {
        super(...arguments);
        this[_a] = /* @__PURE__ */ new Set();
      }
      attributeChangedCallback(name, oldValue, newValue) {
        if (!isAriaAttribute(name)) {
          super.attributeChangedCallback(name, oldValue, newValue);
          return;
        }
        if (this[privateIgnoreAttributeChangesFor].has(name)) {
          return;
        }
        this[privateIgnoreAttributeChangesFor].add(name);
        this.removeAttribute(name);
        this[privateIgnoreAttributeChangesFor].delete(name);
        const dataProperty = ariaAttributeToDataProperty(name);
        if (newValue === null) {
          delete this.dataset[dataProperty];
        } else {
          this.dataset[dataProperty] = newValue;
        }
        this.requestUpdate(ariaAttributeToDataProperty(name), oldValue);
      }
      getAttribute(name) {
        if (isAriaAttribute(name)) {
          return super.getAttribute(ariaAttributeToDataAttribute(name));
        }
        return super.getAttribute(name);
      }
      removeAttribute(name) {
        super.removeAttribute(name);
        if (isAriaAttribute(name)) {
          super.removeAttribute(ariaAttributeToDataAttribute(name));
          this.requestUpdate();
        }
      }
    }
    _a = privateIgnoreAttributeChangesFor;
    setupDelegatesAriaProperties(WithDelegatesAriaElement);
    return WithDelegatesAriaElement;
  }
  function setupDelegatesAriaProperties(ctor) {
    for (const ariaProperty of ARIA_PROPERTIES) {
      const ariaAttribute = ariaPropertyToAttribute(ariaProperty);
      const dataAttribute = ariaAttributeToDataAttribute(ariaAttribute);
      const dataProperty = ariaAttributeToDataProperty(ariaAttribute);
      ctor.createProperty(ariaProperty, {
        attribute: ariaAttribute,
        noAccessor: true
      });
      ctor.createProperty(Symbol(dataAttribute), {
        attribute: dataAttribute,
        noAccessor: true
      });
      Object.defineProperty(ctor.prototype, ariaProperty, {
        configurable: true,
        enumerable: true,
        get() {
          return this.dataset[dataProperty] ?? null;
        },
        set(value) {
          const prevValue = this.dataset[dataProperty] ?? null;
          if (value === prevValue) {
            return;
          }
          if (value === null) {
            delete this.dataset[dataProperty];
          } else {
            this.dataset[dataProperty] = value;
          }
          this.requestUpdate(ariaProperty, prevValue);
        }
      });
    }
  }
  function ariaAttributeToDataAttribute(ariaAttribute) {
    return `data-${ariaAttribute}`;
  }
  function ariaAttributeToDataProperty(ariaAttribute) {
    return ariaAttribute.replace(/-\w/, (dashLetter) => dashLetter[1].toUpperCase());
  }

  // node_modules/@material/web/internal/controller/is-rtl.js
  function isRtl(el, shouldCheck = true) {
    return shouldCheck && getComputedStyle(el).getPropertyValue("direction").trim() === "rtl";
  }

  // node_modules/@material/web/internal/events/dispatch-hooks.js
  var dispatchHooks = /* @__PURE__ */ Symbol("dispatchHooks");
  function afterDispatch(event, callback) {
    const hooks = event[dispatchHooks];
    if (!hooks) {
      throw new Error(`'${event.type}' event needs setupDispatchHooks().`);
    }
    hooks.addEventListener("after", callback, { once: true });
  }
  var ELEMENT_DISPATCH_HOOK_TYPES = /* @__PURE__ */ new WeakMap();
  function setupDispatchHooks(element, ...eventTypes) {
    let typesAlreadySetUp = ELEMENT_DISPATCH_HOOK_TYPES.get(element);
    if (!typesAlreadySetUp) {
      typesAlreadySetUp = /* @__PURE__ */ new Set();
      ELEMENT_DISPATCH_HOOK_TYPES.set(element, typesAlreadySetUp);
    }
    for (const eventType of eventTypes) {
      if (typesAlreadySetUp.has(eventType)) {
        continue;
      }
      element.addEventListener(eventType, (event) => {
        const hooks = new EventTarget();
        event[dispatchHooks] = hooks;
        const cleanupLastNodeListener = new AbortController();
        const callAfterDispatch = () => {
          cleanupLastNodeListener.abort();
          hooks.dispatchEvent(new Event("after"));
        };
        const patchStopPropagation = (superMethod) => {
          return function() {
            superMethod.call(this);
            callAfterDispatch();
          };
        };
        event.stopPropagation = patchStopPropagation(event.stopPropagation);
        event.stopImmediatePropagation = patchStopPropagation(event.stopImmediatePropagation);
        const composedPath = event.composedPath();
        let lastNodeForEvent;
        if (event.composed && event.bubbles) {
          lastNodeForEvent = composedPath[composedPath.length - 1];
        } else if (!event.bubbles) {
          lastNodeForEvent = composedPath[0];
        } else {
          lastNodeForEvent = composedPath[0].getRootNode();
        }
        lastNodeForEvent.addEventListener(eventType, () => {
          callAfterDispatch();
        }, { once: true, signal: cleanupLastNodeListener.signal });
      }, {
        // Ensure this listener runs before other listeners.
        // `setupDispatchHooks()` should be called in constructors to also
        // ensure they run before any other externally-added capture listeners.
        capture: true
      });
      typesAlreadySetUp.add(eventType);
    }
  }

  // node_modules/@material/web/labs/behaviors/element-internals.js
  var internals = /* @__PURE__ */ Symbol("internals");
  var privateInternals = /* @__PURE__ */ Symbol("privateInternals");
  function mixinElementInternals(base) {
    class WithElementInternalsElement extends base {
      get [internals]() {
        if (!this[privateInternals]) {
          this[privateInternals] = this.attachInternals();
        }
        return this[privateInternals];
      }
    }
    return WithElementInternalsElement;
  }

  // node_modules/@material/web/labs/behaviors/form-associated.js
  var getFormValue = /* @__PURE__ */ Symbol("getFormValue");
  var getFormState = /* @__PURE__ */ Symbol("getFormState");
  function mixinFormAssociated(base) {
    class FormAssociatedElement extends base {
      get form() {
        return this[internals].form;
      }
      get labels() {
        return this[internals].labels;
      }
      // Use @property for the `name` and `disabled` properties to add them to the
      // `observedAttributes` array and trigger `attributeChangedCallback()`.
      //
      // We don't use Lit's default getter/setter (`noAccessor: true`) because
      // the attributes need to be updated synchronously to work with synchronous
      // form APIs, and Lit updates attributes async by default.
      get name() {
        return this.getAttribute("name") ?? "";
      }
      set name(name) {
        this.setAttribute("name", name);
      }
      get disabled() {
        return this.hasAttribute("disabled");
      }
      set disabled(disabled) {
        this.toggleAttribute("disabled", Boolean(disabled));
      }
      attributeChangedCallback(name, old, value) {
        if (name === "name" || name === "disabled") {
          const oldValue = name === "disabled" ? old !== null : old;
          this.requestUpdate(name, oldValue);
          return;
        }
        super.attributeChangedCallback(name, old, value);
      }
      requestUpdate(name, oldValue, options) {
        super.requestUpdate(name, oldValue, options);
        this[internals].setFormValue(this[getFormValue](), this[getFormState]());
      }
      [getFormValue]() {
        return this.getAttribute("value");
      }
      [getFormState]() {
        return this[getFormValue]();
      }
      formDisabledCallback(disabled) {
        this.disabled = disabled;
      }
    }
    FormAssociatedElement.formAssociated = true;
    __decorate([
      n3({ noAccessor: true })
    ], FormAssociatedElement.prototype, "name", null);
    __decorate([
      n3({ type: Boolean, noAccessor: true })
    ], FormAssociatedElement.prototype, "disabled", null);
    return FormAssociatedElement;
  }

  // node_modules/@material/web/labs/behaviors/form-submitter.js
  function mixinFormSubmitter(base) {
    class FormSubmitterElement extends base {
      // Name attribute must reflect synchronously for form integration.
      get name() {
        return this.getAttribute("name") ?? "";
      }
      set name(name) {
        this.setAttribute("name", name);
      }
      // Mixins must have a constructor with `...args: any[]`
      // tslint:disable-next-line:no-any
      constructor(...args) {
        super(...args);
        this.type = "submit";
        this.value = "";
        if (o6)
          return;
        setupDispatchHooks(this, "click");
        this.addEventListener("click", async (event) => {
          const isReset = this.type === "reset";
          const isSubmit = this.type === "submit";
          const elementInternals = this[internals];
          const { form } = elementInternals;
          if (!form || !(isSubmit || isReset)) {
            return;
          }
          afterDispatch(event, () => {
            if (event.defaultPrevented) {
              return;
            }
            if (isReset) {
              form.reset();
              return;
            }
            form.addEventListener("submit", (submitEvent) => {
              Object.defineProperty(submitEvent, "submitter", {
                configurable: true,
                enumerable: true,
                get: () => this
              });
            }, { capture: true, once: true });
            elementInternals.setFormValue(this.value);
            form.requestSubmit();
          });
        });
      }
    }
    __decorate([
      n3()
    ], FormSubmitterElement.prototype, "type", void 0);
    __decorate([
      n3({ reflect: true })
    ], FormSubmitterElement.prototype, "value", void 0);
    return FormSubmitterElement;
  }

  // node_modules/@material/web/iconbutton/internal/icon-button.js
  var iconButtonBaseClass = mixinDelegatesAria(mixinFormSubmitter(mixinFormAssociated(mixinElementInternals(i4))));
  var IconButton = class extends iconButtonBaseClass {
    constructor() {
      super();
      this.softDisabled = false;
      this.flipIconInRtl = false;
      this.href = "";
      this.download = "";
      this.target = "";
      this.ariaLabelSelected = "";
      this.toggle = false;
      this.selected = false;
      this.flipIcon = isRtl(this, this.flipIconInRtl);
      if (o6)
        return;
      setupDispatchHooks(this, "click");
      this.addEventListener("click", (event) => {
        if (this.softDisabled || this.disabled && this.href) {
          event.stopImmediatePropagation();
          event.preventDefault();
          return;
        }
        const wasSelected = this.selected;
        afterDispatch(event, () => {
          if (!this.toggle || this.disabled || event.defaultPrevented) {
            return;
          }
          this.selected = !wasSelected;
          this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
          this.dispatchEvent(new Event("change", { bubbles: true }));
        });
      });
    }
    willUpdate() {
      if (this.href) {
        this.disabled = false;
        this.softDisabled = false;
      }
    }
    render() {
      const tag = this.href ? i6`div` : i6`button`;
      const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
      const hasToggledAriaLabel = ariaLabel && this.ariaLabelSelected;
      const ariaPressedValue = !this.toggle ? A : this.selected;
      let ariaLabelValue = A;
      if (!this.href) {
        ariaLabelValue = hasToggledAriaLabel && this.selected ? this.ariaLabelSelected : ariaLabel;
      }
      return u3`<${tag}
        class="icon-button ${e7(this.getRenderClasses())}"
        id="button"
        aria-label="${ariaLabelValue || A}"
        aria-haspopup="${!this.href && ariaHasPopup || A}"
        aria-expanded="${!this.href && ariaExpanded || A}"
        aria-pressed="${ariaPressedValue}"
        aria-disabled=${!this.href && this.softDisabled || A}
        ?disabled="${!this.href && this.disabled}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${!this.selected ? this.renderIcon() : A}
        ${this.selected ? this.renderSelectedIcon() : A}
        ${this.href ? this.renderLink() : this.renderTouchTarget()}
  </${tag}>`;
    }
    renderLink() {
      const { ariaLabel } = this;
      return b2`
      <a
        class="link"
        id="link"
        href="${this.href}"
        download="${this.download || A}"
        target="${this.target || A}"
        aria-label="${ariaLabel || A}">
        ${this.renderTouchTarget()}
      </a>
    `;
    }
    getRenderClasses() {
      return {
        "flip-icon": this.flipIcon,
        "selected": this.toggle && this.selected
      };
    }
    renderIcon() {
      return b2`<span class="icon"><slot></slot></span>`;
    }
    renderSelectedIcon() {
      return b2`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`;
    }
    renderTouchTarget() {
      return b2`<span class="touch"></span>`;
    }
    renderFocusRing() {
      return b2`<md-focus-ring
      part="focus-ring"
      for=${this.href ? "link" : "button"}></md-focus-ring>`;
    }
    renderRipple() {
      const isRippleDisabled = !this.href && (this.disabled || this.softDisabled);
      return b2`<md-ripple
      for=${this.href ? "link" : A}
      ?disabled="${isRippleDisabled}"></md-ripple>`;
    }
    connectedCallback() {
      this.flipIcon = isRtl(this, this.flipIconInRtl);
      super.connectedCallback();
    }
  };
  IconButton.shadowRootOptions = {
    mode: "open",
    delegatesFocus: true
  };
  __decorate([
    n3({ type: Boolean, attribute: "soft-disabled", reflect: true })
  ], IconButton.prototype, "softDisabled", void 0);
  __decorate([
    n3({ type: Boolean, attribute: "flip-icon-in-rtl" })
  ], IconButton.prototype, "flipIconInRtl", void 0);
  __decorate([
    n3()
  ], IconButton.prototype, "href", void 0);
  __decorate([
    n3()
  ], IconButton.prototype, "download", void 0);
  __decorate([
    n3()
  ], IconButton.prototype, "target", void 0);
  __decorate([
    n3({ attribute: "aria-label-selected" })
  ], IconButton.prototype, "ariaLabelSelected", void 0);
  __decorate([
    n3({ type: Boolean })
  ], IconButton.prototype, "toggle", void 0);
  __decorate([
    n3({ type: Boolean, reflect: true })
  ], IconButton.prototype, "selected", void 0);
  __decorate([
    r4()
  ], IconButton.prototype, "flipIcon", void 0);

  // node_modules/@material/web/iconbutton/internal/shared-styles.cssresult.js
  var styles4 = i`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{display:grid;height:100%;outline:none;place-items:center;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1}}
`;
  var shared_styles_cssresult_default = styles4.styleSheet;

  // node_modules/@material/web/iconbutton/filled-icon-button.js
  var MdFilledIconButton = class MdFilledIconButton2 extends IconButton {
    getRenderClasses() {
      return {
        ...super.getRenderClasses(),
        "filled": true,
        "toggle-filled": this.toggle
      };
    }
  };
  MdFilledIconButton.styles = [styles4, styles];
  MdFilledIconButton = __decorate([
    t("md-filled-icon-button")
  ], MdFilledIconButton);
})();
/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/reactive-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/iconbutton/internal/filled-styles.cssresult.js:
@material/web/focus/internal/focus-ring-styles.cssresult.js:
@material/web/ripple/internal/ripple-styles.cssresult.js:
@material/web/iconbutton/internal/shared-styles.cssresult.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/controller/attachable-controller.js:
@material/web/internal/aria/aria.js:
@material/web/internal/aria/delegate.js:
@material/web/internal/events/dispatch-hooks.js:
@material/web/labs/behaviors/element-internals.js:
@material/web/labs/behaviors/form-associated.js:
@material/web/labs/behaviors/form-submitter.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/focus/internal/focus-ring.js:
@material/web/focus/md-focus-ring.js:
@material/web/internal/motion/animation.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/ripple/internal/ripple.js:
@material/web/ripple/ripple.js:
@material/web/internal/controller/is-rtl.js:
@material/web/iconbutton/filled-icon-button.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/iconbutton/internal/icon-button.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
