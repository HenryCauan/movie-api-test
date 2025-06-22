# 🎬 Movie API Test

Este projeto é um app simples para buscar informações de filmes usando a [TMDb API](https://developers.themoviedb.org/3) — desenvolvido como desafio de aprendizado.

![Image](https://github.com/user-attachments/assets/944a1641-a59d-437f-a9a6-5a04d313556f)

## 🚀 Tecnologias utilizadas

- [Next.js](https://nextjs.org/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [JavaScript (fetch API)](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [TMDb API](https://developers.themoviedb.org/3)

---

## 📦 Funcionalidades

✅ Buscar filmes pelo nome  
✅ Exibir resultados com título, sinopse, nota média e poster  
✅ Design simples e responsivo usando Tailwind  
✅ Integração com a API TMDb usando chave pessoal  

---

## 🔧 Como rodar o projeto

1️⃣ Clone o repositório:
```bash
git clone https://github.com/HenryCauan/movie-api-test.git
````

2️⃣ Instale as dependências:

```bash
npm install
```

3️⃣ Configure a variável de ambiente:
Crie um arquivo `.env.local` na raiz do projeto com:

```
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
```

4️⃣ Rode o projeto:

```bash
npm run dev
```

Acesse no navegador: [http://localhost:3000](http://localhost:3000)

---

## 🛡 Aviso

🔑 **Não exponha sua chave da API TMDb em repositórios públicos!**
Use variáveis de ambiente para proteger suas credenciais.

---

## ✨ Melhorias futuras

* Filtro por gênero
* Paginação de resultados
* Página de detalhes de cada filme
* Melhor UX/UI com animações

