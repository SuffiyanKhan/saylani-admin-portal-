export const GetAllCourse = async () => {
    try {
        const response = await fetch('https://new-server-eight.vercel.app/get-allCourses')
        const data = await response.json();
        console.log(data)
        return data
    } catch (error) {
        throw error.message
    }
}
export const GetAllSTudents = async () => {
    try {
        const response = await fetch("https://new-server-eight.vercel.app/getAllStudents")
        const studentData = response.json();
        return studentData
    } catch (error) {
        throw error
    }
}
export const GetAllCertificateData = async () => {
    try {
        const response = await fetch("https://new-server-eight.vercel.app/getAllCertificates");
        const data = await response.json();
        return data
    } catch (error) {
        throw error.message
    }
}

export const GetAllIssuedCertificate = async () => {
    try {
        const responseData = await fetch("https://new-server-eight.vercel.app/getallissuedcertificate");
        const data = await responseData.json();
        return data
    } catch (error) {
        throw error.message
    }
}
export const GetAllEnrolledStudents = async (params) => {
    try {
        const response = await fetch(`https://new-server-eight.vercel.app/getallcoursesstudent?course=${params}`)
        const data = response.json()
        return data
    } catch (error) {
        throw error
    }
}