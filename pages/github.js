import { useState,useEffect } from "react";
import HomeLayout from "~/components/layouts/HomeLayout";
import Repo from "~/components/widgets/Repo";

export default function GitHub(){
    const [repos,setRepos] = useState([])
    
    useEffect(() => {
        fetch('https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc')
        .then(response=>response.json())
        .then(data=>{
            setRepos(data.items)
        })
    }, [])
    return(
        <HomeLayout title={'Github Stars'}>
          <div className="github-repos-container">
            <h1 className="title">GitHub Repos</h1><br />
            {
               repos.length > 0? repos.map(repo=>
                 <Repo key={repo.id} repo={repo}/>        
                ):
                (
                 <div className="loading-container">
                   <div style={{width: "150px", height: "150px"}}>
                    <div className="loading loading--full-height"></div>
                  </div>
                 </div>
                )
            }
          </div>
     
        </HomeLayout>
    )
}