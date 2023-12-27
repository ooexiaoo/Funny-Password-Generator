const triggers = [
    {
      trigger: "I wish I could",
      options: [
        "attend a ramen-eating contest in Naruto's village",
        "summon a magical girl transformation sequence",
        "participate in a foodgasm competition like in 'Food Wars'",
        "visit the world of 'My Neighbor Totoro' and befriend forest spirits",
        "have a Pokémon battle with a team of talking cats",
        "explore a school for superheroes like in 'My Hero Academia'",
        "attend a tea party in Wonderland with 'Alice in Wonderland' characters",
        "travel through time using a magical pocket watch"
      ]
    },
    {
      trigger: "If I had",
      options: [
        "a Death Note, I'd only use it to pass exams",
        "One Piece, I'd share it with my nakama",
        "Sailor Moon's powers, I'd fight evil by moonlight",
        "Naruto's headband, I'd learn the Rasengan",
        "an Attack on Titan 3D Maneuver Gear, I'd zip around the city",
        "a magic wand, I'd turn my homework into candy"
      ]
    },
    {
      trigger: "I feel like",
      options: [
        "I belong in the world of 'Sword Art Online'",
        "I've been cursed by a mischievous anime spirit",
        "I could win a Pokémon league championship",
        "embarking on a journey to find the Dragon Balls",
        "I'm secretly a character in an isekai anime",
        "I'm about to unleash a Bankai"
      ]
    }
  ];
  
  function generatePassword() {
    const length = document.getElementById('length').value;
    const triggerIndex = document.getElementById('triggerSelect').value;
  
    const selectedTrigger = triggers[triggerIndex].trigger;
    const options = triggers[triggerIndex].options;
  
    const randomStatement = options[Math.floor(Math.random() * options.length)];
  
    const finalPhrase = `${selectedTrigger} ${randomStatement}`;
  
    let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    const generatedPassword = `${finalPhrase} - ${password}`;
    document.getElementById('password').value = generatedPassword;
  }
  