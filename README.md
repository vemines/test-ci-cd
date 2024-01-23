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

// nginx install

sudo apt-get install -y nginx
cd /etc/nginx/sites-available
sudo vim default        // sudo nano default

// Reverse Proxy for hide port
location /api {
rewrite ^\/api\/(.*)$ /api/$1 break;
proxy_pass http://localhost:3000; 
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}

sudo systemctl restart nginx

Remove port 3000 on Inbound rules of Security group

call /api/users without port for test

// for subdomain on freedns
Make domain direct to ec2 servar, choose cloak option



location / {
proxy_pass http://localhost:3000;  # Forward requests to Node.js
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection 'upgrade';
proxy_set_header Host $host;
proxy_cache_bypass $http_upgrade;
}

sudo systemctl restart nginx

sudo nano /etc/nginx/nginx.conf

add_header Content-Security-Policy "frame-ancestors 'self' http://13.229.118.225/";



