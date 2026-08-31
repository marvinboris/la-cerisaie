/**
 * Check runnable : `npx tsx src/lib/schedule.check.ts`
 * ponytail: assert nu, pas de framework de test pour trois règles d'horaires.
 */
import assert from 'node:assert/strict'
import { slotsForDate, isClosed, availableDoctors } from './schedule'

const DOCTORS = [{ id: 'manga' }, { id: 'mouen' }, { id: 'mbia' }]

// 2026-09-05 = samedi, 2026-09-08 = mardi, 2026-09-06 = dimanche
const SATURDAY = '2026-09-05'
const TUESDAY = '2026-09-08'
const SUNDAY = '2026-09-06'

assert.deepEqual(slotsForDate(SATURDAY), ['09:00', '10:00', '11:00', '12:00', '13:00'])
assert.equal(slotsForDate(TUESDAY).length, 9)
assert.deepEqual(slotsForDate(SUNDAY), [])

assert.equal(isClosed(SUNDAY), true)
assert.equal(isClosed(SATURDAY), false)

assert.deepEqual(availableDoctors(DOCTORS, SATURDAY).map((d) => d.id), ['mouen', 'mbia'])
assert.deepEqual(availableDoctors(DOCTORS, TUESDAY).map((d) => d.id), ['manga', 'mouen', 'mbia'])

// date vide (aucune date choisie) : on n'ampute rien
assert.equal(slotsForDate('').length, 9)
assert.equal(availableDoctors(DOCTORS, '').length, 3)

console.log('schedule OK')
