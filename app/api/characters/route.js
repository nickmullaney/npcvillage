// pages/api/characters.js

import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../utils/db'; // A utility to connect to your database

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await connectToDatabase(); // Establish a database connection
    const characters = await db.collection('characters').find({}).toArray(); // Retrieve all characters
    res.status(200).json(characters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
