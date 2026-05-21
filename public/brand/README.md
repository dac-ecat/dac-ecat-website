# DAC-ECAT brand assets

## Catalog sheets (reference)

- `dac-ecat-brand.html` — logos, splash, app icons, wordmarks, UI glyphs, palette
- `dac-ecat-icons.html` — file explorer, PLC / EtherCAT tree icons
- `dac-ecat-icons-v2.html` — panel chrome, charts, tooling icons

## Production SVGs

Run from repo root:

```bash
node scripts/extract-brand-svgs.mjs
```

Outputs standalone files under `svg/` plus `svg/manifest.json` (slug → path). Use these in the app via `@layout/dacecat-brand` helpers.

## App integration

| Asset | Path |
|-------|------|
| Favicon | `/brand/svg/brand/favicon-32px.svg` |
| Splash | `/brand/svg/brand/splash-screen.svg` |
| Tauri / OS icon | generated from `app-icon-512px.svg` |
| Variables panel — connection head | `/brand/connection/connected.png`, `disconnected.png` |
| Variables panel — type groups | `/brand/variable-panel/type-group.svg` |

Include `brand.css` in HTML shells for shared CSS variables.
