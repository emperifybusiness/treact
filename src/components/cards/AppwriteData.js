
import { Client, Databases, Account ,Query  } from "appwrite";

export const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("661d51c7e4d47fa7d45d")

const databases = new Databases(client);
const account = new Account(client);

export const fetchDataInventory = async () => {
    try {
        const response = await databases.listDocuments(
            "661d520b2995308dacf5",
            "661d5216a2c20493387a",
            [
                Query.equal('category', ["sound"])
            ]
        );
        return response.documents;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
export const fetchDataInventoryLights = async () => {
    try {
        const response = await databases.listDocuments(
            "661d520b2995308dacf5",
            "661d5216a2c20493387a",
            [
                Query.equal('category', ["lights"])
            ]
        );
        return response.documents;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
export const fetchDataInventoryProduction = async () => {
    try {
        const response = await databases.listDocuments(
            "661d520b2995308dacf5",
            "661d5216a2c20493387a",
            [
                Query.equal('category', ["production"])
            ]
        );
        return response.documents;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};



export const fetchDataProfile = async () => {
    try {
        const response = await databases.listDocuments(
            "661d520b2995308dacf5",
            "661e5ae115b388bed638"
        );
        return response.documents;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
export const fetchDataGallery = async () => {
    try {
        const response = await databases.listDocuments(
            "661d520b2995308dacf5",
            "6620f74c1e7cbd18970e"
        );
        return response.documents;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
export const fetchDataBlogs = async () => {
    try {
        const response = await databases.listDocuments(
            "661d520b2995308dacf5",
            "6622c35bd517ac767979"
        );
        return response.documents;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};


