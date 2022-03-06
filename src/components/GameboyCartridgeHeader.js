class GameboyCartridgeHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${GameboyCartridgeHeader.styles}</style>
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
    </header>`;
  }
}

customElements.define("gameboy-cartridge-header", GameboyCartridgeHeader);
