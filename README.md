# Simple node.js server

## How to run:
- Install docker
- Build image `sudo docker build . -t dev-ops-lab-1:latest`
- Run container `sudo docker run -p 80:80 -m 512m --cpus=2 -d --env-file ./.env dev-ops-lab-1:latest`

## Helpful commands:
- Stop `sudo docker stop <container_id>`
- Logs `sudo docker logs <container_id>`
- Join container `sudo docker exec -it <container id> /bin/bash`