# Hostling Project

Welcome to the Hostling project! This project aims to helps the dorm manager to connect with their customer faster and more reliable while providing a hessel-free management.

## Getting Started

To get started with the Hostling project, follow the steps below to set up the development environment.

### Prerequisites

Ensure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (version 18.x or higher)

  - Alternatively, [Bun](https://bun.sh/) is also supported in this project. Install Bun:

    - Windows

    ```bash
    powershell -c "irm bun.sh/install.ps1 | iex"
    ```

    - Linux & MacOS

    ```bash
    curl -fsSL https://bun.sh/install | bash
    ```

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) (optional, for containerized development)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ramenguykung/hostling.git
   cd hostling
   ```

2. **Install dependencies:**

   ```bash
   # ci stands for "clean install" equivilent to npm install --frozen-lockfile
   npm ci
   ```

3. **Set up environment variables:**

   Use the `.env` file in the root directory and add the necessary environment variables (In development phase, use `.env.development`). Refer to the `.env.example` file for the required variables.

4. **Run the application:**

   ```bash
   npm start
   ```

   If you prefer running in local development server:

   ```bash
   npm run dev
   ```

### Contributing

We welcome contributions from the community! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push them to your fork.
4. Create a pull request with a detailed description of your changes.

### License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

Happy coding!
