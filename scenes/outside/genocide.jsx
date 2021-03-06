import React from "react";
import { addScenes } from "@src/ending";
import { addFlag } from "web-text-adventure/src/adventure";

addFlag("touch_alive", {
    chicken: true,
    lizard: true,
    human: true,
    unicorn: true,
});
addFlag("geno_haschickencorpse", false);
addFlag("geno_hasspidercorpse", true);

addFlag("paper", false);
addFlag("facebook", false);
addFlag("youtube", false);
addFlag("twitter", false);
addFlag("chan", false);
addFlag("writeIt", false);

addScenes({
    genocide_main: {
        prompt: () => <div>
            <p>You continue your adventure. You spot multiple different animals such as lizards, spiders, and humans. <strong>What do you do?</strong></p>
        </div>,
        options: [
            { text: "Touch the lizard", disabledText: "(dead)", if: () => touch_alive.lizard, to: "touch_lizard" },
            { text: "Touch the spider", disabledText: "(dead)", if: () => false, to: null },
            { text: "Touch the human", disabledText: "(dead)", if: () => touch_alive.human, to: "genocide_human" },
            { text: "Touch the unicorn", disabledText: "(dead)", if: () => touch_alive.unicorn, to: "genocide_unicorn" },
            { text: "Touch the chicken", disabledText: "(dead)", if: () => touch_alive.chicken, to: "genocide_chicken" },
        ],
        contributor: "Hunter and Colyderp"
    },
    //#region Chicken
    genocide_chicken: {
        prompt: () => <div>
            You touch the chicken, it seems startled for a second. <strong>What do you do?</strong>
        </div>,
        options: [
            { text: "(try to) Kill it", to: "genocide_chicken_kill_fail" },
            { text: "Keep it", to: "genocide_chicken_keep" },
            { text: "Act like a chicken", to: "genocide_chicken_act" },
            { text: "Distract it with spider corpse", if: () => geno_hasspidercorpse, to: "genocide_chicken_distract" },
        ],
        contributor: "Adr"
    },
    genocide_chicken_distract: {
        prompt: () => <div>
            You use the spider corpse to distract the chicken. It seems confused
        </div>,
        options: [
            { text: "Kill it", to: "genocide_chicken_kill", action: () => touch_alive.chicken = false },
            { text: "Act like a chicken", to: "genocide_chicken_act" },
        ],
        contributor: "Dave"
    },
    genocide_chicken_kill_fail: {
        prompt: () => <div>
            A angry swarm of chickens fly at you, turns out, this wasn't a ordinary chicken, it was a cucco, better watch out next time.
        </div>,
        ending: {
            id: "genocide-chicken-fail",
            name: "Chicken Swarm Ending",
            description: "Die from a swarm of chicken."
        },
        contributor: "Adr"
    },
    genocide_chicken_kill: {
        prompt: () => <div>
            <p>You easily killed the chicken while it was distracted.</p>
            <p className="inventory-update">
                + Added Chicken Corpse to Inventory.
            </p>
            <p>What do you do with it?</p>
        </div>,
        options: [
            { text: "Throw it in the furnace", to: "genocide_chicken_kill_burn", action: () => geno_haschickencorpse = false },
            { text: "Eat it", to: "genocide_chicken_kill_eat", action: () => geno_haschickencorpse = false },
            { text: "Give it to the dogs", to: "genocide_chicken_kill_dogs", action: () => geno_haschickencorpse = false },
            { text: "Keep it", to: "genocide_main" },
        ],
        action: () => geno_haschickencorpse = true,
        contributor: "Hunter"
    },
    genocide_chicken_kill_burn: {
        prompt: () => <div>
            <p>
                You throw the chicken in the furnace to cook it, but somehow, the furnace is burning. You died, and also, the 5 people around you died.
            </p>
        </div>,
        ending: {
            id: "overly-burnt",
            name: "Overly Burnt",
            description: "Cook chicken for WAY too long (and kill yourself).",
        },
        contributor: "Durvenson and Hunter"
    },
    genocide_chicken_kill_eat: {
        prompt: () => <div>
            <p>You eat the chicken, but it's raw, and you die.</p>
        </div>,
        ending: {
            id: "raw-chicken",
            name: "Raw Chicken",
            description: "Always cook chicken to 165° Fahrenheit.",
        },
        contributor: "Hunter"
    },
    genocide_chicken_act: {
        prompt: () => <div>
            <p>You start to act like a chicken. It seems very confused. What now?</p>
        </div>,
        options: [
            { text: "(try to) Kill it", to: "genocide_chicken_kill_fail" },
            { text: "Keep it", to: "genocide_chicken_keep" },
            { text: "Act like a chicken", to: "genocide_chicken_act", if: () => false },
            { text: "Distract it", to: "genocide_chicken_distract" },
        ],
        contributor: "Hunter"
    },
    genocide_chicken_keep: {
        prompt: () => <div>
            <p>You keep the chicken as a pat and you both live happily ever after/</p>
        </div>,
        ending: {
            id: "chicken-pat",
            name: "Unusual Pet",
            description: "Chickens CAN be pets.",
        },
        contributor: "Hunter"
    },
    genocide_chicken_kill_dogs: {
        prompt: () => <div>
            <p>You stop for a second and think, 'Maybe I can also kill the dogs!'</p>
        </div>,
        options: [
            { text: "Inject the chicken with arsenic first", to: "genocide_chicken_poison_dogs" },
            { text: "Don't poison the chicken", to: "genocide_chicken_feed_dogs" },
            { text: "Never mind, keep the chicken", to: "genocide_main", action: () => geno_haschickencorpse = true }
        ],
        contributor: "Daniel (Phrotonz)"
    },
    genocide_chicken_poison_dogs: {
        prompt: () => <div>
            <p>
                You give it the poisoned chicken. Turns out they are immune to it, and they enjoy it.
            </p>
        </div>,
        options: [
            { text: "Ok", to: "genocide_main" },
        ],
        contributor: "Dave",
    },
    genocide_chicken_feed_dogs: {
        prompt: () => <div>
            <p>
                You give it the chicken. They enjoy it.
            </p>
        </div> ,
        options: [
            { text: "Ok", to: "genocide_main" },
        ],
        contributor: "Dave",
    },
    //#endregion Chicken

    // #region Human
    genocide_human: {
        prompt: () => <div>
            <p>You walk up to the human. It’s your boss! He starts complaining about how you haven’t been at work the past few days. What do ya’ do?</p>
            <p>(Ps. He has been a jerk towards you the past few weeks)</p>
        </div>,
        options: [
            { text: "Dab on that hater", to: "genocide_human_dab" },
            { text: "Stab him", to: "genocide_human_stab" },
            { text: "Go to work", to: "work_start" },
            { text: "Snap his neck", to: "genocide_human_snap" },
        ],
        contributor: "Daniel (Phrotonz)"
    },
    genocide_human_stab: {
        prompt: () => <div>
            <p>Oh shit! The FBI is here and they are ready to kick your ass! What do you do?</p>
        </div>,
        options: [
            { text: "Get arrested", to: "jail_caught_murder" },
            { text: "Run away", to: "run_from_hospital" },
            { text: "Kill 'em", to: "genocide_human_stab_killem" }
        ],
        contributor: "Durvenson"
    },
    jail_caught_murder: {
        prompt: () => <div>
            <p>You decided to turn yourself in. You got arrested in jail and sentanced to 37 more years for muder.</p>
        </div>,
        ending: {
            id: "jail-37-years-3",
            name: "Arrested for Murder",
            description: "You didn't even try to run?"
        },
        contributor: "Hunter"
    },
    genocide_human_stab_killem: {
        prompt: () => <div>
            <p>The FBI are gone... I guess. More police officers are here however, and you get arrested. You then are in Death Row, so you die.</p>
        </div>,
        ending: {
            id: "triple-death",
            name: "Triple Death",
            description: "Murder your boss, murder the FBI police officers, and die on Death Row."
        },
        contributor: "Durvenson"
    },
    genocide_human_snap: {
        prompt: () => <div>
            <p>His neck is <b>U N S N A P P A B L E</b>. He makes you go back to school.</p>
            <br />
            <p>Answer this simple question:</p>
            <p>2 + 2</p>
        </div>,
        options: [
            { text: "4", to: "genocide_human_snap_correct" },
            { text: "5", to: "genocide_human_snap_fail" },
            { text: "2", to: "genocide_human_snap_fail" },
            { text: "22", to: "genocide_human_snap_fail" },
            { text: "0", to: "genocide_human_snap_fail" }
        ],
        contributor: "Durvenson"
    },
    genocide_human_snap_correct: {
        prompt: () => <div>
            <p>That's right! How about 5 - 3?</p>
        </div>,
        options: [
            { text: "2", to: "genocide_human_snap_correct2" },
            { text: "8", to: "genocide_human_snap_fail" },
            { text: "10", to: "genocide_human_snap_fail" }
        ],
        contributor: "Durvenson"
    },
    genocide_human_snap_correct2: {
        prompt: () => <div>
            <p>Now solve <em>@#%@@^%$%@&$&^</em></p>
        </div>,
        options: [
            { text: "2", to: "genocide_human_snap_fail" },
            { text: "91", to: "genocide_human_snap_fail" },
            { text: "-23", to: "genocide_human_snap_fail" },
            { text: "I fucking give up", to: "genocide_human_snap_correct2_giveup" }
        ],
        contributor: "Durvenson"
    },
    genocide_human_snap_fail: {
        prompt: () => <div>
            <p>BALDI M U R D E R S YOUR FAMILY FOR FAILNG THE M A T HS TEST!</p>
        </div>,
        ending: {
            id: "maths-fail",
            name: "Baldi's Basics Completed...?",
            description: "You failure..."
        },
        contributor: "Durvenson and Hunter"
    },
    genocide_human_snap_correct2_giveup: {
        prompt: () => <div>
            <p>You will fucking give up live now.</p>
        </div>,
        ending: {
            id: "math-giveup",
            name: "Bye Cruel World",
            description: "Give up life."
        },
        contributor: "Durvenson"
    },
    genocide_human_dab: {
        prompt: () => <div>
            <p>Dabbing is a dead meme, and people hate dead memes, so you die from the dead meme.</p>
        </div>,
        ending: {
            id: "dab-hater",
            name: "Contagious Dead Meme",
            description: "Die from a dead meme."
        },
        contributor: "Durvenson"
    },
    //#endregion
    
    //#region Lizard
    
    //#endregion

    // #region Unicorn
    genocide_unicorn: {
        prompt: () => <div>
            <p>It is from My Little Pony. What do you do?</p>
        </div>,
        options: [
            { text: "Ignore it", to: "genocide_unicorn_ignore" },
            { text: "Kill it for magic stuff I guess", to: "genocide_unicorn_kill" },
            { text: "HELL NO", to: "genocide_unicorn_no" },
            { text: "Yes. I am a  B R O W N I E", to: "genocide_unicorn_bronie" }
        ],
        contributor: "Durvenson"
    },
    genocide_unicorn_ignore: {
        prompt: () => <div>
            <p>
                You try to ignore it, but <strong>ITS TOO IRRESISTIBLE!!!</strong>
            </p>
        </div>,
        options: [
            { text: "Ignore it", to: "genocide_unicorn_ignore", disabledText: true, if: () => false },
            { text: "Kill it for magic stuff I guess", to: "genocide_unicorn_kill" },
            { text: "HELL NO", to: "genocide_unicorn_no" },
            { text: "Yes. I am a  B R O W N I E", to: "genocide_unicorn_bronie" }
        ],
        contributor: "Hunter"
    },
    genocide_unicorn_kill: {
        prompt: () => <div>
            <p>
                You walk up the Unicorn and rip of it's horn. You then proceed to kill a human with it until he got murdered to death.
            </p>
        </div>,
        ending: {
            id: "unicorn-murderer",
            name: "Unicorn Murderer",
            description: "Kill a person with a magical unicorn horn.",
        },
        contributor: "Colyderp and Hunter"
    },
    genocide_unicorn_no: {
        prompt: () => <div>
            <p>You post this horrible discovery somewhere. Where do you post it?</p>
        </div>,
        options: [
            { text: "Twitter", to: "genocide_unicorn_no_twitter", disabledText: "Twitter", if: () => !twitter, action: () => twitter = true },
            { text: "Facebook", to: "genocide_unicorn_no_facebook", disabledText: "Facebook", if: () => !facebook, action: () => facebook = true },
            { text: "YouTube", to: "genocide_unicorn_no_youtube", disabledText: "YouTube", if: () => !youtube, action: () => youtube = true },
            { text: "4chan", to: "genocide_unicorn_no_4chan", disabledText: "4chan", if: () => !chan, action: () => chan = true },
            { text: "Discord", to: "genocide_unicorn_no_discord" },
            { text: "Write It", to: "genocide_unicorn_no_write", disabledText: true, if: () => writeIt, action: () => writeIt = true, },
            { text: "Snapchat", to: "genocide_unicorn_no_snapchat" },
            { text: "Instagram", to: "genocide_unicorn_no_instagram" }
        ],
        contributor: "Durvenson"
    },
    genocide_unicorn_no_twitter: {
        prompt: () => <div>
            <p>
            The Twitter servers are down.
            </p>
        </div>,
        options: [
            { text: "Twitter", to: "genocide_unicorn_no_twitter", disabledText: "Twitter", if: () => !twitter, action: () => twitter = true },
            { text: "Facebook", to: "genocide_unicorn_no_facebook", disabledText: "Facebook", if: () => !facebook, action: () => facebook = true },
            { text: "YouTube", to: "genocide_unicorn_no_youtube", disabledText: "YouTube", if: () => !youtube, action: () => youtube = true },
            { text: "4chan", to: "genocide_unicorn_no_4chan", disabledText: "4chan", if: () => !chan, action: () => chan = true },
            { text: "Discord", to: "genocide_unicorn_no_discord" },
            { text: "Write It", to: "genocide_unicorn_no_write", disabledText: true, if: () => writeIt, action: () => writeIt = true, },
            { text: "Snapchat", to: "genocide_unicorn_no_snapchat" },
            { text: "Instagram", to: "genocide_unicorn_no_instagram" }
        ],
        contributor: "Durvenson"
    },
    genocide_unicorn_no_facebook: {
        prompt: () => <div>
            <p>
                Who the fuck uses facebook anymore?
            </p>
        </div>,
        options: [
            { text: "Twitter", to: "genocide_unicorn_no_twitter", disabledText: "Twitter", if: () => !twitter, action: () => twitter = true },
            { text: "Facebook", to: "genocide_unicorn_no_facebook", disabledText: "Facebook", if: () => !facebook, action: () => facebook = true },
            { text: "YouTube", to: "genocide_unicorn_no_youtube", disabledText: "YouTube", if: () => !youtube, action: () => youtube = true },
            { text: "4chan", to: "genocide_unicorn_no_4chan", disabledText: "4chan", if: () => !chan, action: () => chan = true },
            { text: "Discord", to: "genocide_unicorn_no_discord" },
            { text: "Write It", to: "genocide_unicorn_no_write", disabledText: true, if: () => writeIt, action: () => writeIt = true, },
            { text: "Snapchat", to: "genocide_unicorn_no_snapchat" },
            { text: "Instagram", to: "genocide_unicorn_no_instagram" }
        ],
        contributor: "Durvenson"
    },
    genocide_unicorn_no_youtube: {
        prompt: () => <div>
            <p>
                Your camera is broken...
            </p>
        </div>,
        options: [
            { text: "Twitter", to: "genocide_unicorn_no_twitter", disabledText: "Twitter", if: () => !twitter, action: () => twitter = true },
            { text: "Facebook", to: "genocide_unicorn_no_facebook", disabledText: "Facebook", if: () => !facebook, action: () => facebook = true },
            { text: "YouTube", to: "genocide_unicorn_no_youtube", disabledText: "YouTube", if: () => !youtube, action: () => youtube = true },
            { text: "4chan", to: "genocide_unicorn_no_4chan", disabledText: "4chan", if: () => !chan, action: () => chan = true },
            { text: "Discord", to: "genocide_unicorn_no_discord" },
            { text: "Write It", to: "genocide_unicorn_no_write", disabledText: true, if: () => writeIt, action: () => writeIt = true, },
            { text: "Snapchat", to: "genocide_unicorn_no_snapchat" },
            { text: "Instagram", to: "genocide_unicorn_no_instagram" }
        ],
        contributor: "Durvenson"
    },
    genocide_unicorn_no_write: {
        prompt: () => <div>
            <p>
            You don't have any paper...
            </p>
        </div>,
        options: [
            { text: "Twitter", to: "genocide_unicorn_no_twitter", disabledText: "Twitter", if: () => !twitter, action: () => twitter = true },
            { text: "Facebook", to: "genocide_unicorn_no_facebook", disabledText: "Facebook", if: () => !facebook, action: () => facebook = true },
            { text: "YouTube", to: "genocide_unicorn_no_youtube", disabledText: "YouTube", if: () => !youtube, action: () => youtube = true },
            { text: "4chan", to: "genocide_unicorn_no_4chan", disabledText: "4chan", if: () => !chan, action: () => chan = true },
            { text: "Discord", to: "genocide_unicorn_no_discord" },
            { text: "Write It", to: "genocide_unicorn_no_write", disabledText: true, if: () => writeIt, action: () => writeIt = true, },
            { text: "Snapchat", to: "genocide_unicorn_no_snapchat" },
            { text: "Instagram", to: "genocide_unicorn_no_instagram" }
        ],
        contributor: "Durvenson"
    },
    genocide_unicorn_no_snapchat: {
        prompt: () => <div>
            <p>
                You turn into a cringy 12 year old.
            </p>
        </div>,
        ending: {
            id: "12-old",
            name: "Use Snapchat",
            description: "You turn into a cringy 12 year old.",
        },
        contributor: "Durvenson"
    },
    genocide_unicorn_no_instagram: {
        prompt: () => <div>
            <p>
                You got so busy looking at pictures of food and "memes" that you didn't post anything at all. It's too late anyway, since the unicorn is gone.
            </p>
        </div>,
        ending: {
            id: "insta-forget",
            name: "Forget to Post",
            description: "Waste too much time looking at stuff.",
        },
        contributor: "Durvenson"
    },
    genocide_unicorn_no_discord: {
        prompt: () => <div>
            <p>
                You ping everyone. They get <span style={{color: "coral", letterSpacing: "5px"}}><em>TRIGGERED</em></span>, and they murder you in real life.
            </p>
        </div>,
        ending: {
            id: "everyone-murder",
            name: "@everyone Murder",
            description: "They killed you for using @everyone...",
        },
        contributor: "Durvenson and Hunter"
    },
    genocide_unicorn_no_4chan: {
        prompt: () => <div>
            <p>Some guy gives you a link to a Super Mario Odyssey sequel trailer leak. Do you click it?</p>
        </div>,
        options: [
            { text: "Yes", to: "genocide_unicorn_no_4chan_yes" },
            { text: "No", to: "genocide_unicorn_no" }
        ],
        contributor: "Durvenson"
    },
    genocide_unicorn_no_4chan_yes: {
        prompt: () => <div>
            <p>You got rickrolled.</p>
        </div>,
        ending: {
            id: "share-rick",
            name: "Never Gonna Give You Up",
            description: "Never gonna let you down..."
        },
        contributor: "Durvenson"
    },
    genocide_unicorn_bronie: {
        prompt: () => <div>
            <p>Some guy hears you say B R O W N I E. You become a brownie, and then he eats you.</p>
        </div>,
        ending: {
            id: "brownie",
            name: "Is This Cannibalism?",
            description: "Turn into a brownie then get eaten."
        },
        contributor: "Durvenson"
    }
    //#endregion
});
