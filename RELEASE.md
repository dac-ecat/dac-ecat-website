# Release workflow

Pushes to **any branch** (including `main`) do **not** run GitHub Actions.

Publishing runs only when you explicitly trigger [`.github/workflows/release.yml`](.github/workflows/release.yml).

## Day to day

```bash
pnpm changeset
```

Commit the new file under `.changeset/` with your changes. Push freely — no CI.

## Cut a release

1. **Version** (local — updates `package.json` and `CHANGELOG.md`):

   ```bash
   pnpm version-packages
   ```

2. **Commit and push** the version bump:

   ```bash
   git add -A
   git commit -m "chore: version packages"
   git push
   ```

3. **Publish** (triggers the release workflow):

   ```bash
   pnpm release
   ```

   Requires [GitHub CLI](https://cli.github.com/) (`gh auth login`). Equivalent: `gh workflow run release.yml`.

## GitHub secrets

Add these in the repo settings for production builds:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Deploy step

Edit `publish:ci` in `package.json` with your host deploy command (Vercel, Firebase Hosting, etc.).
