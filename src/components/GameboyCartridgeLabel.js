import "./ManzDev.js";
import "./GameLinkSeal.js";
import "./OriginalSeal.js";

class GameboyCartridgeLabel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${GameboyCartridgeLabel.styles}</style>
    <div class="label">
      <div class="title">MANZ.DEV</div>
      <div class="slogan">SWITCH TO TWITCH!</div>
      <manz-dev></manz-dev>
      <game-link-seal></game-link-seal>
      <original-seal></original-seal>
    </div>`;
  }
}

customElements.define("gameboy-cartridge-label", GameboyCartridgeLabel);
