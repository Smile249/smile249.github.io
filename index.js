fetch("https://api.beatsaver.com/maps/uploader/4284314/0")
  .then((res) => res.json())
  .then((map) => {
    document.getElementById("coverOne").src =
      map.docs[0].versions[map.docs[0].versions.length - 1].coverURL;
    document.getElementById("coverTwo").src =
      map.docs[1].versions[map.docs[1].versions.length - 1].coverURL;
    document.getElementById("coverThree").src =
      map.docs[2].versions[map.docs[2].versions.length - 1].coverURL;
    document.getElementById("coverFour").src =
      map.docs[3].versions[map.docs[3].versions.length - 1].coverURL;

    document.getElementById("IdOne").href =
    "https://beatsaver.com/maps/" + map.docs[0].id;
    document.getElementById("IdTwo").href =
      "https://beatsaver.com/maps/" + map.docs[1].id;
    document.getElementById("IdThree").href =
      "https://beatsaver.com/maps/" + map.docs[2].id;
    document.getElementById("IdFour").href =
      "https://beatsaver.com/maps/" + map.docs[3].id;
  });
