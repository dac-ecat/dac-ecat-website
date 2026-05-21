#!/usr/bin/env node
/**
 * Triggers .github/workflows/release.yml (workflow_dispatch).
 * No push/pull_request triggers — only this script (or manual gh workflow run) starts CI.
 *
 * Prerequisite: version bump is committed and pushed so CI builds the right revision.
 */
import { execSync } from 'node:child_process';

const WORKFLOW = 'release.yml';
const requirePushed = process.argv.includes('--require-pushed');

function run(cmd) {
  return execSync(cmd, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }).trim();
}

function tryRun(cmd) {
  try {
    return run(cmd);
  } catch {
    return null;
  }
}

function ensurePushed() {
  const upstream = tryRun('git rev-parse --abbrev-ref @{u}');
  if (!upstream) {
    console.error('Set an upstream branch and push your version commit before releasing.');
    process.exit(1);
  }
  const ahead = tryRun('git rev-list --count @{u}..HEAD') ?? '0';
  if (ahead !== '0') {
    console.error(
      `You have ${ahead} unpushed commit(s). Push first — CI deploys the remote branch, not local files.`,
    );
    process.exit(1);
  }
}

function triggerWorkflow() {
  try {
    run(`gh workflow run ${WORKFLOW}`);
    console.log(`Triggered ${WORKFLOW}. Watch progress: gh run watch`);
  } catch {
    console.error(
      'Could not trigger the workflow. Install the GitHub CLI and run: gh auth login',
    );
    process.exit(1);
  }
}

if (requirePushed) {
  ensurePushed();
} else {
  const ahead = tryRun('git rev-list --count @{u}..HEAD');
  if (ahead && ahead !== '0') {
    console.warn(
      `Warning: ${ahead} unpushed commit(s). Push before release so CI matches your version bump.`,
    );
  }
}

triggerWorkflow();
