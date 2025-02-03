import { connectToDatabase } from '../../lib/mongodb';

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const { method } = req;
  
  switch (method) {
    case 'GET':
      const userId = req.query.id;
      const user = await db.collection('users').findOne({ _id: new ObjectId(userId) });
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      res.status(200).json(user);
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
