function generateSetup() {
    const projectName = document.getElementById('projectName').value.trim();
    const projectGoal = document.getElementById('projectGoal').value.trim();
    const techStack = document.getElementById('techStack').value.trim();
    const experience = document.getElementById('experience').value;

    if (!projectName || !projectGoal) {
        alert('⚠️ Remplis au minimum le nom du projet et ton objectif !');
        return;
    }

    // Simulate loading
    document.getElementById('generateBtn').disabled = true;
    document.getElementById('loading').classList.add('show');
    document.getElementById('output').classList.remove('show');

    setTimeout(() => {
        const prompt = generatePrompt(projectName, projectGoal, techStack, experience);
        document.getElementById('outputContent').textContent = prompt;
        document.getElementById('output').classList.add('show');
        document.getElementById('loading').classList.remove('show');
        document.getElementById('generateBtn').disabled = false;
    }, 1000);
}

function generatePrompt(name, goal, tech, level) {
    const levelText = {
        'debutant': 'Je suis débutant en développement web. Explique-moi chaque étape de manière simple et détaillée.',
        'intermediaire': 'Je connais les bases du développement web mais j\'ai besoin de guidance sur la structure.',
        'avance': 'Je suis à l\'aise avec le développement, concentre-toi sur l\'architecture et les bonnes pratiques.'
    };

    let prompt = `🎯 PROJET : ${name}

    📋 OBJECTIF :
    ${goal}

    👤 MON NIVEAU :
    ${levelText[level]}
    `;

                if (tech) {
                    prompt += `
    ⚙️ TECHNOLOGIES SOUHAITÉES :
    ${tech}
    `;
                }

                prompt += `
    🧠 CONTEXTE IMPORTANT :
    J'ai un TDAH et j'ai besoin d'une approche très structurée pour éviter de me sentir submergé et de recommencer le projet. Je travaille mieux avec :
    - Des micro-tâches de 15-30 minutes maximum
    - Des étapes séquentielles claires
    - Des points de victoire fréquents (commits)
    - Une roadmap visuelle et détaillée

    📝 CE DONT J'AI BESOIN :

    1. ROADMAP DÉTAILLÉE
    Crée-moi une roadmap découpée en micro-étapes numérotées.
    Chaque étape doit :
    - Être réalisable en 30 minutes maximum
    - Avoir un objectif clair et mesurable
    - Indiquer quels fichiers créer/modifier
    - Préciser ce qui sera commit à la fin

    Format : 
    [Étape X] Titre de l'étape (durée estimée)
    - Actions concrètes à faire
    - Fichiers concernés
    - Résultat attendu

    2. ARBORESCENCE COMPLÈTE
    Génère l'arborescence complète des fichiers et dossiers du projet.
    Inclus obligatoirement :
    ├── ROADMAP.md (la roadmap détaillée)
    ├── JOURNAL.md (pour noter mes victoires)
    ├── BLOCAGES.md (pour documenter mes difficultés)
    ├── TODO.md (tâche en cours + 3 prochaines)
    ├── README.md (description du projet)
    └── [structure du code]

    3. COMMANDES GIT DE DÉMARRAGE
    Donne-moi les commandes exactes pour :
    - Initialiser le repo
    - Créer le premier commit avec la structure
    - Configurer .gitignore si nécessaire

    4. TEMPLATE DE FICHIERS DE SUIVI
    Fournis-moi le contenu initial de :
    - ROADMAP.md (avec toutes les étapes numérotées)
    - TODO.md (template pour suivre ma progression)
    - JOURNAL.md (template pour noter mes sessions)
    - BLOCAGES.md (template pour documenter les difficultés)

    🎯 IMPORTANT :
    - Adapte la complexité à mon niveau
    - Découpe en VRAIES micro-tâches (pas des étapes vagues)
    - Donne des exemples concrets
    - Prévois des points de pause naturels`;

    return prompt;
}

function copyToClipboard() {
    const output = document.getElementById('outputContent').textContent;
    navigator.clipboard.writeText(output).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.textContent;
        btn.textContent = '✓ Copié !';
        btn.style.background = 'var(--accent)';
        btn.style.color = 'var(--bg)';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = 'var(--surface)';
            btn.style.color = 'var(--accent)';
        }, 2000);
    });
}