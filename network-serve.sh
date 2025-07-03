#!/bin/bash

# Network Server Launcher
# This script helps launch any web project with network access

# Default port
PORT=3000

# Check if a port was provided as argument
if [ $# -eq 1 ]; then
  PORT=$1
fi

# Get the local IP address
IP=$(ipconfig getifaddr en0 2>/dev/null || ifconfig en0 | grep inet | grep -v inet6 | awk '{print $2}')

# Display welcome message
echo "========================================"
echo "🌐 Network Server Launcher"
echo "========================================"

# Check if port is available
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
  echo "⚠️  Warning: Port $PORT is already in use!"
  echo "You can either:"
  echo "  1. Stop the process using the port"
  echo "  2. Use a different port: ./network-serve.sh [PORT]"
  exit 1
fi

# Detect project type and run appropriate command
if [ -f "package.json" ]; then
  # Read package.json to detect project type
  if grep -q "\"next\"" package.json; then
    echo "📦 Detected Next.js project"
    echo "🚀 Launching with: next dev -p $PORT -H 0.0.0.0"
    echo "🔗 Your site will be available at: http://$IP:$PORT"
    echo "========================================"
    npx next dev -p $PORT -H 0.0.0.0
  elif grep -q "\"react-scripts\"" package.json; then
    echo "📦 Detected Create React App project"
    echo "🚀 Launching with: PORT=$PORT HOST=0.0.0.0 npm start"
    echo "🔗 Your site will be available at: http://$IP:$PORT"
    echo "========================================"
    PORT=$PORT HOST=0.0.0.0 npm start
  elif grep -q "\"vue\"" package.json; then
    echo "📦 Detected Vue.js project"
    echo "🚀 Launching with: vue-cli-service serve --port $PORT --host 0.0.0.0"
    echo "🔗 Your site will be available at: http://$IP:$PORT"
    echo "========================================"
    npx vue-cli-service serve --port $PORT --host 0.0.0.0
  elif grep -q "\"express\"" package.json; then
    echo "📦 Detected Express.js project"
    echo "⚠️  Make sure your Express app listens on 0.0.0.0 and not just localhost"
    echo "🚀 Launching with: npm start"
    echo "🔗 Your site will be available at: http://$IP:$PORT"
    echo "========================================"
    npm start
  else
    echo "📦 Generic Node.js project detected"
    echo "🚀 Launching with: npm start"
    echo "⚠️  If this doesn't work, you may need to edit your server code to listen on 0.0.0.0"
    echo "🔗 Your site should be available at: http://$IP:$PORT"
    echo "========================================"
    npm start
  fi
elif [ -f "vite.config.js" ] || [ -f "vite.config.ts" ]; then
  echo "📦 Detected Vite project"
  echo "🚀 Launching with: vite --port $PORT --host 0.0.0.0"
  echo "🔗 Your site will be available at: http://$IP:$PORT"
  echo "========================================"
  npx vite --port $PORT --host 0.0.0.0
else
  echo "❓ Unknown project type"
  echo "Please modify this script for your specific project, or run your server with:"
  echo "- Make sure it binds to 0.0.0.0 (not just localhost)"
  echo "- Make it listen on port $PORT"
  echo "🔗 Then your site will be available at: http://$IP:$PORT"
  exit 1
fi
