# Use the official Python 3.9 slim image
FROM python:3.9-slim

# Set the working directory inside the container to /app
WORKDIR /app

# Copy all files from the current directory (where Dockerfile is located) into the container at /app
COPY . /app

# Install Python dependencies from requirements.txt using pip
RUN pip install -r requirements.txt

# Expose port 1212 to allow external access to the application
EXPOSE 1212

# Define the command to start the application when the container starts
# In this case, we're running the apinumtwo.py script using Python
CMD [ "python" , "apinumtwo.py" ]
