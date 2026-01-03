# 🧠 Assistant Setup Projet TDAH

> Un outil web pour générer automatiquement la structure complète de tes projets de développement, optimisé pour les cerveaux TDAH.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TDAH Friendly](https://img.shields.io/badge/TDAH-Friendly-00ff88)](https://github.com)

## 🎯 Pourquoi cet outil ?

Si tu as un TDAH et que tu développes, tu connais probablement ces défis :
- 😰 Tu te sens perdu dès que le projet devient complexe
- 🔄 Tu recommences tout au moindre obstacle
- 📝 Tu oublies où tu en étais entre deux sessions
- 💥 Tu abandonnes par frustration face aux difficultés
- ⏱️ Tu as du mal à découper ton travail en tâches gérables

**Cet outil résout ces problèmes** en générant automatiquement une structure de projet qui :
- ✅ Externalise ta mémoire et ta planification
- ✅ Crée des points de reprise clairs
- ✅ Découpe tout en micro-tâches de 30 min max
- ✅ Te donne des victoires fréquentes (commits)
- ✅ T'empêche de te perdre

## 🚀 Utilisation

### En ligne
Ouvre simplement le fichier `index.html` dans ton navigateur (double-clic suffit)<br>
Ou clique sur 👉​ [assistant-setup-projet-tdah](https://thrvn.github.io/assistant-setup-projet-tdah/)

### Localement
```bash
# Clone le repo
git clone https://github.com/[ton-username]/tdah-dev-setup.git
cd tdah-dev-setup

# Ouvre le fichier HTML dans ton navigateur
open tdah-dev-setup.html  # macOS
xdg-open tdah-dev-setup.html  # Linux
start tdah-dev-setup.html  # Windows
```

## 📋 Comment ça marche

### 1. Remplis le formulaire
- **Nom du projet** : ex: `habit-tracker`
- **Objectif** : "Je veux créer un tracker d'habitudes pour suivre mes routines"
- **Technologies** (optionnel) : ex: "React + Tailwind"
- **Ton niveau** : Débutant / Intermédiaire / Avancé

### 2. Génère le prompt
L'outil crée automatiquement un prompt optimisé qui demande à l'IA de générer :
- 📊 Une roadmap détaillée en micro-étapes
- 📁 L'arborescence complète des fichiers
- 💾 Les commandes Git de démarrage
- 📝 Les templates de tous les fichiers de suivi

### 3. Copie et utilise
Copie le prompt généré et colle-le dans Claude, ChatGPT, ou ton IA préférée pour obtenir ta structure complète.

## 🗂️ Structure de projet générée

L'outil te guide pour créer ces fichiers essentiels :

```
mon-projet/
├── ROADMAP.md          # Ta carte au trésor - toutes les étapes
├── JOURNAL.md          # Tes sessions et victoires
├── BLOCAGES.md         # Tes difficultés et solutions
├── TODO.md             # Tâche en cours + 3 prochaines
├── README.md           # Description du projet
├── .gitignore          # Fichiers à ignorer
└── src/                # Ton code
```

### Pourquoi ces fichiers ?

| Fichier | Rôle pour ton TDAH |
|---------|-------------------|
| `ROADMAP.md` | Évite de te perdre - tu sais toujours quelle est la prochaine étape |
| `JOURNAL.md` | Combat le syndrome de l'imposteur - preuve de tes victoires |
| `BLOCAGES.md` | Documente tes difficultés pour ne pas boucler sur les mêmes problèmes |
| `TODO.md` | Limite la charge cognitive - tu vois uniquement ce qui est important maintenant |

## 🎓 La méthode en 5 étapes

Cet outil s'appuie sur une méthode éprouvée pour le TDAH :

1. **Définir l'objectif** : Une phrase claire de ce que tu veux créer
2. **Générer la roadmap** : Découpage en micro-tâches avec l'IA
3. **Créer l'arborescence** : Tous les fichiers d'un coup
4. **Premier commit** : Point de sauvegarde zéro
5. **Routine de session** : Commit à chaque fin de session + résumé IA

➡️ **[Lire le guide complet](GUIDE.html)**

## 💡 Conseils d'utilisation

### Pour ton premier projet
- Choisis quelque chose de **MINUSCULE** (ex: un compteur en JavaScript)
- L'objectif est de **finir** pour la première fois
- Prouve à ton cerveau que tu peux terminer un projet

### À chaque session de dev
```bash
# Début de session
1. Ouvre ROADMAP.md
2. Lis ta prochaine micro-tâche
3. Lance un timer 25 min
4. Code sans distraction

# Fin de session
git add .
git commit -m "Ce que j'ai fait"
git push

# Demande à l'IA un résumé et la prochaine tâche
# Copie dans JOURNAL.md
```

### Quand tu veux tout recommencer
1. **STOP** - respire
2. Lis `JOURNAL.md` - tes victoires passées
3. Regarde `git log` - ta progression réelle
4. Crée une branche `experiment` au lieu de tout détruire
5. Pause 10 min, puis reviens

## 🛠️ Personnalisation

Le fichier HTML est facilement modifiable :
- **Styles** : Change les couleurs dans les variables CSS (`:root`)
- **Prompts** : Modifie la fonction `generatePrompt()` pour adapter les instructions
- **Champs** : Ajoute des inputs supplémentaires selon tes besoins

## 🤝 Contribution

Les contributions sont les bienvenues ! Quelques idées :
- 🌍 Traductions (anglais, espagnol, etc.)
- 🎨 Thèmes alternatifs (clair/sombre)
- ✨ Nouvelles fonctionnalités
- 📝 Amélioration de la documentation
- 🐛 Corrections de bugs

```bash
# Fork le projet
# Crée une branche
git checkout -b feature/ma-fonctionnalite

# Commit tes changements
git commit -m "Ajout de ma fonctionnalité"

# Push et crée une Pull Request
git push origin feature/ma-fonctionnalite
```

## 📚 Ressources complémentaires

- [Guide pratique complet](GUIDE-README.html) - Toute la méthode expliquée en détail
- [How to ADHD](https://www.youtube.com/howtoadhd) - Chaîne YouTube sur le TDAH
- [ADHD Programmers](https://www.reddit.com/r/ADHD_Programmers/) - Communauté Reddit

## 🙏 Remerciements

Cette méthode a été créée à partir de :
- Recherches sur le TDAH et la fonction exécutive
- Retours d'expérience de développeurs TDAH
- Techniques de productivité adaptées au TDAH
- Meilleures pratiques de gestion de projet

## 📄 Licence

MIT License - Tu es libre de l'utiliser, le modifier, et le partager.

## 💬 Feedback

Si cet outil t'aide, n'hésite pas à :
- ⭐ Star le repo
- 🐛 Signaler des bugs dans les Issues
- 💡 Proposer des améliorations
- 🔄 Le partager avec d'autres devs TDAH

---

<div align="center">

**Tu n'es pas nul. Ton cerveau fonctionne différemment, et cet outil est conçu pour ça.**

Créé avec 💚 pour la communauté des développeurs TDAH

</div>