# Installation GLPI 11 sur XAMPP (Windows) — accès via `http://localhost/glpi`

Ce document liste **toutes** les modifications nécessaires pour faire fonctionner
GLPI 11 sous XAMPP (Windows) avec le CSS correct et accessible à l'adresse
`http://localhost/glpi`.

- **Environnement** : Windows 11, XAMPP (Apache 2.4.58, PHP 8.2.12)
- **Chemin GLPI** : `C:\xampp\htdocs\glpi`
- **Dossier web réel de GLPI 11** : `C:\xampp\htdocs\glpi\public`

> ⚠️ GLPI 11 (basé sur Symfony) n'a plus sa racine web à la racine du projet :
> c'est le sous-dossier `public/` qui doit être servi par Apache.

---

## Vue d'ensemble des problèmes rencontrés

1. **CSS cassé** — les URLs CSS contenaient le chemin disque complet
   (`/glpi/C:/xampp/htdocs/glpi/public/css_compiled/...`).
   → Bug GLPI sous Windows (séparateurs `\` vs `/`).
2. **Erreur 500** (`Request exceeded the limit of 10 internal redirects`) sur les
   pages routées comme `/glpi/front/central.php`.
   → `mod_rewrite` ne sait pas recalculer le chemin de base derrière un `Alias`.

---

## 1. Configuration Apache — Alias vers `public/`

### Fichier créé : `C:\xampp\apache\conf\extra\glpi.conf`

```apache
# GLPI 11 - accès via http://localhost/glpi
# Le dossier web de GLPI 11 est le sous-dossier "public".
Alias /glpi "C:/xampp/htdocs/glpi/public"

<Directory "C:/xampp/htdocs/glpi/public">
    Options -Indexes +FollowSymLinks
    AllowOverride All
    Require all granted
    DirectoryIndex index.php
</Directory>

# Bloque l'accès web direct au code source de GLPI (hors public/)
<Directory "C:/xampp/htdocs/glpi/src">
    Require all denied
</Directory>
<Directory "C:/xampp/htdocs/glpi/config">
    Require all denied
</Directory>
<Directory "C:/xampp/htdocs/glpi/files">
    Require all denied
</Directory>
```

### Fichier modifié : `C:\xampp\apache\conf\httpd.conf`

Ajouter, juste après la ligne `Include conf/extra/httpd-vhosts.conf` :

```apache
# GLPI 11
Include conf/extra/glpi.conf
```

> L'`Alias` fait pointer l'URL `/glpi` **directement** sur le dossier `public/`.
> Ainsi GLPI calcule correctement `root_doc = /glpi` et charge le CSS depuis
> `/glpi/css_compiled/...` (qui existe physiquement dans `public/`).

---

## 2. Réécriture d'URL — `public/.htaccess`

### Fichier : `C:\xampp\htdocs\glpi\public\.htaccess`

```apache
RewriteEngine On

# Necessaire derriere un Alias Apache : indique a mod_rewrite le chemin
# d'URL de base, sinon la reecriture vers index.php part en boucle (erreur 500).
RewriteBase /glpi/

RewriteCond %{HTTP:Authorization} ^(.+)$
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP_AUTHORIZATION}]

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php [QSA,L]
```

> La ligne **`RewriteBase /glpi/`** est la clé : elle corrige l'erreur 500
> (boucle de redirections internes) qui survient derrière un `Alias`.

---

## 3. Correction d'un bug GLPI sous Windows (CSS)

### Fichier : `src\Glpi\Application\View\Extension\FrontEndAssetsExtension.php`

**Cause** : `GLPI_ROOT` vaut `C:\xampp\htdocs\glpi` (antislashs Windows) alors que le
chemin du CSS compilé est normalisé en slashs (`C:/xampp/.../public/...`). Le
`str_replace` du cœur de GLPI ne trouvait donc jamais le préfixe et laissait le
chemin disque complet dans l'attribut `href` des feuilles de style.

Dans la méthode `cssPath()` (≈ ligne 144) :

**Avant :**
```php
if (!$is_debug && file_exists($compiled_file)) {
    $path = str_replace($this->root_dir . '/public', '', $compiled_file);
```

**Après :**
```php
if (!$is_debug && file_exists($compiled_file)) {
    // Normalize the root dir separators to match $compiled_file (which is
    // already normalized to forward slashes), otherwise the prefix is not
    // stripped on Windows where GLPI_ROOT uses backslashes.
    $normalized_root = str_replace(DIRECTORY_SEPARATOR, '/', $this->root_dir);
    $path = str_replace($normalized_root . '/public', '', $compiled_file);
```

> ⚠️ **Attention** : c'est une modification du **cœur de GLPI**. Elle sera
> **écrasée lors d'une mise à jour** de GLPI. Il est recommandé de signaler ce
> bug sur https://github.com/glpi-project/glpi pour une correction officielle.

---

## 4. Fichier `.htaccess` racine (repli, non utilisé)

### Fichier : `C:\xampp\htdocs\glpi\.htaccess`

Grâce à l'`Alias`, ce fichier n'est **pas utilisé**. Il est corrigé (ajout du `$1`
qui manquait) uniquement comme repli si l'on retire un jour l'`Alias` :

```apache
# Avec l'Alias Apache vers /public, ce fichier n'est PAS utilisé.
# Conservé uniquement comme repli : redirige tout vers le dossier public/
# en préservant le chemin demandé (le $1 manquait dans la version initiale).
RewriteEngine On
RewriteRule ^$ public/ [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ public/$1 [L]
```

---

## 5. Étapes finales

1. **Vider le cache GLPI** :
   ```powershell
   cd C:\xampp\htdocs\glpi
   C:\xampp\php\php.exe bin/console cache:clear
   ```

2. **Redémarrer Apache** depuis le panneau de contrôle XAMPP (Stop puis Start).

3. **Vérifier l'URL de l'application** dans GLPI :
   `Configuration → Générale → URL de l'application` = `http://localhost/glpi`

4. Dans le navigateur : ouvrir `http://localhost/glpi` puis faire **Ctrl + F5**
   (vidage du cache navigateur) pour recharger le CSS.

---

## 6. Récapitulatif des fichiers

| Fichier | Action |
|---|---|
| `C:\xampp\apache\conf\extra\glpi.conf` | **Créé** — Alias `/glpi` → `public/` + protections |
| `C:\xampp\apache\conf\httpd.conf` | **Modifié** — `Include conf/extra/glpi.conf` |
| `public\.htaccess` | **Modifié** — ajout de `RewriteBase /glpi/` |
| `src\Glpi\Application\View\Extension\FrontEndAssetsExtension.php` | **Modifié** — normalisation des séparateurs (bug Windows CSS) |
| `.htaccess` (racine) | **Modifié** — ajout du `$1` (repli non utilisé) |

---

## 7. Important à retenir

- GLPI étant dans le sous-dossier `/glpi`, **toutes les URLs prennent le préfixe
  `/glpi`** (c'est normal) :
  - Interface : `http://localhost/glpi`
  - API REST v2 / Swagger : `http://localhost/glpi/api.php/v2.3/doc`
  - API REST v1 : `http://localhost/glpi/apirest.php`
- Les liens **internes** générés par GLPI sont automatiquement corrects.
- Un 404 sur une URL **sans** `/glpi` est normal : il faut ajouter le préfixe.
<VirtualHost *:80>
    ServerName glpi.localhost
    DocumentRoot "C:/xampp/htdocs/glpi/public"

    <Directory "C:/xampp/htdocs/glpi/public">
        Require all granted
        
        RewriteEngine On
        # Assure que les en-têtes d'autorisation sont passés à PHP
        RewriteCond %{HTTP:Authorization} ^(.+)$
        RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP_AUTHORIZATION}]
        
        # Redirige toutes les requêtes vers le routeur de GLPI si le fichier n'existe pas
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteRule ^(.*)$ index.php [QSA,L]
    </Directory>
</VirtualHost>