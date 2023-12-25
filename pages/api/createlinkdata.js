// pages/api/myApi.js
import dbConnect from '../../utils/dbConnect';

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const { displayName, redirectLink, linkPrefix } = req.body; // extract data from the request body
    const { db, client } = await dbConnect();

    // Assuming you have a collection named "links"
    const linksCollection = db.collection('links');
    
    // Perform a search query to find if linkPrefix already exists
    const searchQuery = {"linkprefix": linkPrefix}; 
    const searchResults = await linksCollection.find(searchQuery).toArray();

    // if linkPrefix already exists, return an error
    if (searchResults.length > 0) {
      res.status(400).json({response: "Link prefix already exists", status: 400});
      return;
    }

    // if linkPrefix does not exist, insert the new link
    const insertQuery = {"linkprefix": linkPrefix, "displayname": displayName, "redirectlink": redirectLink};
    const insertResults = await linksCollection.insertOne(insertQuery);

    
    res.status(200).json({response: "Link created successfully", status: 200});
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
