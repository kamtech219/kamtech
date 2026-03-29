export type SEOPageData = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  problem: {
    title: string;
    description: string;
    metric: string;
  }[];
  solution: {
    title: string;
    description: string;
  };
  benefits: {
    title: string;
    description: string;
  }[];
};

export const seoPagesData: SEOPageData[] = [
  {
    slug: "restaurants",
    title: "Chatbot WhatsApp pour Restaurants | KAMTECH",
    description: "Automatisez vos réservations et commandes avec un chatbot WhatsApp pour votre restaurant. Gagnez du temps et augmentez votre chiffre d'affaires.",
    h1: "Le Chatbot WhatsApp Parfait pour les Restaurants",
    problem: [
      {
        title: "Appels manqués en plein service",
        description: "Vous êtes débordé pendant le service et vous manquez des appels pour des réservations ou des commandes à emporter.",
        metric: "Réservations perdues",
      },
      {
        title: "Gestion manuelle des commandes",
        description: "Prendre les commandes par téléphone prend du temps et augmente le risque d'erreurs de saisie.",
        metric: "Temps gaspillé",
      }
    ],
    solution: {
      title: "Un Assistant Virtuel 24/7 pour votre Restaurant",
      description: "Notre chatbot WhatsApp prend vos réservations, répond aux questions sur le menu et gère les commandes automatiquement, directement depuis WhatsApp.",
    },
    benefits: [
      {
        title: "Plus de réservations",
        description: "Ne manquez plus aucun client, même en plein coup de feu.",
      },
      {
        title: "Réduction des erreurs",
        description: "Les commandes sont écrites par le client, finies les erreurs de compréhension au téléphone.",
      },
      {
        title: "Fidélisation",
        description: "Envoyez des offres personnalisées à vos clients via WhatsApp.",
      }
    ]
  },
  {
    slug: "e-commerce",
    title: "Chatbot WhatsApp pour E-commerce | KAMTECH",
    description: "Améliorez le support client et boostez vos ventes e-commerce avec notre chatbot WhatsApp intelligent.",
    h1: "Boostez vos Ventes E-commerce avec un Chatbot WhatsApp",
    problem: [
      {
        title: "Support client surchargé",
        description: "Votre équipe passe ses journées à répondre à 'Où est ma commande ?' ou 'Quels sont les délais de livraison ?'.",
        metric: "Heures perdues",
      },
      {
        title: "Abandon de panier élevé",
        description: "Vos clients ont des doutes au moment de payer et quittent le site sans finaliser leur achat.",
        metric: "Ventes perdues",
      }
    ],
    solution: {
      title: "Automatisation du Support et Relances Panier",
      description: "Le chatbot répond instantanément aux questions fréquentes, suit les colis et relance les paniers abandonnés directement sur WhatsApp avec un taux d'ouverture de 98%.",
    },
    benefits: [
      {
        title: "Support 24/7",
        description: "Des réponses immédiates, même la nuit et les week-ends.",
      },
      {
        title: "Augmentation des conversions",
        description: "Rattrapez jusqu'à 20% de vos paniers abandonnés grâce à des relances personnalisées.",
      },
      {
        title: "Clientèle rassurée",
        description: "Un canal direct et intime qui augmente la confiance en votre marque.",
      }
    ]
  },
  {
    slug: "sante",
    title: "Chatbot WhatsApp pour la Santé et les Cliniques | KAMTECH",
    description: "Simplifiez la prise de rendez-vous médicaux et rassurez vos patients avec un chatbot WhatsApp dédié aux professionnels de santé.",
    h1: "Le Chatbot WhatsApp pour les Professionnels de Santé",
    problem: [
      {
        title: "Secrétariat débordé",
        description: "Le standard téléphonique est saturé d'appels pour des prises de rendez-vous ou des questions simple.",
        metric: "Saturation téléphonique",
      },
      {
        title: "Rendez-vous oubliés",
        description: "Les patients oublient leurs rendez-vous, ce qui crée des trous dans votre planning.",
        metric: "Perte de revenus",
      }
    ],
    solution: {
      title: "Prise de RDV et Rappels Automatiques",
      description: "Un assistant qui gère l'agenda, prend les rendez-vous, répond aux questions courantes et envoie des rappels automatiques via WhatsApp.",
    },
    benefits: [
      {
        title: "Agenda optimisé",
        description: "Réduisez drastiquement les rendez-vous non honorés (no-shows).",
      },
      {
        title: "Gain de temps",
        description: "Libérez votre secrétariat des tâches répétitives pour des missions à plus forte valeur ajoutée.",
      },
      {
        title: "Accessibilité",
        description: "Les patients peuvent prendre rendez-vous facilement 24h/24.",
      }
    ]
  },
  {
    slug: "paris",
    title: "Agence Chatbot WhatsApp à Paris | KAMTECH",
    description: "Déployez un chatbot WhatsApp sur mesure pour votre entreprise à Paris. Expertise locale et accompagnement personnalisé.",
    h1: "Votre Agence Experte en Chatbot WhatsApp à Paris",
    problem: [
      {
        title: "Concurrence féroce",
        description: "À Paris, les clients sont exigeants et impatients. Si vous ne répondez pas vite, ils vont chez le concurrent.",
        metric: "Opportunités perdues",
      },
      {
        title: "Coûts de personnel élevés",
        description: "Recruter une équipe de support disponible en permanence coûte extrêmement cher dans la capitale.",
        metric: "Dépenses excessives",
      }
    ],
    solution: {
      title: "Un Assistant Virtuel Parisien 24/7",
      description: "Démarquez-vous avec un service client ultra-réactif et moderne. Notre équipe vous accompagne à Paris pour créer le chatbot idéal.",
    },
    benefits: [
      {
        title: "Service Premium",
        description: "Offrez à vos clients parisiens une expérience immédiate et sans friction.",
      },
      {
        title: "Économies",
        description: "Un coût de revient bien inférieur à celui d'un employé dédié au support.",
      },
      {
        title: "Accompagnement Local",
        description: "Une équipe d'experts basée en France pour vous guider pas à pas.",
      }
    ]
  },
  {
    slug: "rdv",
    title: "Chatbot WhatsApp pour Prise de Rendez-vous | KAMTECH",
    description: "Automatisez votre prise de rendez-vous grâce à l'IA sur WhatsApp. Synchronisé avec votre agenda.",
    h1: "Automatisez votre Prise de Rendez-vous via WhatsApp",
    problem: [
      {
        title: "Friction pour le client",
        description: "Les formulaires complexes ou les appels téléphoniques dissuadent les clients de prendre rendez-vous.",
        metric: "Taux de conversion faible",
      },
      {
        title: "Gestion manuelle de l'agenda",
        description: "Vous passez trop de temps à proposer des créneaux, modifier ou annuler des rendez-vous.",
        metric: "Perte de temps",
      }
    ],
    solution: {
      title: "Prise de RDV Conversationnelle et Intelligente",
      description: "Le chatbot propose vos disponibilités, prend le rendez-vous et le synchronise avec votre calendrier, tout cela en discutant naturellement sur WhatsApp.",
    },
    benefits: [
      {
        title: "Plus de rendez-vous",
        description: "Une méthode fluide et rapide qui encourage la prise de rendez-vous.",
      },
      {
        title: "Synchronisation parfaite",
        description: "Connecté à vos outils (Google Calendar, Calendly, etc.) pour éviter les doubles réservations.",
      },
      {
        title: "Rappels automatiques",
        description: "Diminuez les absences en rappelant le rendez-vous directement sur l'application la plus consultée.",
      }
    ]
  }
];
