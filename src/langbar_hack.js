// @janiczek's changes to https://github.com/abrudz/lb/blob/master/lb.js
// * BQN386 font used instead of DejaVu Sans Mono
// * Copied over tooltip labels from RIDE
// * Styled the tooltips a little with CSS.
// * Custom event `lang-bar-updated-input-value` emitted whenever the language
//     bar does something different than just adding a character
(_ => {
  let hc = { '<': '&lt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }, he = x => x.replace(/[<&'"]/g, c => hc[c]) //html chars and escape fn
    , tcs = '<-←xx×/\\×:-÷*O⍟[-⌹-]⌹OO○77⌈FF⌈ll⌊LL⌊T_⌶II⌶|_⊥TT⊤-|⊣|-⊢=/≠L-≠<=≤<_≤>=≥>_≥==≡=_≡7=≢L=≢vv∨^^∧^~⍲v~⍱^|↑v|↓((⊂cc⊂(_⊆c_⊆))⊃[|⌷|]⌷A|⍋V|⍒ii⍳i_⍸ee∊e_⍷' +
      'uu∪UU∪nn∩/-⌿\\-⍀,-⍪rr⍴pp⍴O|⌽O-⊖O\\⍉::¨""¨~:⍨~"⍨*:⍣*"⍣oo∘o:⍤o"⍤O:⍥O"⍥[\'⍞\']⍞[]⎕[:⍠:]⍠[=⌸=]⌸[<⌺>]⌺o_⍎oT⍕o-⍕<>⋄^v⋄on⍝->→aa⍺ww⍵VV∇v-∇--¯0~⍬' +
      'AA∆^-∆A_⍙^=⍙[?⍰?]⍰:V⍢∇"⍢||∥ox¤)_⊇_)⊇V~⍫\'\'`'
    , lbs = '← +-×÷*⍟⌹○!? |⌈⌊⊥⊤⊣⊢ =≠≤<>≥≡≢ ∨∧⍲⍱ ↑↓⊂⊃⊆⌷⍋⍒ ⍳⍸∊⍷∪∩~ /\\⌿⍀ ,⍪⍴⌽⊖⍉ ¨⍨⍣.∘⍤⍥@ ⍞⎕⍠⌸⌺⌶⍎⍕ ⋄⍝→⍵⍺∇& ¯⍬∆⍙'
    , bqk = ' =1234567890-qwertyuiop\\asdfghjk∙l;\'zxcvbnm,./`[]+!@#$%^&*()_QWERTYUIOP|ASDFGHJKL:"ZXCVBNM<>?~{}'.replace(/∙/g, '')
    , bqv = '`÷¨¯<≤=≥>≠∨∧×?⍵∊⍴~↑↓⍳○*⊢∙⍺⌈⌊_∇∆∘\'⎕⍎⍕∙⊂⊃∩∪⊥⊤|⍝⍀⌿⋄←→⌹⌶⍫⍒⍋⌽⍉⊖⍟⍱⍲!⍰W⍷R⍨YU⍸⍥⍣⊣ASDF⍢H⍤⌸⌷≡≢⊆⊇CVB¤∥⍪⍙⍠⌺⍞⍬'.replace(/∙/g, '')
    , tc = {}, bqc = {} //tab completions and ` completions
  for (let i = 0; i < bqk.length; i++)bqc[bqk[i]] = bqv[i]
  for (let i = 0; i < tcs.length; i += 3)tc[tcs[i] + tcs[i + 1]] = tcs[i + 2]
  for (let i = 0; i < tcs.length; i += 3) { let k = tcs[i + 1] + tcs[i]; tc[k] = tc[k] || tcs[i + 2] }
  let lbh = ''; for (let i = 0; i < lbs.length; i++) { lbh += `<b>${lbs[i]}</b>` }
  let d = document, el = d.createElement('div'); el.innerHTML =
    `<div class=ngn_lb><span class=ngn_x title=Close>❎</span>${lbh}</div>
 <style>
  .ngn_lb{position:fixed;top:0;left:0;right:0;background-color:#eee;color:#000;cursor:default;z-index:2147483647;
    font-family:"BQN386",monospace;border-bottom:solid #999 1px;padding:2px 2px 0 2px;word-wrap:break-word;}
  .ngn_lb b{cursor:pointer;padding:0 1px;font-weight:normal}
  .ngn_lb b:hover,.ngn_bq .ngn_lb{background-color:#777;color:#fff}
  .ngn_x{float:right;color:#999;cursor:pointer;margin-top:-3px}
  .ngn_x:hover{color:#f00}
 </style>`
  d.body.appendChild(el)
  let t, ts = [], lb = el.firstChild, bqm = 0 //t:textarea or input, lb:language bar, bqm:backquote mode
  let pd = x => x.preventDefault()
  let ev = (x, t, f, c) => x.addEventListener(t, f, c)
  let emV = x => x.dispatchEvent(new Event('lang-bar-updated-input-value'));
  let emC = s => s != ' ' ? window.ElmApp.ports.langBarCharClicked.send(s) : null;
  let emH = s => s != ' ' ? window.ElmApp.ports.langBarCharHovered.send(s) : null;
  [...document.querySelectorAll('.ngn_lb b')].map(y =>
    ev(y, 'mouseover', x => emH(x.target.textContent))
  );
  ev(lb, 'mousedown', x => {
    if (x.target.classList.contains('ngn_x')) { lb.hidden = 1; upd(); pd(x); return }
    if (x.target.nodeName === 'B') {
      s = x.target.textContent;
      if (t) {
        let i = t.selectionStart, j = t.selectionEnd, v = t.value;
        if (i != null && j != null) { t.value = v.slice(0, i) + s + v.slice(j); t.selectionStart = t.selectionEnd = i + 1; emV(t); }
        pd(x); return
      } else {
        emC(s);
      }

    }
  })
  let fk = x => {
    let t = x.target
    if (bqm) {
      let i = t.selectionStart, v = t.value, c = bqc[x.key]; if (x.which > 31) { bqm = 0; d.body.classList.remove('ngn_bq') }
      if (c) { t.value = v.slice(0, i) + c + v.slice(i); t.selectionStart = t.selectionEnd = i + 1; pd(x); emV(t); return !1 }
    }
    if (!x.ctrlKey && !x.shiftKey && !x.altKey && !x.metaKey) {
      if ("`½²^º§ùµ°".indexOf(x.key) > -1) {
        bqm = 1; d.body.classList.add('ngn_bq'); pd(x); // ` or other trigger symbol pressed, wait for next key
      } else if (x.key == "Tab") {
        let i = t.selectionStart, v = t.value, c = tc[v.slice(i - 2, i)]
        if (c) { t.value = v.slice(0, i - 2) + c + v.slice(i); t.selectionStart = t.selectionEnd = i - 1; pd(x); emV(t); }
      }
    }
  }
  let ff = x => {
    let t0 = x.target, nn = t0.nodeName.toLowerCase()
    if (nn !== 'textarea' && (nn !== 'input' || t0.type !== 'text' && t0.type !== 'search')) return
    t = t0; if (!t.ngn) { t.ngn = 1; ts.push(t); ev(t, 'keydown', fk) }
  }
  let upd = _ => { d.body.style.marginTop = lb.clientHeight + 'px' }
  upd(); ev(window, 'resize', upd)
  ev(d, 'focus', ff, !0); let ae = d.activeElement; ae && ff({ type: 'focus', target: ae })
})();
