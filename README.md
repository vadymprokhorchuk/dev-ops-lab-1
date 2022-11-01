# Simple node.js server

> Docker hub repository [Here](https://hub.docker.com/r/vadymprokhorchuk/dev-ops-lab-1)

## How to run:
- Install docker
- Build image `sudo docker build . -t dev-ops-lab-1:latest`
- Run container `sudo docker run -p 80:80 -m 924m --cpus=0.3 -d --rm --env-file ./.env dev-ops-lab-1:latest`

## Helpful commands:
- Stop `sudo docker stop <container_id>`
- Logs `sudo docker logs <container_id>`
- Join container `sudo docker exec -it <container id> /bin/bash`