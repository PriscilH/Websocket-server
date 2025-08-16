# Websocket Server  

Serveur **WebSocket** développé en **Node.js** avec la librairie [`ws`](https://github.com/websockets/ws).  
Ce backend permet la communication en temps réel avec les clients (par exemple une application React Native).  

---

## 🚀 Objectif du projet  
Fournir un **serveur simple et léger** permettant :  
- D’accepter des connexions multiples de clients.  
- De diffuser en temps réel les messages reçus à tous les utilisateurs connectés.  
- De servir de backend pour le projet [Websocket Client](https://github.com/PriscilH/Websocket-client).  

---

## 🛠️ Technologies utilisées  
- **Node.js** (runtime JavaScript)  
- **ws** (librairie WebSocket côté serveur)  

---

## 📂 Structure du projet  
index.js # Point d’entrée, contient la configuration du serveur WebSocket

---

## 💻 Installation et lancement  

### 1. Cloner le projet  
```bash
git clone https://github.com/PriscilH/Websocket-server.git
cd Websocket-server
```

### 2. Installer les dépendances
npm install

### 3. Lancer le serveur
node index.js (Par défaut, le serveur démarre sur le port 8080.)

