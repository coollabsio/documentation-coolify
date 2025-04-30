> This is useful if you like to see if the Docker image works correctly and to test the changes locally before you commit and push them to the remote repository.

## 1. Make sure you are in root directoy of the project

## 2. Build the image using the following command
```sh
docker build -f deployment/Dockerfile -t coolify-docs-v5-dev . && docker run --name coolify-docs-v5-dev-container -p 80:80 coolify-docs-v5-dev
```
This command:
- Builds the image with the tag `coolify-docs-v5-dev`
- Runs a container named `coolify-docs-v5-dev-container`
- Maps container port 80 to your local port 80

## 3. Visit website on your browser
```sh
http://localhost/docs/v5/home
```

