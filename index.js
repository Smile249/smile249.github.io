fetch("https://api.beatsaver.com/maps/uploader/4284314/0")
  .then((res) => res.json())
  .then((map) => {

    //get cover art for 4 most recent maps
    document.getElementById("coverOne").src =
      map.docs[0].versions[map.docs[0].versions.length - 1].coverURL;
    document.getElementById("coverTwo").src =
      map.docs[1].versions[map.docs[1].versions.length - 1].coverURL;
    document.getElementById("coverThree").src =
      map.docs[2].versions[map.docs[2].versions.length - 1].coverURL;
    document.getElementById("coverFour").src =
      map.docs[3].versions[map.docs[3].versions.length - 1].coverURL;

      //create link for 4 most recent maps
    document.getElementById("IdOne").href =
    "https://beatsaver.com/maps/" + map.docs[0].id;
    document.getElementById("IdTwo").href =
      "https://beatsaver.com/maps/" + map.docs[1].id;
    document.getElementById("IdThree").href =
      "https://beatsaver.com/maps/" + map.docs[2].id;
    document.getElementById("IdFour").href =
      "https://beatsaver.com/maps/" + map.docs[3].id;

      //get name of 4 most recent maps
      document.getElementById("coverOne").title = map.docs[0].name;
      document.getElementById("coverTwo").title = map.docs[1].name;
      document.getElementById("coverThree").title = map.docs[2].name;
      document.getElementById("coverFour").title = map.docs[3].name;
      
  });
