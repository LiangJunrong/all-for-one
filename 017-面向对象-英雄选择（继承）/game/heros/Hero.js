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
}

export default Hero;