# Hearts & Flowers — Executive Function Demo

A browser-based teaching demo of the Hearts & Flowers task, designed for **Introduction to Psychology** courses. Students play a 3-block cognitive task and learn how psychologists measure executive functioning in children.

## What it demonstrates

| Block | Rule | EF Component |
|-------|------|-------------|
| Hearts | Press the key on the **same side** as the heart | Attention |
| Flowers | Press the key on the **opposite side** from the flower | Inhibitory Control |
| Mixed | Both rules interleaved — heart or flower on each trial | Cognitive Flexibility |

After each block, students see their reaction times and accuracy, answer a multiple-choice question about what the block measured, and receive a brief explanation of the underlying cognitive science.

The final screen shows a comparison across all three blocks, including the **Simon Effect** (inhibitory control cost) and the **Switch Cost** (cognitive flexibility cost).

## How to run

No installation required. Just open `index.html` in any modern browser (Chrome, Firefox, Safari, Edge).

**Mac:** Double-click `index.html`, or right-click → Open With → your browser.

**Windows:** Double-click `index.html`, or right-click → Open with → your browser.

## Controls

| Key | Action |
|-----|--------|
| `A` | Left response |
| `L` | Right response |
| `A` / `B` / `C` / `D` | Select quiz answer |

Keep your left index finger on `A` and right index finger on `L` throughout the task.

## Task structure

- **3 blocks** × **16 test trials** each = 48 test trials total
- **2 practice trials** per block (must be 100% correct to proceed)
- Response window: **2000 ms** (no response counts as incorrect)
- Balanced stimuli: equal left/right presentations per block
- Mixed block: equal hearts and flowers, balanced left/right, max 3 consecutive same type

## Sharing with students or TAs

**Option 1 — GitHub Pages (recommended):**
1. Fork this repository
2. Go to Settings → Pages
3. Set source to the `main` branch, root folder
4. Share the generated URL — students open it in their browser, no download needed

**Option 2 — Direct file sharing:**
Download or clone this repo and share the folder. Students open `index.html` directly.

**Option 3 — Local server (advanced):**
```bash
# Python 3
python3 -m http.server 8080
# Then open http://localhost:8080
```

## Attribution

Based on the Hearts & Flowers task:
> Davidson, M. C., Amso, D., Anderson, L. C., & Diamond, A. (2006). Development of cognitive control and executive functions from 4 to 13 years: Evidence from manipulations of memory, inhibition, and task switching. *Neuropsychologia, 44*(11), 2037–2078.

Built as a teaching tool for educational demonstration purposes only. Not validated for research use.

---

For questions or issues, open a GitHub Issue on this repository.
