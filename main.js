const maindata = async (id) => {
    try {
        const res = await fetch(`https://api.github.com/users/${id}`);
        const status = res.status;
        const data = await res.json();
        const eror = document.getElementById('hide2');

        if (status === 404) {
            
        
        } else {
            const user = {
                avatar_url: data.avatar_url,
                name: data.name,
                login: data.login,
                bio: data.bio,
                created: new Date(data.created_at).toLocaleDateString(),
                repos: data.public_repos,
                followers: data.followers,
                following: data.following,
                location: data.location,
                blog: data.blog,
                twitter: data.twitter_username,
                company: data.company
            };

            userinfo(user);
        }
    } catch (error) {
        console.error(error);
    }
};

const userinfo1 = () => {
    const img = document.getElementById('accimg');
    const username = document.querySelector('.accname');
    const nickname = document.querySelector('.nickname');
    const regdate= document.querySelector('.regdate');
    const  bio = document.querySelector('.hide');

    img.src = './assets/cat.svg';
    username.textContent = 'The Octocat';
    nickname.textContent = '@octocat';
    regdate.textContent = 'Joined 25 Jan 2011';
    bio.textContent = 'This profile has no bio';
};

const userinfo = (user) => {
    const img = document.getElementById('accimg');
    const username = document.querySelector('.accname');
    const nickname = document.querySelector('.nickname');
    const regdate = document.querySelector('.regdate');
    const bio = document.querySelector('.hide');
    const categ = document.querySelectorAll('.p2');
    const info = document.querySelectorAll('.lastp');

    img.src = user.avatar_url
    username.textContent = user.name
    nickname.textContent = `@${user.login}`
    regdate.textContent = `Joined ${user.created}`
    bio.textContent =  'This profile has no bio'
    categ[0].textContent = user.repos;
    categ[1].textContent = user.followers;
    categ[2].textContent = user.following;
    info[0].textContent =  'Not Available'
    info[1].innerHTML = user.blog ? `<a href="${user.blog}" class="lastp link">${user.blog}</a>` : 'Not Available';
    info[2].textContent = user.twitter ? user.twitter : 'Not Available';
    info[3].textContent = user.company ? user.company : 'Not Available';
};

const usesearch = () => {
    const search = document.getElementById('input1').value;
    maindata(search);
};

document.querySelector('.search').addEventListener('click', usesearch);
