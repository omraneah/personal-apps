import type { Block } from "../blocks";

type LegalPage = { slug: string; h1: string; subtitle?: string; blocks: Block[] };

export const legalPages: Record<string, LegalPage> = {
  "cguv": {
    slug: "cguv",
    h1: "Conditions générales d'utilisation et de vente",
    subtitle: "Mise à jour le 26 mai 2022",
    blocks: [
      { t: "h2", c: "1. Objet" },
      { t: "p", c: "Les présentes conditions générales de vente (« CGUV ») ont pour objet de définir les modalités et conditions des services mis à disposition par African Legal Factory sur tous les supports, et notamment l'achat des formations (« Formations ») conclues sur le site africanlegalfactory.com (« Site ») par le client (« Client »). Les CGUV peuvent être modifiées à tout moment avec publication sur le Site ; les modifications prennent effet dès affichage." },

      { t: "h2", c: "2. Exploitation du Site" },
      { t: "p", c: "Le Site est édité et géré par African Legal Factory (« Société » ou « ALF »), SIRET 893 857 730 RCS Nanterre, siège social 148 Aristide Briand, 92300 Levallois Perret. Contact client : hello@africanlegalfactory.com." },

      { t: "h2", c: "3. Accès et accessibilité du Site" },
      { t: "p", c: "Le Site est accessible aux personnes physiques disposant de pleine capacité juridique, aux personnes mineures avec accord du représentant légal, et aux personnes morales agissant par l'intermédiaire de personnes ayant capacité à contracter." },
      { t: "p", c: "Disponibilité 24h/24 et 7j/7 sauf interruptions programmées ou non pour maintenance, sécurité ou force majeure. ALF ne garantit pas que le Site sera exempt d'anomalies, erreurs ou bugs, ni qu'il fonctionnera sans panne ni interruption. Le Client assume tous risques liés au contenu téléchargé." },

      { t: "h2", c: "4. Informations précontractuelles" },
      { t: "p", c: "Le Client reconnaît avoir reçu, avant la passation de Commande, communication lisible et compréhensible des CGUV et des informations exigées par l'article L.221-5 du Code de la consommation : caractéristiques des Formations, prix et mode de calcul, identité de la Société." },

      { t: "h2", c: "5. Acceptation des CGUV" },
      { t: "p", c: "Le Client déclare avoir pris connaissance et accepté les CGUV avant la passation de Commande. La validation de la Commande vaut acceptation des CGUV. Toute adhésion sous réserve est nulle et non avenue. ALF se réserve le droit d'adapter ou modifier les CGUV à tout moment ; la version applicable est celle figurant en ligne au moment de la Commande." },

      { t: "h2", c: "6. Ouverture du compte client" },
      { t: "p", c: "Le Client doit s'inscrire en créant un Compte regroupant ses informations. Chaque Client n'a le droit d'avoir qu'un seul compte en même temps. L'inscription est validée par ALF après vérification du formulaire standard ; la confirmation arrive par email. Le Client assure l'exactitude et l'exhaustivité des données fournies et les met à jour. ALF peut supprimer le Compte du Client à tout moment, pour toute raison, à sa seule discrétion." },

      { t: "h2", c: "7. Droits, obligations et restrictions des membres" },
      { t: "p", c: "Les Formations proposées sont celles décrites sur le Site au jour de consultation, dans la limite des stocks disponibles." },
      { t: "p", c: "La copie, l'enregistrement et la diffusion d'une Formation sont strictement interdits et punis par la loi. L'utilisation est strictement personnelle. ALF se réserve le droit de supprimer tout accès en cas de non-respect." },

      { t: "h2", c: "8. Achat d'une Formation" },
      { t: "p", c: "Toutes les Formations payantes achetées sont disponibles dans l'espace personnel, rubrique « Mes cours »." },
      { t: "ul", c: [
        "Formation live : le Client assiste à la formation à l'heure et jour convenus ; lien de connexion dans « Démarrer le cours ».",
        "Formation e-learning : le Client consulte la formation à tout moment pendant un an suivant l'achat.",
        "Support de cours : présentation PDF du formateur en téléchargement sauf mention contraire.",
        "Bonus : fichiers, vidéos, réductions selon la Commande, disponibles dans l'espace personnel.",
      ]},
      { t: "p", c: "La vente est définitive après confirmation par email et encaissement intégral. Les factures sont disponibles dans « Mon compte » et envoyées par email. ALF peut bloquer une Commande en cas de défaut de paiement ou d'erreurs." },

      { t: "h2", c: "9. Prix des Formations" },
      { t: "p", c: "Les prix relèvent du droit français. Ils sont affichés TTC, TVA incluse. Les Formations d'« initiations » sont, sauf mention contraire, gratuites. Les tarifs des Formations payantes sont ceux en vigueur au moment de l'achat. ALF peut modifier ses prix à tout moment ; la Commande est facturée sur les tarifs en vigueur au moment de l'enregistrement et du paiement." },

      { t: "h2", c: "10. ALF Gift Card, ALF Audit Card & ALF Call Card" },
      { t: "p", c: "Les cartes (prénom, nom, email du destinataire requis) sont commandables sur la boutique en ligne. Validation via l'acceptation explicite des CGV et renonciation au droit de rétractation. Email de confirmation après paiement validé." },
      { t: "p", c: "Durée : 12 mois à compter de la date de commande. Au-delà, la carte n'est plus utilisable et aucun remboursement ne peut être demandé." },

      { t: "h2", c: "11. Modalités de paiement" },
      { t: "ul", c: ["Stripe", "PayPal", "Mobile Money"]},
      { t: "p", c: "Les données de paiement sont échangées de manière cryptée par les opérateurs. Aucune information bancaire n'est stockée sur les serveurs d'ALF." },

      { t: "h2", c: "12. Conditions de remboursement" },
      { t: "p", c: "Conformément à l'article L.221-20-2 du Code de la consommation, le Client ne bénéficie pas du droit de rétractation pour un produit numérique non fourni sur support matériel dont l'exécution a commencé après accord préalable exprès et renoncement exprès au droit de rétractation." },

      { t: "h2", c: "13. Limites de responsabilité" },
      { t: "p", c: "Sous réserve de la responsabilité découlant d'un défaut, African Legal Factory n'est responsable que des dommages résultant d'une négligence grave ou d'une faute intentionnelle. Les documents, descriptions et informations relatifs aux Formations ne bénéficient d'aucune garantie, explicite ou implicite, sauf garanties prévues par la loi." },

      { t: "h2", c: "14. Force majeure" },
      { t: "p", c: "Les circonstances indépendantes de la volonté des parties empêchant l'exécution des obligations sont causes d'exonération et entraînent suspension. ALF informe le Client dans un délai de 48h. Au-delà de trois (3) mois, la transaction peut être résiliée sans indemnité. Le défaut de paiement ne peut être justifié par un cas de force majeure." },

      { t: "h2", c: "15. Propriété intellectuelle" },
      { t: "p", c: "Le contenu du Site reste la propriété de la Société, seule titulaire des droits de propriété intellectuelle sur ce contenu." },

      { t: "h2", c: "16. Invalidité partielle" },
      { t: "p", c: "Si une ou plusieurs stipulations des CGUV sont tenues pour non valides ou déclarées telles, les autres stipulations gardent toute leur force et portée." },

      { t: "h2", c: "17. Non-renonciation" },
      { t: "p", c: "Aucune tolérance, inaction ou inertie d'ALF ne peut être interprétée comme renonciation à ses droits aux termes des CGUV." },

      { t: "h2", c: "18. Loi applicable, médiation, juridiction" },
      { t: "p", c: "La vente des Formations est soumise à la loi française. Le Client peut, en vertu de l'article L.612-1 du Code de la consommation, recourir gratuitement à un médiateur de la consommation — demande préalable au service après-vente, puis auprès du médiateur dans un délai d'un an en cas d'échec. La plateforme de règlement en ligne des litiges de la Commission européenne est disponible à l'adresse https://ec.europa.eu/consumers/odr/main/?event=main.home.selfTest. À défaut d'accord amiable, tout litige est soumis aux tribunaux légalement compétents." },

      { t: "h2", c: "19. Langue du contrat" },
      { t: "p", c: "Les présentes CGUV sont rédigées en langue française. En cas de traduction, seul le texte français fait foi en cas de litige." },
    ],
  },

  "mentions-legales": {
    slug: "mentions-legales",
    h1: "Mentions légales",
    blocks: [
      { t: "h2", c: "Éditeur" },
      { t: "ul", c: [
        "Raison sociale : African Legal Factory — Société par Actions Simplifiée (SAS)",
        "Capital social : 500 €",
        "SIRET : 893 857 730 RCS Nanterre",
        "Siège : 148 Aristide Briand, 92300 Levallois Perret, France",
        "Email : hello@africanlegalfactory.com",
        "Téléphone : +33 6 68 32 83 14",
        "Directrice de publication : Sonia Mavouna, Présidente",
      ]},
      { t: "h2", c: "Hébergeur" },
      { t: "p", c: "Host Papa." },
      { t: "h2", c: "Contact" },
      { t: "ul", c: [
        "hello@africanlegalfactory.com",
        "formation@africanlegalfactory.com",
        "+33 6 68 32 83 14",
      ]},
      { t: "p", c: "© 2023 African Legal Factory, tous droits réservés. Powered by Mavouna Avocats." },
    ],
  },

  "politique-donnees": {
    slug: "politique-donnees",
    h1: "Politique de protection des données personnelles",
    blocks: [
      { t: "h2", c: "Préambule" },
      { t: "p", c: "African Legal Factory s'engage à mettre en œuvre les mesures adéquates pour assurer la protection, la confidentialité et la sécurité des données personnelles, en conformité avec le Règlement (UE) 2016/679 du 27 avril 2016 (RGPD) et la loi n° 78-17 du 6 janvier 1978 (Informatique et Libertés). Les définitions utilisées suivent l'article 4 du RGPD (donnée personnelle, traitement, responsable, sous-traitant)." },

      { t: "h2", c: "1. Données traitées" },
      { t: "h3", c: "1.1 Navigation" },
      { t: "p", c: "IP/MAC de votre appareil, type d'appareil, version du navigateur. Finalité : affichage du Site. Base légale : exécution du contrat (CGU)." },
      { t: "h3", c: "1.2 Formulaire de contact" },
      { t: "p", c: "Nom, téléphone, email, contenu du message. Finalité : répondre à vos demandes. Base légale : consentement (clic sur envoyer). ALF ne sollicite pas de données sensibles ; leur transmission par l'utilisateur reste sous sa responsabilité." },
      { t: "h3", c: "1.3 Exécution des contrats" },
      { t: "p", c: "Gestion client, facturation, comptabilité, suivi, analyse marketing. Communications optionnelles (newsletter, événements) sauf opposition." },

      { t: "h2", c: "2. Base légale" },
      { t: "ul", c: [
        "Exécution du contrat",
        "Intérêt légitime (prospection commerciale)",
        "Obligations légales (comptables, fiscales)",
      ]},

      { t: "h2", c: "3. Durées de conservation" },
      { t: "ul", c: [
        "Pendant la relation contractuelle",
        "Prescription applicable : 5 ans",
        "Obligations fiscales/comptables : jusqu'à 10 ans",
      ]},

      { t: "h2", c: "4. Destinataires" },
      { t: "p", c: "Internes : avocats, juristes, facturation, communication, IT. Sous-traitants contractuellement liés : hébergement, stockage, communication, traitement, BDD, maintenance." },

      { t: "h2", c: "5. Transferts hors UE" },
      { t: "p", c: "Aucun. Les données sont hébergées dans l'UE." },

      { t: "h2", c: "6. Vos droits (RGPD art. 15–22)" },
      { t: "ul", c: [
        "Accès, portabilité, rectification, effacement, opposition, limitation",
        "Directives post-mortem",
        "Retrait du consentement",
        "Réclamation auprès de l'autorité de contrôle",
      ]},
      { t: "p", c: "Exercice : formation@africanlegalfactory.com ou ALF, 14 rue Le Sueur, 75016 Paris. Joindre le motif et une copie de pièce d'identité (conservée le temps de la vérification). Désinscription des communications par email ou lien unsubscribe. Plainte : CNIL ou autorité compétente." },

      { t: "h2", c: "7. Modifications" },
      { t: "p", c: "Toute modification de la politique est notifiée via le Site." },
    ],
  },

  "accompagnement-ponctuel": {
    slug: "accompagnement-ponctuel",
    h1: "Accompagnement à frais fixes",
    blocks: [
      { t: "p", c: "ALF combine formations en ligne en libre-service et accompagnement par avocat dédié pour traiter rapidement un besoin ponctuel." },
      { t: "h2", c: "Formations e-learning" },
      { t: "ul", c: [
        "Nouveaux cours chaque semaine : levée de fonds, propriété intellectuelle, protection des données, blockchain, marketing digital.",
        "Cours d'initiation : gratuits.",
        "Certifications : 19 € à 120 €.",
        "Abonnement mensuel illimité : 29 €/mois.",
      ]},
      { t: "h2", c: "Bootcamp « Préparez et réussissez votre levée de fonds »" },
      { t: "p", c: "Trois jours intensifs, 15 entrepreneurs maximum. Seuils de rentabilité, KPIs, go-to-market, aspects juridiques de la levée. Prix fixe : 120 €." },
      { t: "h2", c: "Accompagnement sur mesure" },
      { t: "p", c: "Création/structuration, levée de fonds, PI, conformité données, contrats (SaaS, prestation). Demander un accompagnement via Typeform." },
    ],
  },
};
