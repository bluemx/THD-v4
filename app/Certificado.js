class Certificado extends HTMLElement {
    constructor() {
      super();
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
            @import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css";
            @import "app/app.css";
        </style>
        <script src="app/app.js"></script>
        <slot></slot>
      `;
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    connectedCallback() {
      const image = this.getAttribute('image');
      const name = this.getAttribute('name');
      const value = this.getAttribute('value');
      const desc = this.getAttribute('desc');
  
      const card = document.createElement('div');
      card.classList.add('card', 'text-dark')
      
   
      
      card.innerHTML = `
      <div class="state1" >
      <img src="${image}" alt="${name}" style="width:100%; max-width: 80px;">
      <div class="card-body">
        <div class="text-center">
          <div>
            <div class="h6">${name}</div>
            <div class="h5 fw-bold">${value}</div>
          </div>
          <div>
            <button id="opencard" class="button btn-light ml-auto"><box-icon name='right-arrow-alt'></box-icon></button>
          </div>
        </div>
      </div>
      </div>
    <div class="state2 d-none">

        <div class="d-flex justify-content-end"><button id="closecard" class="button btn-light m-2"><box-icon name='x'></box-icon></button></div>
        <div class="card-body">
        <div class="text-center">
            <div class="h5">${name}</div>
            <div class="h3 fw-bold">${value}</div>
            </div>
        <div class=" text-center" style="font-size: 0.8rem;"> 
            ${desc}
            </div>
            <div class="p-1">
                <button id="accept" data="${name}" class="button btn-light mx-auto btn-lg">Elegir certificado</button>
            </div>
        </div>
    </div> 
  `    
    card.querySelector('#opencard').addEventListener('click', () => {
        this.opencard();
    });
    card.querySelector('#closecard').addEventListener('click', () => {
        this.opencard();
    });
    
    card.querySelector('#accept').addEventListener('click', (ev) => {
        const certificado = ev.target.getAttribute('data')
        storelocal('Certificate', certificado)
        window.location = 'activity.html'
    });

      this.shadowRoot.querySelector('slot').appendChild(card);
    }
    opencard() {
        this.shadowRoot.querySelector('.card .state1').classList.toggle('d-none')
        this.shadowRoot.querySelector('.card .state2').classList.toggle('d-none')
      }
  }
  
  customElements.define('component-certificado', Certificado);

  
 