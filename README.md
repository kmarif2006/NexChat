# **NexChat: Real-Time Private Messaging with Image Sharing** 🚀

NexChat is an advanced chat application that combines real-time private messaging with robust image-sharing capabilities, powered by **Cloudinary** for seamless and efficient image handling. NexChat delivers a smooth, secure, and user-friendly experience for private communication.

---

## **✨ Why NexChat?**
- **Real-Time Messaging**: Chat with friends instantly with no delays.  
- **Image Sharing Powered by Cloudinary**: Effortlessly upload, store, and share images in conversations.  
- **Secure and Scalable**: Built with industry-standard authentication and cloud storage solutions.  
- **Device-Friendly**: Optimized for desktops, tablets, and mobile devices.

---

## **🏆 Key Features**
- 🔹 **Real-Time Messaging**: One-on-one private conversations.  
- 🔹 **Image Sharing**: Upload and share images in chat, with storage and delivery via Cloudinary.  
- 🔹 **Message History**: View previous conversations with persistent storage.  
- 🔹 **Secure Login and Registration**: JWT-based authentication to ensure privacy.  
- 🔹 **Responsive Design**: A polished UI for every screen size.

---

## **💡 Technology Stack**
| **Category**     | **Technology**                |  
|-------------------|-------------------------------|  
| **Frontend**      | React.js, HTML, CSS, JavaScript |  
| **Backend**       | Node.js, Express.js          |  
| **Database**      | MongoDB                      |  
| **Real-Time**     | WebSocket or Socket.IO       |  
| **Authentication**| JSON Web Tokens (JWT)        |  
| **Image Handling**| Cloudinary                   |  

---

## **🚀 Getting Started**

### **Prerequisites**
1. **Node.js**: [Download & Install Node.js](https://nodejs.org)  
2. **Database**: Set up MongoDB or your preferred database.  
3. **Cloudinary Account**: [Sign up for Cloudinary](https://cloudinary.com).

### **Installation Steps**
1. **Clone the Repository**  
   ```bash  
   git clone git@github.com:kmarif2006/NexChat.git  
   cd NexChat  
   ```  

2. **Install Dependencies**  
   ```bash  
   npm install  
   ```  

3. **Configure Environment Variables**  
   Create a `.env` file in the root directory and add the following:  
   ```env  
   PORT=3000  
   DB_URI=mongodb+srv://your-database-connection-string  
   JWT_SECRET=your-secret-key  
   CLOUDINARY_NAME=your-cloudinary-cloud-name  
   CLOUDINARY_API_KEY=your-cloudinary-api-key  
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret  
   ```  

4. **Run the Application**  
   ```bash  
   npm start  
   ```  
   Access NexChat in your browser at `http://localhost:3000`.

---
