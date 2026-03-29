# Audit SEO KAMTECH IA

## Crawlabilité (P1)
- **robots.txt** : P1 - Manquant. À créer dans `/app/robots.ts` ou `/public/robots.txt`.
- **sitemap.xml** : P1 - Manquant. À créer dans `/app/sitemap.ts` ou `/public/sitemap.xml`.

## On-page SEO
- **Balise Title (60 chars max)** : P2 - La balise actuelle `"KAMTECH IA | Automatisation WhatsApp & Chatbot IA pour PME"` fait 58 caractères, ce qui est très bien. Cependant, le reste des pages n'a pas de balise title dynamique.
- **Balise Meta Description (155 chars max)** : P2 - La balise actuelle `"Augmentez vos conversions de 30-60% avec un chatbot WhatsApp IA. Déploiement en 7 jours. Garantie 30 jours. Audit gratuit."` fait 124 caractères, ce qui est parfait.
- **Hiérarchie des Headers (H1, H2, H3)** : P0 - **Critique**. La page de blog (`app/blog/page.tsx`) commence par des balises `<h3>` et `<h2>`, mais **n'a pas de balise `<h1>`**. Sur la page d'accueil, le `<h1>` est "Pendant que vous dormez, vos clients demandent votre prix". C'est bien pour le marketing, mais mauvais pour le SEO (manque de mots-clés).

## SEO Technique
- **Page Speed** : P2 - Le site utilise de lourdes animations (ex: `ParticleTextEffect`, `FloatingDock`, `globe`). Cela peut affecter le temps de chargement. Des optimisations Next.js `<Image>` et le chargement paresseux (lazy loading) sont recommandés.
- **Mobile-friendly** : P2 - L'utilisation de Tailwind CSS (`sm:`, `md:`) gère la responsivité. Il faut vérifier la taille des éléments cliquables sur mobile (tap targets).
- **SSL (HTTPS)** : P0 - Actif et géré par Vercel (Next.js).
- **Schema.org (Données structurées)** : P1 - Manquant. Aucune donnée JSON-LD n'est présente sur la page d'accueil ou les articles de blog.

## Content Gap & Mots-clés
- **Mots-clés : "chatbot WhatsApp automation IA PME"** : P1 - Les mots-clés sont définis dans les meta keywords de `app/layout.tsx` mais ne sont pas suffisamment présents dans le texte visible (surtout dans les balises H1 et H2).
- Le H1 de la page d'accueil devrait intégrer ces mots clés pour un meilleur référencement (ex: "Automatisation WhatsApp et Chatbot IA pour les PME").

---

## Solutions v0.app

Voici les actions à mettre en place pour corriger ces problèmes SEO.

### 1. Créer `app/robots.ts` (P1)
```ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://kamtech.ai/sitemap.xml",
  };
}
```

### 2. Créer `app/sitemap.ts` (P1)
```ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kamtech.ai",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://kamtech.ai/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
```

### 3. Corriger le H1 de la page de Blog (`app/blog/page.tsx`) (P0)
Ajouter un `<h1>` en haut de la page :
```tsx
<h1 className="text-4xl font-bold text-white mb-8">Le Blog de l'IA pour PME</h1>
```

### 4. Optimiser le H1 de la page d'accueil (`components/hero-section.tsx`) (P1)
Remplacer le H1 actuel par un H1 contenant les mots-clés :
```tsx
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
  Automatisation WhatsApp & Chatbot IA pour booster les PME
</h1>
<p className="text-xl text-gray-400 mb-4">Pendant que vous dormez, vos clients demandent votre prix.</p>
```

### 5. Ajouter les données structurées Schema.org (`app/layout.tsx`) (P1)
Ajouter ce script dans le `<head>` ou dans le layout :
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "KAMTECH IA",
      "url": "https://kamtech.ai",
      "description": "Automatisation WhatsApp & Chatbot IA pour PME",
    }),
  }}
/>
```
