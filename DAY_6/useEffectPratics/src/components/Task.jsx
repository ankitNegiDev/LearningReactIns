import { useEffect , useState} from "react";
function Task({userName}) {
    // const [apiData, setApiData] = useState({});
    const [user,setUser]=useState({imgUrl:"",following:0,followers:0});
    async function asyncAwaitApi(userName) {
        const API = `https://api.github.com/users/${userName}`;
        const data = await fetch(API);
        const response = await data.json();
        console.log("Final response:", response);
        setUser(function callback(){
            return {
                imgUrl: response.avatar_url,
                following: response.following,
                followers: response.followers,
            };
        });
    }
    useEffect(function callback() {
        asyncAwaitApi(userName);
    },[]);
    console.log("userData : ", user);
    return (
        <>
            <h1>Task component </h1>
            <h2>Username: {userName}</h2>
            <h3>Followers: {user.followers}</h3>
            <h3>Following: {user.following}</h3>
            <img src={user.imgUrl}/>
        </>
    );
}
export default Task;

// folllower , following , avatar url  display...

// github api fetching ..
// samarth0606
// ankitNegiDev
// priyansh159
// Sattwik13

// https://api.github.com/users
