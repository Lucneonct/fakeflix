# Fakeflix - A fake netflix copy

**_<p style="text-align: center;">![](https://github.com/Lucneonct/fakeflix/blob/master/src/assets/logo.png?raw=true)</p>_**


Hello! Nice to see you here, let me show you how my netflix version works

Keep reading

## Demo Here

[Online Demo](https://fakeflix-psi.vercel.app/)

## How to use

First of all, you must register on the following pages:

[OMDBApi](https://www.omdbapi.com/apikey.aspx) - Required for films key  
[SupaBase](https://supabase.com/dashboard/sign-up) - Required for authentication

### Run the app

1. Install the deps

```bash
yarn install
```

2. Add the environment variables on `.env` file

```bash
SUPABASE_URL=<SUPABASE_URL>
SUPABASE_KEY=<SUPABASE_KEY>
OMDB_KEY=<OMDB_API_KEY>
```
#### SUPABASE
Get params [HERE](https://supabase.com/dashboard/project/ftydkmhejnybwgfrfayf/settings/api)  
`<SUPABASE_URL>` - Project URL  
`<SUPABASE_KEY>` - `anon` `public`  
#### OMDB
`<OMDB_KEY>`- OMDB Key from email verification

3. Run the app
```bash
yarn run dev
```

### Stuff used

- NuxtJS
- Nuxt Icon
- Sass
- Vuetify
- kevinmarrec/nuxt-pwa
- Vite Plugin Vuetify
- Supabase
- Vitest
- Lodash
- Pinia
