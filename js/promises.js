


    const lastCommit = (username) => {
        const URL = `https://api.github.com/user/${username}/event/public`


        return fetch(URL, {headers: {'Authorization': `token ${GITHUB_KEY}`}})
            .then(res => res.json())
            .then(data => data[0])
            .then(firstCommit => console.log(firstCommit.created))
            .catch(error => console.error(error))
    }
    lastCommit("damonCastillo")


