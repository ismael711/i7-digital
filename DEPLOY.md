# 🚀 Guia de Deploy - GitHub Pages

## ✅ Status Atual

- ✅ Repositório Git inicializado
- ✅ Commit inicial realizado
- ✅ GitHub Actions workflow configurado
- ⏳ Aguardando push para GitHub

---

## 📋 Próximos Passos

### 1️⃣ Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. Configure:
   - **Repository name**: `i7-digital`
   - **Description**: `Site oficial da I7 Digital - Gestão de Tráfego Pago`
   - **Visibility**: Public (para GitHub Pages gratuito)
   - ❌ **NÃO** marque "Initialize with README" (já temos um)
3. Clique em **"Create repository"**

### 2️⃣ Conectar Repositório Local ao GitHub

Copie e execute os comandos que o GitHub mostrar, ou use estes:

```bash
# Adicionar remote (substitua SEU-USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU-USUARIO/i7-digital.git

# Verificar se foi adicionado
git remote -v

# Fazer push para o GitHub
git push -u origin main
```

### 3️⃣ Configurar GitHub Pages

1. Vá para o repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione:
   - **Source**: GitHub Actions
5. Aguarde alguns minutos para o deploy

### 4️⃣ Verificar Deploy

1. Vá para a aba **Actions** no repositório
2. Você verá o workflow "Deploy to GitHub Pages" rodando
3. Aguarde até aparecer ✅ (verde)
4. Seu site estará disponível em:
   ```
   https://SEU-USUARIO.github.io/i7-digital/
   ```

---

## 🔄 Atualizações Futuras

Sempre que você fizer alterações:

```bash
# 1. Adicionar arquivos modificados
git add .

# 2. Fazer commit
git commit -m "Descrição das alterações"

# 3. Enviar para GitHub
git push

# O deploy será automático via GitHub Actions!
```

---

## 🛠️ Comandos Úteis

### Ver status do repositório
```bash
git status
```

### Ver histórico de commits
```bash
git log --oneline
```

### Criar nova branch
```bash
git checkout -b nome-da-branch
```

### Voltar para main
```bash
git checkout main
```

---

## 🌐 Domínio Personalizado (Opcional)

Para usar um domínio próprio (ex: www.i7digital.com.br):

1. Crie um arquivo `CNAME` na raiz do projeto:
   ```bash
   echo "www.i7digital.com.br" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. Configure DNS no seu provedor:
   - Tipo: `CNAME`
   - Nome: `www`
   - Valor: `SEU-USUARIO.github.io`

3. No GitHub Pages Settings, adicione o domínio personalizado

---

## ⚠️ Observações Importantes

### Backend no GitHub Pages

O GitHub Pages serve apenas arquivos estáticos (HTML, CSS, JS). O servidor Node.js (`backend/server.js`) **NÃO funcionará** no GitHub Pages.

**Opções para o backend:**

1. **Heroku** (gratuito com limitações)
2. **Vercel** (gratuito, recomendado)
3. **Railway** (gratuito com limitações)
4. **Render** (gratuito com limitações)
5. **AWS/Google Cloud/Azure** (pago)

### Formulário de Contato

Para o formulário funcionar no GitHub Pages, você precisa:

**Opção 1: Usar serviço de formulário**
- Formspree (https://formspree.io/)
- Netlify Forms
- Google Forms

**Opção 2: Deploy do backend separado**
- Deploy o backend em Vercel/Heroku
- Atualize a URL da API no `contact-form.js`

---

## 📊 Monitoramento

Após o deploy, monitore:

- ✅ **GitHub Actions**: Status dos deploys
- ✅ **Lighthouse**: Performance do site
- ✅ **Google Analytics**: Tráfego (adicione o código)
- ✅ **Google Search Console**: SEO

---

## 🆘 Problemas Comuns

### Erro: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/SEU-USUARIO/i7-digital.git
```

### Erro: "Permission denied"
Configure SSH ou use HTTPS com token:
```bash
git remote set-url origin https://TOKEN@github.com/SEU-USUARIO/i7-digital.git
```

### Deploy falhou
1. Verifique a aba Actions no GitHub
2. Leia os logs de erro
3. Corrija e faça novo push

---

## 📞 Suporte

- GitHub Docs: https://docs.github.com/pages
- GitHub Actions: https://docs.github.com/actions

---

**Boa sorte com o deploy! 🚀**