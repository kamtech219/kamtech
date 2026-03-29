# Maquettes Mobiles Annotées - Optimisation KAMTECH

Voici les wireframes ASCII et les annotations détaillant les optimisations effectuées sur l'expérience mobile du site KAMTECH.

## 1. Hero Section (Above-the-fold)

```text
+---------------------------------------+
|  [Logo]                 [CTA] [=]     | <- 1. Header repensé
+---------------------------------------+
|                                       |
|  [ Audit offert 7 j. ]                |
|                                       |
|  # PENDANT QUE VOUS DORMEZ,           | <- 2. Titre H1 ajusté
|  # VOS CLIENTS DEMANDENT...           |
|                                       |
|  * Le problème : ...                  | <- 3. Contenu concis
|  * La solution : ...                  |
|                                       |
|  [ Réserver mon audit (Pleine Larg)]  | <- 4. CTAs proéminents
|  [ Parler à un expert (Pleine Larg)]  |
|                                       |
|  * Garantie 30j  * Déploiement 48h    |
+---------------------------------------+
```

### Annotations (Hero Section)
* **1. Header Repensé** : Le menu hamburger `[=]` dispose désormais d'une cible tactile agrandie (`p-3 m-1`) avec des retours visuels clairs (effets de focus et active).
* **2. Titre H1 Ajusté** : Taille de police réduite sur mobile (`text-2xl sm:text-4xl`) et marges diminuées pour gagner de la place verticale.
* **3. Contenu Concis** : La première partie du sous-titre H2 ("Le problème : Vous perdez...") est masquée sur mobile (`hidden sm:block`) pour aller droit au but sur la solution.
* **4. CTAs Proéminents** : Les boutons d'action sont affichés en pleine largeur sur mobile (`w-full`), et l'effet de particules qui prenait de la place a été désactivé sur petits écrans. La section s'adapte parfaitement à l'écran avec `min-h-[100dvh]`.

---

## 2. Menu Navigation Mobile (Ouvert)

```text
+---------------------------------------+
|  [Logo]                 [CTA] [X]     |
+---------------------------------------+
|                                       |
|  +---------------------------------+  | <- 1. Backdrop Flou
|  |                                 |  |
|  |  Services                       |  | <- 2. Liens espacés
|  |  Blog                           |  |
|  |  FAQ                            |  |
|  |  Contact                        |  |
|  |  -----------------------------  |  |
|  |                                 |  |
|  |  [ Réserver un audit ]          |  | <- 3. CTAs intégrés
|  |  [ Parler à un expert ]         |  |
|  |                                 |  |
|  +---------------------------------+  |
|                                       |
+---------------------------------------+
```

### Annotations (Menu Mobile)
* **1. Backdrop Flou** : Ajout d'un overlay recouvrant tout l'écran (`fixed inset-0 bg-black/60 backdrop-blur-sm z-[40] lg:hidden`) pour mettre le menu en valeur et permettre de le fermer en cliquant à l'extérieur.
* **2. Liens Espacés** : Les liens ont une cible tactile généreuse et un effet de hover pour indiquer l'interactivité. La fenêtre du menu est scrollable (`overflow-y-auto max-h-[calc(100vh-8rem)]`) pour s'adapter aux très petits écrans.
* **3. CTAs Intégrés** : Les boutons d'action sont toujours visibles en bas du menu.

---

## 3. Section Contact (Formulaire)

```text
+---------------------------------------+
|                                       |
|  ## Contactez-nous                    |
|                                       |
|  Nom Complet                          |
|  [ Jean Dupont                   ]    | <- 1. autoComplete="name"
|                                       |
|  Email Professionnel                  |
|  [ contact@entreprise.com        ]    | <- 2. autoComplete/inputMode
|                                       |
|  Votre Message                        |
|  [                               ]    |
|  [                               ]    | <- 3. inputMode="text"
|  [                               ]    |
|                                       |
|  [ Envoyer le message            ]    |
|                                       |
+---------------------------------------+
```

### Annotations (Formulaire)
* **1. Attributs Auto-Complete** : L'input "Nom Complet" intègre `autoComplete="name"` pour que le clavier mobile propose la complétion automatique.
* **2. Clavier Email** : L'input "Email" possède les attributs `autoComplete="email"` et `inputMode="email"`, forçant le clavier du smartphone à afficher le symbole "@" et le ".com".
* **3. Textarea Optimisé** : Ajout de `inputMode="text"` pour garantir le bon comportement du clavier lors de la saisie d'un long message.

---

## 4. Performance (Invisible mais ressenti)

### Annotations (Performance)
* **CSS Critique Inline** : Ajout de `background-color: #000000;` directement dans `app/globals.css` pour prévenir le Flash of Unstyled Content (FOUC). Le site s'affiche en noir immédiatement avant le chargement de l'intégralité du CSS.
* **Lazy Loading des Logos** : Le carrousel infini de logos (Nvidia, GitHub, etc.) a été optimisé. Toutes les images intègrent désormais `loading="lazy"` et `decoding="async"`.
* **Optimisation Next/Image** : L'optimisation native des images par Next.js a été réactivée en retirant `unoptimized: true` de `next.config.mjs` et en déclarant les domaines externes (`hebbkx1anhila5yf.public.blob.vercel-storage.com` et `i.pravatar.cc`).
