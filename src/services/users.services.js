export const GetAdminData = async () => {
    try {
        const response = await fetch("https://new-server-eight.vercel.app/getadmindata");
        const data = await response.json();
        return data
    } catch (error) {
        throw error
    }
}