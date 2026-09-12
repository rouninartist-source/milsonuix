#!/usr/bin/env bash
# Build the site and push dist/ to Hostinger over SSH.
#   ./deploy.sh            → deploys to milsonuix.com
#   ./deploy.sh --dry-run  → shows what would change, uploads nothing
#
# Requirements: SSH key installed on the Hostinger account, Node 24 (nvm).
set -euo pipefail

HOST="u629385962@156.67.222.59"
PORT="65002"
DOMAIN="${DEPLOY_DOMAIN:-milsonuix.com}"
DEST="domains/${DOMAIN}/public_html/"

cd "$(dirname "$0")"

# Node 24 lives in nvm on this machine
[ -s "$HOME/.nvm/nvm.sh" ] && . "$HOME/.nvm/nvm.sh" && nvm use --silent 24 >/dev/null 2>&1 || true
node -v | grep -q '^v2[4-9]' || { echo "Need Node 24+ (nvm use 24)"; exit 1; }

echo "▶ build"
npm run build --silent

echo "▶ upload → ${HOST}:${DEST}"
rsync -az --delete --checksum "$@" \
  -e "ssh -p ${PORT}" \
  --exclude ".well-known" \
  dist/ "${HOST}:${DEST}"

echo "▶ verify"
for path in / /pt /about /work/quota /journal /contact; do
  printf "  %-14s " "$path"; curl -s -o /dev/null -w "%{http_code}\n" "https://${DOMAIN}${path}"
done
echo "✓ https://${DOMAIN}"
