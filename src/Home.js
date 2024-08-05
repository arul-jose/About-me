
import './Home.css';
import React from 'react'
import { navIcons, bio } from './constants';

function Home() {
    return (
        <div id='home'>

            <header>
                
                {/* {navIcons.map((iconName,iconIndex) => {
                    return (
                        <div key={"icon-"+iconIndex}>{iconName}</div>
                    )
                })} */}
                <div id="nav-bar">
                {navIcons.label.map((name, ind) => {
                    return (
                        <span key={"label-"+ ind}> 
                            <a href={"#" + navIcons.urlPath[ind]}>{name}</a>
                        </span>
                    )
                })}
                </div>
            </header>

            <section>
                    <div id="bio-container">
                        <div id="bio-img"><div></div></div>
                        <div id="bio-name">{bio.name}</div>
                        <div id="bio-role">{bio.role}</div>                        
                    </div>
            </section>

        </div>
    )
}

export default Home

// {<ArrayName>.map((b,a) => {
//         return (
//             <div key={a}>{b}</div>
//         )
//     })
// } #home #techStack #