const infoUser = {
    name:"Alex",
    age:25,
    sayFullInfoUser: function () {console.log(`Пользователя зовут ${this.name} и ему ${this.age} лет`)}
}


infoUser.sayFullInfoUser()


const newUSer = {
    name:"Stas",
    age:21,
}

infoUser.sayFullInfoUser.call(newUSer);

infoUser.sayFullInfoUser.apply(newUSer);

let info = infoUser.sayFullInfoUser.bind(newUSer);


info()


////////////////////////////////////////////////////

const math = {
    pi:3.14,
    getSquard:function(radius) {
      return this.pi*radius;
    }
  }
  
  const neMath = {
    pi : 3.416, 
  }
  
  console.log(math.getSquard.call(neMath , 2));
  console.log(math.getSquard.apply(neMath , [2]))
  
  const newRes = math.getSquard.bind(neMath);
  
  console.log(newRes(2))
  
  




