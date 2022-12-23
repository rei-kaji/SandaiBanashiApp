import { collection, getDocs, getFirestore } from "firebase/firestore";

export async function getSandaiBanashies() {
  const sandaiBanashies = new Array();
  const db = getFirestore();
  const sandaiBanashiesSnapshot = await getDocs(
    collection(db, "/SandaiBanashi")
  );

  sandaiBanashiesSnapshot.forEach((doc) => {
    const sandaiBanashi = doc.data();
    sandaiBanashies.push({ ...sandaiBanashi, id: doc.id });
  });

  return sandaiBanashies;
}
