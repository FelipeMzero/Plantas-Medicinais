// ==========================================================================
// HERBARIUM ORIXIMINÁ - DIRETÓRIO DE ERVEIROS TRADICIONAIS (main3.js)
// Dados Demonstrativos Fictícios de Comerciantes e Pontos de Oriximiná-PA
// Autores: Felipe Monteiro & Erison Lins
// ==========================================================================

const vendors = [
  {
    id: 1,
    name: "Fulano das Ervas",
    type: "Erveiro Tradicional",
    phone: "(93) 99999-1111",
    address: "Rua Tal, nº 100 - Bairro Ali",
    plantTypes: ["Andiroba", "Copaíba", "Unha de Gato", "Uxi Amarelo", "Breuzinho"],
    notes: "Ponto tradicional com óleos puros, cascas desidratadas e garrafadas artesanais."
  },
  {
    id: 2,
    name: "Ciclano dos Remédios Naturais",
    type: "Produtor Extrativista",
    phone: "(93) 98888-2222",
    address: "Avenida Tal e Tal, Box 15 - Bairro Aqui",
    plantTypes: ["Capim Santo", "Guaco", "Boldo", "Arruda", "Babosa"],
    notes: "Cultivo próprio agroecológico de ervas frescas e mudas nativas no Bairro Aqui."
  },
  {
    id: 3,
    name: "Beltrano das Plantas",
    type: "Comunidade Extrativista",
    phone: "(93) 97777-3333",
    address: "Travessa Tal, s/n - Bairro Acolá",
    plantTypes: ["Açaí", "Cupuaçu", "Jatobá", "Pau d'Arco", "Murici"],
    notes: "Coleta sustentável ribeirinha e polpas bioativas in natura."
  },
  {
    id: 4,
    name: "Fulano de Tal",
    type: "Ervanaria Popular",
    phone: "(93) 96666-4444",
    address: "Esquina da Rua Tal com a Rua Qual - Bairro Logo Ali",
    plantTypes: ["Cipó Mil Homens", "Catuaba", "Jaborandi", "Erva de São João", "Pata de Vaca"],
    notes: "Ervas secas e raízes amazônicas com conhecimento repassado por gerações."
  },
  {
    id: 5,
    name: "Ciclano da Silva",
    type: "Fitoterapia Familiar",
    phone: "(93) 95555-5555",
    address: "Alameda Tal, nº 500 - Bairro Logo Acolá",
    plantTypes: ["Camomila", "Maracujá", "Erva Mate", "Anamu", "Murta"],
    notes: "Folhas secas para chás medicinais e orientações sobre hortas caseiras."
  },
  {
    id: 6,
    name: "Beltrano dos Santos",
    type: "Mateiro e Coletor",
    phone: "(93) 94444-6666",
    address: "Estrada Tal, km 2 - Bairro Por Aí",
    plantTypes: ["Andiroba", "Breuzinho", "Guaco", "Pau d'Arco", "Boldo"],
    notes: "Resinas aromáticas de breu branco e óleos vegetais prensados a frio."
  }
];

// Ícones SVG reutilizáveis
const ICONS = {
  location: `<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>`,
  phone: `<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  leaf: `<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
  whatsapp: `<svg class="svg-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/></svg>`
};

function renderVendors(filterText = "") {
  const container = document.getElementById("vendors-grid");
  const countEl = document.getElementById("vendors-count");
  if (!container) return;

  const query = filterText.toLowerCase().trim();

  const filtered = vendors.filter(v => {
    return (
      !query ||
      v.name.toLowerCase().includes(query) ||
      v.address.toLowerCase().includes(query) ||
      v.type.toLowerCase().includes(query) ||
      v.plantTypes.some(p => p.toLowerCase().includes(query))
    );
  });

  if (countEl) {
    countEl.textContent = `Exibindo ${filtered.length} de ${vendors.length} comerciantes cadastrados`;
  }

  container.innerHTML = "";

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: #fff; border-radius: 16px; border: 1px solid var(--surface-border); box-shadow: var(--shadow-sm);">
        <p style="font-size: 16px; color: var(--text-muted);">Nenhum comerciante ou erva correspondente foi encontrado.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(vendor => {
    const card = document.createElement("div");
    card.className = "vendor-card-custom";

    const cleanPhone = vendor.phone.replace(/\D/g, "");
    const waLink = `https://wa.me/55${cleanPhone}?text=Olá,%20vi%20seu%20contato%20no%20portal%20Herbarium%20Oriximiná!`;

    const tagsHtml = vendor.plantTypes
      .map(tag => `<span class="vendor-tag-item">${tag}</span>`)
      .join("");

    card.innerHTML = `
      <span class="vendor-badge-custom">${vendor.type}</span>
      <h3>${vendor.name}</h3>
      <p class="vendor-info-custom">
        ${ICONS.location}
        <span><strong>Localização:</strong> ${vendor.address}</span>
      </p>
      <p class="vendor-info-custom">
        ${ICONS.phone}
        <span><strong>Telefone:</strong> ${vendor.phone}</span>
      </p>
      <p class="vendor-info-custom" style="margin-top: 6px;">
        ${ICONS.leaf}
        <span><strong>Plantas e Especialidades:</strong></span>
      </p>
      <div class="vendor-tags-custom">${tagsHtml}</div>
      <p class="vendor-info-custom" style="font-style: italic; color: #64748b; font-size: 13px; margin-bottom: 16px;">"${vendor.notes}"</p>
      <div style="margin-top: auto;">
        <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-wa-custom">
          ${ICONS.whatsapp}
          Conversar no WhatsApp
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderVendors();

  const searchInput = document.getElementById("vendor-search");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      renderVendors(e.target.value);
    });
  }
});
