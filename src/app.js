/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function excusegenerator() {
    const excuseIntro = [
      "I didn't turn in my homework because",
      "I was late for school because",
      "I didn't show up because",
    ];

    let atFault = [
      "my grandma",
      "my dog",
      "my brother",
      "my sister",
      "my friends",
    ];

    let reason = [
      "was late to picking me up",
      "ate my homework",
      "ripped it up",
      "drew all over it",
      "came over to hangout",
    ];
    let excuseIntrogen =
      excuseIntro[Math.floor(Math.random() * excuseIntro.length)];
    let atFaultgen = atFault[Math.floor(Math.random() * atFault.length)];
    let reasonGen = reason[Math.floor(Math.random() * reason.length)];
    return excuseIntrogen + " " + atFaultgen + " " + reasonGen;
  }
  document.querySelector("#excuseGen").innerHTML = excusegenerator();
};