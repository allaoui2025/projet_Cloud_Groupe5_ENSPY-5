# Image de base Python
FROM python:3.9-slim

# Définir le répertoire de travail
WORKDIR /app

# Copier tous les fichiers dans le conteneur
COPY . .

# Installer les dépendances
RUN pip install -r requirements.txt

# Exposer le port 5000 pour Flask
EXPOSE 5000

# Commande pour démarrer l'application Flask
CMD ["python", "app.py"]
