/**
 * Pathology page content (EN).
 * ⚠️ BASELINE MEDICAL CONTENT — MUST BE VALIDATED BY LA CERISAIE'S PHYSICIANS
 * BEFORE GOING LIVE. Informational only, not a substitute for a consultation.
 * Must stay structurally identical to `pathologies.fr.ts`.
 */

import type { PathologyContent } from './pathologies.fr'

const pathologies: Record<string, PathologyContent> = {
  glaucoma: {
    name: 'Glaucoma',
    short: 'Optic nerve disease linked to eye pressure — silent until an advanced stage.',
    tag: 'Condition',
    title: '',
    accent: 'Glaucoma',
    heroDesc:
      'Glaucoma is a progressive disease of the optic nerve, most often linked to raised intraocular pressure. It develops without pain or symptoms for years: regular screening is the only way to catch it in time.',
    intro:
      'Glaucoma covers several conditions that slowly destroy the optic nerve fibres. Vision loss starts at the edge of the visual field and works inwards. The damage is irreversible, but treatment started early stabilises the disease in the vast majority of cases. In Cameroon, glaucoma is a leading cause of avoidable blindness: screening from age 40, and earlier with a family history, is decisive.',
    symptomsTitle: 'Warning signs',
    symptoms: [
      'No symptoms at all for years — the most common presentation',
      'Gradual narrowing of side vision',
      'Bumping into objects, repeated trips or falls',
      'Intermittent blurred vision, coloured halos around lights',
      'Severe eye pain, red eye, nausea and sudden vision loss — acute glaucoma, a true emergency',
    ],
    causesTitle: 'Risk factors',
    causes: [
      'Raised intraocular pressure',
      'Family history of glaucoma — risk rises sharply with an affected first-degree relative',
      'Age over 40',
      'African descent — earlier onset and faster progression',
      'High myopia, diabetes, high blood pressure',
      'Long-term steroid use, including eye drops and ointments',
      'Previous eye injury',
    ],
    diagnosisTitle: 'How we diagnose it',
    diagnosis:
      'Diagnosis never rests on a single test. We measure intraocular pressure, examine the optic nerve and map the visual field. OCT measures nerve fibre thickness and detects damage before the patient notices anything. The full work-up is done in a single visit.',
    exams: [
      'Tonometry — intraocular pressure measurement',
      'Fundus and optic disc examination',
      'Automated visual field test (perimetry)',
      'Optic nerve OCT — nerve fibre analysis',
      'Gonioscopy — examination of the drainage angle',
      'Pachymetry — corneal thickness measurement',
    ],
    treatmentsTitle: 'Treatment',
    treatments: [
      {
        title: 'Pressure-lowering eye drops',
        desc: 'First-line treatment. One or more drops a day lower intraocular pressure. Daily adherence is the single biggest factor in outcome: treatment continues for life.',
      },
      {
        title: 'Laser (trabeculoplasty, iridotomy)',
        desc: 'A few minutes as an outpatient. Laser improves fluid drainage or relieves a blocked angle. It can replace or supplement drops.',
      },
      {
        title: 'Filtering surgery',
        desc: 'Offered when pressure stays too high despite drops and laser. It creates a new drainage channel for intraocular fluid.',
      },
      {
        title: 'Long-term monitoring',
        desc: 'Glaucoma is monitored for life. Pressure, visual field and OCT checks every 6 to 12 months depending on stage, so treatment is adjusted before any deterioration.',
      },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        q: 'Can glaucoma be cured?',
        a: 'No. Destroyed nerve fibres do not grow back. However, well-followed treatment halts progression: the goal is to preserve remaining vision, which is achieved in the great majority of cases caught in time.',
      },
      {
        q: 'From what age should I be screened?',
        a: 'From 40, every two years. From 30 and yearly with a direct family history, high myopia or diabetes.',
      },
      {
        q: 'Are the drops for life?',
        a: 'In most cases, yes. Stopping them raises pressure within days and restarts optic nerve damage — without you feeling a thing.',
      },
      {
        q: 'Does glaucoma always lead to blindness?',
        a: 'No, provided it is detected and treated. Blindness affects glaucoma found late or treatment that was abandoned.',
      },
    ],
  },

  keratoconus: {
    name: 'Keratoconus',
    short: 'Progressive corneal deformation — the cornea thins and bulges into a cone shape.',
    tag: 'Condition',
    title: '',
    accent: 'Keratoconus',
    heroDesc:
      'Keratoconus deforms the cornea, which thins and bulges into a cone. Vision becomes blurred and distorted, poorly corrected by ordinary glasses. Caught early, it can be stabilised for good.',
    intro:
      'Keratoconus mainly affects teenagers and young adults. The normally spherical cornea loses its rigidity, thins and deforms, producing an irregular astigmatism that ordinary lenses cannot correct properly. It is usually bilateral and asymmetric. The priority is to stabilise the deformation before it forces a corneal graft.',
    symptomsTitle: 'Warning signs',
    symptoms: [
      'Blurred, distorted vision that glasses no longer correct well',
      'Frequent prescription changes, rapidly increasing astigmatism',
      'Double images, halos and glare at night',
      'Increased light sensitivity',
      'Repeated eye rubbing, often alongside allergy',
    ],
    causesTitle: 'Risk factors',
    causes: [
      'Chronic eye rubbing — the best-established aggravating factor',
      'Allergic background: allergic conjunctivitis, eczema, asthma',
      'Family history of keratoconus',
      'Age 15 to 30, when the disease progresses fastest',
      'Certain genetic conditions (Down syndrome, Marfan syndrome)',
    ],
    diagnosisTitle: 'How we diagnose it',
    diagnosis:
      'Corneal topography is the key test: it maps corneal curvature and thickness and detects keratoconus long before vision deteriorates. It also tracks progression between visits, which determines whether cross-linking is indicated.',
    exams: [
      'Corneal topography — curvature mapping',
      'Pachymetry — corneal thickness',
      'Refraction and best-corrected visual acuity',
      'Slit-lamp examination',
      'Anterior segment OCT',
    ],
    treatmentsTitle: 'Treatment',
    treatments: [
      {
        title: 'Stopping eye rubbing',
        desc: 'The first, non-negotiable measure. Treating the underlying allergy and breaking the rubbing habit slows progression on its own.',
      },
      {
        title: 'Rigid or specialty contact lenses',
        desc: 'Rigid gas-permeable lenses recreate a regular optical surface and restore sharp vision where glasses fail.',
      },
      {
        title: 'Corneal cross-linking (CXL)',
        desc: 'The reference treatment for stabilising progressive keratoconus. Riboflavin and UV light strengthen the corneal collagen bonds. It does not restore lost vision but halts worsening.',
      },
      {
        title: 'Intracorneal ring segments',
        desc: 'Segments implanted within the cornea to regularise its shape and improve contact lens tolerance.',
      },
      {
        title: 'Corneal graft',
        desc: 'Reserved for advanced cases with a cornea too thin or too scarred, when other options are no longer enough.',
      },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        q: 'Does keratoconus cause blindness?',
        a: 'No. It severely degrades vision quality but does not cause complete blindness. Severe cases are treated with a corneal graft, which has good outcomes.',
      },
      {
        q: 'Will cross-linking improve my sight?',
        a: 'Its purpose is to stabilise, not to correct. Slight improvement is possible, but visual correction still comes from suitable glasses or contact lenses.',
      },
      {
        q: 'Can I have laser surgery to stop wearing glasses?',
        a: 'No. LASIK and PRK are strictly contraindicated in keratoconus: they thin the cornea further and worsen the deformation. This is exactly why topography is part of the pre-operative work-up for any refractive surgery.',
      },
      {
        q: 'Is it hereditary?',
        a: 'There is a familial predisposition. If a close relative is affected, topography screening in adolescence is recommended.',
      },
    ],
  },

  amd: {
    name: 'Retina & AMD',
    short: 'Retinal disease and age-related macular degeneration: central vision at stake.',
    tag: 'Condition',
    title: 'Retina &',
    accent: 'AMD',
    heroDesc:
      'The macula is the part of the retina responsible for fine vision: reading, recognising a face, driving. Damage to it — most commonly age-related macular degeneration after 50 — impairs central vision while sparing peripheral vision.',
    intro:
      'The retina lines the back of the eye and turns light into nerve signals. Its central part, the macula, handles detailed vision. Age-related macular degeneration (AMD) comes in two forms: the dry form, which progresses slowly, and the wet form, marked by abnormal vessel growth and rapid vision loss. The latter is an emergency: treated within weeks of onset, it can be stabilised or even improved.',
    symptomsTitle: 'Warning signs',
    symptoms: [
      'Straight lines appearing wavy or distorted',
      'A dark or blurred patch in the centre of vision',
      'Growing difficulty reading despite correct glasses',
      'Needing more and more light to read',
      'Altered perception of contrast and colour',
      'Sudden vision loss in one eye — seek care urgently',
    ],
    causesTitle: 'Risk factors',
    causes: [
      'Age over 50',
      'Smoking — the strongest modifiable factor',
      'Family history of AMD',
      'High blood pressure and cardiovascular disease',
      'Diabetes — a major cause of retinopathy',
      'Intense sun exposure without protection',
      'Diet low in antioxidants and omega-3',
    ],
    diagnosisTitle: 'How we diagnose it',
    diagnosis:
      'A dilated fundus examination, together with macular OCT, shows the retina layer by layer and distinguishes the dry form from the wet form. That distinction determines treatment. The Amsler grid, given to the patient, is used to self-monitor for distortion between visits.',
    exams: [
      'Dilated fundus examination',
      'Macular OCT — cross-sections of the retina',
      'Amsler grid — home self-monitoring',
      'Retinal photography',
      'Retinal angiography if needed',
    ],
    treatmentsTitle: 'Treatment',
    treatments: [
      {
        title: 'Intravitreal injections (anti-VEGF)',
        desc: 'The reference treatment for wet AMD. Given under local anaesthetic in the operating theatre, the injection halts abnormal vessel growth. The protocol involves several closely spaced injections then OCT-guided follow-up.',
      },
      {
        title: 'Supplements and lifestyle',
        desc: 'In the dry form: stopping smoking, sun protection, a diet rich in lutein, zeaxanthin and omega-3, and in some cases antioxidant supplementation to slow progression.',
      },
      {
        title: 'Retinal laser',
        desc: 'Used to treat certain peripheral lesions, retinal tears and complications of diabetic retinopathy.',
      },
      {
        title: 'Low-vision rehabilitation',
        desc: 'Optical aids and home adaptation to maintain independent reading and movement once central damage is established.',
      },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        q: 'Does AMD cause blindness?',
        a: 'It does not affect peripheral vision, so it does not cause blindness in the strict sense. Central vision, however, can be severely impaired, making reading and face recognition difficult.',
      },
      {
        q: 'Are eye injections painful?',
        a: 'The eye is anaesthetised with drops. The procedure takes seconds; patients describe pressure rather than pain. Mild discomfort and a red eye for a day or two are normal.',
      },
      {
        q: 'How often should I have a fundus exam after 50?',
        a: 'Every two years without risk factors, yearly with diabetes, high blood pressure, smoking or a family history of AMD.',
      },
      {
        q: 'I am diabetic — should I come in even without symptoms?',
        a: 'Yes, without fail and once a year. Diabetic retinopathy progresses silently for a long time and responds far better the earlier it is caught.',
      },
    ],
  },

  dryEye: {
    name: 'Dry eye',
    short: 'Tears insufficient in quantity or quality: irritation, burning and fluctuating vision.',
    tag: 'Condition',
    title: 'Dry',
    accent: 'eye',
    heroDesc:
      'The tear film protects and nourishes the eye surface. When it becomes insufficient or unstable, the cornea gets irritated: burning, a gritty feeling, vision that fluctuates through the day.',
    intro:
      'Dry eye is one of the most common reasons for consultation. It stems from two mechanisms, often combined: insufficient tear production, or overly fast evaporation caused by meibomian gland dysfunction. Hot climate, air conditioning, dust and long screen sessions all make it worse. It is not a trivial complaint: left untreated, it causes lasting damage to the corneal surface.',
    symptomsTitle: 'Warning signs',
    symptoms: [
      'Gritty or foreign-body sensation in the eyes',
      'Burning, stinging, red eyes at the end of the day',
      'Paradoxical watering — the eye waters precisely because it is dry',
      'Vision blurring intermittently and clearing on blinking',
      'Lids stuck together on waking, red and thickened lid margins',
      'Contact lens intolerance',
      'Rapid eye fatigue in front of a screen',
    ],
    causesTitle: 'Risk factors',
    causes: [
      'Prolonged screen work — blink rate halves',
      'Air conditioning, fans, dust, dry air',
      'Age and menopause',
      'Contact lens wear',
      'Blepharitis and meibomian gland dysfunction',
      'Medication: antihistamines, antidepressants, some blood pressure drugs',
      'Autoimmune disease (Sjögren syndrome)',
      'After refractive surgery',
    ],
    diagnosisTitle: 'How we diagnose it',
    diagnosis:
      'Slit-lamp examination assesses tear film stability, the state of the corneal surface and how the lid glands are working. Dyes reveal areas of corneal distress. The point is to identify the underlying mechanism, because treating dryness from poor tear production differs from treating dryness by evaporation.',
    exams: [
      'Slit-lamp examination',
      'Tear break-up time (BUT)',
      'Schirmer test — tear production',
      'Ocular surface staining',
      'Meibomian gland assessment',
    ],
    treatmentsTitle: 'Treatment',
    treatments: [
      {
        title: 'Tear substitutes',
        desc: 'Artificial tears matched to the underlying mechanism. Preservative-free formulas are preferred for several daily instillations, as preservatives themselves keep the irritation going.',
      },
      {
        title: 'Lid care',
        desc: 'Daily warm compresses and lid massage to restore meibomian gland flow. This is the mainstay treatment for evaporative dry eye and it demands consistency.',
      },
      {
        title: 'Fixing the environment',
        desc: 'Regular screen breaks, deliberate blinking, moving away from air-conditioning flow, staying hydrated. These simple measures relieve many patients on their own.',
      },
      {
        title: 'Anti-inflammatory treatment',
        desc: 'For stubborn cases, anti-inflammatory or immunomodulatory drops on prescription and under supervision.',
      },
      {
        title: 'Punctal plugs',
        desc: 'Small plugs placed in the tear ducts to keep tears on the eye surface, in severe dryness from poor production.',
      },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        q: 'Why do my eyes water if I am told they are dry?',
        a: 'It is a reflex. The irritated surface triggers production of poor-quality tears that run off without stabilising the tear film. Watering is a sign of dryness, not its opposite.',
      },
      {
        q: 'Can I use any eye drops from the pharmacy?',
        a: 'No. Drops that whiten the eye mask redness without treating the cause and make things worse over time. Preserved formulas should be avoided beyond a few instillations a day.',
      },
      {
        q: 'Is air conditioning really to blame?',
        a: 'Yes, very often in Douala. Airflow directed at the face speeds up tear film evaporation. Redirecting the vents makes a clear difference to comfort.',
      },
      {
        q: 'Can it be cured?',
        a: 'Chronic dry eye is controlled rather than cured. With the right treatment and regular lid care, day-to-day discomfort usually disappears.',
      },
    ],
  },

  strabismus: {
    name: 'Squint & amblyopia',
    short: 'Misaligned eyes and "lazy eye" in children: the earlier it is found, the better the outcome.',
    tag: 'Condition',
    title: 'Squint &',
    accent: 'amblyopia',
    heroDesc:
      'A child with a squint never complains: the brain suppresses the image from the deviated eye. Without treatment before age 6, that eye can permanently lose its ability to see.',
    intro:
      'A squint is a misalignment of the two eyes. In children it frequently leads to amblyopia: the brain ignores the image from the weaker eye, whose vision then stops developing. This loss is recoverable while the visual system is still plastic — up to roughly age 6 to 8. Beyond that, it becomes permanent. Early screening is therefore the only real treatment.',
    symptomsTitle: 'Warning signs',
    symptoms: [
      'One eye turning inwards or outwards, constantly or intermittently',
      'A child closing one eye in sunlight or tilting their head to focus',
      'Eyes not looking at the same spot in photographs',
      'Clumsiness, difficulty catching objects, frequent falls',
      'In adults: recent onset of double vision — seek care without delay',
      'Falling behind at school, tiredness or headaches when reading',
    ],
    causesTitle: 'Risk factors',
    causes: [
      'Family history of squint or amblyopia',
      'Uncorrected refractive error, particularly high hypermetropia',
      'Prematurity, low birth weight',
      'Large difference in prescription between the two eyes (anisometropia)',
      'Congenital cataract or another obstacle on the visual axis',
      'Neurological conditions',
    ],
    diagnosisTitle: 'How we diagnose it',
    diagnosis:
      'Examination is possible at any age, including in infants who cannot yet speak. It measures the angle of deviation, looks for amblyopia and requires refraction under cycloplegia — drops that block accommodation — without which the child\'s true optical correction stays hidden. Our orthoptist carries out the assessment and the rehabilitation.',
    exams: [
      'Age-appropriate visual acuity testing',
      'Refraction under cycloplegia',
      'Full orthoptic assessment',
      'Binocular vision and depth perception testing',
      'Fundus examination to rule out an organic cause',
    ],
    treatmentsTitle: 'Treatment',
    treatments: [
      {
        title: 'Optical correction',
        desc: 'Always the first step. Many childhood squints reduce markedly, sometimes disappear, simply with full-time wear of correctly calculated glasses.',
      },
      {
        title: 'Patching the dominant eye',
        desc: 'Covering the good eye forces the brain to use the amblyopic eye and restarts its development. Daily duration and follow-up are set by the ophthalmologist: this is the reference treatment for amblyopia.',
      },
      {
        title: 'Orthoptic rehabilitation',
        desc: 'Sessions training coordination between the two eyes and depth perception, delivered at the clinic by our orthoptist.',
      },
      {
        title: 'Eye muscle surgery',
        desc: 'Considered when the deviation persists despite optical correction. It realigns the eyes; it does not treat amblyopia, which must be addressed beforehand.',
      },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        q: 'At what age should my child have their eyes checked?',
        a: 'A first examination between 9 months and 1 year, a second around age 3, then before starting school. Immediately, at any age, if there is a visible deviation or a family history.',
      },
      {
        q: 'My baby squints sometimes — is that serious?',
        a: 'Intermittent deviation is normal before 4 months. Beyond that, or if constant, it must be examined without delay. A squint does not correct itself with age.',
      },
      {
        q: 'Is the eye patch really necessary?',
        a: 'Yes, and how well it works depends directly on how consistently it is worn. It is demanding for the family, but this is the treatment window: after age 6 to 8, vision in the amblyopic eye can no longer be recovered.',
      },
      {
        q: 'Is surgery purely cosmetic?',
        a: 'No. It restores alignment, which has a real functional and social impact. But recovering vision in the weaker eye depends on treating the amblyopia, done before surgery.',
      },
    ],
  },
  pterygium: {
    name: 'Pterygium',
    short: 'A fleshy growth of the conjunctiva that creeps onto the cornea, driven by sun and dust: very common in our climate.',
    tag: 'Condition',
    title: 'Pterygium,',
    accent: "the surfer's eye",
    heroDesc:
      'A pterygium is a triangular, fleshy growth of the conjunctiva that slowly advances towards the centre of the cornea. Benign but bothersome, it is very common in Cameroon because of exposure to sun, wind and dust.',
    intro:
      "Often called \"surfer's eye\", a pterygium usually grows from the nasal side of the white of the eye and then invades the cornea. It progresses in flare-ups, with episodes of redness and irritation. As long as it stays small, monitoring and eye drops are enough. Once it advances towards the visual axis or distorts the cornea, surgical removal becomes necessary. The modern technique, with a conjunctival autograft, greatly reduces the risk of recurrence.",
    symptomsTitle: 'Warning signs',
    symptoms: [
      'A pinkish-white, fleshy wedge advancing onto the cornea from the inner corner of the eye',
      'Redness and irritation, worse in sun, wind, dust and smoke',
      'Foreign-body sensation, burning or dryness',
      'Blurred or distorted vision as the lesion nears the centre of the eye (induced astigmatism)',
      'Cosmetic concern and chronic redness',
    ],
    causesTitle: 'Risk factors',
    causes: [
      'Prolonged ultraviolet exposure — outdoor work or activities without sunglasses',
      'Hot, dry, windy and dusty climate',
      'Smoke, pollution and chronic irritation of the ocular surface',
      'Untreated dry eye',
      'Family history of pterygium',
      'Age: onset most often between 20 and 50',
    ],
    diagnosisTitle: 'How we diagnose it',
    diagnosis:
      'The diagnosis is clinical: a slit-lamp examination is enough to recognise a pterygium, measure how far it has advanced onto the cornea and distinguish it from other conjunctival lesions. We then assess its impact on vision, in particular the astigmatism it causes, and photograph the lesion to track its progression from one visit to the next.',
    exams: [
      'Slit-lamp examination and measurement of corneal involvement',
      'Visual acuity and refraction',
      'Corneal topography when astigmatism is induced',
      'Photographic documentation for follow-up',
    ],
    treatmentsTitle: 'Treatment',
    treatments: [
      { title: 'Protection and eye drops', desc: 'Wrap-around sunglasses, artificial tears and anti-inflammatory drops during flare-ups: enough for small pterygia that cause little discomfort.' },
      { title: 'Surgical removal with autograft', desc: 'Under local anaesthesia, as a day case, we remove the pterygium and cover the area with a piece of healthy conjunctiva taken from the same eye. This autograft brings the recurrence rate down to under 5%.' },
      { title: 'Post-operative follow-up', desc: 'Eye drops for a few weeks, with check-ups at one week and one month. Sun protection remains essential for life to prevent recurrence.' },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'Is a pterygium dangerous?', a: 'No, it is a benign lesion. But left untreated it can reach the centre of the cornea and cause lasting loss of vision, so it must be monitored.' },
      { q: 'Does it always need surgery?', a: 'No. We operate when the pterygium is growing, affects vision, causes repeated inflammation or is a significant cosmetic concern. Small, stable lesions are simply monitored.' },
      { q: 'Is the operation painful?', a: 'It is performed under local anaesthesia and takes about 30 minutes. Some discomfort and a gritty feeling are normal for a few days and are relieved by eye drops.' },
      { q: 'Can it come back after surgery?', a: 'Recurrence is possible, especially in young people with heavy sun exposure. The conjunctival autograft technique greatly reduces the risk, and wearing sunglasses is essential.' },
    ],
  },
  tearDuct: {
    name: 'Blocked tear duct',
    short: 'Constant watering, a runny eye or repeated infections: the channel that drains the tears is blocked.',
    tag: 'Condition',
    title: 'Blocked',
    accent: 'tear duct',
    heroDesc:
      'Tears normally drain into the nose through a narrow channel. When that channel is blocked, tears overflow: the eye waters constantly and can become infected. Common in infants and adults alike, this obstruction is very treatable.',
    intro:
      'The lacrimal system produces tears and drains them through the puncta, at the edge of the eyelids, then down the nasolacrimal duct into the nose. A blockage anywhere along this path causes chronic watering (epiphora) and, over time, infection of the tear sac (dacryocystitis). In newborns, the blockage is usually a membrane that has not yet opened, and it clears on its own before the age of one in the vast majority of cases. In adults it results from progressive narrowing of the duct and often requires a surgical procedure.',
    symptomsTitle: 'Warning signs',
    symptoms: [
      'An eye that waters constantly, even without emotion or wind',
      'Sticky discharge, lashes glued together on waking',
      'Painful redness and swelling at the inner corner of the eye, near the nose',
      'Pus or fluid reflux when pressing on the inner corner of the eye',
      'Recurrent conjunctivitis, especially in infants',
      'Vision blurred by excess tears',
    ],
    causesTitle: 'Causes and risk factors',
    causes: [
      'In infants: a persistent membrane at the end of the nasolacrimal duct',
      'In adults: progressive narrowing of the duct with age, more common in women over 50',
      'Repeated infections of the eyelids, conjunctiva or sinuses',
      'Injury to the nose or face',
      'Previous nasal or sinus surgery',
      'Rarely: a tumour or stone in the tear drainage system',
    ],
    diagnosisTitle: 'How we diagnose it',
    diagnosis:
      'We examine the eyelids, puncta and tear sac at the slit lamp. A dye test shows whether tears drain normally into the nose. In adults, probing and irrigation of the tear ducts pinpoints the level of the blockage. A CT scan is sometimes requested before surgery.',
    exams: [
      'Slit-lamp examination of the eyelids and puncta',
      'Fluorescein dye test: measuring tear clearance time',
      'Probing and irrigation of the tear ducts',
      'Imaging (CT scan) for complex or recurrent obstruction',
    ],
    treatmentsTitle: 'Treatment',
    treatments: [
      { title: 'Tear sac massage (infants)', desc: 'Gentle, repeated pressure on the inner corner of the eye, taught to parents, lets the membrane open on its own in over 90% of cases before the age of one.' },
      { title: 'Tear duct probing', desc: 'If the blockage persists beyond 12 months in a child, probing under brief anaesthesia clears the obstruction in a few minutes. In adults it may be combined with a temporary stent.' },
      { title: 'Treating the infection', desc: 'In dacryocystitis, oral and topical antibiotics are started before any procedure on the tear ducts.' },
      { title: 'Dacryocystorhinostomy', desc: 'In adults, this operation creates a new passage between the tear sac and the nose, permanently bypassing the blockage. It is performed under local or general anaesthesia.' },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: "My baby's eye has been watering since birth: is it serious?", a: 'No, it is very common and benign. Massaging the tear sac and cleaning the discharge is usually enough. See us if the eye becomes red, swollen or painful, or if watering persists after one year.' },
      { q: 'Is a watery eye in an adult always a blockage?', a: 'No. Watering can also be caused by paradoxical dry eye, irritation or an eyelid malposition. The examination tells them apart.' },
      { q: 'Does the surgery leave a scar?', a: 'Dacryocystorhinostomy can be done through a small skin incision, almost invisible once healed, or through the nose with no external scar at all.' },
      { q: 'What is the success rate?', a: 'Probing in children succeeds in about 90% of cases. In adults, dacryocystorhinostomy stops the watering in over 90% of cases.' },
    ],
  },
}

export default pathologies

/** Name + tagline for every menu entry, including those with a dedicated page. */
export const summaries: Record<string, { name: string; short: string }> = {
  cataract: {
    name: 'Cataract',
    short: 'Clouding of the lens after 60: surgery restores vision for good.',
  },
  visionDefects: {
    name: 'Vision defects',
    short: 'Myopia, hypermetropia, astigmatism and presbyopia: diagnosis and tailored correction.',
  },
  refractiveSurgery: {
    name: 'Living without glasses',
    short: 'Refractive surgery: freedom from glasses and lenses after a full work-up.',
  },
  ...Object.fromEntries(
    Object.entries(pathologies).map(([id, content]) => [id, { name: content.name, short: content.short }]),
  ),
}
