/**
 * csvParser.js
 * Utilitaire de parsing CSV pour les trois feuilles d'import.
 * Pas de dépendance externe — parsing manuel léger.
 */

/**
 * Parse un fichier CSV en tableau d'objets.
 * Gère les valeurs entre guillemets avec virgules internes.
 * @param {string} text  — contenu brut du fichier
 * @param {string} [separator=',']
 * @returns {Object[]}
 */
export function parseCsv(text, separator = ',') {
  const lines = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n')
  if (lines.length < 2) return []

  const headers = splitCsvLine(lines[0], separator).map(h => h.trim())
  const rows = []

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) continue

    const values = splitCsvLine(line, separator)
    const obj = {}
    headers.forEach((header, idx) => {
      obj[header] = values[idx] !== undefined ? values[idx].trim() : ''
    })
    rows.push(obj)
  }

  return rows
}

/**
 * Split une ligne CSV en tenant compte des guillemets.
 * @param {string} line
 * @param {string} sep
 * @returns {string[]}
 */
function splitCsvLine(line, sep) {
  const result = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (char === sep && !inQuotes) {
      result.push(current)
      current = ''
    } else {
      current += char
    }
  }

  result.push(current)
  return result
}

/**
 * Lit un File et retourne son contenu texte.
 * @param {File} file
 * @returns {Promise<string>}
 */
export function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = e => resolve(e.target.result)
    reader.onerror = () => reject(new Error(`Impossible de lire le fichier "${file.name}"`))
    reader.readAsText(file, 'UTF-8')
  })
}

/**
 * Valide que les colonnes requises sont présentes dans les headers (insensible à la casse).
 * @param {Object[]} rows
 * @param {string[]} requiredColumns
 * @returns {{ valid: boolean, missing: string[] }}
 */
export function validateColumns(rows, requiredColumns) {
  if (rows.length === 0) return { valid: false, missing: requiredColumns }
  
  const actualKeys = Object.keys(rows[0]).map(k => k.toLowerCase())
  const missing = requiredColumns.filter(col => !actualKeys.includes(col.toLowerCase()))
  
  return { valid: missing.length === 0, missing }
}

/**
 * Retourne une version de la ligne dont les clés sont normalisées selon une liste de clés cibles.
 * Permet d'ignorer la casse des en-têtes CSV.
 * @param {Object} row
 * @param {string[]} targetKeys
 * @returns {Object}
 */
export function normalizeRow(row, targetKeys) {
  const normalized = {}
  const rowKeys = Object.keys(row)
  
  targetKeys.forEach(target => {
    const foundKey = rowKeys.find(rk => rk.toLowerCase() === target.toLowerCase())
    normalized[target] = foundKey ? row[foundKey] : undefined
  })
  
  // Conserver les clés originales qui ne sont pas dans targetKeys (optionnel)
  rowKeys.forEach(rk => {
    if (!targetKeys.some(tk => tk.toLowerCase() === rk.toLowerCase())) {
      normalized[rk] = row[rk]
    }
  })

  return normalized
}

/**
 * Supprime les lignes exactement identiques (toutes colonnes confondues).
 * Compare chaque ligne par sérialisation JSON triée par clés.
 * @param {Object[]} rows
 * @returns {{ unique: Object[], duplicatesRemoved: number }}
 */
export function deduplicateRows(rows) {
  const seen = new Set()
  const unique = []

  for (const row of rows) {
    // Sérialisation déterministe (clés triées) pour comparaison exacte
    const key = JSON.stringify(
      Object.keys(row).sort().reduce((acc, k) => { acc[k] = row[k]; return acc }, {})
    )
    if (!seen.has(key)) {
      seen.add(key)
      unique.push(row)
    }
  }

  return { unique, duplicatesRemoved: rows.length - unique.length }
}
