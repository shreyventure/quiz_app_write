const Server = {
  endpoint: process.env.REACT_APP_APPWRITE_ENDPOINT,
  project: process.env.REACT_APP_APPWRITE_PROJECT,
  questions_collectionID: process.env.REACT_APP_QUESTIONS_COLLECTION_ID,
  questions_documentID: process.env.REACT_APP_QUESTIONS_DOCUMENT_ID,
};
export default Server;
