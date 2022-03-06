const c=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function x(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=x(e);fetch(e.href,t)}};c();class i extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --header-patch-gradient:
          linear-gradient(
            var(--cartridge-color) 0 15%,
            transparent 15% 75%,
            var(--cartridge-color) 75%
          ),
          linear-gradient(
            90deg,
            transparent 0 1%,
            #444 1% 5%,
            #000 50%,
            #444 95% 99%,
            transparent 99%
          );

        --header-gaps-gradient:
          repeating-linear-gradient(
            var(--cartridge-color) 0 8%,
            transparent 8% 16%
          ),
          linear-gradient(
            #222 0% 11%,
            transparent 11% 19%,
            #222 24% 26%,
            transparent 26% 40%,
            #222 40% 42%,
            transparent 43% 52%,
            #222 56% 58%,
            transparent 58% 64%,
            #222 74% 70%,
            transparent 70%
          );

        display: inline-flex;
        justify-content: center;
        width: 100%;
      }

      .cartridge-header {
        width: calc(var(--width) * 1);
        height: calc(var(--height) * 0.25);
        background: var(--header-patch-gradient);
        border-radius: 0 var(--border-round) 0 0;
        display: flex;
        align-items: center;
      }

      .cartridge-header-overlay {
        width: 100%;
        height: 75%;
        background: var(--header-gaps-gradient);

        display: flex;
        justify-content: center;
      }

      .cartridge-brand {
        width: 75%;
        height: 95%;
        background: #444;
        background: linear-gradient(#444 5%, #777 85%);
        box-shadow:
          0 5px 15px 10px #4448 inset,
          0 -1px 0 1px #ddd inset,
          0 1px 2px 2px #222 inset;
        border: 5px solid var(--cartridge-color);
        border-radius: 75px;
        transform: translate(0, -8%);

        display: flex;
        justify-content: center;
        align-items: center;

        color: var(--cartridge-color);
        text-shadow: 1px 2px 1px #0005;
      }

      .cartridge-brand .brand {
        font-family: Pretendo;
        font-size: 1.1em;
        letter-spacing: 0px;
      }

      .cartridge-brand .model {
        font-family: "Gill Sans MT Pro";
        letter-spacing: -3px;
        font-size: 1.8em;
      }

      .cartridge-brand .sign {
        font-family: Lato;
        font-size: 0.6em;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${i.styles}</style>
    <header>
      <div class="cartridge-header">
        <div class="cartridge-header-overlay">
          <div class="cartridge-brand">
            <div class="text-line">
              <span class="brand">Nintendo</span>
              <span class="model">GAME BOY</span>
              <span class="sign">TM</span>
            </div>
          </div>
        </div>
      </div>
    </header>`}}customElements.define("gameboy-cartridge-header",i);class a extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
    .avatar {
      width: 256px;
      height: 256px;
      overflow: hidden;
    }

    .pixel {
      height: 17px;
      width: 17px;
      box-shadow:
        64px 0px #FFFFFF,
        80px 0px #FFFFFF,
        96px 0px #FFFFFF,
        112px 0px #FFFFFF,
        128px 0px #FFFFFF,
        144px 0px #FFFFFF,
        160px 0px #FFFFFF,
        176px 0px #FFFFFF,
        48px 16px #FFFFFF,
        64px 16px #FFFFFF,
        80px 16px #000000,
        96px 16px #000000,
        112px 16px #000000,
        128px 16px #000000,
        144px 16px #000000,
        160px 16px #000000,
        176px 16px #FFFFFF,
        192px 16px #FFFFFF,
        208px 16px #FFFFFF,
        32px 32px #FFFFFF,
        48px 32px #FFFFFF,
        64px 32px #000000,
        80px 32px #000000,
        96px 32px #000000,
        112px 32px #000000,
        128px 32px #000000,
        144px 32px #000000,
        160px 32px #000000,
        176px 32px #000000,
        192px 32px #000000,
        208px 32px #FFFFFF,
        32px 48px #FFFFFF,
        48px 48px #000000,
        64px 48px #000000,
        80px 48px #000000,
        96px 48px #CC984F,
        112px 48px #CC984F,
        128px 48px #CC984F,
        144px 48px #CC984F,
        160px 48px #1A1A1A,
        176px 48px #000000,
        192px 48px #000000,
        208px 48px #FFFFFF,
        32px 64px #FFFFFF,
        48px 64px #000000,
        64px 64px #000000,
        80px 64px #1A1A1A,
        96px 64px #FFCC80,
        112px 64px #FFCC80,
        128px 64px #FFCC80,
        144px 64px #FFCC80,
        160px 64px #EBB267,
        176px 64px #EBB267,
        192px 64px #FFFFFF,
        208px 64px #FFFFFF,
        32px 80px #FFFFFF,
        48px 80px #000000,
        64px 80px #1A1A1A,
        80px 80px #FFCC80,
        96px 80px #FFCC80,
        112px 80px #000000,
        128px 80px #FFCC80,
        144px 80px #FFCC80,
        160px 80px #000000,
        176px 80px #FFCC80,
        192px 80px #FFFFFF,
        32px 96px #FFFFFF,
        48px 96px #000000,
        64px 96px #1A1A1A,
        80px 96px #FFCC80,
        96px 96px #FFCC80,
        112px 96px #000000,
        128px 96px #FFCC80,
        144px 96px #FFCC80,
        160px 96px #000000,
        176px 96px #FFCC80,
        192px 96px #FFFFFF,
        32px 112px #FFFFFF,
        48px 112px #000000,
        64px 112px #000000,
        80px 112px #FFCC80,
        96px 112px #FFCC80,
        112px 112px #FFCC80,
        128px 112px #EBB267,
        144px 112px #EBB267,
        160px 112px #EBB267,
        176px 112px #FFCC80,
        192px 112px #FFFFFF,
        32px 128px #FFFFFF,
        48px 128px #000000,
        64px 128px #000000,
        80px 128px #CC984F,
        96px 128px #FFCC80,
        112px 128px #FFCC80,
        128px 128px #FFCC80,
        144px 128px #FFCC80,
        160px 128px #FFCC80,
        176px 128px #FFCC80,
        192px 128px #FFFFFF,
        32px 144px #FFFFFF,
        48px 144px #FFFFFF,
        64px 144px #000000,
        80px 144px #000000,
        96px 144px #CC984F,
        112px 144px #CC984F,
        128px 144px #CC984F,
        144px 144px #000000,
        160px 144px #000000,
        176px 144px #FFCC80,
        192px 144px #FFFFFF,
        48px 160px #FFFFFF,
        64px 160px #FFFFFF,
        80px 160px #000000,
        96px 160px #000000,
        112px 160px #000000,
        128px 160px #CC984F,
        144px 160px #CC984F,
        160px 160px #000000,
        176px 160px #CC984F,
        192px 160px #FFFFFF,
        32px 176px #FFFFFF,
        48px 176px #FFFFFF,
        64px 176px #000000,
        80px 176px #1A1A1A,
        96px 176px #000000,
        112px 176px #000000,
        128px 176px #000000,
        144px 176px #000000,
        160px 176px #000000,
        176px 176px #000000,
        192px 176px #FFFFFF,
        32px 192px #FFFFFF,
        48px 192px #000000,
        64px 192px #1A1A1A,
        80px 192px #000000,
        96px 192px #000000,
        112px 192px #000000,
        128px 192px #000000,
        144px 192px #000000,
        160px 192px #000000,
        176px 192px #000000,
        192px 192px #FFFFFF,
        32px 208px #FFFFFF,
        48px 208px #000000,
        64px 208px #1A1A1A,
        80px 208px #000000,
        96px 208px #000000,
        112px 208px #000000,
        128px 208px #17FFFF,
        144px 208px #000000,
        160px 208px #000000,
        176px 208px #1A1A1A,
        192px 208px #FFFFFF,
        32px 224px #FFFFFF,
        48px 224px #1A1A1A,
        64px 224px #000000,
        80px 224px #000000,
        96px 224px #000000,
        112px 224px #CC2554,
        128px 224px #0D2061,
        144px 224px #0D2061,
        160px 224px #000000,
        176px 224px #1A1A1A,
        192px 224px #FFFFFF,
        32px 240px #FFFFFF,
        48px 240px #CC984F,
        64px 240px #CC984F,
        80px 240px #000000,
        96px 240px #000000,
        112px 240px #0D2061,
        128px 240px #E65100,
        144px 240px #17FFFF,
        160px 240px #000000,
        176px 240px #1A1A1A,
        192px 240px #FFFFFF;
      transform: rotate(-5deg) translate(-10px, 22px);
      filter: drop-shadow(2px 2px 10px #0007);
    }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${a.styles}</style>
    <div class="avatar">
      <div class="pixel"></div>
    </div>`}}customElements.define("manz-dev",a);var F='<svg width="389.601" height="546.779" viewBox="0 0 103.082 144.669" version="1.1" id="svg5" xmlns="http://www.w3.org/2000/svg"><defs id="defs2"><filter style="color-interpolation-filters:sRGB" height="1.062" width="1.068" y="-.025" x="-.034" id="filter1481"><feGaussianBlur in="SourceAlpha" stdDeviation=".968" result="blur1" id="feGaussianBlur1457"/><feComposite in="blur1" in2="SourceGraphic" operator="xor" result="composite1" id="feComposite1459"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 32.1057 -1.21" result="colormatrix1" id="feColorMatrix1461"/><feGaussianBlur stdDeviation=".429" result="blur2" id="feGaussianBlur1463"/><feComposite in="blur2" in2="blur2" operator="out" result="composite2" id="feComposite1465"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 9.07553 -0" result="colormatrix2" id="feColorMatrix1467"/><feGaussianBlur stdDeviation=".407" result="blur3" id="feGaussianBlur1469"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 -1" result="colormatrix3" id="feColorMatrix1471"/><feFlood flood-opacity="1" flood-color="#FFF" result="flood" id="feFlood1473"/><feComposite in="flood" in2="colormatrix3" operator="in" result="composite3" id="feComposite1475"/><feComposite in="SourceGraphic" in2="colormatrix3" operator="out" result="composite4" id="feComposite1477"/><feComposite in="composite4" in2="composite3" k2="1" k3="1" operator="arithmetic" result="composite5" id="feComposite1479" k1="0" k4="0"/></filter><filter style="color-interpolation-filters:sRGB" height="1.049" width="1.05" y="-.019" x="-.025" id="filter1867"><feGaussianBlur in="SourceAlpha" stdDeviation=".489" result="blur1" id="feGaussianBlur1843"/><feComposite in="blur1" in2="SourceGraphic" operator="xor" result="composite1" id="feComposite1845"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 32.1057 -1.21" result="colormatrix1" id="feColorMatrix1847"/><feGaussianBlur stdDeviation=".429" result="blur2" id="feGaussianBlur1849"/><feComposite in="blur2" in2="blur2" operator="out" result="composite2" id="feComposite1851"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 9.07553 -0" result="colormatrix2" id="feColorMatrix1853"/><feGaussianBlur stdDeviation=".407" result="blur3" id="feGaussianBlur1855"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 -1" result="colormatrix3" id="feColorMatrix1857"/><feFlood flood-opacity="1" flood-color="#FFF" result="flood" id="feFlood1859"/><feComposite in="flood" in2="colormatrix3" operator="in" result="composite3" id="feComposite1861"/><feComposite in="SourceGraphic" in2="colormatrix3" operator="out" result="composite4" id="feComposite1863"/><feComposite in="composite4" in2="composite3" k2="1" k3="1" operator="arithmetic" result="composite5" id="feComposite1865" k1="0" k4="0"/></filter><filter style="color-interpolation-filters:sRGB" height="1.089" width="1.147" y="-.039" x="-.074" id="filter2942"><feGaussianBlur in="SourceAlpha" stdDeviation=".429" result="blur1" id="feGaussianBlur2918"/><feComposite in="blur1" in2="SourceGraphic" operator="xor" result="composite1" id="feComposite2920"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 23.432 -2.71903" result="colormatrix1" id="feColorMatrix2922"/><feGaussianBlur stdDeviation="1.925" result="blur2" id="feGaussianBlur2924"/><feComposite in="blur2" in2="blur2" operator="out" result="composite2" id="feComposite2926"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 9.07553 -0" result="colormatrix2" id="feColorMatrix2928"/><feGaussianBlur stdDeviation=".407" result="blur3" id="feGaussianBlur2930"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 -1" result="colormatrix3" id="feColorMatrix2932"/><feFlood flood-opacity="1" flood-color="#FFF" result="flood" id="feFlood2934"/><feComposite in="flood" in2="colormatrix3" operator="in" result="composite3" id="feComposite2936"/><feComposite in="SourceGraphic" in2="colormatrix3" operator="out" result="composite4" id="feComposite2938"/><feComposite in="composite4" in2="composite3" k2="1" k3="1" operator="arithmetic" result="composite5" id="feComposite2940" k1="0" k4="0"/></filter><filter style="color-interpolation-filters:sRGB" height="1.064" width="1.111" y="-.026" x="-.055" id="filter1656"><feGaussianBlur in="SourceAlpha" stdDeviation="1.327" result="blur1" id="feGaussianBlur1632"/><feComposite in="blur1" in2="SourceGraphic" operator="out" result="composite1" id="feComposite1634"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 2.79456 -0" result="colormatrix1" id="feColorMatrix1636"/><feGaussianBlur stdDeviation=".489" result="blur2" id="feGaussianBlur1638"/><feComposite in="blur2" in2="blur2" operator="out" result="composite2" id="feComposite1640"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 3.09366 -0" result="colormatrix2" id="feColorMatrix1642"/><feGaussianBlur stdDeviation=".057" result="blur3" id="feGaussianBlur1644"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 -1" result="colormatrix3" id="feColorMatrix1646"/><feFlood flood-opacity="1" flood-color="#FF1010" result="flood" id="feFlood1648"/><feComposite in="flood" in2="colormatrix3" operator="in" result="composite3" id="feComposite1650"/><feComposite in="SourceGraphic" in2="colormatrix3" operator="out" result="composite4" id="feComposite1652"/><feComposite in="composite4" in2="composite3" k2="1" k3="1" operator="arithmetic" result="composite5" id="feComposite1654" k1="0" k4="0"/></filter><filter style="color-interpolation-filters:sRGB" height="1.064" width="1.111" y="-.026" x="-.055" id="filter1656-7"><feGaussianBlur in="SourceAlpha" stdDeviation="1.327" result="blur1" id="feGaussianBlur1632-7"/><feComposite in="blur1" in2="SourceGraphic" operator="out" result="composite1" id="feComposite1634-7"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 2.79456 -0" result="colormatrix1" id="feColorMatrix1636-9"/><feGaussianBlur stdDeviation=".489" result="blur2" id="feGaussianBlur1638-1"/><feComposite in="blur2" in2="blur2" operator="out" result="composite2" id="feComposite1640-3"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 3.09366 -0" result="colormatrix2" id="feColorMatrix1642-7"/><feGaussianBlur stdDeviation=".057" result="blur3" id="feGaussianBlur1644-6"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 -1" result="colormatrix3" id="feColorMatrix1646-5"/><feFlood flood-opacity="1" flood-color="#FF1010" result="flood" id="feFlood1648-4"/><feComposite in="flood" in2="colormatrix3" operator="in" result="composite3" id="feComposite1650-6"/><feComposite in="SourceGraphic" in2="colormatrix3" operator="out" result="composite4" id="feComposite1652-8"/><feComposite in="composite4" in2="composite3" k2="1" k3="1" operator="arithmetic" result="composite5" id="feComposite1654-8" k1="0" k4="0"/></filter></defs><g id="layer1" transform="translate(-1.268 -1.882)"><g id="g869-1" transform="matrix(.7947 0 0 .7947 -1.2 1.494)" style="filter:url(#filter1656-7)"><g class="arms" fill="none" stroke="#000" stroke-linecap="round" stroke-width="4" id="g8-7"><path d="M30.972 77.045C1.844 59.645 10.922 43 10.922 43" id="path4-5"/><path d="M104.951 77.045C134.08 59.645 125 43 125 43" id="path6-6"/></g><g class="feets" fill="none" stroke="#000" stroke-linecap="round" stroke-width="4" id="g14-7"><path d="M75.974 140.57c5.91 24.012-1.109 35.464-1.109 35.464h11.083" id="path10-2"/><path d="M54.886 140.57c-5.91 24.012 1.109 35.464 1.109 35.464H44.912" id="path12-5"/></g><path class="outer" fill="#2a670c" d="M65 5a40 54 0 0 0-40 54 40 54 0 0 0 0 9 50 50 0 0 0-9 30 50 50 0 0 0 49 49 50 50 0 0 0 50-49 50 50 0 0 0-10-30 40 54 0 0 0 1-9A40 54 0 0 0 65 5Z" id="path18-9" style="fill:#000;fill-opacity:1"/><path class="inner" fill="#c1e20c" d="M65 12a36 48 0 0 0-36 48 36 48 0 0 0 1 8 44 44 0 0 0-9 26 44 44 0 0 0 44 44 44 44 0 0 0 45-44 44 44 0 0 0-9-26 36 48 0 0 0 0-8 36 48 0 0 0-36-48z" id="path20-4" style="fill:#000;fill-opacity:1"/></g></g><style id="style2"></style></svg>';class s extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        display: inline-block;
        --width: 100px;
        --height: 150px;
        width: var(--width);
        height: var(--height);
      }

      .container {
        background: #9f968e;
        width: var(--width);
        height: var(--height);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        font-family: "Gill Sans MT Pro", sans-serif;
        position: absolute;
        padding: 4px 2px;
      }

      .bold-text {
        text-shadow: 0 0 1px #000;
      }

      .text {
        color: #111;
        letter-spacing: 1px;
      }

      .small {
        font-size: 0.8rem;
      }

      .square {
        background: #000;
        width: 90%;
        height: 70%;
        overflow: hidden;
      }

      .square svg {
        max-width: 125%;
        max-height: 125%;
        transform: translate(-9%, 10%);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${s.styles}</style>
    <div class="container">
      <div class="text">ORIGINAL</div>
      <div class="square">${F}</div>
      <div class="bold-text">AVOCADO</div>
      <div class="small text">DEVELOPERS</div>
    </div>`}}customElements.define("game-link-seal",s);class p extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --size: 110px;
        --color: #978247;

        width: var(--size);
        height: var(--size);
      }

      .starburst {
        background: var(--color);
        width: var(--size);
        height: var(--size);
        text-align: center;
        color: #fff;
        font-family: Roboto;
        font-weight: bold;

        position: relative;
        transform: rotate(-45deg);
      }

      .starburst,
      .starburst .content {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .starburst .content {
        width: 100%;
        height: 100%;
        background: inherit;
        transform: rotate(45deg);
        display: flex;
        flex-direction: column;
      }

      .starburst:before,
      .starburst:after ,
      .starburst .content:before,
      .starburst .content:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: inherit;
        z-index: -1;
        transform: rotate(30deg);
      }

      .starburst:after {
        transform: rotate(-30deg);
      }

      .starburst .content:after {
        transform: rotate(30deg);
      }
      .starburst .content:before {
        transform: rotate(-30deg);
      }

      .circle {
        background: #fff;
        color: var(--color);
        position: absolute;
        top: 0;
        width: var(--size);
        height: var(--size);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        transform: scale(1.1);
      }

      .circle::after {
        content: "";
        border: 2px solid var(--color);
        position: absolute;
        width: 88%;
        height: 88%;
        border-radius: 50%;
      }

      .circle data {
        font-size: 0.9rem;
      }

      .brand {
        border: 3px solid var(--color);
        border-radius: 25px;
        padding: 1px 8px;
        margin: 2px 0;
        font-size: 1.1rem;
      }

      .text {
        max-width: 70px;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <div class="starburst">
      <div class="content">
        <div class="circle">
          <data>Original</data>
          <data class="brand">Manz.dev</data>
          <data class="text">Seal of approval</data>
        </div>
      </div>
    </div>`}}customElements.define("original-seal",p);class l extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --fancy-gradient: linear-gradient(220deg, #884ced, #ec1cce);

        display: block;
        width: 94%;
        height: 96%;
        background: white;
        border-radius: var(--border-round);
        box-shadow: 2px 2px 0 #333;
        overflow: hidden;
        position: relative;
      }

      :host::after {
        content: "";
        display: block;
        position: absolute;
        background: linear-gradient(
          225deg,
          transparent 35%,
          #fff5 45% 55%,
          transparent 65%
        );
        position: absolute;
        inset: 0;
      }

      .label {
        width: 100%;
        height: 100%;
        background:
          linear-gradient(90deg, #afa99b 9%, transparent 9% 91%, #afa99b 91%),
          var(--fancy-gradient);
        position: relative;
      }

      .label::before,
      .label::after {
        font-family: "Roboto", sans-serif;
        font-size: 0.8rem;
        font-weight: bold;
        color: #444;
        display: inline-block;
        width: 25px;
        height: 100%;
        position: absolute;
        writing-mode: vertical-rl;
        text-transform: uppercase;
        text-align: center;
        line-height: 180%;
      }

      .label::before {
        content: "MADE WITH CSS";
      }

      .label::after {
        content: "THIS SIDE OUT";
        right: 0;
        writing-mode: vertical-rl;
        transform: scale(-1);
      }

      manz-dev {
        position: absolute;
        bottom: 0;
        transform: scale(0.5) translate(15%, 50%);
      }

      .title {
        font-family: "Bebas Neue";
        letter-spacing: -2px;
        font-size: 4.25rem;
        color: #fff;
        text-shadow:
          1px 1px 4px #0005,
          2px 2px 5px #0008;
        position: absolute;
        width: 100%;
        text-align: center;
        transform: translate(0, 15%);
      }

      .slogan {
        font-family: "Bebas Neue";
        letter-spacing: -0.5px;
        font-size: 1.7rem;
        color: #fff;
        width: 100%;
        text-align: center;
        text-shadow:
          1px 1px 2px #0005,
          1px 1px 4px #0008;
        transform: translate(0, 240%);
        position: absolute;
      }

      game-link-seal {
        display: inline-block;
        transform: scale(0.55);
        position: absolute;
        bottom: -25px;
        left: 10px;
      }

      original-seal {
        display: inline-block;
        transform: scale(0.55);
        position: absolute;
        bottom: -8px;
        right: 4px;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
    <div class="label">
      <div class="title">MANZ.DEV</div>
      <div class="slogan">SWITCH TO TWITCH!</div>
      <manz-dev></manz-dev>
      <game-link-seal></game-link-seal>
      <original-seal></original-seal>
    </div>`}}customElements.define("gameboy-cartridge-label",l);class n extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: 425px;
        --height: 450px;
        --cartridge-color: #8c8c8c;
        --border-round: 5px;

        width: var(--width);
        height: var(--height);

        filter: drop-shadow(0 0 4px #000);
      }

      .cartridge-top {
        width: calc(var(--width) * 0.9);
        height: calc(var(--height) * 0.05);
        background: var(--cartridge-color);
        border-radius: var(--border-round) var(--border-round) 0 0;
        box-shadow: 0 -2px 0px #aaa;
      }

      .cartridge-body {
        width: var(--width);
        height: calc(var(--height) * 0.7);
        background: var(--cartridge-color);
        border-radius: 0 0 var(--border-round) var(--border-round);

        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        background-image: linear-gradient(transparent, #666);
      }

      .cartridge-label-container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .cartridge-end {
        width: 5%;
        height: 75%;
        background: #5d5d5d;
        border-top: 3px solid #444;
      }

      .cartridge-end:first-child {
        border-radius: 0 0 0 var(--border-round);
      }

      .cartridge-end:last-child {
        border-radius: 0 0 var(--border-round) 0;
      }

      .cartridge-gap {
        width: calc(var(--width) * 0.74);
        height: calc(var(--height) * 0.59);
        background: #666;
        background: linear-gradient(#666, #555);
        border-radius: var(--border-round);

        display: flex;
        justify-content: center;
        align-items: center;

        border-top: 2px solid #444;
        border-bottom: 2px solid #aaa;
      }

      .arrow-down {
        border-top: 30px solid #555;
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        border-radius: 10px;
        margin: 10px 0 14px 0;
        filter:
          drop-shadow(0 1px 0 #999)
          drop-shadow(0 -1px 0 #444);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
    <div class="container">
      <div class="cartridge-top"></div>
      <gameboy-cartridge-header></gameboy-cartridge-header>
      <div class="cartridge-body">
        <div class="cartridge-end"></div>
        <div class="cartridge-label-container">
          <div class="cartridge-gap">
            <gameboy-cartridge-label></gameboy-cartridge-label>
          </div>
          <div class="arrow-down"></div>
        </div>
        <div class="cartridge-end"></div>
      </div>
    </div>`}}customElements.define("gameboy-cartridge",n);
