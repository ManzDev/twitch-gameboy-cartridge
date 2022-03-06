import "./GameboyCartridgeHeader.js";
import "./GameboyCartridgeLabel.js";

class GameboyCartridge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${GameboyCartridge.styles}</style>
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
    </div>`;
  }
}

customElements.define("gameboy-cartridge", GameboyCartridge);
