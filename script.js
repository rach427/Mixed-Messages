const buildAffirmation = () => {
    const adjArr = ["strong", "intelligent", "worthy", "beautiful"];
    const nounArr = ["love", "good things", "joy", "kindness"];
    const verbArr = ["do this", "be the change", "make it happen", "accomplish your goals"];

    let adj = adjArr[Math.floor(Math.random() * 4)];
    let noun = nounArr[Math.floor(Math.random() * 4)];
    let verb = verbArr[Math.floor(Math.random() * 4)];
    
    console.log("You are " + adj);
    console.log("You deserve " + noun);
    console.log("You can " + verb);
    console.log(" :)")
}

buildAffirmation();