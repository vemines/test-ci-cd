npm i
npm run dev

http://localhost:3000/checkstatus

Run all Github action commands in (Settings -> Actions -> Runner) on EC2
-- run below instead ./run.sh

sudo ./svc.sh install
sudo ./svc.sh start

https://github.com/nodesource/distributions

lsb_release -a      // check is support nodejs version

sudo npm install pm2 -g

pm2 start server.js --name=test-cicd    // use name in file 

// in local
git pull
edit file .github\workflows\node.js.yml
