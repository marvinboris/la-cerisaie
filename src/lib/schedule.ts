const WEEKDAY_SLOTS = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
const SATURDAY_SLOTS = ['09:00', '10:00', '11:00', '12:00', '13:00']

/** Médecins indisponibles selon le jour de la semaine (0 = dimanche, 6 = samedi). */
const DOCTOR_DAY_OFF: Record<string, number[]> = {
  manga: [6],
}

/** `YYYY-MM-DD` -> jour de la semaine, sans décalage de fuseau (Date.parse ISO = UTC). */
export function dayOfWeek(isoDate: string): number | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate)
  if (!match) return null
  const [, year, month, day] = match
  return new Date(Number(year), Number(month) - 1, Number(day)).getDay()
}

export function slotsForDate(isoDate: string): string[] {
  const day = dayOfWeek(isoDate)
  if (day === null) return WEEKDAY_SLOTS
  if (day === 0) return []
  if (day === 6) return SATURDAY_SLOTS
  return WEEKDAY_SLOTS
}

export function isClosed(isoDate: string): boolean {
  return dayOfWeek(isoDate) === 0
}

export function isDoctorAvailable(doctorId: string, isoDate: string): boolean {
  const day = dayOfWeek(isoDate)
  if (day === null) return true
  return !(DOCTOR_DAY_OFF[doctorId] ?? []).includes(day)
}

export function availableDoctors<T extends { id: string }>(doctors: T[], isoDate: string): T[] {
  return doctors.filter((d) => isDoctorAvailable(d.id, isoDate))
}
