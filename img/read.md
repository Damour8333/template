   Ah je comprends ! Vous voulez **créer une nouvelle branche** pour votre version Bootstrap, tout en gardant votre version Vanilla (HTML/CSS pur) intacte sur `main`.

---

## Créer une branche pour Bootstrap

```bash
# 1. Vérifier que vous êtes sur main
git branch

# 2. Créer et basculer sur une nouvelle branche "bootstrap"
git checkout -b bootstrap

# 3. Faire vos modifications (ajouter Bootstrap, etc.)

# 4. Sauvegarder vos changements
git add .
git commit -m "Version avec Bootstrap"

# 5. Pousser la nouvelle branche sur GitHub
git push -u origin bootstrap
```

---

## Structure de vos branches

| Branche | Contenu |
|---------|---------|
| `main` | Version Vanilla (HTML/CSS pur) - ✅ protégée |
| `bootstrap` | Version avec Bootstrap - 🆕 en cours |

---

## Pour passer d'une branche à l'autre

```bash
# Revenir sur la version Vanilla
git checkout main

# Aller sur la version Bootstrap
git checkout bootstrap
```

---

## Récapitulatif des commandes

| Action | Commande |
|--------|----------|
| Créer + changer de branche | `git checkout -b nom-branche` |
| Changer de branche | `git checkout nom-branche` |
| Voir les branches | `git branch` |
| Voir les branches sur GitHub | `git branch -r` |

---

**Votre `main` reste intacte**, vous pouvez expérimenter Bootstrap sans risque ! 🎉