# Setting up Astro with Extensions for local development

Follow these steps to set up Astro with Starlight and additional extensions:

1. **Install Node.js and npm**
   
   Ensure you have Node.js and npm installed on your system. You can download them from [nodejs.org](https://nodejs.org/).

2. **Fork the documentation-coolify repository and open the folder in a code editor**
   
3. **Install Astro and Starlight**
   
   Run the following command inside the local repository:
   ```
   npm install astro @astrojs/starlight
   ```

4. **Install additional Starlight extensions**
   
   Install the required Starlight extensions by running the following command inside the local repository:
   ```
   npm install starlight-openapi starlight-image-zoom starlight-links-validator
   ```

5. **Install the Astro and MDX VS Code extension (optional)**
   
   Install the Astro and MDX VS Code extension to get syntax highlighting and other useful features:
   - [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
   - [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)

6. **Create your contribution**
   
   Either edit a markdown file in the `src/content/docs/` directory or create a new `.mdx` file in the `src/content/docs/` directory and start writing your docs article.

7. **Run your Astro site**
   
   Start the development server by running the following command inside the local repository:
   ```
   npm run dev
   ```
   This will start a local server and give you a URL to preview your changes.

8. **Create a Pull Request**

   Create a new pull request from your forked repository to the main documentation-coolify repository.


