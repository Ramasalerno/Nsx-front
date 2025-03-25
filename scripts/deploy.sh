cd ..
git pull
npm i
rm -r ./build/
npm run build
rsync -auvP ./build/ /var/www/nsx-argentina/frontend-nsx-argentina/build
pm2 reload /var/www/nsx-argentina/server.config.js