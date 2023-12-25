// pages/api/someRoute.js
import dbConnect from "../../utils/dbConnect";
import geoip from "geoip-lite";

export default async function handler(req, res) {
  const { db, client } = await dbConnect();

  // Assuming you have a collection named "links"
  const linksCollection = db.collection("links");

  // Perform a search query
  const searchQuery = { linkprefix: req.query.prefix }; // Replace with your actual search query
  const searchResults = await linksCollection.find(searchQuery).toArray();

  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const geo = geoip.lookup(ip);

  console.log("IP: " + ip);
  console.log("GEO: " + geo);

  console.log("Incrementing clickcount for " + req.query.prefix);
  // Update the documents in the collection
  await linksCollection.updateMany(searchQuery, {
    $inc: { clickcount: 1 },
    $push: { timestamps: new Date() },
  });

  // use searchResults for further processing
  // console.log("IN API:")
  // console.log(req.query.prefix)
  // console.log(searchResults)
  res.status(200).json(searchResults);
}
