# Optimisation du Funnel & Plan A/B Testing sur 30 Jours

## 1. Objectifs de l'optimisation
- Augmenter le taux de conversion Landing Page -> Audit Form.
- Réduire le taux d'abandon lors de la prise de rendez-vous (Calendly/Cal.com).
- Améliorer la qualification des leads avant le Discovery Call.
- Accroître le taux de présence (Show-up rate) aux Discovery Calls via le nurturing.

---

## 2. Plan A/B Testing sur 30 jours (4 semaines)

L'implémentation actuelle répartit le trafic équitablement via le hook `useABTest`. Voici comment structurer l'analyse.

### Semaine 1 : Optimisation de la Proposition de Valeur (Headlines)
**Objectif :** Identifier le message qui résonne le plus avec la douleur du prospect.
- **A (Contrôle):** "Pendant que vous dormez, vos clients demandent votre prix"
- **B:** "Automatisez votre prospection et gagnez 20h par semaine"
- **C:** "Un employé IA qui répond à vos clients 24/7"
- **D:** "Multipliez vos ventes sans recruter avec l'IA"
- **E:** "Arrêtez de perdre des clients à cause des temps de réponse"

*KPI à suivre:* Taux de clics (CTR) sur le CTA principal.

### Semaine 2 : Friction & Design (CTA Buttons)
**Objectif :** Réduire la friction perçue au clic.
- **A (Contrôle):** "Réserver mon audit gratuit" (Bleu)
- **B:** "Voir une démo en direct" (Indigo)
- **C:** "Découvrir la solution" (Bleu clair)

*KPI à suivre:* Taux de conversion vers l'ouverture de la modale.

### Semaine 3 : Confiance & Autorité (Social Proof Placement)
**Objectif :** Valider l'impact de l'autorité immédiate.
- **A (Contrôle):** Preuve sociale en bas de page.
- **B:** Preuve sociale juste au-dessus du titre principal.

*KPI à suivre:* Temps passé sur la page, Taux de rebond, CTR global.

### Semaine 4 : Consolidation & Analyse
- Compilation des données des semaines 1, 2 et 3.
- Déploiement permanent des variantes gagnantes.
- Test de nouvelles variables mineures (ex: réduction du nombre de champs dans le formulaire progressif).

---

## 3. Séquence de Nurturing Email (Pre-Call)

Cette séquence s'enclenche dès qu'un prospect a validé son formulaire et pris rendez-vous.

### Email 1 : Confirmation & Bienvenue (H+0)
**Sujet :** Rendez-vous confirmé : Votre audit IA gratuit 🚀
**Contenu :**
- Confirmation de la date/heure (avec fuseau horaire explicite).
- Rappel du bénéfice principal : "Lors de cet appel, nous identifierons comment vous faire gagner 20h/semaine."
- *Action requise :* Ajouter l'événement au calendrier (lien iCal/Google).

### Email 2 : Valeur & Anticipation (J-2 ou H-48)
**Sujet :** Comment [Client X] a automatisé 80% de son support...
**Contenu :**
- Étude de cas courte ou vidéo (ex: "Voici à quoi ressemble un chatbot KAMTECH en action").
- Aide à se projeter : "Imaginez ne plus avoir à répondre aux mêmes questions 10 fois par jour."

### Email 3 : Preuve Sociale & Rappel (H-24)
**Sujet :** À demain ! Ce qu'ils disent de nous 👇
**Contenu :**
- 2 témoignages percutants.
- Rappel logistique du call (Lien Google Meet/Zoom).
- Option de report rapide en cas d'imprévu (pour éviter le no-show).

### Email 4 (SMS optionnel) : Dernier Rappel (H-1)
**Message :** "Bonjour [Nom], notre appel commence dans 1h ! Lien de connexion : [Lien]. À tout de suite."

---

## 4. Configuration Cal.com / Calendly (Checklist)

Pour s'assurer que l'intégration fonctionne de manière optimale avec notre nouveau formulaire (`AuditForm`) :

1. **Timezone Detection :** Déjà activé via l'API Calendly/Cal.com.
2. **Notes Automatiques :** Les champs *Taille de l'entreprise* et *Besoin* (étape 2) sont injectés directement dans les notes de l'événement.
3. **Webhooks :** Configurer un Webhook côté Cal.com/Calendly pour envoyer les données vers l'outil d'emailing (ex: Klaviyo, ActiveCampaign, Loops) afin de déclencher la séquence de Nurturing.
4. **Reminders Natifs :** S'assurer que les rappels par défaut de l'outil de booking ne fassent pas doublon avec la séquence de Nurturing personnalisée.
