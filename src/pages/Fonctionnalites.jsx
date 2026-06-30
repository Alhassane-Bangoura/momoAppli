import React from 'react';
import { LayoutDashboard, Users, Layers, School, BookOpen, BookMarked, Calendar, CreditCard, Wallet, FileText, Baby, Star, ClipboardList, BarChart2, Settings, ChevronRight, ArrowLeft, Building2, CalendarDays, ArrowLeftRight, ListOrdered, CalendarCheck, Type, Sigma } from 'lucide-react';

export const features = [
  {
    id: 'dashboard', icon: <LayoutDashboard size={20}/>, label: 'Dashboard',
    title: 'Tableau de bord (Dashboard)',
    description: "Le tableau de bord est le centre de commandement stratégique de votre établissement. Conçu spécifiquement pour les directeurs et les administrateurs, il offre une vision panoramique et en temps réel de la santé globale de l'école. Dès votre connexion, vous accédez instantanément aux indicateurs clés de performance (KPI) : effectifs totaux, taux d'assiduité, état des finances, et alertes critiques. Fini le temps perdu à compiler des rapports manuels ; toutes les données sont agrégées automatiquement pour vous permettre de prendre des décisions éclairées, rapidement et efficacement.",
    points: ['Vue panoramique avec indicateurs clés (KPI) en temps réel', 'Suivi instantané des inscriptions et des paiements', 'Graphiques interactifs de performance et d\'assiduité', 'Notifications et alertes intelligentes (retards de paiement, absences)'],
    color: '#6366F1',
  },
  {
    id: 'eleves', icon: <Users size={20}/>, label: 'Élèves',
    title: 'Gestion des Élèves',
    description: "Simplifiez et digitalisez l'intégralité du cycle de vie de l'élève au sein de votre établissement. Notre module de gestion des élèves remplace définitivement les dossiers papier encombrants et sujets aux erreurs. Chaque élève dispose d'un dossier numérique ultra-complet incluant ses informations d'état civil, sa photo, son dossier médical, les coordonnées précises de ses responsables légaux et tout son historique académique. Grâce à notre moteur de recherche multicritères, retrouver le dossier d'un élève parmi des milliers prend littéralement moins de deux secondes.",
    points: ["Dossier numérique ultra-complet (Identité, Médical, Parents)", "Processus d'inscription et de réinscription en un clic", "Moteur de recherche instantané multicritères", "Historique académique et disciplinaire centralisé"],
    color: '#10B981',
  },
  {
    id: 'promotions', icon: <Layers size={20}/>, label: 'Promotions',
    title: 'Gestion des Promotions',
    description: "La gestion des années scolaires (ou promotions) est le cœur de la continuité pédagogique. Ce module vous permet d'organiser rigoureusement les données de votre établissement année après année. Vous pouvez facilement configurer les dates clés, archiver automatiquement les données de l'année écoulée en toute sécurité, et préparer la rentrée suivante avec sérénité. Le système conserve un historique immuable, vous permettant à tout moment de consulter les résultats ou les dossiers d'un élève datant de plusieurs années en arrière, sans perturber l'année en cours.",
    points: ['Configuration et paramétrage des années académiques', 'Archivage sécurisé et immuable des années précédentes', 'Transition fluide des élèves entre deux promotions', 'Consultation rapide de l\'historique des anciennes promotions'],
    color: '#F59E0B',
  },
  {
    id: 'classes', icon: <School size={20}/>, label: 'Classes',
    title: 'Gestion des Classes',
    description: "Structurez votre établissement avec une flexibilité totale. Ce module permet de créer, modifier et organiser vos classes sans aucune limite de quantité. Pour chaque classe, vous pouvez définir la capacité maximale, affecter un professeur principal, lier les matières enseignées et y répartir vos élèves de manière équilibrée. Le système vous alerte automatiquement si une classe dépasse sa capacité autorisée, garantissant ainsi des conditions d'apprentissage optimales et une gestion d'infrastructure maîtrisée.",
    points: ['Création illimitée de classes par niveau et par cycle', 'Affectation simplifiée des élèves et des professeurs principaux', 'Suivi en temps réel des effectifs et des places disponibles', 'Liaison directe avec l\'emploi du temps et les salles'],
    color: '#8B5CF6',
  },
  {
    id: 'enseignants', icon: <Users size={20}/>, label: 'Enseignants',
    title: 'Gestion des Enseignants',
    description: "Gérez vos ressources humaines pédagogiques avec le même niveau d'exigence que vos élèves. Ce module offre un répertoire exhaustif de tout votre personnel enseignant. Chaque professeur possède une fiche détaillée reprenant ses qualifications, ses spécialités, les matières qu'il est habilité à enseigner et les classes qui lui sont assignées. Ce module est indispensable pour assurer un suivi rigoureux des présences, centraliser les contrats de travail, et faciliter la communication entre la direction et le corps professoral.",
    points: ['Dossier complet de l\'enseignant (Qualifications, Contacts)', 'Attribution précise des matières et des classes', 'Tableau de bord de suivi des présences et des heures', 'Centralisation des documents administratifs et contrats'],
    color: '#EC4899',
  },
  {
    id: 'matieres', icon: <BookOpen size={20}/>, label: 'Matières',
    title: 'Gestion des Matières',
    description: "Adaptez parfaitement le logiciel au programme officiel de l'Éducation Nationale. Le module de gestion des matières vous offre la liberté de configurer l'ensemble des disciplines enseignées dans votre école. Définissez finement les coefficients, les volumes horaires hebdomadaires ou annuels requis, et organisez les matières par groupes ou par spécialités (ex: Bloc scientifique, Bloc littéraire). Cette structuration rigoureuse est la fondation essentielle pour un calcul automatique et sans faille des moyennes sur les bulletins.",
    points: ['Création et catégorisation illimitée des matières', 'Paramétrage précis des coefficients selon les niveaux', 'Définition stricte des volumes horaires réglementaires', 'Association des matières aux enseignants qualifiés'],
    color: '#06B6D4',
  },
  {
    id: 'cours', icon: <BookMarked size={20}/>, label: 'Cours',
    title: 'Cahier de Texte Numérique',
    description: "Remplacez le traditionnel cahier de texte papier par une solution numérique centralisée et traçable. Ce module permet aux enseignants de documenter précisément le contenu abordé à chaque séance, de noter les devoirs à faire et de consigner les absences des élèves en temps réel. La direction dispose ainsi d'une visibilité totale sur l'avancement des programmes scolaires classe par classe, garantissant que les objectifs pédagogiques soient atteints avant la fin de l'année.",
    points: ['Traçabilité complète du contenu enseigné (Cahier de texte)', 'Saisie des absences en temps réel depuis la salle de classe', 'Suivi de l\'avancement des programmes officiels', 'Partage transparent des devoirs et leçons'],
    color: '#14B8A6',
  },
  {
    id: 'emploi', icon: <Calendar size={20}/>, label: 'Emploi du temps',
    title: "Générateur d'Emploi du Temps",
    description: "Fini le casse-tête de la rentrée scolaire. Notre module de gestion des emplois du temps vous assiste dans la création de plannings harmonieux pour toutes vos classes et tous vos enseignants. Le système intègre un algorithme intelligent de détection de conflits qui vous alerte immédiatement si un professeur ou une salle est assigné deux fois au même moment. Une fois finalisés, les emplois du temps peuvent être exportés en PDF haute qualité, prêts à être affichés dans les salles ou distribués aux élèves.",
    points: ["Conception visuelle et intuitive des emplois du temps", "Détection automatique des conflits (Salles, Professeurs)", "Génération de vues spécifiques par classe, prof ou salle", "Exportation et impression PDF haute résolution"],
    color: '#F97316',
  },
  {
    id: 'frais', icon: <CreditCard size={20}/>, label: 'Configuration des Frais',
    title: 'Paramétrage des Frais Scolaires',
    description: "Maitrisez la politique tarifaire de votre établissement avec une flexibilité absolue. Ce module vous permet de définir de manière exhaustive tous les types de frais applicables : frais d'inscription, mensualités de scolarité, frais d'examen, transport, cantine ou tenues scolaires. Vous pouvez créer des grilles tarifaires différenciées selon les cycles (Maternelle vs Lycée) ou le statut de l'élève, et configurer des échéanciers stricts. Le système calculera alors automatiquement le solde attendu pour chaque famille, sans erreur.",
    points: ['Création illimitée de rubriques de frais (Scolarité, Transport, etc.)', 'Grilles tarifaires adaptatives selon les niveaux ou cycles', 'Configuration d\'échéanciers et de dates limites de paiement', 'Automatisation complète de la facturation élève'],
    color: '#EF4444',
  },
  {
    id: 'paiements', icon: <Wallet size={20}/>, label: 'Paiements & Caisse',
    title: 'Gestion des Paiements & Caisse',
    description: "Sécurisez vos recettes et optimisez votre trésorerie. La gestion des paiements permet à vos comptables d'enregistrer les encaissements en quelques clics. À chaque transaction, le logiciel génère instantanément un reçu de paiement professionnel au format PDF, portant le logo de l'école et un numéro de série unique, prêt à être imprimé ou envoyé aux parents. Surtout, le module identifie automatiquement les impayés et génère des listes de relance, vous assurant de ne plus jamais perdre un franc sur les frais de scolarité.",
    points: ['Saisie ultra-rapide et sécurisée des paiements (Espèces, Chèque, Mobile)', 'Génération automatique de reçus PDF professionnels et numérotés', 'Tableau de bord ciblé sur le recouvrement et les impayés', 'Bilan journalier de caisse automatisé et inviolable'],
    color: '#22C55E',
  },
  {
    id: 'documents', icon: <FileText size={20}/>, label: 'Documents Officiels',
    title: 'Générateur de Documents Officiels',
    description: "L'administration de votre école produit d'innombrables documents chaque semaine. Ce module automatise la création de tous vos documents officiels (attestations de scolarité, certificats de fréquentation, cartes d'identité scolaires avec photo, certificats de radiation). Fini les modèles Word mal formatés : Guinée École utilise des modèles professionnels institutionnels intégrant dynamiquement les données de l'élève, le logo de l'école, la signature numérisée du directeur et le cachet de l'établissement.",
    points: ['Génération automatique d\'attestations et certificats conformes', "Création en masse de cartes d'identité scolaires avec code-barre/QR", 'Intégration dynamique du logo, cachet et signatures de l\'école', 'Archivage numérique de tous les documents émis'],
    color: '#A78BFA',
  },
  {
    id: 'prescolaire', icon: <Baby size={20}/>, label: 'Préscolaire',
    title: 'Module Maternelle & Préscolaire',
    description: "L'éducation de la petite enfance nécessite une approche d'évaluation fondamentalement différente du système de notation classique. Ce module exclusif est spécialement pensé pour la Maternelle et le Jardin d'enfants. Il remplace les notes chiffrées par des évaluations de compétences (Acquis, En cours d'acquisition, Non acquis) réparties par domaines de développement (Motricité, Langage, Socialisation). Il permet de générer des livrets d'évaluation qualitatifs, riches en appréciations, parfaitement adaptés aux attentes des parents de tout-petits.",
    points: ['Évaluation par compétences adaptée à la petite enfance', 'Suivi qualitatif du développement cognitif et moteur', 'Génération de livrets de compétences (sans notes chiffrées)', 'Interface simplifiée pour les éducateurs et éducatrices'],
    color: '#FB923C',
  },
  {
    id: 'notes', icon: <Star size={20}/>, label: 'Saisie des Notes',
    title: 'Saisie et Centralisation des Notes',
    description: "Le moment des évaluations ne doit plus être une source de stress administratif. Ce module offre une interface de saisie de notes ultra-fluide, conçue pour limiter les erreurs de frappe (contrôle des valeurs maximales, validation instantanée). Que les évaluations soient continues (interrogations, devoirs) ou ponctuelles (examens de fin de trimestre), le logiciel se charge instantanément des calculs complexes : moyennes pondérées, détermination automatique des rangs, et attribution des mentions selon le barème de l'établissement.",
    points: ['Interface de saisie rapide et sécurisée (contrôle d\'erreurs)', 'Calcul automatisé et instantané des moyennes (arithmétique/pondérée)', 'Détermination automatique des rangs et classements', 'Gestion fine des absences justifiées lors des évaluations'],
    color: '#FBBF24',
  },
  {
    id: 'bulletins', icon: <ClipboardList size={20}/>, label: 'Bulletins & Rapports',
    title: 'Génération de Bulletins & Rapports',
    description: "C'est la vitrine de l'excellence de votre établissement auprès des familles. En un seul clic, générez des bulletins scolaires d'une qualité visuelle exceptionnelle, dignes des plus grandes institutions internationales. Les bulletins intègrent automatiquement les notes, moyennes, rangs, coefficients, graphiques de progression de l'élève par rapport à la classe, et les appréciations des professeurs. L'impression en masse (par classe ou par école) vous fait gagner des journées entières de travail en fin de trimestre.",
    points: ['Bulletins PDF d\'une qualité professionnelle exceptionnelle', 'Intégration de graphiques analytiques (courbes de progression)', 'Impression en masse automatisée (un clic = toute la classe)', 'Appréciations automatiques générées selon les résultats'],
    color: '#34D399',
  },
  {
    id: 'analytique', icon: <BarChart2 size={20}/>, label: 'Analytique',
    title: 'Analytique, BI & Statistiques',
    description: "Transformez vos données en stratégies gagnantes. Ce module de Business Intelligence (BI) analyse toutes les informations saisies dans le logiciel pour vous fournir des tableaux de bord décisionnels avancés. Visualisez instantanément les taux de réussite globaux, analysez la rentabilité financière mois par mois, identifiez les classes en difficulté ou les matières posant problème. Ces statistiques poussées permettent à la direction de piloter l'établissement de manière proactive et non plus seulement réactive.",
    points: ['Analyse approfondie du taux de réussite par niveau et par matière', 'Rapports financiers détaillés et prévisions de trésorerie', "Suivi démographique et évolution des effectifs pluriannuelle", 'Outils d\'aide à la décision stratégique pour la direction'],
    color: '#818CF8',
  },
  {
    id: 'parametres', icon: <Settings size={20}/>, label: 'Paramètres',
    title: 'Configuration Centrale de l\'Établissement',
    description: "Parce que chaque école est unique, Guinée École s'adapte à vos propres règles et non l'inverse. Le module de configuration est le cœur du moteur logiciel. Il vous permet de moduler en profondeur le comportement de l'application : système de notation national ou international, gestion fine des droits d'accès des différents employés (pour garantir la confidentialité des données), structure de l'établissement et personnalisation esthétique (logo, en-têtes officiels). Cliquez sur les sous-modules à gauche pour explorer l'étendue des paramétrages.",
    points: ['Personnalisation complète de l\'identité visuelle et légale de l\'école', 'Définition des cycles, séries, et niveaux d\'enseignement', 'Moteur de règles pour les systèmes de notation et de calcul', 'Gestion granulaire de la sécurité et des droits d\'accès utilisateurs'],
    color: '#64748B',
  },
];

export const parametresSubFeatures = [
  { 
    id: 'param_ecole', icon: <Building2 size={20}/>, label: 'École', 
    title: 'Informations Officielles de l\'École', 
    description: 'La carte d\'identité numérique de votre établissement. Renseignez ici le nom officiel, la devise, les coordonnées de contact (téléphone, email, site web), l\'adresse physique complète et surtout le logo en haute résolution. Ces informations sont cruciales car elles seront automatiquement injectées en en-tête de tous les documents générés par le système (bulletins, reçus de paiement, attestations). La modification de ces données se répercute instantanément sur l\'ensemble de l\'application.', 
    points: ['Téléchargement et gestion du logo officiel de l\'école', 'Mise à jour centralisée des informations de contact et adresse', 'Configuration du nom du directeur pour les signatures automatiques'], 
    color: '#6366F1' 
  },
  { 
    id: 'param_annee', icon: <CalendarDays size={20}/>, label: 'Année scolaire', 
    title: 'Structuration de l\'Année Scolaire', 
    description: 'Prenez le contrôle du calendrier académique officiel de votre école. Ce sous-module vous permet de définir précisément la date de rentrée et la date de clôture de l\'année en cours. Surtout, c\'est ici que vous définissez le découpage pédagogique de votre établissement : choisissez entre un système trimestriel (3 périodes) ou semestriel (2 périodes), et fixez les dates de début et de fin pour chaque évaluation. Ce paramétrage impacte directement la génération des bulletins.', 
    points: ['Définition des dates officielles d\'ouverture et de fermeture', 'Choix du découpage pédagogique (Trimestriel vs Semestriel)', 'Processus sécurisé de clôture d\'année et de passage à l\'année suivante'], 
    color: '#10B981' 
  },
  { 
    id: 'param_cycles', icon: <ArrowLeftRight size={20}/>, label: 'Cycles & Niveaux', 
    title: 'Arborescence Pédagogique (Cycles & Niveaux)', 
    description: 'Structurez hiérarchiquement votre offre éducative. Commencez par définir vos grands cycles d\'enseignement (ex: Maternelle, Primaire, Collège, Lycée). Ensuite, à l\'intérieur de chaque cycle, définissez les séries ou filières (ex: Sciences Expérimentales, Sciences Mathématiques, Sciences Sociales). Enfin, configurez les niveaux d\'études spécifiques (ex: 7ème Année, Terminale). Cette architecture robuste garantit que le logiciel épouse parfaitement le modèle du système éducatif guinéen.', 
    points: ['Création illimitée de cycles d\'enseignement (Primaire, Secondaire...)', 'Définition des options, filières et séries spécifiques', 'Organisation hiérarchique stricte des niveaux d\'études'], 
    color: '#F59E0B' 
  },
  { 
    id: 'param_notation', icon: <ListOrdered size={20}/>, label: 'Système de notation', 
    title: 'Paramétrage du Système de Notation', 
    description: 'L\'évaluation des élèves obéit à des règles strictes qui peuvent varier d\'une institution à l\'autre. Définissez ici votre référentiel d\'évaluation : notez-vous sur une base de 10, de 20 ou de 100 ? Quelle est la note minimale exigée pour valider une matière (ex: 10/20 ou 5/10) ? Vous pouvez également personnaliser l\'échelle des mentions (Passable, Assez-Bien, Bien, Très Bien, Excellent) et ajuster les seuils correspondants. Tout le moteur de calcul du logiciel se basera sur ces règles absolues.', 
    points: ['Choix de la base de notation globale (sur 10, sur 20, sur 100)', 'Définition de la note de passage (seuil de validation)', 'Configuration sur-mesure de l\'échelle des mentions scolaires'], 
    color: '#8B5CF6' 
  },
  { 
    id: 'param_planification', icon: <CalendarCheck size={20}/>, label: 'Planification', 
    title: 'Planification & Calendrier', 
    description: 'Le moteur indispensable pour la génération de vos emplois du temps. Configurez ici le rythme hebdomadaire de votre école : quels sont les jours ouvrables (du lundi au vendredi, avec ou sans le samedi matin) ? Définissez la grille horaire standard (ex: cours de 55 minutes, récréation de 10h00 à 10h15). Vous pouvez également importer le calendrier national des jours fériés afin de vous assurer qu\'aucun cours ne soit planifié par erreur lors des fêtes nationales ou religieuses.', 
    points: ['Sélection des jours ouvrables de la semaine', 'Configuration de la grille horaire des sonneries et récréations', 'Intégration du calendrier des jours fériés nationaux'], 
    color: '#EC4899' 
  },
  { 
    id: 'param_texte', icon: <Type size={20}/>, label: 'Texte & Lettre', 
    title: 'Modèles de Textes & Mentions Légales', 
    description: 'Un outil puissant pour unifier la communication officielle de l\'école. Ce module vous permet d\'éditer les textes standards qui seront pré-imprimés sur tous vos documents. Que ce soit le texte de pied de page figurant sur les reçus de paiement (ex: "Les frais versés ne sont pas remboursables"), les citations inspirantes en bas des bulletins, ou les mentions légales réglementaires. Gagnez un temps précieux en ne tapant ces textes qu\'une seule fois pour toute l\'année.', 
    points: ['Personnalisation des mentions légales sur les factures et reçus', 'Édition des en-têtes et pieds de page des bulletins scolaires', 'Création de modèles standards de lettres aux parents'], 
    color: '#06B6D4' 
  },
  { 
    id: 'param_calcul', icon: <Sigma size={20}/>, label: 'Méthodes de calcul', 
    title: 'Règles et Méthodes de Calcul', 
    description: 'L\'algorithme central du logiciel est entre vos mains. Configurez le comportement mathématique du système lors du calcul des moyennes trimestrielles et annuelles. Souhaitez-vous appliquer une moyenne strictement arithmétique ou pondérée par les coefficients des matières ? Comment le logiciel doit-il gérer les arrondis (au dixième supérieur, au centième) ? Vous pouvez même configurer des règles d\'exclusion spécifiques (ex: une note de zéro éliminatoire dans une matière majeure).', 
    points: ['Sélection de la méthode de calcul (Arithmétique ou Pondérée)', 'Paramétrage de la précision des arrondis mathématiques', 'Configuration des règles de gestion des zéros éliminatoires'], 
    color: '#14B8A6' 
  },
  { 
    id: 'param_utilisateurs', icon: <Users size={20}/>, label: 'Utilisateurs', 
    title: 'Gestion des Accès et de la Sécurité', 
    description: 'La sécurité et la confidentialité de vos données scolaires sont primordiales. Ce module vous permet de créer des comptes pour tous les membres de votre administration (Directeur, Censeur, Surveillant Général, Comptable, Secrétaire). Le puissant système de contrôle d\'accès basé sur les rôles (RBAC) garantit que le comptable n\'a pas accès à la modification des notes, et que le censeur ne peut pas modifier les paiements. Chaque action effectuée dans le logiciel est tracée et associée à son auteur.', 
    points: ['Création de comptes utilisateurs avec mots de passe sécurisés', 'Attribution de rôles stricts et de permissions granulaires (RBAC)', 'Audit complet et journalisation (logs) des actions de chaque utilisateur'], 
    color: '#F97316' 
  },
];

export default function Fonctionnalites() {
  const [sidebarView, setSidebarView] = React.useState('main'); // 'main' | 'parametres'
  const [active, setActive] = React.useState('dashboard');
  
  const current = sidebarView === 'main' 
    ? features.find(f => f.id === active)
    : parametresSubFeatures.find(f => f.id === active) || features.find(f => f.id === 'parametres');

  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 70px)', paddingTop: '70px' }}>
      {/* Sidebar */}
      <aside style={{
        width: '260px', flexShrink: 0,
        background: 'var(--surface-color)',
        borderRight: '1px solid var(--surface-border)',
        position: 'sticky', top: '70px',
        height: 'calc(100vh - 70px)',
        overflowY: 'auto',
        padding: '1.5rem 0',
      }}>
        {sidebarView === 'main' ? (
          <>
            <div style={{ padding: '0 1rem 1rem', fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Modules
            </div>
            {features.map(f => (
              <button key={f.id} onClick={() => {
                if (f.id === 'parametres') {
                  setSidebarView('parametres');
                  setActive('param_ecole');
                } else {
                  setActive(f.id);
                }
              }} style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.75rem 1rem', border: 'none', cursor: 'pointer', textAlign: 'left',
                background: active === f.id ? `${f.color}18` : 'none',
                borderLeft: active === f.id ? `3px solid ${f.color}` : '3px solid transparent',
                color: active === f.id ? f.color : 'var(--text-muted)',
                fontWeight: active === f.id ? 700 : 500,
                fontSize: '0.9rem',
                transition: 'all 0.2s',
              }}>
                <span style={{ color: active === f.id ? f.color : 'var(--text-muted)', flexShrink: 0 }}>{f.icon}</span>
                {f.label}
                {f.id === 'parametres' ? (
                  <ChevronRight size={14} style={{ marginLeft: 'auto' }} />
                ) : (
                  active === f.id && <ChevronRight size={14} style={{ marginLeft: 'auto' }} />
                )}
              </button>
            ))}
          </>
        ) : (
          <>
            <div style={{ padding: '0 1rem 1.5rem', fontSize: '0.85rem', fontWeight: 800, color: '#818CF8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              PARAMÈTRES
            </div>
            <button onClick={() => { setSidebarView('main'); setActive('parametres'); }} style={{
              width: '100%', display: 'flex', alignItems: 'center', gap: '0.75rem',
              padding: '0.75rem 1rem', border: 'none', cursor: 'pointer', textAlign: 'left',
              background: 'none', borderLeft: '3px solid transparent', color: '#EF4444',
              fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem'
            }}>
              <ArrowLeft size={18} style={{ flexShrink: 0 }} />
              Retour
            </button>
            
            {parametresSubFeatures.map(f => (
              <button key={f.id} onClick={() => setActive(f.id)} style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.75rem 1rem', border: 'none', cursor: 'pointer', textAlign: 'left',
                background: active === f.id ? `rgba(99, 102, 241, 0.15)` : 'none',
                borderLeft: active === f.id ? `3px solid ${f.color}` : '3px solid transparent',
                color: active === f.id ? f.color : 'var(--text-muted)',
                fontWeight: active === f.id ? 700 : 500,
                fontSize: '0.9rem',
                transition: 'all 0.2s',
              }}>
                <span style={{ color: active === f.id ? f.color : 'var(--text-muted)', flexShrink: 0 }}>{f.icon}</span>
                {f.label}
              </button>
            ))}
          </>
        )}
      </aside>

      {/* Content area */}
      <main style={{ flex: 1, overflowY: 'auto', padding: '3rem 4rem', maxWidth: '860px' }}>
        {current && (
          <div key={current.id} className="feature-content-enter">
            {/* Breadcrumb */}
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ cursor: 'pointer' }} onClick={() => { setSidebarView('main'); setActive('dashboard'); }}>Fonctionnalités</span>
              {sidebarView === 'parametres' && (
                <>
                  <ChevronRight size={12} />
                  <span style={{ cursor: 'pointer' }} onClick={() => { setSidebarView('main'); setActive('parametres'); }}>Paramètres</span>
                </>
              )}
              <ChevronRight size={12} />
              <span style={{ color: current.color, fontWeight: 700 }}>{current.label}</span>
            </div>

            {/* Icon + Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: `linear-gradient(135deg, ${current.color}20, ${current.color}10)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: current.color, flexShrink: 0, border: `1px solid ${current.color}30`, boxShadow: `0 8px 24px ${current.color}20` }}>
                {React.cloneElement(current.icon, { size: 32 })}
              </div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-main)', margin: 0, letterSpacing: '-0.03em' }}>
                {current.title}
              </h1>
            </div>

            {/* Divider */}
            <div style={{ height: '2px', background: `linear-gradient(90deg, ${current.color}, transparent)`, borderRadius: '4px', marginBottom: '2rem' }} />

            {/* Description */}
            <div style={{ padding: '2rem', background: 'rgba(30,41,59,0.4)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '3rem' }}>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8, margin: 0 }}>
                {current.description}
              </p>
            </div>

            {/* Key Points */}
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: current.color }}></span>
              Points clés
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '4rem' }}>
              {current.points.map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: 'var(--surface-color)', border: '1px solid var(--surface-border)', borderRadius: '1rem', padding: '1.25rem', transition: 'all 0.3s ease', cursor: 'default' }} onMouseOver={e => { e.currentTarget.style.borderColor = current.color; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 10px 20px ${current.color}15`; }} onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--surface-border)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: `${current.color}20`, color: current.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 800, fontSize: '0.8rem' }}>
                    {i + 1}
                  </div>
                  <span style={{ fontSize: '1rem', color: 'var(--text-main)', lineHeight: 1.6, fontWeight: 500 }}>{p}</span>
                </div>
              ))}
            </div>

            {/* Screenshot placeholder */}
            <div style={{ background: 'var(--surface-color)', border: '1px solid var(--surface-border)', borderRadius: '1.5rem', padding: '4rem 2rem', textAlign: 'center', color: 'var(--text-muted)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg, ${current.color}, transparent)` }}></div>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.8 }}>💻</div>
              <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Interface du module</div>
              <div style={{ fontSize: '0.95rem', maxWidth: '400px', margin: '0 auto' }}>L'intégration visuelle de <strong>{current.title}</strong> sera affichée ici pour une démonstration complète.</div>
            </div>

            {/* Navigation */}
            {sidebarView === 'main' && (
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', gap: '1rem' }}>
                {features.indexOf(current) > 0 && (
                  <button onClick={() => setActive(features[features.indexOf(current) - 1].id)}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--surface-color)', border: '1px solid var(--surface-border)', borderRadius: '0.75rem', padding: '0.75rem 1.5rem', cursor: 'pointer', color: 'var(--text-muted)', fontWeight: 600 }}>
                    ← {features[features.indexOf(current) - 1].label}
                  </button>
                )}
                {features.indexOf(current) < features.length - 1 && (
                  <button onClick={() => {
                      const nextId = features[features.indexOf(current) + 1].id;
                      if (nextId === 'parametres') {
                        setSidebarView('parametres');
                        setActive('param_ecole');
                      } else {
                        setActive(nextId);
                      }
                    }}
                    style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', background: `${current.color}18`, border: `1px solid ${current.color}40`, borderRadius: '0.75rem', padding: '0.75rem 1.5rem', cursor: 'pointer', color: current.color, fontWeight: 700 }}>
                    {features[features.indexOf(current) + 1].label} →
                  </button>
                )}
              </div>
            )}
            
            {sidebarView === 'parametres' && (
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', gap: '1rem' }}>
                {parametresSubFeatures.indexOf(current) > 0 ? (
                  <button onClick={() => setActive(parametresSubFeatures[parametresSubFeatures.indexOf(current) - 1].id)}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--surface-color)', border: '1px solid var(--surface-border)', borderRadius: '0.75rem', padding: '0.75rem 1.5rem', cursor: 'pointer', color: 'var(--text-muted)', fontWeight: 600 }}>
                    ← {parametresSubFeatures[parametresSubFeatures.indexOf(current) - 1].label}
                  </button>
                ) : (
                  <button onClick={() => { setSidebarView('main'); setActive(features[features.length - 2].id); }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--surface-color)', border: '1px solid var(--surface-border)', borderRadius: '0.75rem', padding: '0.75rem 1.5rem', cursor: 'pointer', color: 'var(--text-muted)', fontWeight: 600 }}>
                    ← Analytique (Précédent)
                  </button>
                )}
                {parametresSubFeatures.indexOf(current) < parametresSubFeatures.length - 1 && (
                  <button onClick={() => setActive(parametresSubFeatures[parametresSubFeatures.indexOf(current) + 1].id)}
                    style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', background: `${current.color}18`, border: `1px solid ${current.color}40`, borderRadius: '0.75rem', padding: '0.75rem 1.5rem', cursor: 'pointer', color: current.color, fontWeight: 700 }}>
                    {parametresSubFeatures[parametresSubFeatures.indexOf(current) + 1].label} →
                  </button>
                )}
              </div>
            )}

          </div>
        )}
      </main>
    </div>
  );
}
