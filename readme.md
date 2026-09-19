# 🧬 Portfólio — Gabriella Fernandes Torresani

Portfólio de Gabriella Torresani, desenvolvido por Igor Grave Teixeira em HTML + Tailwind CSS + JS puro.

🔗 **Online:** https://gabriella-portfolio-h1pn.vercel.app

---

## 📁 Estrutura

```
index.html            → página única (markup com classes Tailwind)
src/input.css         → fonte do CSS (diretivas Tailwind + componentes)
assets/style.css      → CSS compilado e minificado (commitado; é o que o site carrega)
tailwind.config.js    → tema: paleta, fontes, animações
package.json          → scripts de build
```

---

## ✨ Seções

| # | Seção | Conteúdo |
|---|-------|----------|
| — | **Hero** | Nome, headline, CTAs, painel com marcos (2025 · 2026 · 1+ ano · 2028) |
| 01 | **Sobre** | Apresentação, áreas de interesse e contato rápido (e-mail, telefone, LinkedIn) |
| 02 | **Experiência** | Linha do tempo — Auxiliar de Produção Laboratorial (2026–atual) e Jovem Aprendiz / CIEE (2025–2026), Lab-to-Lab Pardini / Grupo Fleury |
| 03 | **Formação** | Biomedicina — Centro Universitário FAM (jun/2026–nov/2028) · Anhembi Morumbi (fev/2025–jun/2026) · Cursos: Fundação Bradesco, CIEE, DNA Day UNIFESP |
| 04 | **Competências** | Competências técnicas por área, habilidades comportamentais e idiomas |
| 05 | **Contato** | Links diretos para e-mail, telefone e LinkedIn |

---

## 🎨 Design

- **Paleta:** Teal profundo `#0d4f4a` + Creme `#f5f0e8` + Areia `#c9b89a`
- **Tipografia:** [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) (display) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (corpo)
- **Estética:** Editorial científico
- **Interações:** scroll reveal, nav com seção ativa, menu mobile, marquee de palavras-chave, barras de idioma animadas

---

## 🛠️ Desenvolvimento

O CSS compilado já está no repositório, então basta abrir `index.html` no navegador.

Para alterar estilos (editar `src/input.css` ou `tailwind.config.js`, ou usar novas classes no HTML):

```bash
npm install
npm run build     # gera assets/style.css
npm run watch     # recompila a cada alteração
```

> **Requisito:** conexão com internet para carregar as fontes do Google Fonts.
