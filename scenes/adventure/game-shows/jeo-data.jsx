// list of catagories, questions 200-1000, options is array with first being What is correct
// (which get randomly shuffled)
import React from "react";
export default [
    {
        catagoryName: "JavaScript",
        questions: {
            200: {
                question: () => <div>
                    <p>How many npm packages exist</p>
                </div>,
                options: [
                    { text: "What is more than one" },
                    { text: "What is zero" },
                    { text: "What is who cares" },
                    { text: "What is 1000000" },
                ],
                contributor: "Dave",
            },
            400: {
                question: () => <div>
                    <p>
                        What will the code below output to the console and why?
                    </p>

                </div>,
                options: [
                    { text: () => <span>What is outer func:  this.foo = bar<br />outer func:  self.foo = bar<br />inner func:  this.foo = undefined<br />inner func:  self.foo = bar</span> },
                    { text: () => <span>What is outer func:  this.bar = foo<br />outer func:  this.foo = bar<br />inner func:  self.foo = undefined<br />inner func:  self.foo = bar</span> },
                    { text: () => <span>What is outer func:  this.bar = foo<br />outer func:  this.foo = bar<br />outer func:  self.foo = undefined<br />outer func:  self.bar = bar</span> },
                    { text: () => <span>What is outer func:  self.bar = foo<br />outer func:  self.foo = bar<br />outer func:  self.foo = undefined<br />outer func:  self.bar = bar</span> },
                ],
                contributor: "Hunter",
            },
            1000: {
                question: () => <div>
                    <p>Whats typeof null</p>
                </div>,
                options: [
                    { text: "What is object" },
                    { text: "What is number" },
                    { text: "What is function" },
                    { text: "What is string" },
                    { text: "What is bigint" },
                    { text: "What is symbol" },
                    { text: "What is undefined" },
                    { text: "What is boolean" },
                    { text: "What is null" },
                ],
                contributor: "Dave",
            },
            600: {
                question: () => <div>
                    <p>is react good</p>
                </div>,
                options: [
                    { text: "What is yes" },
                    { text: "What is no" },
                ],
                contributor: "Dave"
            },
            800: {
                question: () => <div>
                    <p>Async functions are part of ____</p>
                </div>,
                options: [
                    { text: "What is ES2017" },
                    { text: "What is ES6" },
                    { text: "What is ES7" },
                    { text: "What is ES5" },
                    { text: "What is TypeScript" },
                    { text: "What is Java" },
                ],
                contributor: "Dave"
            }
        }
    },
    {
        catagoryName: "Video Games",
        questions: {
            200: {
                question: () => <div>
                    <p>What is the fastest speed of a Ford GT (2017) in Forza Horizon 3</p>
                </div>,
                options: [
                    { text: "What is 216 MPH" },
                    { text: "What is 247 MPH" },
                    { text: "What is 197 MPH" },
                    { text: "What is 223 MPH" },
                ],
                contributor: "Hunter",
            },
            400: {
                question: () => <div>
                    <p>What can't you do in Mario Kart.</p>
                </div>,
                options: [
                    { text: "What is die" },
                    { text: "What is make someone lose because of a banana" },
                    { text: "What is unlock everything" },
                    { text: "What is drive" },
                ],
                contributor: "Hunter",
            },
            600: {
                question: () => <div>
                    <p>What Game Is It Impossible To Get Five Fifty One In?</p>
                </div>,
                options: [
                    { text: "What is Dragster" },
                    { text: "What is Tetris" },
                    { text: "What is Minecraft" },
                    { text: "What is CTA" },
                ],
                contributor: "Colyderp",
            },
            800: {
                question: () => <div>
                    <p>In Fortnite, where does "Take the L" come from?</p>
                </div>,
                options: [
                    { text: "What is Pennywise" },
                    { text: "What is Donald Trump" },
                    { text: "What is Ninja" },
                    { text: "What is Lil' Pump" },
                ],
                contributor: "Hunter",
            },
            1000: {
                question: () => <div>
                    <p>Could you select your character in the original Doom?</p>
                </div>,
                options: [
                    { text: "What is yes" },
                    { text: "What is no" },
                    { text: "What is only on some versions" },
                    { text: "What is yes, but technically no" },
                ],
                contributor: "Hunter",
            }
        }
    },
    {
        catagoryName: "Pancakes",
        questions: {
            1000: {
                question: () => <div>
                    <p>Which Of The Following Is A Official CTA Pancake Brand</p>
                </div>,
                options: [
                    { text: "What is Frosted" },
                    { text: "What is Oats" },
                    { text: "What is Honey" },
                    { text: "What is Cheerios" },
                ],
                contributor: "Colyderp"
            },
            400: {
                question: () => <div>
                    <p>How many eggs do you add in this recipe?</p>
                </div>,
                options: [
                    { text: "What is 1" },
                    { text: "What is 2" },
                    { text: "What is 3" },
                    { text: "What is 12" },
                ],
                contributor: "Dave",
            },
            600: {
                question: () => <div>
                    <p>What is the correct topping</p>
                </div>,
                options: [
                    { text: "What is syrup" },
                    { text: "What is apple juice" },
                    { text: "What is sugar" },
                    { text: "What is metal" },
                ],
                contributor: "Dave",
            },
            800: {
                question: () => <div>
                    <p>
                        If Bob orders 900000 pancakes at the pancake house how many does Julie get?
                    </p>
                </div>,
                options: [
                    { text: "What is 0 cause Pancake House went out of buisiness in 1979" },
                    { text: "What is 0 cause it's bob's pancakes" },
                    { text: "What is 0 cause they ran out + it's bob's pancakes" },
                    { text: "What is 10 cause they ran out" },
                    { text: "What is 0 cause they both got kicked out" },
                    { text: "What is 900000 because Bob is nice" },
                    { text: "What is 899999 because Bob is nice, but wanted at least one" },
                ],
                contributor: "Dave",
            },
            200: {
                question: () => <div>
                    <p>Is it possible to eat a pancake while a tornado is happening?</p>
                </div>,
                options: [
                    { text: "What is yes" },
                    { text: "What is no" },
                ],
                contributor: "Dave",
            }
        }
    },
    {
        catagoryName: "Memes",
        questions: {
            200: {
                question: () => <div>
                    <p>Are 100% of all memes funny.</p>
                </div>,
                options: [
                    { text: "What is no" },
                    { text: "What is yes" },
                    { text: "What is maybe" },
                    { text: "What is uhhh" },
                ],
                contributor: "Hunter",
            },
            400: {
                question: () => <div>
                    <p>What is the definition of "meme".</p>
                </div>,
                options: [
                    { text: "What is an element of a culture or system of behavior that may be considered to be passed from one individual to another by nongenetic means, especially imitation" },
                    { text: "What is causing laughter or amusement; humorous" },
                    { text: "What is used to represent laughter or amusement" },
                    { text: "What is a dish of Italian origin consisting of a flat, round base of dough baked with a topping of tomato sauce and cheese, typically with added meat or vegetables" },
                ],
                contributor: "Hunter",
            },
            600: {
                question: () => <div>
                    <p>How Many Dislikes does the 2018 Rewind have as of 02/06/2019</p>
                </div>,
                options: [
                    { text: "What is 15 Million" },
                    { text: "What is 16 Million" },
                    { text: "What is 14 Million" },
                    { text: "What is -123 Million" },
                ],
                contributor: "Hunter",
            },
            800: {
                question: () => <div>
                    <p>What was voted r/dankmemes meme of the year runner-up?</p>
                </div>,
                options: [
                    { text: "What is Infinity War" },
                    { text: "What is Phil Swift" },
                    { text: "What is It Aint Much" },
                    { text: "What is Suprised Pikachu" },
                ],
                contributor: "Hunter",
            },
            1000: {
                question: () => <div>
                    <p>What was voted r/dankmemes meme of the year?</p>
                </div>,
                options: [
                    { text: "What is Stefán Karl Stefánsson" },
                    { text: "What is Excuse me what the Fuck" },
                    { text: "What is Why is the FBI here" },
                    { text: "What is Google want to Know your Location" },
                ],
                contributor: "Hunter",
            }
        }
    },
    {
        catagoryName: "Random",
        questions: {
            200: {
                question: () => <div>
                    <p>
                        How do you spell supercalifragilisticexpialidocious?
                    </p>
                </div>,
                options: [
                    { text: "What is supercalifragilisticexpialidocious" },
                    { text: "What is supercalifragilisticexpiaIidocious" },
                    { text: "What is supercalifragilisticexpiaildocious" },
                    { text: "What is supercailfragilisticexpialidocious" },
                ],
                contributor: "Dave",
            },
            400: {
                question: () => <div>
                    <p>This condiment is made from mustard seeds</p>
                </div>,
                options: [
                    { text: "What is Mustard" },
                    { text: "What is Onions" },
                    { text: "What is Ketchup" },
                    { text: "What is Catsup" },
                ],
                contributor: "Dave (Stolen from SNL)",
            },
            600: {
                question: () => <div>
                    <p>Whats a disadvantage of being tall?</p>
                </div>,
                options: [
                    { text: "What is pants" },
                    { text: "What is reaching more shit" },
                    { text: "What is the light flex" },
                    { text: "What is Statistically Girls find tall guys more attractive" },
                ],
                contributor: "Filip and Helvetica",
            },
            800: {
                question: () => <div>
                    <p>Which of the following is a Star Wars movie</p>
                </div>,
                options: [
                    { text: "What is the Force Awakens" },
                    { text: "What is Phantom of the Homework Squad" },
                    { text: "What is Sus" },
                    { text: "What is the Last Pass" },
                ],
                contributor: "Hunter",
            },
            1000: {
                question: () => <div>
                    <p>
                        <b>THIS IS THE ONLY STATE THAT ENDS IN HAMPSHIRE</b>
                    </p>
                </div>,
                options: [
                    { text: "What is New Hampshire" },
                    { text: "What is Old Hampshire" },
                    { text: "What is North Hampshire" },
                    { text: "What is South Hampshire" },
                    { text: "What is East Hampshire" },
                    { text: "What is West Hampshire" },
                    { text: "What is Hampshire, England" },
                    { text: "What is New York" },
                ],
                contributor: "Dave (Stolen from SNL)",
            }
        }
    },
    {
        catagoryName: "CTA Endings",
        questions: {
            200: {
                question: () => <div>
                    <p>How do you get the Dog Ending?</p>
                </div>,
                options: [
                    { text: "What is the walking your dog after work" },
                    { text: "What is feeding the dog pancakes" },
                    { text: "What is selling the dog to pay for a loan" },
                ],
                contributor: "Dave",
            },
            400: {
                question: () => <div>
                    <p>Is it possible to go to Egypt</p>
                </div>,
                options: [
                    { text: "What is No" },
                    { text: "What is Yes" },
                ],
                contributor: "Dave",
            },
            600: {
                question: () => <div>
                    <p>
                        I don't know how jeopardy works but heres a free question
                    </p>
                </div>,
                options: [
                    { text: "What is Thank You" },
                    { text: "What is no Thank You" },
                ],
                contributor: "Dave",
            },
            800: {
                question: () => <div>
                    <p>How do you get the Chuck E Cheese ending</p>
                </div>,
                options: [
                    { text: "What is missing one direction on the way to the hospital" },
                    { text: "What is telling abra to teleport" },
                    { text: "What is getting an Uber ride" },
                    { text: "What is escaping jail" },
                 
                ],
                contributor: "Dave",
            },
            1000: {
                question: () => <div>
                    <p>How do you get the turn it up to eleven ending</p>
                </div>,
                options: [
                    { text: "What is adding eleven chocolates" },
                    { text: "What is leveling to a Level 11 Crook" },
                    { text: "What is buying eleven bottles of water" },
                    { text: "What is reading the Bee Movie script 11 times" },
                ],
                contributor: "Dave",
            }
        }
    },
];