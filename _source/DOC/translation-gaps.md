# Translation gaps and anomalies

This file tracks anything discovered while adding the 5 new languages (Ukrainian `uk`, Dutch `nl`, Czech `cs`, Bahasa Indonesia `id`, Hungarian `hu`) that wasn't a clean 1:1 match against the supplied `.xlsx` files, so nothing gets silently guessed. See `docs/superpowers/plans/` — actually see the approved plan at the time of writing: `C:\Users\me\.claude\plans\iterative-knitting-crown.md`.

## Pre-existing content mismatch (not caused by this work)

Three objects in `src/translations/management.js` already had inconsistent `en`/`es`/`fr`/`zh`/`ar` content **before** this task, verified against the live app:

- `_in_office_light_heat_based_devices_text`: its `en` field ("Complex treatments such as serum drops/amniotic membranes") is actually the *same* sentence as `_complex_treatments_text`'s `en`, not a distinct description of "in-office light/heat-based devices". `es`/`ar` independently have the *correct* distinct description (debridement, therapeutic expression, IPL, photobiomodulation) that genuinely matches this button's topic — but `en`/`fr`/`zh` do not.
- `_surgical_approaches_button`/`_icon`: `es`/`fr`/`zh` show a translation of "Complex Treatments" / "punctal plugs" instead of "Surgical Approaches". `en`/`ar` are correct.
- `_complex_treatments_button`/`_icon`/`_text`: `es`/`ar` show punctal-plug content instead of "Complex Treatments" content.

**Rule applied for all 5 new languages:** translate whatever the current `en` field literally says (sourced from the xlsx row with that exact English text), which means:
- `uk`/`nl`/`cs`/`id`/`hu` values for `_in_office_light_heat_based_devices_text` and `_complex_treatments_text` are **intentionally identical** (both translate "Complex treatments such as serum drops/amniotic membranes"), mirroring the existing `en`/`fr`/`zh` precedent.
- `_in_office_light_heat_based_devices_button`/`_icon` are sourced from the xlsx's `MANAGEMENT` sheet row "In-office light/heat based devices" (the SEVERE-ring row with no body text of its own), matching the current `en` field's literal wording, **not** the MODERATE-ring "IN-OFFICE TREATMENTS" + debridement/IPL paragraph that's actually a more accurate description of this button's real-world meaning. That accurate paragraph exists in every one of the 5 new xlsx files but currently has **no corresponding JS object at all** and goes unused, exactly as it does today for `en`/`fr`/`zh`.
- `_surgical_approaches_*` and `_complex_treatments_*` were sourced from the "Surgical Approaches"/punctal-plug row and the "Complex treatments..." row respectively, matching the current (correct) `en` field for those two.

**Recommendation:** this is a good candidate for a small, separate follow-up fix (re-map `_in_office_light_heat_based_devices_text` to the accurate debridement/IPL translation across all languages, and give the MODERATE-ring item its own correct content) — out of scope for "add 5 translations."

## Missing short-label translation for "Complex Treatments"

None of the 5 xlsx files contain a distinct short label for `_complex_treatments_button`/`_icon` — only the full sentence ("Complex treatments such as serum drops/amniotic membranes"). Existing languages solved this by writing their own short label (e.g. `fr`: "Traitements complexes", `zh`: "综合治疗").

**Resolution used (not fabricated from scratch):** each xlsx's `DRY EYE WHEEL` sheet has a 3-line color-code legend ("Simple Treatment" / "Moderate Treatment" / "Complex Treatment") that is genuinely part of the supplied copy. The 3rd line of that legend was reused verbatim as the short label for `_complex_treatments_button`/`_icon` in all 5 new languages — this is a cross-reference within the provided spreadsheet, not an invented translation.

## Measurement popover text restructuring (uk/others)

The English `_measurement_text_1`/`_measurement_text_2` fields are plain prose with no bullet points. Some translators (e.g. Ukrainian) restructured this content with their own `•` sub-bullets inline within the same paragraph. Since these fields render via `v-html` without list styling, the bullets show as inline `•`-separated clauses rather than an indented list — readable, but visually flatter than a true `<li>` list. Not changed, since the content is a faithful rendering of what was supplied.

## Missing attribution

No translator/organization name was supplied for any of the 5 new languages (unlike Spanish/French/Chinese, which have a credit line in the footer of `src/App.vue`). No footer line was added for `uk`/`nl`/`cs`/`id`/`hu`. If you have organizations to credit, provide the exact wording and it can be added.

## Per-language notes

### Ukrainian (uk)
No additional issues found beyond the above.

### Dutch (nl)
No additional issues found beyond the above.

### Czech (cs)
No additional issues found beyond the above. (Its `DRY EYE WHEEL` sheet splits the color-code legend across 3 separate rows instead of 1 combined cell — handled directly, no gap.)

### Bahasa Indonesia (id)
No additional issues found beyond the above. Button label is shown as "Bahasa" (per request), while the language code remains `id`/Indonesian to match the actual content in the spreadsheet (see the earlier "Bahasa language" clarification in this session — the file's vocabulary/spelling is Indonesian, not Malay).

### Hungarian (hu)
No additional issues found beyond the above.

## Icon / popover-title line-break pass (all 5 new languages)

`PopoverCard.vue`'s `:title` prop is *also* split on `|` (same mechanism as the small wheel icons), so essentially every `_..._button`/`_..._title` field needed the same French-style pipe line-break treatment as the dedicated `_..._icon` fields — not just the icon fields themselves. All button/title fields across the 5 new languages now get an automatic greedy word-wrap (matching existing line lengths used by `fr`), same as the icon fields.

A handful of individual words (e.g. Ukrainian "МЕДИКАМЕНТОЗНА", Dutch "Eerstelijnsbehandelingen") are long enough on their own that wrapping doesn't bring them fully in line with the shortest English/Spanish labels — these are within roughly the same range as the longest labels the English version itself already ships (e.g. "Proactive Management of Ocular Surface Disease"), but could benefit from a further per-language `font-size` override (the same mechanism already used for `zh`/`fr` on ~40 icon components), to be confirmed by eye once someone can view the running app directly — the screenshot tool wasn't available in this session, so this pass was verified via DOM text-measurement (`getComputedTextLength()`) rather than visually.
