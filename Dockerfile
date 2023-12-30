FROM node:19-alpine as BUILD_IMAGE

WORKDIR /app



# Copy package.json and package-lock.json to the working directory
COPY package.json vite.config.ts ./

CMD [ "rm",  "-rf", "package-lock.json"]

CMD ["npm", "cache", "clean", "--force"]

CMD ["npm", "install", "-g","npm@10.2.5", " --save-dev", "rollup@latest", "@rollup/plugin-commonjs@latest", "@rollup/plugin-node-resolve@latest"]


# Copy the entire project to the working directory
COPY  . .


# Build the project using Vite
CMD ["npm", "run", "build"]

# Expose the port that the React application will run on
EXPOSE 5050

# Define the command to start the React application
CMD ["npm", "run", "preview"]