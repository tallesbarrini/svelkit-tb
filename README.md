# My Dev Blog

This repo is very similar to my live production blog found here: [My Blog](https://josean.com)

## Running this locally

Clone the repo first and navigate to the dev-blog directory.

Make sure you nave node (tested with v18.17.1) and npm (tested with 10.0.0) installed.

```bash
# Install the dependencies
npm install
```

## Developing

```bash
# Start the dev server
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# Routes
/
/List of posts
/posts
/cursos

posts/
├── psychoanalysis/
│   ├── dystopias-psychoanalysis/
│   │   ├── Arkangel.md
│   │   ├── Nosedive.md
│   └── figures-psychoanalysis/
│       ├── Schreber.md
├── cinema/
│   ├── writing/
│   │   ├── Scene1.md



src
└── routes
    └── posts
        ├── [category]
        │   ├── [subcategory]
        │   │   ├── [slug]
        │   │   │   ├── +page.svelte
        │   │   │   └── +page.ts


routes
├── posts
│   ├── [category]
│   │   ├── [subcategory]
│   │   │   ├── +page.svelte  # Renders list of posts in subcategory or a post
│   │   │   ├── +page.ts
│   │   ├── +page.svelte      # Renders list of posts in category
│   │   ├── +page.ts
│   ├── +layout.ts            # Shared logic for all `posts` routes



src/
├── lib/                   # Shared utilities, components, etc.
│   └── components/
│       └── Post.svelte    # Component for rendering a single post
│       └── PostList.svelte # Component for rendering a list of posts
├── posts/                 # Markdown files (content)
│   ├── cinema/
│   │   └── movie-review.md
│   ├── dev/
│   │   ├── svelte-guide.md
│   │   └── javascript.md
│   └── psychoanalysis/
│       ├── dystopias-psychoanalysis/
│       │   ├── Arkangel.md
│       │   ├── Nosedive.md
│       │   └── San_Junipero.md
│       └── intro.md
├── routes/                # SvelteKit routes
│   ├── api/
│   │   └── posts/
│   │       └── +server.ts # API endpoint for fetching posts
│   ├── posts/
│   │   ├── [...path]/     # Dynamic nested route for posts and categories
│   │   │   ├── +page.svelte  # Render single post or post list
│   │   │   ├── +page.ts      # Handles logic for dynamic nested routing
│   │   ├── +layout.ts    # Shared layout logic for all `/posts` routes
│   │   ├── +layout.svelte # Shared layout component for `/posts`
│   ├── +layout.svelte    # Main layout for the entire app
│   └── +page.svelte      # Homepage
├── styles/                # Global styles
│   └── tailwind.css
├── types/                 # TypeScript types
│   └── index.ts
└── app.html               # SvelteKit app entry point


Metadata
---
title: "How I Setup Neovim On My Mac To Make it AMAZING in 2024"
imgUrl: "/post-images/how-to-setup-neovim-2024/thumbnail.jpg"
youtubeId: "6pAG3BHurdM"
publishedAt: "2024-04-03"
summary: "Use this guide along with my youtube video to setup Neovim & make it amazing in 2024"
---


─ posts
│   │   ├── 7-amazing-cli-tools.md
│   │   ├── Cinema
│   │   │   ├── Cinema.md
│   │   │   ├── Cinema_Proposal_Feature-Length.md
│   │   │   ├── images
│   │   │   │   ├── Cinema
│   │   │   │   ├── Cinema_Proposal_Feature-Length
│   │   │   │   ├── Introdução_Principais_Conceitos_Lacanianos
│   │   │   │   ├── Kleins_bottle_Fantasy
│   │   │   │   └── Writing
│   │   │   ├── Introdução_Principais_Conceitos_Lacanianos.md
│   │   │   ├── Kleins_bottle_Fantasy.md
│   │   │   └── Writing.md
│   │   ├── Dev
│   │   │   ├── how-to-setup-neovim-2024.md
│   │   │   ├── how-to-use-code-with-qmk.md
│   │   │   ├── neovim-linting-and-formatting.md
│   │   │   ├── nvim-treesitter-and-textobjects.md
│   │   │   ├── sketchybar-setup.md
│   │   │   ├── terminal-setup.md
│   │   │   ├── tmux-setup.md
│   │   │   ├── vim-essentials-cheatsheet.md
│   │   │   └── yabai-setup.md
│   │   ├── how-to-setup-alacritty-terminal.md
│   │   ├── Psychoanalysis
│   │   │   ├── Concepts
│   │   │   │   ├── Clinic-Affiliation.md
│   │   │   │   ├── Clinic.md
│   │   │   │   ├── ConceitosLacanianos.md
│   │   │   │   ├── Fantasy.md
│   │   │   │   ├── Language-Studies.md
│   │   │   │   ├── ParentalidadesLGBTQAPI.md
│   │   │   │   ├── Psychiatrists-Social-Workers-Education.md
│   │   │   │   ├── README.md
│   │   │   │   └── Semiotics.md
│   │   │   ├── Dystopias-Psychoanalysis
│   │   │   │   ├── Arkangel.md
│   │   │   │   ├── Be_Right_Back.md
│   │   │   │   ├── Black_Museum.md
│   │   │   │   ├── Dystopias-Psychoanalysis.md
│   │   │   │   ├── Hang_the_DJ.md
│   │   │   │   ├── Hated_in_the_Nation.md
│   │   │   │   ├── images
│   │   │   │   ├── Intimidade_Amor_e_o_digital.md
│   │   │   │   ├── Nosedive.md
│   │   │   │   ├── Playtest.md
│   │   │   │   ├── San_Junipero.md
│   │   │   │   ├── The_Entire_History_of_You.md
│   │   │   │   └── White_Christmas.md
│   │   │   ├── Enlightment
│   │   │   │   ├── Adorno__Horkheimer__A_dialética_do_Esclarecimento.md
│   │   │   │   ├── A_fenomenologia_do_espírito_.md
│   │   │   │   ├── Anti-Édipo_esquizofrenia_e_Capitalismo.md
│   │   │   │   ├── Dialética_do_Esclarecimento.md
│   │   │   │   ├── Enlightment.md
│   │   │   │   ├── Esclarecimento_em_Sade.md
│   │   │   │   ├── Esclarecimento_na_Filosofia.md
│   │   │   │   ├── images
│   │   │   │   ├── Máquinas_desejantes_esquizofrenia_e_Psicanálise.md
│   │   │   │   └── Saber_Conhecimento_Filosofia.md
│   │   │   ├── Escola
│   │   │   │   ├── Afiliados_-_Clínica.md
│   │   │   │   ├── Apresentação_-_Escola_de_Cinema_Arte_e_Psicanálise_-_Talles_Barrini.md
│   │   │   │   ├── Clínica.md
│   │   │   │   ├── Escola.md
│   │   │   │   ├── Estudo_de_Línguas.md
│   │   │   │   ├── Grupos_de_Estudos.md
│   │   │   │   ├── Grupos_de_Pesquisa.md
│   │   │   │   ├── images
│   │   │   │   ├── Percurso_para_Psicanalistas.md
│   │   │   │   └── Psiquiatras_-_Afiliados_-_Clínica.md
│   │   │   ├── Figures-Psychoanalysis
│   │   │   │   ├── Esclarecimento_em_Melanie_Klein.md
│   │   │   │   ├── Esclarecimento_em_Sade.md
│   │   │   │   ├── Esclarecimento_nas_Neuroses.md
│   │   │   │   ├── Esquemas_Derivados.md
│   │   │   │   ├── Figures-Psychoanalysis.md
│   │   │   │   ├── images
│   │   │   │   └── Introdução__Figuras_em_Análise.md
│   │   │   ├── Not-All
│   │   │   │   ├── A_psicanálise_na_era_Trans.md
│   │   │   │   ├── Esclarecimento_em_Schreber.md
│   │   │   │   ├── Estruturas_Suplência_Consistência.md
│   │   │   │   ├── Gender_Theory_Undoing_Gender-pt.md
│   │   │   │   ├── images
│   │   │   │   ├── Introdução.md
│   │   │   │   ├── Not-All.md
│   │   │   │   ├── Os_nós_do_amor_e_do_gozo.md
│   │   │   │   └── Transexualidade_e_Sexuação.md
│   │   │   ├── Psychosis
│   │   │   │   ├── De_uma_questão_preliminar_a_todo_tratamento_possível_da_Psicose.md
│   │   │   │   ├── Esclarecimento_em_Schreber.md
│   │   │   │   ├── Estruturas_Clínicas_.md
│   │   │   │   ├── Estruturas_Suplência_Consistência.md
│   │   │   │   ├── images
│   │   │   │   ├── Psychosis.md
│   │   │   │   └── Teoria_e_clínica_da_Psicose.md
│   │   │   └── Refs
│   │   │       ├── Antônio_Quinet_Publicações.md
│   │   │       ├── Lacan_References.md
│   │   │       ├── Psicanálise_Referências_Bibliográficas.md
│   │   │       ├── Psicanálise_Table_of_Contents.md
│   │   │       ├── Refs-Metapiscologia.md
│   │   │       ├── Vocabulário_Europeu_de_Filosofia.md
│   │   │       └── World_Culture_Cinema_Literature_Psychoanalysis.md
│   │   ├── Research.md
│   │   ├── Road-to-Psychoanalysts.md
│   │   ├── School-of-Cinema-Art-Psychoanalysis.md
│   │   └── Study-Groups.md

/posts/psychoanalysis/dystopias-psychoanalysis/Arkangel: post
/posts/psychoanalysis/dystopias-psychoanalysis: list of posts

There's just two pages layouts: Post, list of posts
If the route has a subcategory: render a list of the posts inside that category: there's a folder
If not, it's a post page => there's Arkangel.md

Routes
http://localhost:3000/ ok
http://localhost:3000/posts/Cinema/
http://localhost:3000/posts/Cinema/Writing
http://localhost:3000/posts/Psychoanalysis/
http://localhost:3000/posts/Psychoanalysis/Concepts/ConceitosLacanianos
http://localhost:3000/posts/7-amazing-cli-tools

http://localhost:3000/posts/Cinema
http://localhost:3000/posts/Psychoanalysis/Concepts

http://localhost:3000/posts/Dev 
http://localhost:3000/posts/Dev/terminal-setup
http://localhost:3000/posts/Dev/React/7-amazing-cli-tools


Homepage: http://localhost:3000/
Category: http://localhost:3000/posts/Psychoanalysis/
Subcategory: http://localhost:3000/posts/Psychoanalysis/Dystopias-Psychoanalysis
Post: http://localhost:3000/posts/Psychoanalysis/Dystopias-Psychoanalysis/Arkangel
Deeper Nested Post: http://localhost:3000/posts/Psychoanalysis/Dystopias-Psychoanalysis/Arkangel/Part1

src/
└── routes/
    └── posts/
        ├── [...path]/
        │   ├── +page.svelte  # Render single post or post list
        │   ├── +page.ts      # Handles logic for dynamic nested routing
        ├── +layout.ts        # Shared logic for all `posts` routes
        ├── +layout.svelte    # Shared layout component for `/posts`
    ├── +layout.svelte        # Main layout for the entire app
    └── +page.svelte          # Homepage


PageList
 metadata: {
    title: string;
    imgUrl: string;
    youtubeId?: string;
    publishedAt: string;
    summary: string;
  };


Objeto 
type
posts [] ou apenas post = MarkdownPost.metadata, MarkdownPost.default
// metadata: PageListMetadata