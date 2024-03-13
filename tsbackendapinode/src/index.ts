




// server.ts
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import itemRoute from './routes/item.route';

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB connection
const mongoURI: string = process.env.MONGODB_URI!;
mongoose
  .connect(mongoURI, {  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.use('/api', itemRoute);
app.use((req, res) => {
  res.status(404).json({
    status: false,
    message: 'Route not found',
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
