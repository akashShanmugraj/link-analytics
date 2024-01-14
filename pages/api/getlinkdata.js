// pages/api/someRoute.js
import dbConnect from "../../utils/dbConnect";

export default async function handler(req, res) {
  const { db, client } = await dbConnect();

  // Assuming you have a collection named "links"
  const linksCollection = db.collection("links");

  // Perform a search query
  const searchQuery = { linkprefix: req.query.prefix }; // Replace with your actual search query
  const searchResults = await linksCollection.find(searchQuery).toArray();

  console.log("Incrementing clickcount for " + req.query.prefix);
  console.log("TAG IS: "+req.query.tag)
  // Update the documents in the collection
  await linksCollection.updateMany(searchQuery, {
    $inc: { 
      clickcount: 1,
      [req.query.tag+"-count"]: 1 
    },
    $push: { 
      [req.query.tag+"-timestamps"]: new Date() }
  });

  // use searchResults for further processing
  // console.log("IN API:")
  // console.log(req.query.prefix)
  // console.log(searchResults)
  res.status(200).json(searchResults);
}
