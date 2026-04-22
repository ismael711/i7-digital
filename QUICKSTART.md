# 🚀 Guia Rápido - I7 Digital

## Início Rápido em 3 Passos

### 1️⃣ Clone o Projeto
```bash
git clone https://github.com/seu-usuario/i7-digital.git
cd i7-digital
```

### 2️⃣ Inicie o Servidor
```bash
npm start
```

### 3️⃣ Acesse no Navegador
```
http://localhost:3000
```

---

## 📝 Personalizações Rápidas

### Alterar Cores da Marca

Edite o arquivo `css/variables.css`:

```css
:root {
  --color-primary: #5B21B6;      /* Roxo principal */
  --color-secondary: #F59E0B;    /* Laranja secundário */
}
```

### Alterar Conteúdo

Edite o arquivo `index.html` e modifique:
- Textos das seções
- Links de redes sociais
- Informações de contato
- Depoimentos

### Adicionar Imagens

1. Coloque suas imagens em `assets/images/`
2. Atualize os caminhos no HTML
3. Use `data-src` para lazy loading:

```html
<img data-src="./assets/images/sua-imagem.jpg" alt="Descrição">
```

---

## 🔧 Configurações do Servidor

### Mudar Porta

Edite `backend/server.js` ou crie `.env`:

```env
PORT=8080
HOST=localhost
```

### Configurar Email

Para enviar emails reais, integre um serviço como:
- SendGrid
- Mailgun
- AWS SES
- Nodemailer

Edite a função `handleContactForm` em `backend/server.js`.

---

## 📱 Testar Responsividade

### Chrome DevTools
1. Pressione `F12`
2. Clique no ícone de dispositivo móvel
3. Teste diferentes resoluções

### Breakpoints do Projeto
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## 🎨 Adicionar Nova Seção

1. **HTML** - Adicione em `index.html`:
```html
<section class="nova-secao section" id="nova-secao">
  <div class="container">
    <!-- Seu conteúdo aqui -->
  </div>
</section>
```

2. **CSS** - Adicione em `css/main.css`:
```css
.nova-secao {
  /* Seus estilos aqui */
}
```

3. **Menu** - Adicione link no menu:
```html
<li class="nav__item">
  <a href="#nova-secao" class="nav__link">Nova Seção</a>
</li>
```

---

## 🐛 Solução de Problemas

### Porta já em uso
```bash
# Mude a porta no arquivo ou use:
PORT=8080 npm start
```

### Módulos não encontrados
```bash
# Certifique-se de estar no diretório correto
cd i7-digital
npm start
```

### Imagens não carregam
- Verifique o caminho das imagens
- Certifique-se de que estão em `assets/images/`
- Use caminhos relativos: `./assets/images/`

---

## 📚 Recursos Úteis

- [Documentação Completa](README.md)
- [CSS Variables](css/variables.css)
- [Estrutura do Projeto](README.md#estrutura-do-projeto)

---

## 💡 Dicas

✅ Use o Dark Mode para testar ambos os temas
✅ Teste em diferentes navegadores
✅ Valide o HTML: [W3C Validator](https://validator.w3.org/)
✅ Teste performance: [PageSpeed Insights](https://pagespeed.web.dev/)
✅ Verifique acessibilidade: [WAVE](https://wave.webaim.org/)

---

## 🆘 Precisa de Ajuda?

- 📧 Email: contato@i7digital.com.br
- 💬 Issues: [GitHub Issues](https://github.com/seu-usuario/i7-digital/issues)
- 📖 Docs: [README.md](README.md)

---

**Bom desenvolvimento! 🚀**