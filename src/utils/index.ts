export default function getNextRevisionDate(
  useType: string,
  plate: string,
  fabricationYear: string
) {
  if (!useType || !plate || !fabricationYear) return '-'

  const now = new Date()
  let nextRevision

  let frecuencia;
  if (useType === 'particular') {
    frecuencia = 12
  } else if (useType === 'servicio') {
    frecuencia = 6
  } else {
    frecuencia = 4
  }

  const yearsFromFabrication = now.getFullYear() - Number(fabricationYear)
  if (yearsFromFabrication < 0) {
    return '-'
  } else if (yearsFromFabrication < 3) {
    nextRevision = new Date(now.getFullYear(), 0, 1)
  } else {
    if (frecuencia === 4) {
      const lastPLateDigit = Number(plate.slice(-1))
      nextRevision = new Date(now.getFullYear(), lastPLateDigit, 1)
    } else {
      nextRevision = new Date(now.getFullYear() + Math.floor(now.getMonth() / frecuencia), now.getMonth() + frecuencia, 1)
    }
  }

  const day = nextRevision.getDate()
  const month = nextRevision.toLocaleString('es-ES', { month: 'long' })
  const year = nextRevision.getFullYear()

  return `${day} del ${month} del ${year}`
}