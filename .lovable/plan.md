

## Plan: Update Skills Page with Categorized Skills

**Name update**: Change "Rathi" to "Ratthika" across the site.

**Skills reorganization**: Replace the current single list with two categorized sections:

### Technical Skills (with animated progress bars)
- HTML, CSS, MySQL, Git, GitHub

### Design Skills (with animated progress bars)
- Canva, Logo Design, Layout Design, Banner Design, Poster Design

### Implementation
1. **`src/pages/Skills.tsx`** — Restructure the skills array into two groups (`technical` and `design`), each rendered under its own heading with the existing animated `SkillBar` component.

2. **`src/pages/Index.tsx`** — Update name from "Rathi" to "Ratthika".

3. **Other files** — Search for any remaining "Rathi" references and update to "Ratthika".

