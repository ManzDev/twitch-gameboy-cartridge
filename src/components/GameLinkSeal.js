import Avocado from "../assets/avocado.min.svg?raw";

class GameLinkSeal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${GameLinkSeal.styles}</style>
    <div class="container">
      <div class="text">ORIGINAL</div>
      <div class="square">${Avocado}</div>
      <div class="bold-text">AVOCADO</div>
      <div class="small text">DEVELOPERS</div>
    </div>`;
  }
}

customElements.define("game-link-seal", GameLinkSeal);
