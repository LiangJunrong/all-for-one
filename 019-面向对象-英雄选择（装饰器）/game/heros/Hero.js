class Hero {
  constructor(
    name = "",
    blood = 10000,
    heroHeadSculpture = "",
    heroImage = "",
    description = "",
    skills = "",
  ) {
    this.name = name;
    this.blood = blood;
    this.heroHeadSculpture = heroHeadSculpture;
    this.heroImage = heroImage;
    this.description = description;
    this.skills = skills;
  }
  fire(index) {
    console.log(`释放了：${this.skills[index].name}`)
  }
}

export default Hero;