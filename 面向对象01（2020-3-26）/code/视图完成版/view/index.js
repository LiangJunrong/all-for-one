import Game from "./game/game.js";

// 分析对象；英雄  技能 玩家  --》luban  yase  -- 继承-->英雄基类 -->游戏管理类；
let game = new Game();
let eles = {
    login: {
        loginWrapper: document.querySelector(".login"),
        username: document.querySelector(".username"),
        loginBtn: document.querySelector(".sub")
    },
    game: {
        gameWrapper: document.querySelector(".game"),
        chioseusername: document.querySelector(".chioseusername"),
        heroView: document.querySelector(".heroView"),
        heroShow:document.querySelector(".heroShow"),
        skillsView:document.querySelector(".skillsView")
    }
}

eles.login.loginBtn.onclick = function () {
    let value = eles.login.username.value;
    eles.login.loginWrapper.style.display = "none";
    eles.game.gameWrapper.style.display = "block";
    game.login(value);
    console.log(game);
    eles.game.chioseusername.innerHTML = game.player.name;
    // 渲染英雄；
    eles.game.heroView.innerHTML = "";
    game.player.heros.forEach((hero, key) => {
        let heroEle = document.createElement("div")
        heroEle.classList.add("heroItem");
        heroEle.innerHTML = `<img src="${hero.ico}" />
        <span>${hero.name}</span>`;
        eles.game.heroView.appendChild(heroEle);
        heroEle.onclick = function(){
            // 显示选中英雄；
            eles.game.heroShow.innerHTML = "";
            let imgEle = document.createElement("img");
            imgEle.src = hero.ico;
            eles.game.heroShow.appendChild(imgEle);
            // 显示技能
            eles.game.skillsView.innerHTML = "";
            hero.skills.forEach(skill=>{
                let skillEle  = document.createElement("img");
                skillEle.src = skill.ico;
                eles.game.skillsView.appendChild(skillEle);
            })

        }
    })
}

// 作业 ：完成皮肤选中功能；
// 预习视频；
