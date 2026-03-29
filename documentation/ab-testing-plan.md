# Plan d'Implémentation Tests A/B (CTAs)

## Objectifs des Tests A/B

Tester les variables suivantes sur les boutons d'Appel à l'Action (CTA) pour maximiser le taux de conversion vers la réservation d'audits :

1.  **Texte (Copywriting)**
2.  **Couleur (Design/Contraste)**
3.  **Taille & Placement (UX/Visibilité)**

## Stratégie des Variables

### 1. Texte (Copywriting)

Nous allons tester 3 variantes de texte pour analyser si les utilisateurs réagissent mieux à la gratuité, au bénéfice ou à la valeur.

*   **Variante A (Contrôle / Valeur actuelle)** : `Obtenir mon audit gratuit` (Focus sur l'appropriation et la gratuité)
*   **Variante B (Bénéfice direct)** : `Recevoir mon plan personnalisé` (Focus sur le résultat final)
*   **Variante C (Urgence / Action)** : `Automatiser mon business maintenant` (Focus sur l'action immédiate et l'objectif)

### 2. Couleur (Design/Contraste)

La couleur actuelle est le bleu (Primary). Nous testerons si un contraste plus élevé ou une esthétique différente génère plus de clics.

*   **Variante A (Contrôle / Primary)** : Bleu classique de la marque (`bg-blue-600 hover:bg-blue-700`).
*   **Variante B (High Contrast)** : Orange/Rouge ou Jaune Vif (`bg-orange-500 hover:bg-orange-600`). Crée une rupture visuelle forte avec le fond sombre.
*   **Variante C (Gradient Premium)** : Dégradé Bleu/Violet ou Vert/Bleu (`bg-gradient-to-r from-blue-600 to-purple-600`). Donne un aspect plus moderne et "AI-focused".

### 3. Taille / Placement (UX/Visibilité)

Tester l'impact de l'encombrement visuel et de l'accessibilité sur le taux de clic.

*   **Variante A (Contrôle / Standard)** : Bouton taille `size="lg"` classique.
*   **Variante B (Large / Pleine largeur)** : Bouton beaucoup plus imposant, `w-full` sur desktop dans la Hero Section avec une taille de police plus grande (`text-lg py-6`).
*   **Variante C (Floating / Permanent)** : Ajouter une animation flottante constante (`animate-bounce` ou effet pulse permanent) sur le bouton principal de la Hero Section.

---

## Méthodologie Technique

### Étape 1 : Choix de l'Outil de Split Testing

Pour une application Next.js (App Router), plusieurs solutions sont recommandées :

1.  **Vercel Edge Config + Middleware (Recommandé pour Next.js sur Vercel)** : Permet de router les utilisateurs vers différentes variantes sans délai de chargement (0 layout shift).
2.  **PostHog** : Excellent pour l'A/B testing intégré avec l'analytique et l'enregistrement de sessions.
3.  **Optimizely / Google Optimize (via Google Analytics 4)** : Des solutions plus traditionnelles mais souvent plus lourdes à charger.

### Étape 2 : Implémentation via Context / Middleware (Exemple Vercel Edge/PostHog)

1.  **Définition des Flags** : Créer des Feature Flags dans l'outil choisi (ex: `cta-text-variant`, `cta-color-variant`, `cta-size-variant`).
2.  **Middleware Next.js** : Intercepter la requête entrante dans `middleware.ts`.
3.  **Assignation de la Variante** : Assigner l'utilisateur (via un cookie persistant) à une des variantes A, B ou C pour chaque test.
4.  **Distribution React** :
    *   Créer un composant Wrapper `<ABTestProvider>` qui lit le cookie ou le flag.
    *   Créer un composant `<SmartButton>` qui s'adapte dynamiquement.

**Exemple de structure pour `<SmartButton>` :**

```tsx
"use client"
import { useABTest } from '@/lib/ab-testing'

export function CTAButton({ defaultText, ...props }) {
  const { textVariant, colorVariant, sizeVariant } = useABTest('main-cta')

  // Logic pour appliquer les styles en fonction des variantes
  const bgColor = colorVariant === 'high-contrast' ? 'bg-orange-500' :
                  colorVariant === 'gradient' ? 'bg-gradient-to-r from-blue-600 to-purple-600' :
                  'bg-blue-600';

  return (
    <button className={`... ${bgColor} ${sizeVariant === 'large' ? 'text-xl py-6 w-full' : 'text-base py-3'}`}>
      {textVariant === 'B' ? 'Recevoir mon plan personnalisé' :
       textVariant === 'C' ? 'Automatiser mon business maintenant' :
       'Obtenir mon audit gratuit'}
    </button>
  )
}
```

### Étape 3 : Mesure du Succès (KPIs)

Pour déterminer la variante gagnante, nous devons suivre les événements suivants :

1.  **Taux de Clic (CTR)** : Nombre de clics sur le bouton CTA / Nombre de vues de la page.
2.  **Taux d'Ouverture Modal Cal.com** : Nombre de fois où le widget Cal.com s'affiche avec succès.
3.  **Taux de Conversion Final** : Nombre de rendez-vous *réellement* bookés sur Cal.com / Nombre de vues de la page. (Nécessite de remonter l'événement de succès depuis Cal.com via webhook ou événement JS).

### Étape 4 : Calendrier de Test

Ne pas tester les 3 variables en même temps (sauf si utilisation de tests multivariés complexes avec énormément de trafic).

1.  **Semaine 1-2** : Test de Texte (Copywriting) - Trouver le meilleur message.
2.  **Semaine 3-4** : Test de Couleur (avec le texte gagnant).
3.  **Semaine 5-6** : Test de Taille/Placement (avec le texte et la couleur gagnants).

Une fois la certitude statistique atteinte (généralement >95% de confiance analytique), déployer la variante gagnante pour 100% des utilisateurs de manière permanente.
