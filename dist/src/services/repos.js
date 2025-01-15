export const getRepoList = async () => {
    try {
        const result = await fetch("https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json").then((res) => res.json());
        return result;
    }
    catch (error) {
        return error;
    }
};
