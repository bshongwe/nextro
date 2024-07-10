#!/bin/bash

# Function to check if a command exists
command_exists () {
  type "$1" &> /dev/null ;
}

# Function to print error messages in red
print_error () {
  echo -e "\033[31m$1\033[0m"
}

# Function to print success messages in green
print_success () {
  echo -e "\033[32m$1\033[0m"
}

# Check if npm is installed
if command_exists npm ; then
  echo "npm is installed, proceeding with dependency installation..."
else
  print_error "npm not installed. Install Node.js & npm to run this script."
  exit 1
fi

# Check if package.json exists
if [ -f "package.json" ]; then
  echo "package.json found, proceeding with dependency installation..."
else
  print_error "package.json not found. Check if you are in correct directory."
  exit 1
fi

# Install all dependencies
echo "Installing dependencies..."
npm install

# Check if the dependencies were installed successfully
if [ $? -eq 0 ]; then
  print_success "All dependencies installed successfully."
else
  print_error "Failed to install dependencies. Check error messages above."
  exit 1
fi

# Install development dependencies (if any)
if [ -f "package-lock.json" ]; then
  echo "Installing development dependencies..."
  npm install --only=dev

  # Check if the development dependencies were installed successfully
  if [ $? -eq 0 ]; then
    print_success "All development dependencies installed successfully."
  else
    print_error "Failed to install dependencies. Check error messages above."
    exit 1
  fi
else
  print_success "No package-lock.json found, skipping installation."
fi

echo "Dependency installation script completed successfully."
