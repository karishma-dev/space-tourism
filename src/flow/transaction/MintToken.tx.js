import { NFTStorage, File } from "nft.storage";
import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";
import cdc from "./MintToken.cdc";
// Import required modules from nft.storage

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGQ4MjdEODM0OGQyQjdFN2QxODgyQUYzM2FBNDVhMzE1NEMxMUExOTAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY5NDg3OTI3NjY4NCwibmFtZSI6InNwYWNlcGVkaWEifQ.vHTG90GAbusnS3wH9pzA7ziCy0Me3PppT9LJK-lrFks";

// Initialize the NFTStorage client
const storage = new NFTStorage({ token: API_KEY });

async function uploadToStorage(pet) {
  // Call `store(...)` on the NFTStorage client with an object
  // containing all of pet's attributes, and required image and
  // description attributes.
  let metadata = await storage.store({
    ...pet,
    image:
      pet.image &&
      new File([pet.image], `${pet.name}.jpg`, { type: "image/jpg" }),
    description: `${pet.name}'s metadata`,
  });

  // If all goes well, return the metadata.
  return metadata;
}

async function mintPet(metadata) {
  // Convert the metadata into a {String: String} type. See below.
  const dict = toCadenceDict(metadata);

  // Build a list of arguments
  const payload = fcl.args([
    fcl.arg(dict, t.Dictionary({ key: t.String, value: t.String })),
  ]);

  // Fetch the Cadence raw code.
  const code = await (await fetch(cdc)).text();

  // Send the transaction!
  // Note the `userAuthz` function we have not implemented.
  const encoded = await fcl.send([
    fcl.transaction(code),
    fcl.payer(fcl.authz),
    fcl.proposer(fcl.authz),
    fcl.authorizations([fcl.authz]),
    fcl.limit(999),
    payload,
  ]);

  // Call `fcl.decode` to get the transaction ID.
  let txId = await fcl.decode(encoded);

  // This waits for the transaction to be sealed, which is a recommended way.
  await fcl.tx(txId).onceSealed();

  // Return the transaction ID
  return txId;
}

// Helper function to convert `pet` object to a {String: String} type.
function toCadenceDict(pet) {
  // Copy the pet object so we don't mutate the original.
  let newPet = { ...pet };

  // Delete the `image` attribute that contains a `File` object.
  delete newPet.image;

  // Return an array of [{key: string, value: string}].
  return Object.keys(newPet).map((k) => ({ key: k, value: pet[k] }));
}
