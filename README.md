# 🚀 I7 Digital - Website Oficial

Site moderno, responsivo e performático da **I7 Digital**, empresa especializada em Gestão de Tráfego Pago, Tagueamento, Dados e Insights para pequenas empresas.

![I7 Digital](https://img.shields.io/badge/I7-Digital-5B21B6?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Uso](#instalação-e-uso)
- [Arquitetura](#arquitetura)
- [Performance e SEO](#performance-e-seo)
- [Boas Práticas](#boas-práticas)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

---

## 🎯 Sobre o Projeto

Este é o site institucional da **I7 Digital**, desenvolvido com foco em:

- ✅ **Performance**: Carregamento rápido e otimizado
- ✅ **Responsividade**: Funciona perfeitamente em todos os dispositivos
- ✅ **Acessibilidade**: Seguindo as melhores práticas WCAG
- ✅ **SEO**: Otimizado para mecanismos de busca
- ✅ **UX/UI**: Design moderno e intuitivo
- ✅ **Código Limpo**: Organizado e bem documentado

---

## ⚡ Funcionalidades

### Front-End
- 🎨 **Design Moderno**: Interface inspirada em SaaS com gradientes da marca (roxo #5B21B6 e laranja #F59E0B)
- 📱 **Mobile First**: Totalmente responsivo para todos os dispositivos
- 🌓 **Dark Mode**: Alternância entre tema claro e escuro
- ✨ **Animações Suaves**: Scroll animations com Intersection Observer
- 🖼️ **Lazy Loading**: Carregamento otimizado de imagens
- 📝 **Formulário Inteligente**: Validação em tempo real
- 🎭 **Slider de Depoimentos**: Carrossel automático com controles
- 🔄 **Menu Responsivo**: Navegação mobile com animações

### Back-End
- 🖥️ **Servidor Node.js**: Servidor HTTP puro (sem frameworks pesados)
- 📧 **API de Contato**: Endpoint para envio de formulários
- 📬 **Newsletter**: Sistema de inscrição de emails
- 💾 **Persistência**: Salvamento de dados em JSON
- 🔒 **CORS**: Configurado para segurança
- 📊 **Logs**: Sistema de logging para debug

---

## 🛠️ Tecnologias Utilizadas

### Front-End
- **HTML5**: Semântico e acessível
- **CSS3**: 
  - Custom Properties (variáveis CSS)
  - Flexbox e Grid Layout
  - Media Queries (Mobile First)
  - Animações e Transições
- **JavaScript ES6+**:
  - Modules
  - Arrow Functions
  - Destructuring
  - Async/Await
  - Intersection Observer API

### Back-End
- **Node.js**: Runtime JavaScript
- **HTTP Module**: Servidor nativo
- **File System**: Manipulação de arquivos

### Ferramentas
- **Git**: Controle de versão
- **npm**: Gerenciador de pacotes

---

## 📁 Estrutura do Projeto

```
i7-digital/
├── assets/
│   ├── icons/          # Ícones e favicons
│   └── images/         # Imagens do site
├── backend/
│   ├── data/           # Dados salvos (gitignored)
│   └── server.js       # Servidor Node.js
├── css/
│   ├── variables.css   # Variáveis CSS (Design System)
│   ├── reset.css       # Reset e base styles
│   ├── main.css        # Estilos principais
│   ├── components.css  # Componentes reutilizáveis
│   └── responsive.css  # Media queries
├── js/
│   ├── modules/
│   │   ├── navigation.js         # Menu e navegação
│   │   ├── theme.js              # Dark mode
│   │   ├── testimonials.js       # Slider de depoimentos
│   │   ├── contact-form.js       # Formulário de contato
│   │   ├── scroll-animations.js  # Animações de scroll
│   │   └── lazy-loading.js       # Lazy loading de imagens
│   └── main.js         # Arquivo principal
├── .gitignore          # Arquivos ignorados pelo Git
├── index.html          # Página principal
├── manifest.json       # PWA manifest
├── package.json        # Dependências do projeto
├── robots.txt          # SEO - Robots
└── README.md           # Documentação
```

---

## 🚀 Instalação e Uso

### Pré-requisitos

- **Node.js** versão 14 ou superior
- **npm** (vem com o Node.js)

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/i7-digital.git
cd i7-digital
```

2. **Instale as dependências** (opcional, não há dependências externas)
```bash
npm install
```

3. **Inicie o servidor**
```bash
npm start
```

4. **Acesse no navegador**
```
http://localhost:3000
```

### Comandos Disponíveis

```bash
# Iniciar servidor de produção
npm start

# Iniciar servidor de desenvolvimento
npm run dev
```

### Variáveis de Ambiente (Opcional)

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
HOST=localhost
NODE_ENV=development
```

---

## 🏗️ Arquitetura

### Design System

O projeto utiliza um **Design System** completo com variáveis CSS:

- **Cores**: Paleta baseada na identidade visual (roxo e laranja)
- **Tipografia**: Inter (corpo) e Poppins (títulos)
- **Espaçamento**: Sistema de 8px
- **Breakpoints**: Mobile First (640px, 768px, 1024px, 1280px, 1536px)
- **Sombras**: 5 níveis de elevação
- **Bordas**: Raios consistentes

### Padrões de Código

#### CSS
- **BEM Methodology**: Nomenclatura de classes
- **Mobile First**: Media queries progressivas
- **Custom Properties**: Variáveis CSS para temas
- **Modular**: Arquivos separados por responsabilidade

#### JavaScript
- **ES6 Modules**: Código modular e reutilizável
- **Separation of Concerns**: Cada módulo tem uma responsabilidade
- **Event Delegation**: Otimização de event listeners
- **Debounce/Throttle**: Performance em eventos de scroll

#### HTML
- **Semântico**: Tags apropriadas (header, main, section, article, footer)
- **Acessível**: ARIA labels, alt texts, roles
- **SEO Friendly**: Meta tags, Open Graph, Schema.org

---

## 📊 Performance e SEO

### Otimizações Implementadas

#### Performance
- ✅ **Lazy Loading**: Imagens carregadas sob demanda
- ✅ **CSS Minificado**: Estilos otimizados
- ✅ **JavaScript Modular**: Code splitting
- ✅ **Preconnect**: Fonts carregadas antecipadamente
- ✅ **Debounce**: Otimização de eventos
- ✅ **Intersection Observer**: Animações performáticas

#### SEO
- ✅ **Meta Tags**: Title, description, keywords
- ✅ **Open Graph**: Compartilhamento em redes sociais
- ✅ **Robots.txt**: Instruções para crawlers
- ✅ **Sitemap**: Mapa do site (a implementar)
- ✅ **Semantic HTML**: Estrutura semântica
- ✅ **Alt Texts**: Descrições de imagens
- ✅ **Structured Data**: Schema.org (a implementar)

#### Acessibilidade
- ✅ **ARIA Labels**: Rótulos para screen readers
- ✅ **Keyboard Navigation**: Navegação por teclado
- ✅ **Focus Visible**: Indicadores de foco
- ✅ **Color Contrast**: Contraste adequado
- ✅ **Reduced Motion**: Respeita preferências do usuário

### Lighthouse Score (Objetivo)

- 🎯 **Performance**: 95+
- 🎯 **Accessibility**: 100
- 🎯 **Best Practices**: 100
- 🎯 **SEO**: 100

---

## 💡 Boas Práticas

### Código Limpo
- ✅ Comentários descritivos
- ✅ Nomes de variáveis claros
- ✅ Funções pequenas e focadas
- ✅ DRY (Don't Repeat Yourself)
- ✅ KISS (Keep It Simple, Stupid)

### Segurança
- ✅ Validação de formulários (client e server)
- ✅ Sanitização de inputs
- ✅ CORS configurado
- ✅ Sem dados sensíveis no código

### Manutenibilidade
- ✅ Código modular
- ✅ Separação de responsabilidades
- ✅ Documentação inline
- ✅ README completo

---

## 🎨 Paleta de Cores

### Cores Principais
- **Roxo Primário**: `#5B21B6` - Cor principal da marca
- **Laranja Secundário**: `#F59E0B` - Cor de destaque

### Cores de Suporte
- **Branco**: `#FFFFFF`
- **Preto**: `#000000`
- **Cinzas**: `#F9FAFB` até `#111827`

### Gradientes
```css
/* Gradiente da marca */
background: linear-gradient(135deg, #5B21B6 0%, #F59E0B 100%);
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👥 Autores

**I7 Digital**
- Website: [www.i7digital.com.br](https://www.i7digital.com.br)
- Email: contato@i7digital.com.br
- LinkedIn: [I7 Digital](https://www.linkedin.com/company/i7digital)

---

## 📞 Suporte

Para suporte, envie um email para contato@i7digital.com.br ou abra uma issue no GitHub.

---

## 🙏 Agradecimentos

- Google Fonts pela tipografia
- Comunidade open source
- Todos os contribuidores

---

<div align="center">

**Desenvolvido com ❤️ pela I7 Digital**

[Website](https://www.i7digital.com.br) • [LinkedIn](https://linkedin.com/company/i7digital) • [Instagram](https://instagram.com/i7digital)

</div>
