# Environment Checker
This is a simple web application that displays the environment variables of the server it is running on.

## Environment Variables
WEBSITES_PORT: 8080

## Docker Image
This application is available as a Docker image on Docker Hub. You can pull the image using the following command:
```bash
docker pull kovacszsolt/environmentchecker:main
```
## Running the Application
The application will be available at http://localhost:3000.  
You can run the application using the following command:
```bash
docker run -d -p 3000:3000 kovacszsolt/environmentchecker:main
```
