# bc. — Guide d'usage du logo

## 1. Le logo
- **Idée** : la panse du **b** s'ouvre en **c**, et un point doré se loge dans l'ouverture : « bc. ». Le point final, c'est ce qui est terminé et publié.
- **Versions** : horizontale (principale) · verticale · symbole seul · nom seul
- **Construction** : un cercle R72 au trait 40, une tige de 40, une ouverture à ±45°, un point de rayon 20 posé sur l'axe du trait (grille 256).

| Fichier | Usage |
|---|---|
| `masters/bc-horizontal(-dark).svg` | Signature principale : site, documents, réseaux |
| `masters/bc-stacked(-dark).svg` | Formats carrés ou étroits |
| `masters/bc-symbol(-dark).svg` | Symbole seul, à partir de 32 px |
| `masters/bc-symbol-small(-dark).svg` | **Version petite taille** (trait plus épais, ouverture plus grande), en dessous de 32 px |
| `masters/bc-wordmark(-dark).svg` | Nom seul, quand le symbole est déjà présent ailleurs |
| `exports/symbol/` | Noir, blanc, or, carré, icône d'app, favicon, PNG |
| `exports/lockups/` | Lockups en noir, blanc, or profond, plus PNG 1200 px |
| `exports/og-image.png` | Image de partage 1200 × 630 |

`-dark` = pour fond sombre (lettre papier, point doré). Sans suffixe = pour fond clair (lettre encre, point or profond).

## 2. Zone de protection
Garder autour du logo un espace libre d'**un diamètre du point** (le point doré) sur tous les côtés. Cette zone suit la taille du logo : ce n'est jamais une distance fixe.

## 3. Taille minimale
| Version | Écran |
|---|---|
| Horizontale | 120 px de large |
| Verticale | 64 px de large |
| Symbole | 32 px (master), **16 px avec `bc-symbol-small`** |

## 4. Couleurs
| Nom | HEX | RGB | CMJN (approx.) | Rôle |
|---|---|---|---|---|
| Encre | `#0b0b0c` | 11 · 11 · 12 | 8 / 8 / 0 / 95 | Fond principal, lettre sur fond clair |
| Papier | `#f3efe6` | 243 · 239 · 230 | 0 / 2 / 5 / 5 | Lettre sur fond sombre |
| Doré | `#f5c542` | 245 · 197 · 66 | 0 / 20 / 73 / 4 | Le point, **sur fond sombre uniquement** |
| Or profond | `#a87b0a` | 168 · 123 · 10 | 0 / 27 / 94 / 34 | Le point sur fond clair |

Les valeurs CMJN sont des conversions approximatives : à faire valider par l'imprimeur avant toute impression.

**Contrastes** : doré sur encre 12,1:1 · or profond sur blanc 3,8:1 (au-dessus du minimum de 3:1 pour un élément graphique). Le doré sur fond blanc (1,6:1) est trop pâle : utiliser l'or profond.

**Associations autorisées** : papier + doré sur encre · encre + or profond sur blanc ou papier · tout noir · tout blanc sur fond sombre ou photo calme.

## 5. Typographie
- Nom et titres : **Bricolage Grotesque** ExtraBold (800), taille optique 96, approche −3 %
- Accents éditoriaux : Instrument Serif italique · Labels et code : JetBrains Mono
- Licences : SIL Open Font License (usage en logo autorisé). Dans les fichiers du logo, le nom est **vectorisé** (tracés), il ne dépend d'aucune police installée.

## 6. À ne pas faire
Ne pas déformer · ne pas recolorer hors palette · ne pas mettre le point doré clair sur fond blanc · ne pas tourner · ne pas ajouter d'ombre, de contour, de dégradé ni d'effet · ne pas déplacer ou redimensionner le point indépendamment de la lettre · ne pas utiliser le master en dessous de 32 px (prendre la version petite taille) · ne pas retaper le nom au clavier à la place du fichier vectorisé.

## 7. Notes
- Les fichiers ont été générés avec le skill `logo-design` (concepts, audit SVG, exports) et vérifiés au rendu à 16, 24, 32, 64 px et plus, sur fond clair et sombre.
- `presentation.html` : planche de présentation avec mises en situation (icône d'app, site, onglet, README, profil, sticker).
- Je ne peux pas garantir la disponibilité du logo comme marque déposée : une recherche d'antériorité (INPI / EUIPO, recherche d'image inversée) est recommandée avant tout usage commercial.
