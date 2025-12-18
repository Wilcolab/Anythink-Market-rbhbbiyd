# Python Server

This project contains a FastAPI server implemented in Python. It provides two routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: This file contains the implementation of the FastAPI server with two routes. It handles adding a task to a list and retrieving the list.

- `python-server/src/__init__.py`: This file is an empty file that marks the `src` directory as a Python package.

- `python-server/requirements.txt`: This file lists the dependencies required for the FastAPI server and other dependencies.

- `python-server/Dockerfile`: This file is used to build a Docker image for the FastAPI server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.

## Getting Started

To run the FastAPI server using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker image for the FastAPI server and start the containers defined in the `docker-compose.yml` file.

- The FastAPI server should now be running. You can access at port `8000`.

## API Routes

The FastAPI server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.

Project Overview: Python to Node.js MigrationThis project has been migrated from a FastAPI Python server to a Node.js Express server to improve scalability and performance. Both servers are currently available to ensure compatibility during the transition.Server DetailsFeaturePython Server (Legacy)Node.js Server (New)FrameworkFastAPIExpress.jsPort80008001Docker Imagepython:3.9-slimnode:14How to RunTo run both servers simultaneously using Docker Compose, use the following command in the root directory:Bashdocker compose up --build
API Endpoints (Node.js)The new Node.js server implements the following routes:GET /tasks: Retrieves the list of time-travel tasks.POST /tasks: Adds a new task to the list (requires a JSON body with a text field).Final Steps to Complete the QuestOnce you have saved the manual updates to the file:Stage and Commit:Bashgit add README.md
git commit -m "docs: manually update README with migration details"
Push and Open PR:Bashgit push origin task/update-readme
Merge: Once Lucca approves, merge the PR to finalize the quest.
