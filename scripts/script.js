dot = document.getElementsByClassName('dot');
textBox = document.getElementById("service-text");
textTitle = document.getElementById("service-title");
flower = document.getElementById("flower-img");
menuItem = document.getElementsByClassName('nav-item');
menu = document.getElementById('nav-list');
sixtyPrice = document.getElementById('sixty-min-price');
ninetyPrice = document.getElementById('ninety-min-price');
fullBodyStone = document.getElementById('full-body-stone');
hotColdStone = document.getElementById('hot-cold-stone');
noSixtey = document.getElementById('no-sixtey');




flower.onclick = function(){
  if (flower.style.transform != "rotate(360deg)"){
    flower.style.transform = "rotate(360deg)";
  }
  else {
    flower.style.transform = "rotate(0deg)";
  };


  if (menu.style.transform != "translateX(0px)"){
    console.log("here?");
    menu.style.transform = "translateX(0px)"
  }
  else{
    console.log("Where am I??");
    menu.style.transform = 'translateX(500px)';
  };
};


dot[0].onclick = function(){
  textTitle.innerHTML = "Swedish Massage"
  textBox.innerHTML = "Swedish Massage is designed to energize the body by stimulating circulation. It combines oils or lotion with an array of strokes such as effleurage, petrissage, vibration, tapotement, and friction. The benefits of this type of bodywork are relief from aches and pains, decreased stress levels in the body, and enhanced mental state.";
};

dot[1].onclick = function(){
  textTitle.innerHTML = "Deep Tissue Massage"
  textBox.innerHTML = "Deep Tissue Massage is a form of bodywork that aims to relieve tension in the deeper layers of tissue in the body. Deep Tissue Massage is a highly effective method for chronic muscular pain and injury rehabilitation.";
};

dot[2].onclick = function(){
  textTitle.innerHTML = "Pregnancy Massage"
  textBox.innerHTML = "Pregnancy Massage is a style of bodywork designed specifically for pregnant women. Pregnancy Massage helps release the pain and discomfort experienced throughout pregnancy. The benefits include emotional support, the relief of joint pain due to extra weight and postural imbalance, and improved breathing and relaxation.";
};

dot[3].onclick = function(){
  textTitle.innerHTML = "Shiatsu"
  textBox.innerHTML = "Shiatsu is based on the holistic system of traditional Chinese medicine. Shiatsu is a physical therapy that supports and strengthens the body’s natural ability to heal and balance itself. It works on the whole person - not just with the physical body, but also with the psychological, emotional and spiritual aspects of being.";
};

dot[4].onclick = function(){
  textTitle.innerHTML = "Hot stone massage"
  textBox.innerHTML = "Hot stone massage therapy melts away tension, eases muscle stiffness and increases circulation.  The direct heat of the stones relaxes muscles, allows the therapist access to deeper muscle layers. The hot stones also expand blood vessels, which encourages blood flow throughout the body. Hot stones have a sedative effect that can relieve chronic pain, reduce stress and promote deep relaxation.";
};

dot[5].onclick = function(){
  textTitle.innerHTML = "Cold stone massage"
  textBox.innerHTML = "Cold stones used during a massage session promote circulation and act as a powerful decongestant for the body. By promoting circulation, a cold stone treatment can ease inflamed tissues, decrease muscle spasms, and can reduce swelling or fluid build-up (for example, as manifested in dark circles under the eyes). The overall effect of a treatment is the reduction of tension with a simultaneous feeling of invigoration.";
};

fullBodyStone.onclick = function(){
  sixtyPrice.innerHTML = "$115.00";
};

hotColdStone.onclick = function(){
  sixtyPrice.innerHTML = "$95.00";
};

noSixtey.onclick = function(){
  sixtyPrice.innerHTML = "$75.00";
};
