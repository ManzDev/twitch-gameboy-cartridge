class OriginalSeal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${OriginalSeal.styles}</style>
    <div class="starburst">
      <div class="content">
        <div class="circle">
          <data>Original</data>
          <data class="brand">Manz.dev</data>
          <data class="text">Seal of approval</data>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("original-seal", OriginalSeal);
